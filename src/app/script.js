/* 

    Version: 1.0.0;
    By Kelly Mulry (https://www.kellymulry.com | https://github.com/trainerkelly)
    I had the idea for this app for about 1.5 years before I started working on it. I just didn't have the skills or knowledge to just wing something on my own. After learning JavaScript for about an hour and fifteen minutes a day, 4x a week, for about 2~3 months, I was able to build the first version of this app!! 

    My prior JS experience was limited to a blog feed I made for the homepage of my website (no longer up), random quiz stuffs, and following along with some tutorials (barely understanding what was going on) but nothing like this. 

    Feel free to use this code to inspire you, make your own version, etc.. Credit would be appreciated. 

*/  
  
  // ----------- VARIABLES ----------- 

            // elements 
            const tkList1 = document.getElementById('tk-list-1');
            const genki = document.getElementById('genki');
            const wordListMessage = document.getElementById('wordlist-message');
            const loadWords = document.getElementById('load-words');
            const testType = document.getElementById('test-type');
            const vocabWord = document.getElementById('vocab-word');
            const wordInfo = document.getElementById('information');
            const wordContext = document.getElementById('context');
            const extraInfo = document.getElementById('extra-info');
            const answerFeedback = document.getElementById('answer-feedback');
            const answerField = document.getElementById('answer');
            const answerHover = document.getElementById('answer-hover');
            const numOfWordsSelectedCount = document.getElementById('number-of-selected-words');
            const selectFiveMessage = document.getElementById('select-five-message');
            const typingQuizArea = document.getElementById('typing-quiz');
            const fiveWordsMessage = document.getElementById('five-words-message');
       
            // learning category
            const categoryVocabulary =  document.getElementById('category-vocabulary');
            const categoryKanjiRadicals=  document.getElementById('category-kanji-radicals');

            // forms 
            const wordlistOptions = document.forms[0];
            const learningFocusSelection = document.forms[1];
            const randomizationSelection = document.forms[2];
            const fontSelection = document.forms[3];
            const filterByWordType = document.forms[4];
            const selectByWordType = document.forms[5];
            const wordSelection = document.forms[6];

            // navigation button elements
            const homeBtn = document.getElementById('home-btn');
            const aboutBtn = document.getElementById('about-btn');
            const settingsBtn = document.getElementById('settings-btn');
            const wordSelectionBtn = document.getElementById('word-selection-btn');
            const learnBtn = document.getElementById('learn-btn');
            const creditsBtn = document.getElementById('credits-btn');

            // section
            const homeSection = document.getElementById('home-section');
            const aboutSection = document.getElementById('about-section');
            const settingsSection = document.getElementById('settings-section');
            const wordSelectionSection = document.getElementById('word-selection-section');
            const learnSection = document.getElementById('learn-section');
            const creditsSection = document.getElementById('credits-section');

            // font selection 
            const fontSelectAll = document.getElementById('fonts-selectall');
            const fontNotoSans = document.getElementById('fonts-noto-sans-jp');
            const fontNotoSerif = document.getElementById('fonts-noto-serif-jp');
            const fontMPlusRounded = document.getElementById('fonts-m-plus-rounded-1c');
            const fontMPlus = document.getElementById('fonts-m-plus-1p');
            const fontYukiMai = document.getElementById('fonts-yuki-mai');
            const fontSawarabiGothic = document.getElementById('fonts-sawarabi-gothic');
            const fontKosugiMaru = document.getElementById('fonts-kosugi-maru');
            const fontZenAntique = document.getElementById('fonts-zen-antique');
            const fontZenOldMincho = document.getElementById('fonts-zen-old-mincho');
            const fontShipporiMincho = document.getElementById('fonts-shippori-mincho-b1');
            const fontZenKurenaido = document.getElementById('fonts-zen-kurenaido');
            const fontDeltaGothicOne = document.getElementById('fonts-delta-gothic-one');
            const fontRocknRollOne = document.getElementById('fonts-rocknroll-one');
            const fontDotGothic16 = document.getElementById('fonts-dot-gothic-16');
            const fontYuseiMagic = document.getElementById('fonts-yusei-magic');
            const fontNewTegomin = document.getElementById('fonts-new-tegomin');
            const fontRampartOne = document.getElementById('fonts-rampart-one');
            const fontReggaeOne = document.getElementById('fonts-reggae-one');
            const fontMochiyPopOne = document.getElementById('fonts-mochiy-pop-one');
            const fontKaiseiTokumin = document.getElementById('fonts-kaisei-tokumin');
            const fontBizUdpmincho = document.getElementById('fonts-biz-udpmincho');
            const fontPottaOne = document.getElementById('fonts-potta-one');
            const fontKaiseiOpti = document.getElementById('fonts-kaisei-opti');
            const fontHachiMaruPop = document.getElementById('fonts-hachi-maru-pop');
            const fontYujiSyuku = document.getElementById('fonts-yuji-syuku');
            const fontShipporiAntiqueB1 = document.getElementById('fonts-shippori-antique-b1');
            const fontYujiBoku = document.getElementById('fonts-yuji-boku');
            let fontsSelected = [];
            let currentFontSelected; 
            let previousFontSelected;

            // ordered index for current word
            let orderedIndex = 0; 

            // randomization toggle
            const randomizationWords = document.getElementById('randomization-words');
            const randomizationAnswers = document.getElementById('randomization-answers');
            const randomizationAnswersLabel = document.getElementById('randomization-answers-label');

            // answer toggle
            const learningFocusBoth = document.getElementById('learning-focus-both');
            const learningFocusReadings = document.getElementById('learning-focus-readings');
            const learningFocusMeanings = document.getElementById('learning-focus-meanings');

            // filter
            const filterAllWords = document.getElementById('filter-all');
            const filterNouns = document.getElementById('filter-nouns');
            const filterPronouns = document.getElementById('filter-pronouns');
            const filterVerbs = document.getElementById('filter-verbs');
            const filterIchidanVerbs = document.getElementById('filter-ichidan-verbs');
            const filterGodanVerbs = document.getElementById('filter-godan-verbs');
            const filterSuruVerbs = document.getElementById('filter-suru-verbs');
            const filterTransitiveVerbs = document.getElementById('filter-transitive-verbs');
            const filterIntransitiveVerbs = document.getElementById('filter-intransitive-verbs');
            const filterAuxiliaryVerbs = document.getElementById('filter-auxiliary-verbs');
            const filterAdjectives = document.getElementById('filter-adjectives');
            const filterIAdjectives = document.getElementById('filter-i-adjectives');
            const filterNaAdjectives = document.getElementById('filter-na-adjectives');
            const filterAuxiliaryAdjectives = document.getElementById('filter-auxiliary-adjectives');
            const filterAdverbs = document.getElementById('filter-adverbs');
            const filterConjunctions = document.getElementById('filter-conjunctions');
            const filterExpressions = document.getElementById('filter-expressions');
            const filterInterjections = document.getElementById('filter-interjections');
            const filterCopulas = document.getElementById('filter-copulas');
            const filterParticles = document.getElementById('filter-particles');
            const filterCounters = document.getElementById('filter-counters');
            const filterPrefixes = document.getElementById('filter-prefixes');
            const filterSuffixes = document.getElementById('filter-suffixes');
            const filterKanaA = document.getElementById('filter-a-btn');
            const filterKanaKa = document.getElementById('filter-ka-btn');
            const filterKanaSa = document.getElementById('filter-sa-btn');
            const filterKanaTa = document.getElementById('filter-ta-btn');
            const filterKanaNa = document.getElementById('filter-na-btn');
            const filterKanaHa = document.getElementById('filter-ha-btn');
            const filterKanaMa = document.getElementById('filter-ma-btn');
            const filterKanaYa = document.getElementById('filter-ya-btn');
            const filterKanaRa = document.getElementById('filter-ra-btn');
            const filterKanaWa = document.getElementById('filter-wa-btn');
            const filterKanaN = document.getElementById('filter-n-btn');

            // selections
            const selectAll = document.getElementById('select-all');
            const selectNouns = document.getElementById('select-nouns');
            const selectPronouns = document.getElementById('select-pronouns');
            const selectVerbs = document.getElementById('select-verbs');
            const selectIchidanVerbs = document.getElementById('select-ichidan-verbs');
            const selectGodanVerbs = document.getElementById('select-godan-verbs');
            const selectSuruVerbs = document.getElementById('select-suru-verbs');
            const selectTransitiveVerbs = document.getElementById('select-transitive-verbs');
            const selectIntransitiveVerbs = document.getElementById('select-intransitive-verbs');
            const selectAuxiliaryVerbs = document.getElementById('select-auxiliary-verbs');
            const selectAdjectives = document.getElementById('select-adjectives');
            const selectIAdjectives = document.getElementById('select-i-adjectives');
            const selectNaAdjectives = document.getElementById('select-na-adjectives');
            const selectAuxiliaryAdjectives = document.getElementById('select-auxiliary-adjectives');
            const selectAdverbs = document.getElementById('select-adverbs');
            const selectConjunctions = document.getElementById('select-conjunctions');
            const selectExpressions = document.getElementById('select-expressions');
            const selectInterjections = document.getElementById('select-interjections');
            const selectCopulas = document.getElementById('select-copulas');
            const selectParticles = document.getElementById('select-particles');
            const selectCounters = document.getElementById('select-counters');
            const selectPrefixes = document.getElementById('select-prefixes');
            const selectSuffixes = document.getElementById('select-suffixes');
            const selectKanaA = document.getElementById('select-a-btn');
            const selectKanaKa = document.getElementById('select-ka-btn');
            const selectKanaSa = document.getElementById('select-sa-btn');
            const selectKanaTa = document.getElementById('select-ta-btn');
            const selectKanaNa = document.getElementById('select-na-btn');
            const selectKanaHa = document.getElementById('select-ha-btn');
            const selectKanaMa = document.getElementById('select-ma-btn');
            const selectKanaYa = document.getElementById('select-ya-btn');
            const selectKanaRa = document.getElementById('select-ra-btn');
            const selectKanaWa = document.getElementById('select-wa-btn');
            const selectKanaN = document.getElementById('select-n-btn');

            // select with shift
            let lastCheckedW; 

            // reset buttons
            const settingsReset = document.getElementById('settings-reset');
            const wordSelectionReset = document.getElementById('wordselection-reset');

            // word list selection
            let listName;

            // word lists 
            let wordList;
            let testArray = [];
            let quizList = [];

            // current words & info
            let currentData; 
            let currentWord;
            let currentMeaning;
            let currentReadingKana;
            let currentReadingRomaji;
            let currentRefcode;
            let currentType; 
            let currentAlternateMeanings;
            let currentAlternateReadings;
            let currentNuanceNotes;
            let currentOtherNotes;
            let currentAnswer; 
            let currentWordMeaningRefcode; 
            let currentWordReadingRefcode; 

            // previous words 
            let previousData; 
            let previousWord; 
            let previousRefcode;
            let previousMeaning;
            let previousReadingKana;
            let previousReadingRomaji; 
            let previousSelectedWords = [];

            // ----------- DEFAULT OPTIONS ----------- 
            //home section displayed by default 
            homeBtn.click();

            // tkList1 list is selected by default
            tkList1.click(loadJSONData());

            // hides the "no JavaScript" message upon JavaScript loading
            document.getElementById("no-js-message").style.display = "none";

            // ----------- FUNCTIONS ----------- 
            // open section – code from W3Schools, modified to needs
                function openSection(evt, sectionId) {
                let i;
                let sectionContent;
                let sectionLinks;

                sectionContent = document.getElementsByClassName("section-content");
                for (i = 0; i < sectionContent.length; i++) {
                    sectionContent[i].style.display = "none";
                }

                sectionLinks = document.getElementsByClassName("section-links");
                for (i = 0; i < sectionLinks.length; i++) {
                    sectionLinks[i].className = sectionLinks[i].className.replace(" active", "");
            }

            document.getElementById(sectionId).style.display = "block";
            evt.currentTarget.className += " active";

        } 
            
            // load json data
            async function fetchAPI(jsonURL) {
            await fetch(jsonURL)
                    .then (response => response.json())
                    .then (json => {
                        let jsonData = json;
                        let i;
                        const NUMBER_OF_WORDS = jsonData.length;
                        wordList = jsonData;
                //         for(i = 0; i < wordList.length; i++) {
                //         console.log("This word is " + wordList[i].word);
                //         wordSelection.innerHTML += 
                        
                //         `
                //         <label id="card-${wordList[i].refcode}" for="${wordList[i].refcode}" class="mini-card label"> 
                //             <input type="checkbox" id="${wordList[i].refcode}" name="selectWord" value="${wordList[i].word}" class="checkbox-styling" data-indexvalue="${i}">
                //             <span class="checkmark"></span>
                //             <span class="jp-word">${wordList[i].word}</span>
                //             <span class="jp-reading">${wordList[i]['reading-kana']}</span>
                //             <span class="en-meaning">${wordList[i].meaning}</span>
                //         </label>  
                //         `;
                //         wordListMessage.innerHTML = 
                //         `<p class="message-line">The wordlist, <span class="selected-list-confirmation">${listName}</span>, has been successfully selected!</p>
                //         <p class="message-line">The number of words in this list is <span class="selected-list-confirmation">${i + 1}.</span></p>
                //         `;
                // };
                    wordListMessage.innerHTML = 
                        `<p class="message-line">The wordlist, <span class="selected-list-confirmation">${listName}</span>, has been successfully selected!</p>
                        <p class="message-line">The number of words in this list is <span class="selected-list-confirmation">${wordList.length}.</span></p>
                        `;
                        
                    loadSelectWordCards();
                    wordListOptionsReset();
                    })
                    .catch(error => console.error("Oh no! The JSON file didn't load...sad face. =< Try again!", error));
            }

            function loadSelectWordCards() {
                wordSelection.innerHTML = "";
                // console.log("Load Select Word Cards!");
                wordSelectionCardsArray();
                // console.log("Words are loaded!");
                wordSelection.innerHTML = testArray.join("");
                // wordSelectionMiniCards;
                
            }

            function wordSelectionCardsArray() {
                testArray = [];
                for(i = 0; i < wordList.length; i++) {
                    // console.log("This word is " + wordList[i].word);
                    testArray.push( 
                    `
                    <label id="card-${wordList[i].refcode}" for="${wordList[i].refcode}" class="mini-card label"> 
                        <input type="checkbox" id="${wordList[i].refcode}" name="selectWord" value="${wordList[i].word}" class="checkbox-styling" data-indexvalue="${i}">
                        <span class="checkmark"></span>
                        <span class="jp-word">${wordList[i].word}</span>
                        <span class="jp-reading">${wordList[i]['reading-kana']}</span>
                        <span class="en-meaning">${wordList[i].meaning}</span>
                    </label>  
                    `);
                };
                
            }

            // resets everything on the Wordlist & Settings Page
            function resetSettings()  {
                wordlistOptions.reset();
                fontSelection.reset();
                fontSelectAll.checked = false;
                randomizationSelection.reset();
                learningFocusSelection.reset();
            }

            // resets everything on the Word Selection page
            function wordListOptionsReset() {
                quizList = [];
                numOfWordsSelectedCount.textContent = 0;
                filterByWordType.reset();
                selectByWordType.reset();
                wordSelection.reset();
            }

            // NOTE TO SELF: The JSON data is counted as an array, so .length works perfectly. No need to do anything. Just...DON'T stringify it! Stringifying it will return 1. Also, if you use object.length, it will return one. Just use it on the JSON data!! 

            // Also, a note to myself...I know that there's a lot of "clunky" data right now, but do you know what? I'm early in Javascript! T_T I'll eventually get better! =DD

            // get specific wordlists 
            function loadJSONData() {
                if (tkList1.checked === true) {
                    fetchAPI("tklist1.json");
                    // console.log("tkList1 was selected!");
                    listName = tkList1.value; 
                    wordSelection.innerHTML = ""
                    selectAll.checked = false;
                };

                if (genki.checked === true) {
                    fetchAPI("genki.json");
                    // console.log("Genki was selected!");
                    wordSelection.innerHTML = ""
                    listName = genki.value; 
                    selectAll.checked = false;
                }; 
            }

            // // selects all fonts 
            function selectAllFonts() {
                fontsSelected = [];
                // console.log("Select All Fonts has been checked!")
                for (let i = 0; i < fontSelection.length; i++) {
                    if (fontSelectAll.checked === true) {
                        fontSelection[i].checked = true;
                    } else if (fontSelectAll.checked === false) {
                        fontSelection[i].checked = false;
                    }
                }
                    currentlySelectedFonts();
                }

            // checks currently selected fonts, grabs the data-font and adds to an array (fontsSelected) that will later be applied when the word is selected
            function currentlySelectedFonts(e) {
                for (let i = 0; i < fontSelection.length; i++) {
                        if (fontSelection[i].checked === true) {
                            // console.log(fontSelection[i].value + " is checked!");
                            fontsSelected.push(fontSelection[i].getAttribute('data-font'));
                        } 
                }
            }

            // grabs the words that are selected
            function grabSelectedWords() {
                // reset the quizList to an empty array
                quizList = [];
                previousSelectedWords = [];

                // run a for...loop the length of all the words displayed and increment by 1 each time.
                    for (let i = 0; i < wordSelection.length; i++) {
                        // if the wordSelection with the index number stated in the variable i IS checked then...
                        if (wordSelection[i].checked) {
                            let indexValue = wordSelection[i].getAttribute('data-indexvalue'); // grabs custom data attribute that holds the index value number according to the word placement in wordList. 
                            quizList.push([wordList[indexValue]]); // adds the corresponding wordList object to the quizList in its own array (an array within an array). 
                   
                            // NOTE: I had to use wordSelection[i] to get the data-indexvalue attribute to work! Also, even though I wrote indexValue, it looks like the browser converted it to all lowercase. =o So I renamed it. 

                            // adds a border, only when checked – currently inactive due to being unable to get the same effect on the font cards and did not want inconsistency – will revisit at a later time.
                            // document.getElementById(`card-${wordList[i].refcode}`).classList.add("checked-border");
                    } 

                    // removes a border, only when no longer checked – currently inactive due to being unable to get the same effect on the font cards and did not want inconsistency – will revisit at a later time.
                    // if (wordSelection[i].checked === false) {
                    //     document.getElementById(`card-${wordList[i].refcode}`).classList.remove("checked-border");
                    // }
                }

                if (quizList.length >= 5) {
                    // if quizlist is great or equal to 5, it changes the message to say there are enough words selected to start learning.
                    fiveWordsMessage.classList.remove("message-line-warning");
                    fiveWordsMessage.classList.add("message-line");
                    fiveWordsMessage.textContent = "You have selected enough words to start learning!";
                } else {
                    // otherwise, it displays a message asking 5 words to be selected.
                    fiveWordsMessage.classList.add("message-line-warning");
                    fiveWordsMessage.textContent = "Please select at least 5 words to start learning.";
                }
                numOfWordsSelectedCount.textContent = quizList.length;

                selectCurrentWord()
            }

            // randomly grabs a word from the quiz list 
            function selectCurrentWord() {
                // randomly select an array from quizList and load the word into currentWord; the readings into currentReadingKana and currentReadingRomaji; and the meaning into currentMeaning 
                let indexNumber = orderedIndex;
                let randomIndexNumber = Math.floor(Math.random() * quizList.length);
                let fontIndexNumber = Math.floor(Math.random() * fontsSelected.length);
                let listLength = quizList.length + previousSelectedWords.length; 

                if (listLength >= 5) {
                    // if the length of both quizList and previousSelectWords are more than 5, it hides the message regarding selecting 5 words.
                    selectFiveMessage.classList.add('hide');
                    selectFiveMessage.textContent = "";
                    typingQuizArea.style.display = "block";

                    if (quizList.length === 0) {
                        // if quizlist no longer has any words in it, reset the quiz.
                        resetQuizList();
                        // console.log(quizList);
                        // console.log(previousSelectedWords);
                    } else {
                        // checks randomization 
                        if (randomizationWords.checked === true && randomizationAnswers.checked === true) {
                            indexNumber = randomIndexNumber; 
                            // console.log("Words and Answers are randomized!");
                        }

                        // sets current data
                        currentData = quizList[indexNumber];
                        currentWord = quizList[indexNumber][0].word; 
                        currentReadingKana = quizList[indexNumber][0]['reading-kana'];
                        currentReadingRomaji = quizList[indexNumber][0]['reading-romaji'].toUpperCase();  
                        currentMeaning = quizList[indexNumber][0].meaning.toUpperCase();
                        currentRefcode = quizList[indexNumber][0].refcode;
                        currentType = quizList[indexNumber][0].type; 
                        currentAlternateMeanings = quizList[indexNumber][0]['alternate-meanings'];
                        currentAlternateReadings = "UPDATE ALTERNATE READINGS WHEN DOING THE ACTUAL VOCABULARY LIST";
                        currentNuanceNotes = quizList[indexNumber][0]['nuance-notes'];
                        currentOtherNotes = quizList[indexNumber][0]['other-notes'];

                        // sets the text content of vocab-word to the current word
                        vocabWord.textContent = currentWord;

                        // pushes and then deletes current set of data; 
                        previousSelectedWords.push(quizList[indexNumber][0]);
                        quizList.splice(indexNumber, 1);

                        // selects font
                        previousFontSelected = currentFontSelected;
                        // console.log("The previous font was: " + previousFontSelected);
                        currentFontSelected = fontsSelected[fontIndexNumber];
                        // console.log("The current font is: " + currentFontSelected);
                        vocabWord.classList.remove(previousFontSelected);
                        vocabWord.classList.add(currentFontSelected);
                        // console.log("The font selected is " + currentFontSelected);

                        // calls the current answer function 
                        selectCurrentAnswer();

                        // checks if Extra Info is checked or not
                        displayExtraInfo();
                    }
            } else {
                // informs user to select 5 words and the number of words currently selected.
                selectFiveMessage.classList.remove('hide');
                selectFiveMessage.innerHTML = 
                `Please select at least 5 words. You current have ${quizList.length} selected. <br /><br />
                Thank you!`
                typingQuizArea.style.display = "none";
            }
            }

            // resets the quiz list to allow it to run indefinitely 
            function resetQuizList() {
                for (let i = 0; i < previousSelectedWords.length; i++) {
                    quizList.push([previousSelectedWords[i]]);
                }

                previousSelectedWords = [];
            }

            // randomly selects if the answer is going to be the reading (kana, romaji) or meaning (english) of the word displayed
            function selectCurrentAnswer() {
                answerField.value = "";
                answerHover.textContent = "";
                answerFeedback.innerHTML = "";
                let readingAnswer = [currentReadingRomaji, currentReadingKana];
                let meaningAnswer = currentMeaning;
                let answerOptions = [readingAnswer, meaningAnswer]; 
                let answerOptionsIndex = Math.floor(Math.random() * answerOptions.length);
                currentAnswer = answerOptions[answerOptionsIndex];

                // console.log("Select current answer has been fired!");
                // console.log(`Previous Refcode is ${previousRefcode}. Current Refcode is ${currentRefcode}.`);

                // checks for answer randomization 
                if (randomizationAnswers.checked === false) {
                    currentAnswer = answerOptions[orderedIndex];
                    // console.log("Words are randomized. Answers are NOT!");
                } 

                // checks the learning focus is for readings only
                if (learningFocusBoth.checked === false && learningFocusMeanings.checked === false && learningFocusReadings.checked === true) {
                    currentAnswer = readingAnswer;
                    // console.log("Only the readings are chosen!");
                    testType.textContent = "読みだけ • Readings ONLY";
                    testType.classList.remove("english-label");
                    testType.classList.add("nihongo-label");
                    // console.log("The current answer is " + currentAnswer + " the current reading answer is " + readingAnswer + ".");

                    if (readingAnswer[0] === previousReadingRomaji && readingAnswer[1] === previousReadingKana) {
                        previousWord = currentWord;
                        previousRefcode = currentRefcode;
                        selectCurrentWord();
                        // console.log("Selects a new word after getting the meaning right!");
                    }
                }

                // checks if the learning focus is meanings only
                if (learningFocusBoth.checked === false && learningFocusMeanings.checked === true && learningFocusReadings.checked === false) {
                    currentAnswer = meaningAnswer;
                    // console.log("Only the meanings are chosen!");
                    testType.textContent = "意味だけ • Meanings ONLY";
                    testType.classList.remove("nihongo-label");
                    testType.classList.add("english-label");
                    // console.log("The current answer is " + currentAnswer + " the current meaning answer is " + meaningAnswer + ".");

                    if (meaningAnswer === previousMeaning) {
                        previousWord = currentWord;
                        previousRefcode = currentRefcode;
                        selectCurrentWord();
                        // console.log("Selects a new word after getting the reading right!");
                    }
                }


                // checks if the learning focus is for both the readings and meanings
                if (learningFocusBoth.checked === true && learningFocusMeanings.checked === false && learningFocusReadings.checked === false) {

                if (currentAnswer === readingAnswer) {
                    testType.textContent = "日本語";
                    testType.classList.remove("english-label");
                    testType.classList.add("nihongo-label");
                    // console.log("The current answer is " + currentAnswer + " the current reading answer is " + readingAnswer + ".");
                } else if (currentAnswer === meaningAnswer){
                    testType.textContent = "ENG";
                    testType.classList.remove("nihongo-label");
                    testType.classList.add("english-label");
                    // console.log("The current answer is " + currentAnswer + " the current meaning answer is " + meaningAnswer + ".");
                } 

                // console.log("The current data is: " + JSON.stringify(currentData));
                // console.log("The previous data is: " + JSON.stringify(previousData));
                // console.log("The current and previous data are equal to each other: " + currentData === previousData);
                
                    switch(true) {
                                case readingAnswer[0] === previousReadingRomaji && readingAnswer[1] === previousReadingKana && meaningAnswer === previousMeaning && currentWordReadingRefcode === currentRefcode && currentWordMeaningRefcode === currentRefcode:
                                // console.log("All the previous answers have been answered!");
                                previousWord = currentWord;
                                // console.log(`Previous Word ${previousWord} is now Current Word ${currentWord}!`);
                                previousRefcode = currentRefcode;
                                // console.log(`Previous Refcode ${previousRefcode} is now Current Refcode ${currentRefcode}!`);
                                selectCurrentWord();
                                // console.log("Selects a new word!")
                                break; 

                                case currentAnswer === readingAnswer && readingAnswer[0] === previousReadingRomaji && readingAnswer[1] === previousReadingKana && currentWordReadingRefcode === currentRefcode:
                                    currentAnswer = meaningAnswer;
                                    // console.log(`Previous Refcode is ${previousRefcode}. Current Refcode is ${currentRefcode}.`);
                                    testType.textContent = "ENG";
                                    testType.classList.remove("nihongo-label");
                                    testType.classList.add("english-label");
                                    // console.log("If the reading answer has already been answered, but the meaning hasn't, SWITCH!");
                                break; 
                                
                                case currentAnswer === meaningAnswer && meaningAnswer === previousMeaning && currentWordMeaningRefcode === currentRefcode: 
                                    currentAnswer = readingAnswer;
                                    // console.log(`Previous Refcode is ${previousRefcode}. Current Refcode is ${currentRefcode}.`);
                                    testType.textContent = "日本語";
                                    testType.classList.remove("english-label");
                                    testType.classList.add("nihongo-label");
                                    // console.log("If the meaning answer has already been answered, but the reading hasn't, SWITCH!");
                                break; 
                    }
    
                }

                // console.log("The current answer is: " + currentAnswer);
                // console.log(quizList);
                // console.log(previousSelectedWords)

            }

            // checks the input value to see if it matches the current answer
            function checkAnswer() {
                let answerInput = answerField.value.toUpperCase();
                let answerWrong = '<i class="fa-solid fa-xmark wrong" aria-label="wrong answer"></i>'
                let answerRight = '<i class="fa-regular fa-circle right" aria-label="right answer"></i>'

                // checks if learning both the readings and meanings is selected
                if (learningFocusBoth.checked === true && learningFocusMeanings.checked === false && learningFocusReadings.checked === false) {
                switch(true) {
                    case currentAnswer === currentMeaning && answerInput.length === currentAnswer.length && answerInput === currentAnswer && previousRefcode !== currentRefcode:
                        previousMeaning = currentMeaning; 
                        currentWordMeaningRefcode = currentRefcode; 
                        // console.log("Great job! You answered the meaning correctly!");
                        answerFeedback.innerHTML = answerRight;
                        selectCurrentAnswer();
                        break; 

                    case currentAnswer === currentMeaning && answerInput !== currentAnswer:
                        // console.log("Aww...you got the meaning wrong. Try again!");
                        answerFeedback.innerHTML = answerWrong;
                        break;

                    case currentAnswer[0] === currentReadingRomaji && answerInput.length === currentAnswer[0].length && answerInput === currentAnswer[0] && previousRefcode !== currentRefcode:
                        previousReadingRomaji = currentReadingRomaji;
                        previousReadingKana = currentReadingKana; 
                        currentWordReadingRefcode = currentRefcode; 
                        // console.log("Great job! You answered the reading correctly!");
                        answerFeedback.innerHTML = answerRight;
                        selectCurrentAnswer();
                        break; 

                    case currentAnswer[1] === currentReadingKana && answerInput.length === currentAnswer[1].length && answerInput === currentAnswer[1] && previousRefcode !== currentRefcode:
                        previousReadingRomaji = currentReadingRomaji;
                        previousReadingKana = currentReadingKana; 
                        currentWordReadingRefcode = currentRefcode; 
                        // console.log("Great job! You answered the reading correctly!");
                        answerFeedback.innerHTML = answerRight;
                        selectCurrentAnswer();
                        break; 
    
                    case currentAnswer[0] === currentReadingRomaji && answerInput !== currentAnswer[0]:
                        // console.log("Aww...you got the meaning wrong. Try again!");
                        answerFeedback.innerHTML = answerWrong;
                        break;

                    case currentAnswer[1] === currentReadingRomaji && answerInput !== currentAnswer[1]:
                        // console.log("Aww...you got the meaning wrong. Try again!");
                        answerFeedback.innerHTML = answerWrong;
                        break;

                    case previousSelectedWords.length < 1: 
                        selectCurrentAnswer();
                        break; 

                } 
            }

            // checks if only readings are selected
            if (learningFocusBoth.checked === false && learningFocusMeanings.checked === false && learningFocusReadings.checked === true) {
                switch(true) {
                    case currentAnswer[0] === currentReadingRomaji && answerInput.length === currentAnswer[0].length && answerInput === currentAnswer[0] && previousRefcode !== currentRefcode:
                        previousReadingRomaji = currentReadingRomaji;
                        previousReadingKana = currentReadingKana; 
                        currentWordReadingRefcode = currentRefcode; 
                        // console.log("Great job! You answered the reading correctly!");
                        answerFeedback.innerHTML = answerRight;
                        selectCurrentAnswer();
                        break; 

                    case currentAnswer[1] === currentReadingKana && answerInput.length === currentAnswer[1].length && answerInput === currentAnswer[1] && previousRefcode !== currentRefcode:
                        previousReadingRomaji = currentReadingRomaji;
                        previousReadingKana = currentReadingKana; 
                        currentWordReadingRefcode = currentRefcode; 
                        // console.log("Great job! You answered the reading correctly!");
                        answerFeedback.innerHTML = answerRight;
                        selectCurrentAnswer();
                        break; 
    
                    case currentAnswer[0] === currentReadingRomaji && answerInput !== currentAnswer[0]:
                        // console.log("Aww...you got the meaning wrong. Try again!");
                        answerFeedback.innerHTML = answerWrong;
                        break;

                    case currentAnswer[1] === currentReadingRomaji && answerInput !== currentAnswer[1]:
                        // console.log("Aww...you got the meaning wrong. Try again!");
                        answerFeedback.innerHTML = answerWrong;
                        break;

                        case previousSelectedWords.length < 1: 
                        selectCurrentAnswer();
                        break; 
                }
                }

                // checks if only meanings are selected; 
                if (learningFocusBoth.checked === false && learningFocusMeanings.checked === true && learningFocusReadings.checked === false) {
                    if (currentAnswer === currentMeaning && answerInput.length === currentAnswer.length && answerInput === currentAnswer) {
                    previousMeaning = currentMeaning; 
                    selectCurrentAnswer();
                    // console.log("The meaning is correct!");
                    } else {
                        answerFeedback.innerHTML = answerWrong;
                        // console.log("Meaning's wrong! Try again!");
                    }
                }

            }

            // checks if the input is the same length or not – will automatically validate the input 
            function answerLength() {
                if (answerField.value.length === currentAnswer.length && currentAnswer === currentMeaning || answerField.value.length === currentAnswer[0].length && currentAnswer[0] === currentReadingRomaji || answerField.value.length === currentAnswer[1].length && currentAnswer[1] === currentReadingKana &&  answerField.value >= "\u3040" && answerField.value <= "\u309f" || answerField.value >= "\u30a0" && answerField.value <= "\u30ff") {
                    checkAnswer();
                }
            }

            // a toggle of additional info that may be of interest 
            function displayExtraInfo() {
                if (extraInfo.checked === true) {
                    wordInfo.innerHTML = 
                    `
                        <div id="extra-info-card" class="flex space-around">
                            <div class="column1">
                                <p>
                                    <span class="bold red-text">Type</span><br />
                                    <span class="font-light padding-left-22">${currentType}</span>
                                </p>

                                <p>
                                    <span class="bold red-text">Alternate Meanings</span><br />
                                    <span class="font-light padding-left-22">${currentAlternateMeanings}</span>
                                </p>

                                <p>
                                    <span class="bold red-text">Alternate Readings</span><br />
                                    <span class="font-light padding-left-22">${currentAlternateReadings}</span>
                                </p>
                            </div>

                            <div class="column2">
                                <p>
                                    <span class="bold red-text">Nuance Notes</span><br />
                                    <span class="font-light padding-left-22">${currentNuanceNotes}</span>
                                </p>

                                <p>
                                    <span class="bold red-text">Other Notes</span><br />
                                    <span class="font-light padding-left-22">${currentOtherNotes}</span>
                                </p>

                                <p>
                                    <span class="bold red-text">Refcode</span><br />
                                    <span class="font-light padding-left-22">${currentRefcode}</span>
                                </p>
                            </div>
                        </div>

                    ` 
                } else {
                    wordInfo.innerHTML = "";
                }
            }

            // display answer(s)
            function displayAnswer() {
                if (currentAnswer[0] === currentReadingRomaji || currentAnswer[0] === currentReadingKana) {
                    answerHover.innerHTML = currentAnswer[0].toLowerCase() + ' <span class="red-text">OR</span> ' + currentAnswer[1].toLowerCase();
                } else if (currentAnswer === currentMeaning){
                    answerHover.textContent = currentAnswer.toLowerCase();
                } 
            }

            // hide displayed answer(s)
            function hideAnswer() {
                answerHover.textContent = "";
            }

            // filters based on current targeted radio button 
            function filterWordType(e) {
            // console.log(e.currentTarget.value)
            for (let i = 0; i < wordList.length; i++) {
                let miniCard = document.getElementById(`card-${wordList[i].refcode}`);
                // console.log("Current mini card reference code is" + wordList[i].refcode);
                // console.log(miniCard);
                if (wordList[i].type.includes(e.currentTarget.value)) {
                    miniCard.classList.remove('hide');
                    // console.log("Mini card" + wordList[i].word + "is no longer hidden!")
                } else {
                        miniCard.classList.add('hide')
                        // console.log("Mini card" + wordList[i].word + "is hidden!")
                        } 
            }

            if (selectAll.checked === true) {
                selectAllWords();
            }

            // console.log('The current target value is ' + e.currentTarget.value);
            }

            // shows all options
                function filterAll() {
                // removes the .hide class from everything
                for (let i = 0; i < wordList.length; i++) {
                    let miniCard = document.getElementById(`card-${wordList[i].refcode}`);
                    miniCard.classList.remove('hide');
                }

                if (selectAll.checked === true) {
                    selectAllWords();
                }
                }

            // select all checkboxes for words
            function selectAllWords() {
                // console.log("Select All has been checked!")
                for (let i = 0; i < wordSelection.length; i++) {
                    let miniCard = document.getElementById(`card-${wordList[i].refcode}`);
                    if (selectAll.checked === true) {
                        wordSelection[i].checked = true;
                        if (miniCard.classList.contains('hide')) {
                            wordSelection[i].checked = false;
                        }
                    } else if (selectAll.checked === false) {
                        wordSelection[i].checked = false;
                        selectWordType();
                    }
                    grabSelectedWords();
                }
            }

        // select checkboxes for words by a certain type
        function selectWordType() {
                for (let i = 0; i < wordSelection.length; i++) {
                    wordSelection[i].checked = false;
                }

            for (let i = 0; i < selectByWordType.length; i++) {
                    if (selectByWordType[i].checked === true) {
                        // console.log(selectByWordType[i].value + " is checked!");
                        for (let j = 0; j < wordList.length; j++) {
                            if (wordList[j].type.includes(selectByWordType[i].value)) {
                                wordSelection[j].checked = true;
                                // console.log(wordList[j].word + ", " + wordList[j].type);
                                // console.log(wordSelection[j].checked);
                                // console.log("This is true.")
                            }
                        }
                    } 
            }

            grabSelectedWords();

            }

            function displayRandomizeAnswersOption() {
                if (learningFocusMeanings.checked === true || learningFocusReadings.checked === true) {
                    randomizationAnswers.classList.remove('show-inline');
                    randomizationAnswersLabel.classList.remove('show-inline');
                    randomizationAnswers.classList.add('hide');
                    randomizationAnswersLabel.classList.add('hide');
                } else if (learningFocusBoth.checked === true) {
                    randomizationAnswers.classList.remove('hide');
                    randomizationAnswersLabel.classList.remove('hide');
                    randomizationAnswers.classList.add('show-inline');
                    randomizationAnswersLabel.classList.add('show-inline');
                }

                // console.log('Randomize Answer Display fired.')

            }

            // ----------- EVENT LISTENERS ----------- 

            // load wordlists
            tkList1.addEventListener('click', loadJSONData);
            genki.addEventListener('click', loadJSONData);

            // Load the mini selection cards 
            // wordSelectionBtn.addEventListener('click', loadSelectWordCards);

            // show/hide random answer toggle 
            learningFocusBoth.addEventListener('click', displayRandomizeAnswersOption);
            learningFocusReadings.addEventListener('click', displayRandomizeAnswersOption);
            learningFocusMeanings.addEventListener('click', displayRandomizeAnswersOption);

            // load word options 
            wordSelection.addEventListener('click', grabSelectedWords);

            // load data
            extraInfo.addEventListener('click', displayExtraInfo);

            // answer display toggle
            vocabWord.addEventListener('mouseenter', displayAnswer);
            vocabWord.addEventListener('mouseleave', hideAnswer);

            // font selection
            fontSelectAll.addEventListener('click', selectAllFonts);
            fontNotoSans.addEventListener('click', currentlySelectedFonts);
            fontNotoSerif.addEventListener('click', currentlySelectedFonts);
            fontMPlusRounded.addEventListener('click', currentlySelectedFonts);
            fontMPlus.addEventListener('click', currentlySelectedFonts);
            fontYukiMai.addEventListener('click', currentlySelectedFonts);
            fontSawarabiGothic.addEventListener('click', currentlySelectedFonts);
            fontKosugiMaru.addEventListener('click', currentlySelectedFonts);
            fontZenAntique.addEventListener('click', currentlySelectedFonts);
            fontZenOldMincho.addEventListener('click', currentlySelectedFonts);
            fontShipporiMincho.addEventListener('click', currentlySelectedFonts);
            fontZenKurenaido.addEventListener('click', currentlySelectedFonts);
            fontDeltaGothicOne.addEventListener('click', currentlySelectedFonts);
            fontRocknRollOne.addEventListener('click', currentlySelectedFonts);
            fontDotGothic16.addEventListener('click', currentlySelectedFonts);
            fontYuseiMagic.addEventListener('click', currentlySelectedFonts);
            fontNewTegomin.addEventListener('click', currentlySelectedFonts);
            fontRampartOne.addEventListener('click', currentlySelectedFonts);
            fontReggaeOne.addEventListener('click', currentlySelectedFonts);
            fontMochiyPopOne.addEventListener('click', currentlySelectedFonts);
            fontKaiseiTokumin.addEventListener('click', currentlySelectedFonts);
            fontBizUdpmincho.addEventListener('click', currentlySelectedFonts);
            fontPottaOne.addEventListener('click', currentlySelectedFonts);
            fontKaiseiOpti.addEventListener('click', currentlySelectedFonts);
            fontHachiMaruPop.addEventListener('click', currentlySelectedFonts);
            fontYujiSyuku.addEventListener('click', currentlySelectedFonts);
            fontShipporiAntiqueB1.addEventListener('click', currentlySelectedFonts);
            fontYujiBoku.addEventListener('click', currentlySelectedFonts);

            // filter words 
            filterAllWords.addEventListener('click', filterAll);
            filterNouns.addEventListener('click', filterWordType);
            filterPronouns.addEventListener('click', filterWordType);
            filterVerbs.addEventListener('click', filterWordType);
            filterIchidanVerbs.addEventListener('click', filterWordType);
            filterGodanVerbs.addEventListener('click', filterWordType);
            filterSuruVerbs.addEventListener('click', filterWordType);
            filterTransitiveVerbs.addEventListener('click', filterWordType);
            filterIntransitiveVerbs.addEventListener('click', filterWordType);
            filterAuxiliaryVerbs.addEventListener('click', filterWordType);
            filterAdjectives.addEventListener('click', filterWordType);
            filterIAdjectives.addEventListener('click', filterWordType);
            filterNaAdjectives.addEventListener('click', filterWordType);
            filterAuxiliaryAdjectives.addEventListener('click', filterWordType);
            filterAdverbs.addEventListener('click', filterWordType);
            filterConjunctions.addEventListener('click', filterWordType);
            filterExpressions.addEventListener('click', filterWordType);
            filterInterjections.addEventListener('click', filterWordType);
            filterCopulas.addEventListener('click', filterWordType);
            filterParticles.addEventListener('click', filterWordType);
            filterCounters.addEventListener('click', filterWordType);
            filterPrefixes.addEventListener('click', filterWordType);
            filterSuffixes.addEventListener('click', filterWordType);

            // selecting words 
            selectAll.addEventListener('click', selectAllWords);
            selectNouns.addEventListener('click', selectWordType);
            selectPronouns.addEventListener('click', selectWordType);
            selectVerbs.addEventListener('click', selectWordType);
            selectIchidanVerbs.addEventListener('click', selectWordType);
            selectGodanVerbs.addEventListener('click', selectWordType);
            selectSuruVerbs.addEventListener('click', selectWordType);
            selectTransitiveVerbs.addEventListener('click', selectWordType);
            selectIntransitiveVerbs.addEventListener('click', selectWordType);
            selectAuxiliaryVerbs.addEventListener('click', selectWordType);
            selectAdjectives.addEventListener('click', selectWordType);
            selectIAdjectives.addEventListener('click', selectWordType);
            selectNaAdjectives.addEventListener('click', selectWordType);
            selectAuxiliaryAdjectives.addEventListener('click', selectWordType);
            selectAdverbs.addEventListener('click', selectWordType);
            selectConjunctions.addEventListener('click', selectWordType);
            selectExpressions.addEventListener('click', selectWordType);
            selectInterjections.addEventListener('click', selectWordType);
            selectCopulas.addEventListener('click', selectWordType);
            selectParticles.addEventListener('click', selectWordType);
            selectCounters.addEventListener('click', selectWordType);
            selectPrefixes.addEventListener('click', selectWordType);
            selectSuffixes.addEventListener('click', selectWordType);

            // reset settings
            settingsReset.addEventListener('click', resetSettings);
            wordSelectionReset.addEventListener('click', wordListOptionsReset);

            // start quiz 
            learnBtn.addEventListener('click', selectCurrentWord);


            // answer validation 
            answerField.addEventListener('input', answerLength);

       
            // prevent default behaviors. may also have addition functions as well 
            document.getElementById('check').addEventListener("click", function(event){
                event.preventDefault();
                checkAnswer();
            }); 
            
            // may delete later or else store the document.getElementById in a variable
        