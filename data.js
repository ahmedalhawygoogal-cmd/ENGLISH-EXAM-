// ==========================================
// بنك الأسئلة الشامل - data.js (مادة الإنجليزية)
// ==========================================

const questionsData = {
    english: {
        // ==========================================
        // المستوى السهل (50 سؤال)
        // ==========================================
        easy: [
            // --- أولاً: اختر الإجابة الصحيحة (25 سؤال) ---
            {
                type: "choose",
                question: "She ___ to school every day.",
                options: ["go", "goes", "going", "gone"],
                correct: 1,
                rule: "زمن المضارع البسيط (Present Simple): يُضاف للفاعل المفرد الغائب (She/He/It) حرف s أو es.",
                whyCorrect: "لأن الفاعل She مفرد والتعبير يدل على عادة يومية (every day).",
                whyWrong: "الصيغ (go, going, gone) لا تتناسب مع المضارع البسيط للفاعل المفرد.",
                trick: "تعبير every day دائمًا إشارة للمضارع البسيط والتكرار."
            },
            {
                type: "choose",
                question: "They ___ playing football right now.",
                options: ["is", "am", "are", "be"],
                correct: 2,
                rule: "زمن المضارع المستمر (Present Continuous): يتكون من am/is/are + verb-ing.",
                whyCorrect: "الضمير They جمع وياخذ فعل الكينونة are.",
                whyWrong: "is للمفرد و am للمتكلم.",
                trick: "كلمة right now تشير إلى الحدث المستمر الآن."
            },
            {
                type: "choose",
                question: "Yesterday, I ___ a new book.",
                options: ["buy", "bought", "buying", "buys"],
                correct: 1,
                rule: "زمن الماضي البسيط (Past Simple): للتعبير عن حدث وانتهى في الماضي.",
                whyCorrect: "bought هو التصريف الثاني من الفعل buy وهو غير منتظم.",
                whyWrong: "buy و buys مضارع و buying محتاجة فعل مساعد.",
                trick: "كلمة Yesterday تدل فوراً على زمن الماضي البسيط."
            },
            {
                type: "choose",
                question: "He is ___ than his brother.",
                options: ["tall", "taller", "tallest", "more tall"],
                correct: 1,
                rule: "المقارنة بين اثنين (Comparative Degree): الصفات القصيرة يضاف لها er + than.",
                whyCorrect: "تُستخدم taller لأننا نقارن بين شخصين بوجود كلمة than.",
                whyWrong: "tallest للمفاضلة العليا و more tall صياغة خاطئة مع الصفات القصيرة.",
                trick: "وجود كلمة than بعد الفراغ دليل مباشر على صيغة er."
            },
            {
                type: "choose",
                question: "This is ___ best day of my life.",
                options: ["a", "an", "the", "no article"],
                correct: 2,
                rule: "أدوات المعرفة (Articles): أسلوب التفضيل الأعلى (Superlative) يأخذ أداة التعريف the.",
                whyCorrect: "صفة التفضيل best تأتي دائماً مسبوقة بـ the.",
                whyWrong: "أدوات التنكير a/an لا تأتي مع صيغ التفضيل العليا.",
                trick: "صفات التفضيل مثل best/fastest/most تأخذ the."
            },
            {
                type: "choose",
                question: "I have lived here ___ 2010.",
                options: ["for", "since", "in", "on"],
                correct: 1,
                rule: "المضارع التام (Present Perfect): استخدام since للتعبير عن بداية الحدث.",
                whyCorrect: "تُستخدم since مع السنين المحددة والنقاط الزمنية الثابتة.",
                whyWrong: "for تُستخدم مع المدة الزمنية الكاملة وليس نقطة البداية.",
                trick: "إذا وجد تاريخ محدد مثل 2010 اختر since وليس for."
            },
            {
                type: "choose",
                question: "Look at ___ clouds! It's going to rain.",
                options: ["this", "that", "those", "them"],
                correct: 2,
                rule: "أسماء الإشارة (Demonstratives): للجمع البعيد نستخدم those.",
                whyCorrect: "كلمة clouds جمع والغيوم في السماء تعتبر بعيدة فيشار إليها بـ those.",
                whyWrong: "this و that للمفرد و them ضمير مفعول لا اسم إشارة.",
                trick: "السحب جمع وبعيدة -> those."
            },
            {
                type: "choose",
                question: "She doesn't ___ like coffee.",
                options: ["likes", "like", "liked", "liking"],
                correct: 1,
                rule: "الأفعال المساعدة للنفي (do/does/did): يأتي بعدهم الفعل في المصدر (Infinitive).",
                whyCorrect: "بعد doesn't نرجع الفعل إلى أصله الصريح like.",
                whyWrong: "لا يضاف s أو ed للفعل بعد doesn't.",
                trick: "تذكر دائماً: do / does / did + المصدر فوراً."
            },
            {
                type: "choose",
                question: "Can you help ___ with my homework?",
                options: ["I", "my", "me", "mine"],
                correct: 2,
                rule: "ضمائر المفعول به (Object Pronouns): تأتي بعد الأفعال وحروف الجر.",
                whyCorrect: "المفعول به للضمير I هو me بعد الفعل help.",
                whyWrong: "I ضمير فاعل، my صفة ملكية، mine ضمير ملكية.",
                trick: "بعد الفعل نضع ضمير مفعول به (me وليس I)."
            },
            {
                type: "choose",
                question: "Where ___ you yesterday at 5 PM?",
                options: ["was", "were", "are", "did"],
                correct: 1,
                rule: "فعل الكينونة في الماضي (Past Continuous/Simple): الضمير you يأخذ were.",
                whyCorrect: "السؤال عن التواجد في الماضي مع الفاعل you يتطلب were.",
                whyWrong: "was للمفرد، are للمضارع، did تحتاج فعل رئيسي بعدها.",
                trick: "yesterday تعني ماضي + الفاعل you = were."
            },
            {
                type: "choose",
                question: "An apple a day keeps the doctor ___.",
                options: ["away", "out", "off", "in"],
                correct: 0,
                rule: "أمثال وتركيبات لغوية (Idioms & Proverbs): المثل الشهير ينتهي بـ away.",
                whyCorrect: "التعبير المأثور: An apple a day keeps the doctor away.",
                whyWrong: "بقية حروف الجر لا تفي بالمعنى المأثور للمثل.",
                trick: "المثل المشهور تحفظ فيه كلمة away."
            },
            {
                type: "choose",
                question: "We usually ___ lunch at 2 PM.",
                options: ["eats", "ate", "have", "having"],
                correct: 2,
                rule: "المضارع البسيط مع الجمع (We/They/You/I): يأخذ الفعل في المصدر بدون إضافة.",
                whyCorrect: "الفاعل We جمع وبالتالي نستخدم have في المصدر.",
                whyWrong: "eats للمفرد و ate للماضي.",
                trick: "كلمة usually تشير للمضارع البسيط ومع We نختار المصدر."
            },
            {
                type: "choose",
                question: "There ___ some milk in the fridge.",
                options: ["is", "are", "be", "were"],
                correct: 0,
                rule: "الأسماء غير المعدودة (Uncountable Nouns): تعامل معاملة المفرد وتأخذ is.",
                whyCorrect: "milk اسم غير معدود فيعامل كمفرد وياخذ is.",
                whyWrong: "are و were للجمع فقط.",
                trick: "الحليب والماء والسوائل غير معدودة تأخذ is."
            },
            {
                type: "choose",
                question: "My father is an engineer. ___ works in Cairo.",
                options: ["He", "She", "It", "They"],
                correct: 0,
                rule: "ضمائر الفاعل (Subject Pronouns): يُعوض عن المفرد المذكر العاقل بـ He.",
                whyCorrect: "father مفرد مذكر نستخدم معه الضمير He.",
                whyWrong: "She للمؤنث و It لغير العاقل.",
                trick: "father = He."
            },
            {
                type: "choose",
                question: "She is good ___ playing the piano.",
                options: ["in", "at", "on", "with"],
                correct: 1,
                rule: "الصفات وحروف الجر (Adjectives with Prepositions): الصفة good تأتي مع at عند بيان المهارة.",
                whyCorrect: "التعبير الصحيح هو good at + v-ing/noun.",
                whyWrong: "good in تعني جيدا في مجال ولكن المهارات تأخذ at.",
                trick: "ممتاز في مهارة = good at."
            },
            {
                type: "choose",
                question: "Did you ___ the movie last night?",
                options: ["watched", "watch", "watching", "watches"],
                correct: 1,
                rule: "السؤال في الماضي بـ Did: يأتي بعد الفاعل الفعل في المصدر.",
                whyCorrect: "بعد Did نستخدم المصدر مجرد من الإضافات وهو watch.",
                whyWrong: "watched في الماضي ولا يصح جمع دلالتين للماضي.",
                trick: "وجود Did يفرض اختيار المصدر."
            },
            {
                type: "choose",
                question: "What are you ___ this weekend?",
                options: ["do", "does", "doing", "did"],
                correct: 2,
                rule: "صيغة المضارع المستمر للتخطيط المستقبلي: are + v-ing.",
                whyCorrect: "لوجود الفعل المساعد are نختار الفعل مضافاً له ing.",
                whyWrong: "do و does لا يأتيان بعد verb to be.",
                trick: "are + verb + ing."
            },
            {
                type: "choose",
                question: "I am taller ___ my sister.",
                options: ["then", "than", "from", "as"],
                correct: 1,
                rule: "أداة المقارنة (Comparative): صفة المقارنة تأتي متبوعة بـ than.",
                whyCorrect: "نستخدم than للمقارنة بين طرفين.",
                whyWrong: "then تعني (ثم/حينئذ) وهي خطأ إملائي شائع بدلاً من than.",
                trick: "انتبه للفرق الإملائي: than للمقارنة وليس then."
            },
            {
                type: "choose",
                question: "This bag is ___. I bought it yesterday.",
                options: ["my", "mine", "me", "I"],
                correct: 1,
                rule: "ضمائر الملكية (Possessive Pronouns): تأتي في نهاية الجملة بدون اسم بعدها.",
                whyCorrect: "mine تعني (ملكي) وتوضع مستقلة بدون كتابة اسم الشيء بعدها.",
                whyWrong: "my صفة ملكية تحتاجة اسم بعدها مثل my bag.",
                trick: "إذا كان الفراغ في آخر الجملة بدون اسم بعدها نختار mine."
            },
            {
                type: "choose",
                question: "How ___ water do you drink daily?",
                options: ["many", "much", "few", "long"],
                correct: 1,
                rule: "أدوات الاستفهام مع الكمية (Quantity): How much للأسماء غير المعدودة.",
                whyCorrect: "water اسم غير معدود فيُسأل عنه بـ How much.",
                whyWrong: "How many للأسماء المعدودة الجمع.",
                trick: "الماء لا يجمع بالعدد -> How much."
            },
            {
                type: "choose",
                question: "How ___ books did you read this month?",
                options: ["much", "many", "long", "far"],
                correct: 1,
                rule: "أدوات الاستفهام للعدد (Countable Nouns): How many للأسماء التي تجمع.",
                whyCorrect: "books اسم معدود جمع نستخدم معه How many.",
                whyWrong: "How much للكمية وغير المعدود.",
                trick: "الكتب تنتهي بـ s الجمع -> How many."
            },
            {
                type: "choose",
                question: "Listen! Somebody ___ singing.",
                options: ["is", "are", "was", "were"],
                correct: 0,
                rule: "الضمائر المبهمة (Indefinite Pronouns): كلمات مثل Somebody تعامل معاملة المفرد.",
                whyCorrect: "Somebody مفرد وياخذ is في المضارع المستمر.",
                whyWrong: "are للجمع و words مثل somebody تأخذ فعل مفرد.",
                trick: "Listen! تنبيه للمضارع المستمر + Somebody تعامل كمفرد = is."
            },
            {
                type: "choose",
                question: "They went to Paris ___ plane.",
                options: ["by", "with", "in", "on"],
                correct: 0,
                rule: "وسائل المواصلات (Transport): تأخذ by إذا لم يفصل بينهما فاصل.",
                whyCorrect: "by plane هي الصيغة الصحيحة لوسائل النقل المباشرة.",
                whyWrong: "in و on تستخدمان إذا وجد فاصل مثل a/the/my.",
                trick: "وسيلة مواصلات مباشرة بدون a أو the -> by."
            },
            {
                type: "choose",
                question: "I was born ___ May.",
                options: ["on", "in", "at", "for"],
                correct: 1,
                rule: "حروف جر الزمان (Time Prepositions): الشهور والسنوات تأخذ in.",
                whyCorrect: "May شهر من الشهور وياخذ حرف الجر in.",
                whyWrong: "on للأيام و at للأوقات والتقويم المحدد بالساعة.",
                trick: "تذكر القاعدة: in (شهور/سنوات) - on (أيام) - at (ساعات)."
            },
            {
                type: "choose",
                question: "I was born ___ May 15th.",
                options: ["in", "on", "at", "to"],
                correct: 1,
                rule: "حروف جر الزمان: التواريخ المحددة بيوم تأخذ on.",
                whyCorrect: "لوجود اليوم 15th أصبح تاريخاً يعامل معاملة الأيام فيأخذ on.",
                whyWrong: "in للذكر المجرد للشهر بدون تحديد يوم.",
                trick: "تحديد اليوم داخل الشهر يحول حرف الجر إلى on."
            },

            // --- ثانياً: أوجد الخطأ وصححه (15 سؤال) ---
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: She don't like playing tennis.",
                expectedWrong: "don't",
                expectedCorrect: "doesn't",
                rule: "نفي المضارع البسيط للمفرد (She/He/It) يكون بـ doesn't.",
                whyCorrect: "الفاعل She مفرد فيلزمه doesn't.",
                whyWrong: "استخدام don't يكون مع الجمع والضمير I فقط.",
                trick: "She / He / It -> ينفون بـ doesn't."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: He go to the gym every day.",
                expectedWrong: "go",
                expectedCorrect: "goes",
                rule: "الفعل مع الفاعل المفرد في المضارع البسيط يضاف له s أو es.",
                whyCorrect: "الفعل المنتهي بـ o مع المفرد He يصبح goes.",
                whyWrong: "go بالمصدر تستخدم مع الجمع فقط.",
                trick: "He + مضارع بسيط = إضافة es."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: I have saw that movie last week.",
                expectedWrong: "have saw",
                expectedCorrect: "saw",
                rule: "وجود دلالة زمنية ماضية محددة (last week) تتطلب ماضي بسيط وليس مضارع تام.",
                whyCorrect: "تحويل الجملة للماضي البسيط باستخدام التصريف الثاني saw.",
                whyWrong: "المضارع التام لا يحدد بزمن ماضي كـ last week.",
                trick: "last week = ماضي بسيط مباشر (saw)."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: They is my best friends.",
                expectedWrong: "is",
                expectedCorrect: "are",
                rule: "مطابقة الفاعل والفعل (Subject-Verb Agreement): الجمع ياخذ are.",
                whyCorrect: "الضمير They للجمع وياخذ are.",
                whyWrong: "is للمفرد فقط.",
                trick: "They دائماً متبوعة بـ are."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: She is more taller than her sister.",
                expectedWrong: "more taller",
                expectedCorrect: "taller",
                rule: "عدم ازدواجية صيغ المقارنة: الصفة القصيرة تأخذ er فقط ولا تسبق بـ more.",
                whyCorrect: "إزالة more والإبقاء على taller فقط.",
                whyWrong: "جمع more مع er خطأ قواعدي فادح.",
                trick: "لا تجتمع er مع كلمة more أبداً."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: We was very tired yesterday.",
                expectedWrong: "was",
                expectedCorrect: "were",
                rule: "فعل الكينونة في الماضي للجمع: We/They/You يأخذون were.",
                whyCorrect: "تغيير was إلى were لتناسب الفاعل الجمع We.",
                whyWrong: "was تستخدم مع I/He/She/It فقط.",
                trick: "We بالماضي تأخذ were."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: He doesn't have no money.",
                expectedWrong: "no",
                expectedCorrect: "any",
                rule: "قاعدة منع ازدواج النفي (Double Negative).",
                whyCorrect: "بما أن الجملة منفية بـ doesn't نستخدم any وليس no.",
                whyWrong: "no تعطي نفياً ثانياً للجملة وهذا خطأ صريح.",
                trick: "نفي + any (وليس no)."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: I am agreeing with you.",
                expectedWrong: "am agreeing",
                expectedCorrect: "agree",
                rule: "أفعال الشعور والحالة (Stative Verbs) لا تأتي في الأزمنة المستمرة.",
                whyCorrect: "الفعل agree يعبر عن حالة وليس حركة فيكون في المضارع البسيط agree.",
                whyWrong: "استخدام صيغة المستمر ing مع أفعال الرأي خاطئ.",
                trick: "أفعال الموافقة والرأي لا تأخذ ing."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: Look! The train arrive.",
                expectedWrong: "arrive",
                expectedCorrect: "is arriving",
                rule: "كلمات التنبيه المباشرة (Look!) تتطلب مضارع مستمر.",
                whyCorrect: "تحويل الفعل إلى المضارع المستمر is arriving.",
                whyWrong: "المضارع البسيط arrive لا يعبر عن الحدوث الآن.",
                trick: "Look! = am/is/are + v-ing."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: She can plays the guitar.",
                expectedWrong: "plays",
                expectedCorrect: "play",
                rule: "الأفعال الناقصة (Modal Verbs) يتبعها المصدر مجرداً.",
                whyCorrect: "بعد can نضع المصدر play بدون إضافة s.",
                whyWrong: "إضافة s بعد الأفعال الناقصة خطأ.",
                trick: "can + مصدر مجرد."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: There is many people in the hall.",
                expectedWrong: "is",
                expectedCorrect: "are",
                rule: "الأسماء الجمع المعدودة تاخذ There are.",
                whyCorrect: "people اسم جمع فتصبح الجملة There are.",
                whyWrong: "There is للمفرد فقط.",
                trick: "people جمع -> تستخدم are."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: Yesterday I go to the dentist.",
                expectedWrong: "go",
                expectedCorrect: "went",
                rule: "الدلالة الزمنية الماضية تستوجب تحويل الفعل للشكل الماضي.",
                whyCorrect: "الماضي من go هو went لوجود Yesterday.",
                whyWrong: "go مضارع يتناقض مع أمس.",
                trick: "Yesterday تعني تحويل go لـ went."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: My phone is most expensive than yours.",
                expectedWrong: "most",
                expectedCorrect: "more",
                rule: "المقارنة بين اثنين للصفات الطويلة تستخدم more وليس most.",
                whyCorrect: "وجود كلمة than يعبر عن مقارنة بين اثنين فتكون more.",
                whyWrong: "most للتفضيل الجماعي الأعلى وليس للمقارنة الثنائية.",
                trick: "وجود than يفرض استخدام more وليس most."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: He reached at the station early.",
                expectedWrong: "reached at",
                expectedCorrect: "reached",
                rule: "الفعل reach متعدي لا يحتاج حرف جر بعده عند كتابة المكان.",
                whyCorrect: "حذف at لتصبح He reached the station.",
                whyWrong: "إضافة at مع reach خطأ شائغ ناتج عن الترجمة الحرفية.",
                trick: "reach + المكان مباشرة بدون حروف جر."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: She is doctor in a big hospital.",
                expectedWrong: "doctor",
                expectedCorrect: "a doctor",
                rule: "الوظائف والمهن المفرودة تستوجب وجود أداة التنكير a/an.",
                whyCorrect: "وضع أداة التنكير a قبل الوظيفة a doctor.",
                whyWrong: "ترك الوظيفة المفردة بدون أداة تنكير خطأ قواعدي.",
                trick: "المهنة المفردة يلزمها a أو an."
            },

            // --- ثالثاً: أعد كتابة الجمل (10 أسئلة) ---
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (haven't):\nI last saw him in 2020.",
                acceptableAnswers: ["I haven't seen him since 2020", "I haven't seen him since 2020."],
                correctDisplay: "I haven't seen him since 2020.",
                rule: "التحويل للمضارع التام المنفي: haven't + p.p + since + السنة.",
                whyCorrect: "استخدام المضارع التام المنفي للتعبير عن انقطاع الرؤية منذ ذلك التاريخ.",
                whyWrong: "استخدام for بدلاً من since مع السنة التاريخية.",
                trick: "last saw in (سنة) -> haven't seen since (سنة)."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (as...as):\nShe is shorter than Mona.",
                acceptableAnswers: ["She isn't as tall as Mona", "Mona isn't as short as she is", "She is not as tall as Mona"],
                correctDisplay: "She isn't as tall as Mona.",
                rule: "التكافؤ والمساواة النفعية: isn't as + الصفة + as.",
                whyCorrect: "نفي التساوي يعبر عن الفرق في القامة بينهما.",
                whyWrong: "نسيان نفي الجملة يغير المعنى تماماً.",
                trick: "أقصر من = ليس بنفس طول."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (must):\nIt is necessary for you to study hard.",
                acceptableAnswers: ["You must study hard", "You must study hard."],
                correctDisplay: "You must study hard.",
                rule: "التعبير عن الضرورة والإلزام: It is necessary for you -> You must.",
                whyCorrect: "must تعبر عن الضرورة الملزمة في الحاضر.",
                whyWrong: "إضافة to بعد must خطأ فادح.",
                trick: "It is necessary for you to = You must."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (for):\nHe began reading two hours ago and he is still reading.",
                acceptableAnswers: ["He has been reading for two hours", "He has been reading for two hours."],
                correctDisplay: "He has been reading for two hours.",
                rule: "المضارع التام المستمر (Present Perfect Continuous) لحدث بدأ وما زال مستمراً.",
                whyCorrect: "has been + v-ing + for + المدة الزمنية.",
                whyWrong: "استخدام الماضي البسيط يلغي استمرارية الحدث.",
                trick: "began ... and is still ... = has been v-ing for."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (too):\nI don't have enough money to buy this smartphone.",
                acceptableAnswers: ["This smartphone is too expensive for me to buy", "This smartphone is too expensive to buy"],
                correctDisplay: "This smartphone is too expensive for me to buy.",
                rule: "استخدام too + صفة + to + المصدر لبيان عدم القدرة لكبر/زيادة الصفة.",
                whyCorrect: "تحويل عدم امتلاك المال الكافي إلى أن الهاتف غالي جداً.",
                whyWrong: "استخدام الصفة الموجبة cheap بدلاً من expensive.",
                trick: "not enough money -> too expensive to buy."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (belongs):\nThis is my book.",
                acceptableAnswers: ["This book belongs to me", "This book belongs to me."],
                correctDisplay: "This book belongs to me.",
                rule: "التعبير عن الملكية بالفعل belong to + ضمير مفعول.",
                whyCorrect: "تغيير صفة الملكية my إلى التركيب ينتهي بـ belongs to me.",
                whyWrong: "نسيان حرف الجر to بعد الفعل belong.",
                trick: "my book = book belongs to me."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (Ali said that):\n\"I am tired,\" said Ali.",
                acceptableAnswers: ["Ali said that he was tired", "Ali said that he was tired."],
                correctDisplay: "Ali said that he was tired.",
                rule: "الكلام المنقول (Reported Speech): تحويل المضارع إلى ماضي والضمائر حسب المتكلم.",
                whyCorrect: "تحويل I إلى he و am إلى was.",
                whyWrong: "ترك الفعل am في زمن المضارع داخل الكلام المنقول.",
                trick: "في المنقول: am تتحول إلى was."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (was):\nThey built this bridge in 1990.",
                acceptableAnswers: ["This bridge was built in 1990", "This bridge was built in 1990."],
                correctDisplay: "This bridge was built in 1990.",
                rule: "المبني للمجهول في الماضي البسيط (Passive): نائب الفاعل + was/were + p.p.",
                whyCorrect: "الجرائم/البناء يتم تحويله للمجهول باختيار was built.",
                whyWrong: "نسيان التصريف الثالث built.",
                trick: "built (ماضي) -> was built (مجهول)."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (so):\nShe didn't come because she was ill.",
                acceptableAnswers: ["She was ill, so she didn't come", "She was ill so she didn't come."],
                correctDisplay: "She was ill, so she didn't come.",
                rule: "عكس جمل السبب بوضع النتيجة مع الربط بـ so.",
                whyCorrect: "البدء بالسبب (المرض) متبوعاً بالنتيجة (عدم الحضور) باستخدام so.",
                whyWrong: "وضع so في بداية الجملة دون عكس الأطراف.",
                trick: "اعكس الطرفين واستبدل because بـ so."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (should):\nI advise you to sleep early.",
                acceptableAnswers: ["You should sleep early", "You should sleep early."],
                correctDisplay: "You should sleep early.",
                rule: "إسداء النصيحة: I advise you to -> You should + المصدر.",
                whyCorrect: "صياغة نصيحة مباشرة باستخدام فعل النصيحة الناقص should.",
                whyWrong: "إضافة to بعد should.",
                trick: "I advise you to = You should."
            }
        ],

        // ==========================================
        // المستوى المتوسط (30 سؤال)
        // ==========================================
        medium: [
            // --- أولاً: اختر الإجابة الصحيحة (15 سؤال) ---
            {
                type: "choose",
                question: "If I ___ enough money, I would buy a new car.",
                options: ["have", "had", "will have", "have had"],
                correct: 1,
                rule: "الحالة الشرطية الثانية (Second Conditional): If + ماضي بسيط ➔ would + المصدر.",
                whyCorrect: "وجود would buy في جواب الشرط يحتم وجود الماضي البسيط had بعد If.",
                whyWrong: "have مضارع يتناسب مع الحالة الأولى فقط.",
                trick: "جواب الشرط فيه would ➔ اختر الماضي البسيط (had)."
            },
            {
                type: "choose",
                question: "By next month, we ___ this project.",
                options: ["will finish", "will have finished", "finished", "finish"],
                correct: 1,
                rule: "المستقبل التام (Future Perfect): By + وقت مستقبلي ➔ will have + p.p.",
                whyCorrect: "التعبير عن حدوث وانتهاء فعل قبل نقطة زمنية في المستقبل يستلزم المستقبل التام.",
                whyWrong: "will finish مستقبل بسيط لا يضمن اكتمال الفعل قبل الموعد المحدد.",
                trick: "By + زمن مستقبلي = Future Perfect (will have finished)."
            },
            {
                type: "choose",
                question: "She denied ___ the window.",
                options: ["to break", "breaking", "break", "broken"],
                correct: 1,
                rule: "الأفعال المتبوعة بـ Gerund: الفعل deny يأتي بعده v-ing.",
                whyCorrect: "breaking هي الصيغة الصحيحة المصدرية المضافة بعد deny.",
                whyWrong: "deny لا تأخذ to + المصدر.",
                trick: "deny + verb + ing."
            },
            {
                type: "choose",
                question: "The teacher made us ___ the whole exercise again.",
                options: ["to do", "do", "doing", "done"],
                correct: 1,
                rule: "الأفعال السببية (Causative Verbs): make + مفعول + المصدر بدون to.",
                whyCorrect: "الفعل make يتبعه مفعول به ثم المصدر مجرد do.",
                whyWrong: "إضافة تو بعد make في المعلوم خطأ شائغ.",
                trick: "make + شخص + المصدر المباشر (do)."
            },
            {
                type: "choose",
                question: "I am used to ___ up early in the morning.",
                options: ["get", "getting", "got", "gets"],
                correct: 1,
                rule: "الاعتاد في الحاضر: be used to + v-ing.",
                whyCorrect: "سبق used to بفعل الكينونة am يعبر عن العادة الحالية ويستلزم ing.",
                whyWrong: "get تأتي إذا كانت used to غير مسبوقة بـ v.to be.",
                trick: "am / is / are + used to ➔ يتبعها v-ing."
            },
            {
                type: "choose",
                question: "The report ___ sent yesterday afternoon.",
                options: ["is", "was", "has been", "were"],
                correct: 1,
                rule: "المبني للمجهول في الماضي: was/were + p.p.",
                whyCorrect: "التقرير مفرد والحدث تم أمس فيستلزم was sent.",
                whyWrong: "is للمضارع و were للجمع.",
                trick: "تقرير (مفرد) + أمس (ماضي) = was."
            },
            {
                type: "choose",
                question: "The man ___ house was destroyed received help.",
                options: ["who", "whose", "whom", "which"],
                correct: 1,
                rule: "ضمائر الوصل للملكية (Relative Pronouns): whose للملكية بين اسمين.",
                whyCorrect: "المنزل ملك للرجل فنستخدم ضمير الملكية whose.",
                whyWrong: "who للفاعل العاقل وليس للملكية.",
                trick: "اسم عاقل + whose + اسم يملكه."
            },
            {
                type: "choose",
                question: "You ___ better see a doctor right away.",
                options: ["would", "had", "should", "could"],
                correct: 1,
                rule: "تراكيب النصيحة القوية: had better + المصدر.",
                whyCorrect: "التعبير الاصطلاحي النصحى الملازم هو had better.",
                whyWrong: "would better صياغة غير صحيحة قواعدياً.",
                trick: "التركيبة الشهيرة هي had better."
            },
            {
                type: "choose",
                question: "I'd rather you ___ here with me tonight.",
                options: ["stay", "stayed", "staying", "to stay"],
                correct: 1,
                rule: "تراكيب التفضيل الشرطي: would rather + فاعل + ماضي بسيط (لتمني الحاضر).",
                whyCorrect: "لوجود الفاعل you بعد I'd rather نستخدم الماضي البسيط stayed.",
                whyWrong: "stay بدون فاعل فقط، ولكن وجود فاعل يفرض الماضي.",
                trick: "would rather + فاعل ➔ ماضي بسيط."
            },
            {
                type: "choose",
                question: "Hardly ___ entered the house when the phone rang.",
                options: ["I had", "had I", "I did", "did I"],
                correct: 1,
                rule: "التقديم والتأخير للتوكيد (Inversion): Hardly + فعل مساعد (had) + فاعل.",
                whyCorrect: "عند البدء بـ Hardly نستخدم الترتيب الاستفهامي هكذا: had I.",
                whyWrong: "I had ترتيب جملة خبرية لا يصح مع تقديم Hardly.",
                trick: "بداية الجملة بـ Hardly ➔ ترتيب تقديم الفعل على الفاعل (had I)."
            },
            {
                type: "choose",
                question: "She suggested ___ to the cinema.",
                options: ["going", "to go", "go", "went"],
                correct: 0,
                rule: "أفعال الاقتراح: suggest + v-ing مباشرة عند عدم وجود فاعل.",
                whyCorrect: "عدم وجود فاعل بعد suggest يستوجب استخدام صيغة going.",
                whyWrong: "to go خطأ شائع، الفعل suggest لا يأخذ infinitve بـ to.",
                trick: "suggest + v-ing (في حالة عدم وجود فاعل)."
            },
            {
                type: "choose",
                question: "I wish I ___ more time to spend with my family.",
                options: ["have", "had", "will have", "have had"],
                correct: 1,
                rule: "التمني في الحاضر (Wishes): wish + ماضي بسيط.",
                whyCorrect: "التعبير عن أمنية غير محققة في الحاضر يستلزم زمن الماضي البسيط had.",
                whyWrong: "have مضارع ولا تستخدم في جمل التمني الحالية.",
                trick: "I wish + فاعل ➔ زمن ماضي بسيط (had)."
            },
            {
                type: "choose",
                question: "Neither my sister nor my parents ___ coming to the party.",
                options: ["is", "are", "was", "be"],
                correct: 1,
                rule: "قاعدة Neither...nor: الفعل يتبع الفاعل الأقرب له.",
                whyCorrect: "الفاعل الأقرب للفعل هو my parents (جمع) فيأخذ are.",
                whyWrong: "is للمفرد، لكننا نتبع الفاعل الثاني الجمع.",
                trick: "مع Neither...nor الفعل يتبع الاسم الثاني الملاصق له."
            },
            {
                type: "choose",
                question: "He was accused ___ stealing the wallet.",
                options: ["with", "for", "of", "about"],
                correct: 2,
                rule: "حروف الجر الملازمة للأفعال: accuse of + v-ing.",
                whyCorrect: "التهمة تأخذ حرف الجر of بعد الفعل accuse.",
                whyWrong: "with أو for خطأ ترجمة حرفية.",
                trick: "accuse ➔ يتبعها of."
            },
            {
                type: "choose",
                question: "Unless you ___ now, you will be late.",
                options: ["don't leave", "leave", "left", "will leave"],
                correct: 1,
                rule: "جمل الشرط بـ Unless: تتبع بفعل مثبت لأن الأداة تحمل النفي ضمناً.",
                whyCorrect: "نستخدم الفعل المثبت leave لأن Unless تعني (إذا لم).",
                whyWrong: "don't leave يسبب نفي مضاعف خاطئ.",
                trick: "بعد Unless يأتي الفعل مثبتاً."
            },

            // --- ثانياً: أوجد الخطأ وصححه (10 أسئلة) ---
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: I look forward to meet you soon.",
                expectedWrong: "meet",
                expectedCorrect: "meeting",
                rule: "التعبير الاصطلاحي look forward to يتبعه دائماً اسم أو v-ing.",
                whyCorrect: "تعديل meet إلى meeting لأن to هنا حرف جر وليست مصدرية.",
                whyWrong: "وضع المصدر بعد هذا التعبير تحديداً خطأ شائغ.",
                trick: "look forward to + v-ing."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: He stopped to smoke because it was bad for his health.",
                expectedWrong: "to smoke",
                expectedCorrect: "smoking",
                rule: "الفرق بين stop to و stop v-ing: الأولى يتوقف لكي يفعل، الثانية يقلع نهائياً.",
                whyCorrect: "الإقلاع عن التدخين لضرر الصحة يستوجب صيغة smoking.",
                whyWrong: "to smoke تعني أنه توقف لكي يدخن عكس المعنى المطلوب.",
                trick: "التوقف والإقلاع النهائي عن عادة = stop + v-ing."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: If I was you, I would accept the job offer.",
                expectedWrong: "was",
                expectedCorrect: "were",
                rule: "افتراضات الحالة الشرطية الثانية الخيالية: تستخدم were مع جميع الضمائر.",
                whyCorrect: "في النصيحة والافتراض الخيالي نقول If I were you.",
                whyWrong: "was تعتبر صياغة عامية غير رسمية القواعد ترفضها هنا.",
                trick: "النصيحة بالشرط: If I were you."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: The news are very shocking today.",
                expectedWrong: "are",
                expectedCorrect: "is",
                rule: "كلمة news (الأخبار) اسم غير معدود يعامل معاملة المفرد دائماً.",
                whyCorrect: "استبدال are بـ is لملائمة الاسم المفرد.",
                whyWrong: "انتهاء الكلمة بـ s ينخدع به البعض ظناً أنها جمع.",
                trick: "news مفرد دائماً ➔ تاخذ is."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: He insisted on to pay for dinner.",
                expectedWrong: "to pay",
                expectedCorrect: "paying",
                rule: "حروف الجر (on) يتبعها الفعل مضافاً له ing.",
                whyCorrect: "تعديل to pay إلى paying لتستقيم مع حرف الجر on.",
                whyWrong: "لا يجوز جمع to مع حرف جر آخر مثل on.",
                trick: "insist on + v-ing."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: Although of the rain, we played football.",
                expectedWrong: "Although of",
                expectedCorrect: "Despite",
                rule: "لا يوجد تركيب يسمى Although of، للتعبير المتبوع باسم نستخدم Despite.",
                whyCorrect: "استبدال التركيب بـ Despite أو In spite of.",
                whyWrong: "Although يأتي بعدها جملة فعلية كاملة وليس اسم فقط.",
                trick: "Although + جملة / Despite + اسم."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: She asked me where was I going.",
                expectedWrong: "was I",
                expectedCorrect: "I was",
                rule: "الكلام غير المباشر الاستفهامي: يحول ترتيب السؤال إلى جملة خبرية (فاعل ثم فعل).",
                whyCorrect: "ترتيب الفاعل أولاً ثم الفعل لتصبح I was going.",
                whyWrong: "تقديم الفعل المساعد يجعلها صيغة سؤال مباشر داخل المنقول.",
                trick: "في الكلام المنقول: فاعل ثم فعل (I was)."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: Neither of the answers are correct.",
                expectedWrong: "are",
                expectedCorrect: "is",
                rule: "التركيب Neither of يتبعه اسم جمع ولكن الفعل يكون مفرداً.",
                whyCorrect: "تغيير are إلى is لأن الفاعل النحوي هو Neither (مفرد).",
                whyWrong: "اعتبار الاسم الجمع هو الفاعل الأصلي.",
                trick: "Neither of + اسم جمع ➔ فعل مفرد (is)."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: I've been knowing him for ten years.",
                expectedWrong: "'ve been knowing",
                expectedCorrect: "'ve known",
                rule: "أفعال المعرفة والعدم حركة (know) لا تصاغ في الأشكال المستمرة.",
                whyCorrect: "استخدام المضارع التام البسيط 've known بدلاً من المستمر.",
                whyWrong: "إضافة ing للفعل know خطأ قواعدي.",
                trick: "know لا تأخذ ing في الاستمرار ➔ استخدم المضارع التام البسيط."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: You don't need to come if you wouldn't want to.",
                expectedWrong: "wouldn't",
                expectedCorrect: "don't",
                rule: "الحالة الشرطية الأولى: If + مضارع بسيط مثبت أو منفي.",
                whyCorrect: "تعديل wouldn't إلى don't لملائمة زمن المضارع في جملة الشرط.",
                whyWrong: "wouldn't تستخدم في الحالة الثانية وليس الأولى.",
                trick: "جملة الشرط الأولى تتطلب مضارع don't."
            },

            // --- ثالثاً: أعد كتابة الجمل (5 أسئلة) ---
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (asked me where):\n\"Where did you buy this jacket?\" she asked me.",
                acceptableAnswers: ["She asked me where I had bought that jacket", "She asked me where I had bought that jacket."],
                correctDisplay: "She asked me where I had bought that jacket.",
                rule: "التحويل للماضي التام في الكلام غير المباشر: الماضي البسيط يرجع درجة للماضي التام.",
                whyCorrect: "تحويل did buy إلى had bought مع تغيير الضمائر وتنسيق الجملة.",
                whyWrong: "ترك الترتيب على هيئة سؤال.",
                trick: "سؤال ماضي بسيط ➔ يتحول لماضي تام (had bought) في المجهول."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (wish):\nI regret not studying harder for the test.",
                acceptableAnswers: ["I wish I had studied harder for the test", "I wish I had studied harder for the test."],
                correctDisplay: "I wish I had studied harder for the test.",
                rule: "الندم على الماضي والتمني المستحيل: wish + ماضي تام (had + p.p).",
                whyCorrect: "تحويل الندم على عدم الدراسة إلى أمنية إيجابية بالماضي التام had studied.",
                whyWrong: "استخدام الماضي البسيط يعبر عن تمني الحاضر وليس الندم الماضي.",
                trick: "regret not + v-ing ➔ wish + had + p.p."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (It is said):\nPeople say that he is a brilliant scientist.",
                acceptableAnswers: ["It is said that he is a brilliant scientist", "It is said that he is a brilliant scientist."],
                correctDisplay: "It is said that he is a brilliant scientist.",
                rule: "المجهول الشكلي للأقوال (Impersonal Passive): It is said that + الجملة.",
                whyCorrect: "استبدال الفاعل العام People بالتركيب المجهول الشكلي.",
                whyWrong: "تغيير زمن الجملة الأساسية.",
                trick: "People say that ➔ It is said that."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (will be):\nThey will publish the new book next month.",
                acceptableAnswers: ["The new book will be published next month", "The new book will be published next month."],
                correctDisplay: "The new book will be published next month.",
                rule: "المبني للمجهول في المستقبل البسيط: will be + التصريف الثالث.",
                whyCorrect: "تقديم المفعول به The new book ومتبوعاً بـ will be published.",
                whyWrong: "نسيان التصريف الثالث للمصدر.",
                trick: "will publish ➔ will be published."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (so...that):\nIt was such a rainy day that we couldn't go out.",
                acceptableAnswers: ["The day was so rainy that we couldn't go out", "It was so rainy that we couldn't go out"],
                correctDisplay: "The day was so rainy that we couldn't go out.",
                rule: "التحويل بين such a + صفة + اسم و so + صفة + that.",
                whyCorrect: "فصل الصفة rainy واستخدامها مباشرة بعد so دون الحاجة للاسم day.",
                whyWrong: "الاحتفاظ بالاسم بعد so خطأ قواعدي.",
                trick: "such a rainy day ➔ so rainy that."
            }
        ],

        // ==========================================
        // المستوى الصعب (20 سؤال)
        // ==========================================
        hard: [
            // --- أولاً: اختر الإجابة الصحيحة (10 أسئلة) ---
            {
                type: "choose",
                question: "Scarcely ___ when the fire broke out.",
                options: ["he had arrived", "had he arrived", "arrived he", "he arrived"],
                correct: 1,
                rule: "التقديم والتأخير للتوكيد (Inversion): Scarcely + had + الفاعل + p.p.",
                whyCorrect: "بداية الجملة الظرفية المنفية تفرض تقديم الفعل المساعد had على الفاعل he.",
                whyWrong: "he had ترتيب عادي يفسد صياغة التقديم التوكيدي.",
                trick: "Scarcely ➔ الترتيب: had he arrived."
            },
            {
                type: "choose",
                question: "Had I known about the meeting, I ___ it.",
                options: ["would attend", "attended", "would have attended", "will attend"],
                correct: 2,
                rule: "الحالة الشرطية الثالثة المقلوبة (Inverted 3rd Conditional): Had + فاعل + p.p ➔ would have + p.p.",
                whyCorrect: "بدء الشرط بـ Had في الماضي التام يقتضي جواب شرط من النوع الثالث would have attended.",
                whyWrong: "would attend للحالة الثانية فقط.",
                trick: "بدء الشرط بـ Had ➔ جواب الشرط (would have + p.p)."
            },
            {
                type: "choose",
                question: "The committee ___ divided in their opinions regarding the new policy.",
                options: ["is", "are", "was", "has"],
                correct: 1,
                rule: "أسماء الجمع الكلية (Collective Nouns): تعامل كجمع عند اختلاف أفرادها.",
                whyCorrect: "وجود الضمير plural (their) وااختلاف الآراء يوجب استخدام الفعل الجمع are.",
                whyWrong: "is للمفرد عندما تعمل اللجنة ككتلة واحدة متفقة.",
                trick: "وجود كلمة divided و their إشارة قطعية للجمع ➔ are."
            },
            {
                type: "choose",
                question: "It is essential that he ___ present at the board meeting.",
                options: ["is", "be", "was", "being"],
                correct: 1,
                rule: "صيغة المنصوب والمصدر الافتراضي (Subjunctive Mood): It is essential that + فاعل + المصدر المجرد.",
                whyCorrect: "القاعدة الأكاديمية تفرض استخدام المصدر الخام be بعد تعبيرات الأهمية بغض النظر عن الفاعل.",
                whyWrong: "اختيار is خطأ شائع لعدم معرفة صيغة Subjunctive.",
                trick: "It is essential that + he ➔ المصدر المجرد (be) بدون إضافة."
            },
            {
                type: "choose",
                question: "Whatever you do, don't let yourself ___ taken advantage of.",
                options: ["be", "to be", "being", "been"],
                correct: 0,
                rule: "المبني للمجهول بعد let: let + مفعول + be + p.p.",
                whyCorrect: "بعد الفعل let يوضع المصدر be مع التصريف الثالث للفاعل المنعكس.",
                whyWrong: "to be لا تأتي بعد let صراحة.",
                trick: "let yourself ➔ be + p.p."
            },
            {
                type: "choose",
                question: "So intense ___ that nobody could hear each other speak.",
                options: ["the noise was", "was the noise", "noise was", "did the noise"],
                correct: 1,
                rule: "التقديم والتأخير عند تقديم الصفة (So + Adjective Inversion): So + صفة + فعل مساعد + فاعل.",
                whyCorrect: "تقديم الصفة So intense يستوجب التقديم بالتراكيب الاستفهامية was the noise.",
                whyWrong: "the noise was ترتيب خبري خاطئ.",
                trick: "So + صفة في البداية ➔ كان التركيب: was the noise."
            },
            {
                type: "choose",
                question: "They'd rather you ___ details of the contract to anyone else.",
                options: ["didn't disclose", "don't disclose", "not disclose", "won't disclose"],
                correct: 0,
                rule: "تراكيب التفضيل الشرطية للفاعل الثاني: would rather + فاعل + ماضي بسيط منفى.",
                whyCorrect: "وجود الفاعل you يستلزم الماضي البسيط المنفي didn't disclose للتعبير عن رغبة حالية.",
                whyWrong: "don't disclose مضارع غير مستخدم في هذا التركيب.",
                trick: "would rather + فاعل ➔ didn't + المصدر."
            },
            {
                type: "choose",
                question: "Were it not for your assistance, we ___ in deep trouble now.",
                options: ["will be", "would be", "would have been", "were"],
                correct: 1,
                rule: "الحالة الشرطية الثانية المقلوبة المختلطة (Mixed Conditional): Were it not for ➔ would + المصدر.",
                whyCorrect: "لوجود كلمة now في جواب الشرط نستخدم الحالة الثانية الحالية would be وليس الثالثة.",
                whyWrong: "would have been للماضي بينما الدلالة هنا للحاضر بوجود now.",
                trick: "وجود كلمة now في جواب الشرط ➔ اختر would be."
            },
            {
                type: "choose",
                question: "Not until the middle of the night ___ back.",
                options: ["did he come", "he came", "came he", "he had come"],
                correct: 0,
                rule: "التقديم والتأخير بـ Not until: يتبعها الزمن ثم التقديم الاستفهامي did he come.",
                whyCorrect: "تقديم الفعل المساعد did على الفاعل he لوقوع الجملة بعد التركيب التوكيدي Not until.",
                whyWrong: "he came ترتيب جملة خبرية لا يناسب التقديم التوكيدي.",
                trick: "Not until + عبارة زمنية ➔ تقديم الفعل (did he come)."
            },
            {
                type: "choose",
                question: "She would sooner stay home ___ out with them.",
                options: ["than go", "rather than going", "to going", "than going"],
                correct: 0,
                rule: "تراكيب التفضيل القياسية: would sooner + مصدر ... than + مصدر.",
                whyCorrect: "العطف بعد would sooner يتم بـ than متبوعة بالمصدر المجرد go.",
                whyWrong: "than going إضافة ing خطأ مع التكافؤ المصممي.",
                trick: "would sooner (مصدر) ... than (مصدر)."
            },

            // --- ثانياً: أوجد الخطأ وصححه (5 أسئلة) ---
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: Scarcely had I left the house than it started raining.",
                expectedWrong: "than",
                expectedCorrect: "when",
                rule: "التلازم اللفظي للروابط المتقدمة: Scarcely ترتبط بـ when وليست than.",
                whyCorrect: "استبدال than بـ when لتستقيم الصياغة القياسية.",
                whyWrong: "than تستخدم مع No sooner فقط.",
                trick: "Scarcely ➔ when / No sooner ➔ than."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: It's imperative that she goes to the doctor immediately.",
                expectedWrong: "goes",
                expectedCorrect: "go",
                rule: "صيغة المنصوب الأكاديمية (Subjunctive): It's imperative that + فاعل + المصدر.",
                whyCorrect: "تصحيح goes إلى المصدر المجرد go بدون s.",
                whyWrong: "إضافة s الشخص الثالث مرفوضة في صيغة Subjunctive.",
                trick: "It's imperative that she ➔ go (المصدر)."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: No sooner she had entered the office than the phone rang.",
                expectedWrong: "she had entered",
                expectedCorrect: "had she entered",
                rule: "قاعدة التقديم والتأخير التوكيدي (Inversion) عند البدء بـ No sooner.",
                whyCorrect: "تقديم الفعل المساعد لتصبح had she entered.",
                whyWrong: "ترك الترتيب الخبري يلغي الفائدة التوكيدية المتقدمة.",
                trick: "No sooner ➔ تقديم المساعد: had she entered."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: I'd rather you don't speak to him like that yesterday.",
                expectedWrong: "don't speak",
                expectedCorrect: "hadn't spoken",
                rule: "التفضيل والندم على الماضي: would rather + فاعل + ماضي تام (عند وجود كلمة ماضية مثل yesterday).",
                whyCorrect: "تحويل الفعل إلى الماضي التام المنفي hadn't spoken لوجود yesterday.",
                whyWrong: "don't speak مضارع لا يتناسب مع دلالة الماضي.",
                trick: "would rather + فاعل + دلالة ماضي (yesterday) ➔ ماضي تام (hadn't spoken)."
            },
            {
                type: "find_mistake",
                question: "أوجد الخطأ وصححه: Not only he was late, but he also forgot his passport.",
                expectedWrong: "he was late",
                expectedCorrect: "was he late",
                rule: "التقديم التوكيدي مع العطف التراكمي: Not only في بداية الجملة تسبب inversion.",
                whyCorrect: "تقديم فعل الكينونة لتصبح was he late.",
                whyWrong: "الاحتفاظ بـ he was يخل بقواعد التقديم والـ Inversion.",
                trick: "Not only في البداية ➔ تقديم الفعل: was he late."
            },

            // --- ثالثاً: أعد كتابة الجمل (5 أسئلة) ---
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (Hardly...):\nHe had hardly entered the house when the lights went out.",
                acceptableAnswers: ["Hardly had he entered the house when the lights went out", "Hardly had he entered the house when the lights went out."],
                correctDisplay: "Hardly had he entered the house when the lights went out.",
                rule: "بدء الجملة بالظرف السلبي Hardly يحدث تقديم وفصل للمساعد: Hardly had + فاعل + p.p.",
                whyCorrect: "تقديم had على الفاعل he وإكمال باقي الجملة كما هي بـ when.",
                whyWrong: "ترك ترتيب الفاعل أوالاً ينفي الغرض من استخدام التركيب.",
                trick: "Hardly في البداية ➔ Hardly had he entered..."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (Not until...):\nI only realized my mistake when I got home.",
                acceptableAnswers: ["Not until I got home did I realize my mistake", "Not until I got home did I realize my mistake."],
                correctDisplay: "Not until I got home did I realize my mistake.",
                rule: "التقديم التوكيدي بـ Not until: Not until + عبارة الزمان + did + الفاعل + المصدر.",
                whyCorrect: "وضع عبارة الوصول للبيت أولاً ثم تقديم did I realize في الجزء الرئيسي.",
                whyWrong: "تقديم الفعل داخل عبارة الزمن نفسها وليس الجملة الرئيسية.",
                trick: "Not until (عبارة الزمان) ➔ تقديم الفعل الرئيسي (did I realize)."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (But for...):\nIf you had not helped me, I couldn't have succeeded.",
                acceptableAnswers: ["But for your help, I couldn't have succeeded", "But for your help I couldn't have succeeded"],
                correctDisplay: "But for your help, I couldn't have succeeded.",
                rule: "استبدال جملة الشرط المنفية المتقدمة بـ But for + اسم.",
                whyCorrect: "تحويل الفعل helped إلى الاسم your help بعد أداة الاستثناء الشرطية But for.",
                whyWrong: "ترك الجملة الفعلية بعد But for.",
                trick: "If you had not helped me ➔ But for your help."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (would rather):\nI prefer walking to driving in heavy traffic.",
                acceptableAnswers: ["I would rather walk than drive in heavy traffic", "I would rather walk than drive in heavy traffic."],
                correctDisplay: "I would rather walk than drive in heavy traffic.",
                rule: "التحويل بين prefer v-ing to v-ing و would rather مصدر than مصدر.",
                whyCorrect: "تفكيك صيغ الـ ing إلى المصادر مجردة walk و drive وتوصيلهما بـ than.",
                whyWrong: "الاحتفاظ بـ ing بعد would rather.",
                trick: "prefer v-ing to v-ing ➔ would rather (مصدر) than (مصدر)."
            },
            {
                type: "written",
                question: "أعد كتابة الجملة باستخدام (required):\nIt was compulsory for everyone to show their ID at the gate.",
                acceptableAnswers: ["Everyone was required to show their ID at the gate", "Everyone was required to show their ID at the gate."],
                correctDisplay: "Everyone was required to show their ID at the gate.",
                rule: "تحويل صيغ الإلزام المفروض إلى المبني للمجهول: Subject + was/were required to + المصدر.",
                whyCorrect: "جعل Everyone فاعلاً رئيساً متبوعاً بـ was required to show.",
                whyWrong: "إبقاء التعبير الشكلي It was.",
                trick: "It was compulsory for X to ➔ X was required to."
            }
        ]
    }
};

