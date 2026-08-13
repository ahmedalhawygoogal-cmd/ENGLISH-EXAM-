// ==========================================
// منصة الامتحانات التعليمية - Script.js (المطور)
// ==========================================

const userSetup = {
    subject: "english",
    difficulty: "easy",
    questionCount: 10
};

let activeQuestionsList = [];
let currentQuestionIndex = 0;
let userAnswersSummary = [];

let correctAnswersCount = 0;
let wrongAnswersCount = 0;

let timerInterval = null;
let remainingSeconds = 600;

let isAnswerConfirmed = false;
let isClickLocked = false;

const subjectNames = {
    english: "🇬🇧 الإنجليزية",
    programming: "💻 البرمجة",
    history: "📜 التاريخ",
    arabic: "📚 العربية"
};

window.addEventListener("DOMContentLoaded", function () {
    setupSelectionButtons();
    setupStartButton();
});

function setupSelectionButtons() {
    document.querySelectorAll(".subject-card").forEach(card => {
        card.addEventListener("click", function () {
            document.querySelectorAll(".subject-card").forEach(c => c.classList.remove("active"));
            this.classList.add("active");
            userSetup.subject = this.getAttribute("data-subject") || "english";
        });
    });

    document.querySelectorAll("[data-diff]").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll("[data-diff]").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            userSetup.difficulty = this.getAttribute("data-diff") || "easy";
        });
    });

    document.querySelectorAll("[data-count]").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll("[data-count]").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            userSetup.questionCount = parseInt(this.getAttribute("data-count")) || 10;
        });
    });
}

function setupStartButton() {
    const startBtn = document.getElementById("start-btn");
    if (!startBtn) return;

    startBtn.addEventListener("click", function () {
        if (preventSpamClick()) return;
        startExam();
    });
}

function startExam() {
    try {
        // 1. دعم قراءة البيانات سواء كان المتغير اسمه questionsData أو quizData
        const dataBase = typeof questionsData !== "undefined" ? questionsData : (typeof quizData !== "undefined" ? quizData : null);
        
        if (!dataBase) {
            alert("❌ لم يتم العثور على ملف البيانات (data.js)!");
            return;
        }

        const subjectData = dataBase[userSetup.subject];
        let availableQuestions = (subjectData && subjectData[userSetup.difficulty]) ? subjectData[userSetup.difficulty] : [];

        // 2. إيقاف الامتحان لو مفيش أسئلة في المستوى المختار
        if (!availableQuestions || availableQuestions.length === 0) {
            alert(`⚠️ لا توجد أسئلة متوفرة لمادة ${subjectNames[userSetup.subject]} بمستوى الصعوبة (${userSetup.difficulty}).`);
            return;
        }

        // 3. نظام الاختيار الذكي للأسئلة (تنوع الأنواع)
        let selectedQuestions = [];
        const groupedByType = {};
        
        availableQuestions.forEach(q => {
            const type = q.type || "choose";
            if (!groupedByType[type]) groupedByType[type] = [];
            groupedByType[type].push(q);
        });

        const types = Object.keys(groupedByType);
        
        // سحب سؤال واحد على الأقل من كل نوع متاح
        types.forEach(type => {
            shuffleArray(groupedByType[type]);
            if (groupedByType[type].length > 0 && selectedQuestions.length < userSetup.questionCount) {
                selectedQuestions.push(groupedByType[type].pop());
            }
        });

        // تجميع باقي الأسئلة لملء العدد المطلوب
        let remainingPool = [];
        types.forEach(type => {
            remainingPool = remainingPool.concat(groupedByType[type]);
        });
        shuffleArray(remainingPool);

        while(selectedQuestions.length < userSetup.questionCount && remainingPool.length > 0) {
            selectedQuestions.push(remainingPool.pop());
        }

        shuffleArray(selectedQuestions); // خلط نهائي للامتحان
        activeQuestionsList = selectedQuestions;

        currentQuestionIndex = 0;
        correctAnswersCount = 0;
        wrongAnswersCount = 0;
        userAnswersSummary = [];

        // تحديد وقت الامتحان الكلي بناءً على عدد الأسئلة (دقيقتين لكل سؤال كمثال)
        remainingSeconds = activeQuestionsList.length * 120;

        loadQuestion();

        const setupScreen = document.getElementById("setup-screen") || document.getElementById("setupScreen") || document.querySelector(".setup-screen");
        const examScreen = document.getElementById("exam-screen") || document.getElementById("examScreen") || document.querySelector(".exam-screen");

        if (setupScreen) setupScreen.style.setProperty("display", "none", "important");
        if (examScreen) examScreen.style.setProperty("display", "block", "important");

        const badge = document.getElementById("active-subject-badge");
        if (badge) badge.innerText = subjectNames[userSetup.subject] || "📚 المادة";

    } catch (error) {
        console.error("خطأ أثناء بدء الامتحان:", error);
    }
}

function loadQuestion() {
    const question = activeQuestionsList[currentQuestionIndex];
    if (!question) {
        finishExam();
        return;
    }

    isAnswerConfirmed = false;

    const currentNum = document.getElementById("current-q-num");
    const totalNum = document.getElementById("total-q-num");
    if (currentNum) currentNum.innerText = currentQuestionIndex + 1;
    if (totalNum) totalNum.innerText = activeQuestionsList.length;

    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        progressBar.style.width = (((currentQuestionIndex + 1) / activeQuestionsList.length) * 100) + "%";
    }

    const qText = document.getElementById("question-text");
    if (qText) qText.innerText = question.question || "";

    hideFeedback();
    renderQuestionUI(question);
    setupMainActionButton();
    
    // استئناف المؤقت من الوقت المتبقي للامتحان كله
    startTimer(remainingSeconds);
}

function renderQuestionUI(q) {
    const container = document.getElementById("options-container");
    if (!container) return;
    container.innerHTML = "";

    if (q.type === "choose" || (!q.type && q.options && Array.isArray(q.options) && q.options.length > 0)) {
        const opts = q.options || [];
        opts.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "option-btn";
            btn.innerText = opt;
            btn.addEventListener("click", function () {
                if (isAnswerConfirmed || preventSpamClick()) return;
                document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
                this.classList.add("selected");
                container.dataset.selectedIndex = idx;
                enableActionButton();
            });
            container.appendChild(btn);
        });
    }
    else if (q.type === "find_mistake" || q.type === "rewrite") {
        const box = document.createElement("div");
        box.className = "find-mistake-box";
        
        if (q.type === "find_mistake") {
            box.innerHTML = `
                <div style="margin-bottom: 12px;">
                    <label style="display:block; margin-bottom:5px; font-weight:bold;">❌ الكلمة الخاطئة:</label>
                    <input type="text" id="wrong-word-input" class="custom-input" placeholder="اكتب الكلمة الغلط هنا...">
                </div>
                <div>
                    <label style="display:block; margin-bottom:5px; font-weight:bold;">✅ التصحيح:</label>
                    <input type="text" id="correct-word-input" class="custom-input" placeholder="اكتب التصحيح هنا...">
                </div>
            `;
        } else {
            box.innerHTML = `
                <div>
                    <label style="display:block; margin-bottom:5px; font-weight:bold;">✍️ أعد كتابة الجملة (Rewrite):</label>
                    <input type="text" id="correct-word-input" class="custom-input" placeholder="اكتب الإجابة هنا...">
                </div>
            `;
        }
        
        container.appendChild(box);

        const input1 = box.querySelector("#wrong-word-input");
        const input2 = box.querySelector("#correct-word-input");

        const checkInputs = () => {
            if (q.type === "find_mistake") {
                if (input1 && input1.value.trim() && input2 && input2.value.trim()) enableActionButton();
            } else {
                if (input2 && input2.value.trim()) enableActionButton();
            }
        };
        
        if (input1) input1.addEventListener("input", checkInputs);
        if (input2) input2.addEventListener("input", checkInputs);
    }
    else if (q.type === "complete_code") {
        const box = document.createElement("div");
        box.className = "code-completion-box";
        box.innerHTML = `
            ${q.codeSnippet ? `<pre class="code-preview" style="text-align:left; direction:ltr;"><code>${escapeHTML(q.codeSnippet)}</code></pre>` : ''}
            <input type="text" id="code-input" class="custom-input code-font" placeholder="اكتب الجزء الناقص من الكود..." style="text-align:left; direction:ltr;">
        `;
        container.appendChild(box);

        const codeInp = box.querySelector("#code-input");
        if (codeInp) {
            codeInp.addEventListener("input", function () {
                if (this.value.trim().length > 0) enableActionButton();
            });
        }
    }
    else {
        // الأسئلة المقالية (أعرب، بما تفسر، ما النتائج)
        const textarea = document.createElement("textarea");
        textarea.id = "written-answer-input";
        textarea.className = "custom-textarea";
        textarea.placeholder = "اكتب إجابتك النموذجية هنا بالتفصيل...";
        
        textarea.addEventListener("input", function () {
            if (this.value.trim().length > 0) enableActionButton();
        });
        container.appendChild(textarea);
    }
}

function setupMainActionButton() {
    let actionBtn = document.getElementById("confirm-btn") || document.getElementById("next-btn");
    
    const secondaryBtn = document.getElementById("next-btn");
    if (secondaryBtn && secondaryBtn !== actionBtn) {
        secondaryBtn.style.display = "none";
    }

    if (!actionBtn) return;

    actionBtn.disabled = true;
    actionBtn.innerText = "تأكيد الإجابة والتحقق 🔍";
    actionBtn.style.display = "block";

    const newBtn = actionBtn.cloneNode(true);
    actionBtn.parentNode.replaceChild(newBtn, actionBtn);

    newBtn.addEventListener("click", function () {
        if (preventSpamClick()) return;

        if (!isAnswerConfirmed) {
            checkCurrentAnswer();
            isAnswerConfirmed = true;

            const isLast = (currentQuestionIndex + 1 >= activeQuestionsList.length);
            newBtn.innerText = isLast ? "عرض النتيجة والتقرير 🏁" : "السؤال التالي ➡️";
            newBtn.disabled = false;
        } else {
            currentQuestionIndex++;
            if (currentQuestionIndex >= activeQuestionsList.length) {
                finishExam();
            } else {
                loadQuestion();
            }
        }
    });
}

function enableActionButton() {
    const actionBtn = document.getElementById("confirm-btn") || document.getElementById("next-btn");
    if (actionBtn && !isAnswerConfirmed) {
        actionBtn.disabled = false;
    }
}

function checkCurrentAnswer() {
    clearInterval(timerInterval); // إيقاف المؤقت أثناء قراءة الشرح

    const q = activeQuestionsList[currentQuestionIndex];
    if (!q) return;

    const container = document.getElementById("options-container");
    let isCorrect = false;
    let userGivenAnswerText = "";

    if (q.type === "choose" || (!q.type && q.options)) {
        const selectedIndex = parseInt(container.dataset.selectedIndex);
        userGivenAnswerText = (q.options && q.options[selectedIndex]) ? q.options[selectedIndex] : "لم يتم الاختيار";

        document.querySelectorAll(".option-btn").forEach((btn, idx) => {
            btn.classList.add("disabled");
            if (idx === q.correct) btn.classList.add("correct-option");
            if (idx === selectedIndex && idx !== q.correct) btn.classList.add("wrong-option");
        });

        isCorrect = (selectedIndex === q.correct);
    }
    else if (q.type === "find_mistake" || q.type === "rewrite") {
        const correctWord = boxVal("#correct-word-input");
        const targetCorrect = normalizeText(q.expectedCorrect || q.correct || "");

        if (q.type === "find_mistake") {
            const wrongWord = boxVal("#wrong-word-input");
            userGivenAnswerText = `الخطأ: (${wrongWord}) ➔ التصحيح: (${correctWord})`;
            const targetWrong = normalizeText(q.expectedWrong || "");
            isCorrect = (normalizeText(wrongWord) === targetWrong || targetWrong === "") && (normalizeText(correctWord) === targetCorrect);
        } else {
            userGivenAnswerText = correctWord;
            isCorrect = (normalizeText(correctWord) === targetCorrect);
        }
    }
    else {
        const inputVal = q.type === "complete_code" ? boxVal("#code-input") : boxVal("#written-answer-input");
        userGivenAnswerText = inputVal;
        const normalizedStudent = normalizeText(inputVal);

        if (Array.isArray(q.acceptableAnswers)) {
            isCorrect = q.acceptableAnswers.some(ans => normalizeText(ans) === normalizedStudent);
        } else if (q.correct) {
            isCorrect = (normalizeText(q.correct) === normalizedStudent);
        } else {
            isCorrect = true; // يعتبر صحيح مبدئياً لحين المراجعة لو مقالي بدون إجابة محددة
        }
    }

    if (isCorrect) correctAnswersCount++;
    else wrongAnswersCount++;

    userAnswersSummary.push({
        questionNumber: currentQuestionIndex + 1,
        question: q.question,
        userAnswer: userGivenAnswerText,
        correctAnswerDisplay: q.correctDisplay || (q.options ? q.options[q.correct] : q.correct) || "مراجعة معُلم",
        isCorrect: isCorrect,
        rule: q.rule,
        whyCorrect: q.whyCorrect,
        whyWrong: q.whyWrong,
        trick: q.trick
    });

    showFeedback(isCorrect, q);
}

function startTimer(seconds) {
    clearInterval(timerInterval);
    remainingSeconds = seconds;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        remainingSeconds--;
        updateTimerDisplay();

        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            alert("⏰ انتهى الوقت!");
            if (!isAnswerConfirmed) {
                checkCurrentAnswer();
                isAnswerConfirmed = true;
                const actionBtn = document.getElementById("confirm-btn") || document.getElementById("next-btn");
                if (actionBtn) {
                    actionBtn.innerText = "السؤال التالي ➡️";
                    actionBtn.disabled = false;
                }
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElem = document.getElementById("timer");
    if (!timerElem) return;

    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;

    timerElem.innerText = `⏱ ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (remainingSeconds <= 120) { // آخر دقيقتين لون أحمر
        timerElem.style.color = "#dc2626";
        timerElem.style.fontWeight = "bold";
    } else {
        timerElem.style.color = "inherit";
        timerElem.style.fontWeight = "normal";
    }
}

function showFeedback(isCorrect, q) {
    const feedbackBox = document.getElementById("feedback-box");
    const status = document.getElementById("feedback-status");
    if (!feedbackBox || !status) return;

    status.innerText = isCorrect ? "✅ إجابة صحيحة! أحسنت." : "❌ إجابة خاطئة! راجع الشرح بالأسفل.";
    status.className = isCorrect ? "feedback-status correct" : "feedback-status wrong";

    const ruleEl = document.getElementById("expl-rule");
    const whyCorEl = document.getElementById("expl-why-correct");
    const whyWrgEl = document.getElementById("expl-why-wrong");
    const trickEl = document.getElementById("expl-trick");

    if (ruleEl) ruleEl.innerText = q.rule || "لا يوجد شرح متوفر.";
    if (whyCorEl) whyCorEl.innerText = q.whyCorrect || "الإجابة مطابقة للنموذج.";
    if (whyWrgEl) whyWrgEl.innerText = q.whyWrong || "تأكد من مراجعة التفاصيل.";
    if (trickEl) trickEl.innerText = q.trick || "ركز في الكلمات المفتاحية.";

    feedbackBox.style.display = "block";
}

function hideFeedback() {
    const feedbackBox = document.getElementById("feedback-box");
    if (feedbackBox) feedbackBox.style.display = "none";
}

function finishExam() {
    clearInterval(timerInterval);

    const total = activeQuestionsList.length || 1;
    const percentage = Math.round((correctAnswersCount / total) * 100);

    let gradeRating = "";
    let gradeColor = "";
    if (percentage >= 90) { gradeRating = "ممتاز 🌟"; gradeColor = "#16a34a"; }
    else if (percentage >= 75) { gradeRating = "جيد جداً 👍"; gradeColor = "#2563eb"; }
    else if (percentage >= 65) { gradeRating = "جيد 👌"; gradeColor = "#d97706"; }
    else if (percentage >= 50) { gradeRating = "مقبول 😐"; gradeColor = "#ca8a04"; }
    else { gradeRating = "يحتاج إلى مراجعة وتكرار ❌"; gradeColor = "#dc2626"; }

    const wrongAnswersOnly = userAnswersSummary.filter(item => !item.isCorrect);

    let reportHTML = `
        <div style="direction:rtl; text-align:right; font-family:sans-serif; padding:15px; max-width:600px; margin:0 auto;">
            <div style="text-align:center; padding:20px; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0; margin-bottom:20px;">
                <h2 style="margin-top:0;">🏁 انتهى الامتحان!</h2>
                <div style="font-size:32px; font-weight:bold; color:${gradeColor}; margin:10px 0;">
                    ${percentage}%
                </div>
                <p style="font-size:18px; margin:5px 0;">الدرجة: <strong>${correctAnswersCount} من ${total}</strong></p>
                <p style="font-size:16px; color:#475569; margin:5px 0;">التقدير العام: <strong style="color:${gradeColor}">${gradeRating}</strong></p>
            </div>
            <hr style="border:0; border-top:1px solid #e2e8f0; margin:20px 0;">
    `;

    if (wrongAnswersOnly.length === 0) {
        reportHTML += `
            <div style="text-align:center; padding:30px; background:#f0fdf4; border-radius:12px; border:1px solid #bbf7d0;">
                <h3 style="color:#16a34a; margin:0 0 10px 0;">🎉 أداء مثالي ورائع!</h3>
                <p style="color:#15803d; margin:0;">لقد أجبت على جميع الأسئلة بشكل صحيح بدون أي أخطاء. استمر بهذا المستوى الممتاز!</p>
            </div>
        `;
    } else {
        reportHTML += `<h3 style="color:#dc2626; margin-bottom:15px;">🔍 تحليل الأخطاء فقط (${wrongAnswersOnly.length} من أصل ${total}):</h3>`;

        wrongAnswersOnly.forEach((item) => {
            reportHTML += `
                <div style="margin-bottom:20px; padding:15px; border-radius:10px; background:#fff5f5; border:1px solid #fecaca;">
                    <p style="font-weight:bold; font-size:16px; color:#991b1b; margin-top:0;">س${item.questionNumber}: ${escapeHTML(item.question)}</p>
                    
                    <div style="margin:10px 0; padding:8px 12px; background:#ffe4e6; border-radius:6px; font-size:14px; color:#9f1239;">
                        <strong>إجابتك الخاطئة:</strong> ${escapeHTML(item.userAnswer)}
                    </div>
                    
                    <div style="margin:10px 0; padding:8px 12px; background:#f0fdf4; border-radius:6px; font-size:14px; color:#166534;">
                        <strong>الإجابة النموذجية الصحيحة:</strong> ${escapeHTML(item.correctAnswerDisplay)}
                    </div>

                    <div style="margin-top:12px; padding-top:10px; border-top:1px dashed #fca5a5; font-size:13px; color:#374151; line-height:1.6;">
                        <p style="margin:4px 0;">📖 <strong>القاعدة الأساسية:</strong> ${escapeHTML(item.rule || 'راجع الشرح الخاص بهذه المادة.')}</p>
                        <p style="margin:4px 0;">💡 <strong>لماذا الإجابة النموذجية هي الصحيحة؟</strong> ${escapeHTML(item.whyCorrect || 'تطابق القاعدة.')}</p>
                        <p style="margin:4px 0;">❌ <strong>لماذا إجابتك غير صحيحة؟</strong> ${escapeHTML(item.whyWrong || 'لم تطابق شروط السؤال.')}</p>
                        <p style="margin:4px 0; color:#b45309;">⚠️ <strong>نصيحة وخاطرة مفتاحية:</strong> ${escapeHTML(item.trick || 'ركز في قراءة السؤال بالكامل قبل الإجابة.')}</p>
                    </div>
                </div>
            `;
        });
    }

    reportHTML += `
        <div style="text-align:center; margin-top:25px;">
            <button onclick="location.reload()" style="padding:12px 28px; background:#2563eb; color:#fff; font-size:16px; font-weight:bold; border:none; border-radius:8px; cursor:pointer;">إعادة الامتحان 🔄</button>
        </div>
    </div>`;

    const examScreen = document.getElementById("exam-screen") || document.getElementById("examScreen") || document.querySelector(".exam-screen");
    if (examScreen) examScreen.innerHTML = reportHTML;
}

function preventSpamClick() {
    if (isClickLocked) return true;
    isClickLocked = true;
    setTimeout(() => { isClickLocked = false; }, 400);
    return false;
}

function boxVal(selector) {
    const el = document.querySelector(selector);
    return el ? el.value.trim() : "";
}

function normalizeText(text) {
    return String(text)
        .toLowerCase()
        .trim()
        .replace(/[.,!?؟،؛:()"']/g, "")
        .replace(/\s+/g, " ");
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function escapeHTML(str) {
    const div = document.createElement("div");
    div.innerText = str || "";
    return div.innerHTML;
}
