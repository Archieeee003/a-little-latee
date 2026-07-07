const sky = document.getElementById("sky");

// ======================
// Sparkles
// ======================

for(let i = 0; i < 50; i++){

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";

    sparkle.style.animationDuration =
        (1 + Math.random() * 3) + "s";

    sky.appendChild(sparkle);

}

// ======================
// Elements
// ======================

const finalSky = document.getElementById("finalSky");
const ending = document.getElementById("ending");
const endingText = document.getElementById("endingText");
const lookUpButton = document.getElementById("lookUpButton");
const cover = document.getElementById("cover");
const story = document.getElementById("story");

const openBook = document.getElementById("openBook");
const nextPage = document.getElementById("nextPage");


const chapterNumber = document.querySelector(".chapter-number");
const chapterTitle = document.querySelector(".chapter-title");
const storyText = document.getElementById("storyText");
const pageNumber = document.getElementById("pageNumber");


// ======================
// Chapters
// ======================

const chapters = [

{

number:"Chapter One",

title:"The Beginning",

lines:[

"Hello, Micah.",

"",

"Happy belated birthday. 💙",

"",

"I know...",

"",

"this isn't just",

"\"a little late.\"", 

"",

"At this point...",

"",

"it's almost",

"two weeks late.",

"",

"But instead of",

"sending only a message...",

"",

"I wanted to make",

"something just for you.",

"",

"So...",

"",

"Welcome",

"to your little story."

]

},

{

number:"Chapter Two",

title:"A Small Confession",

lines:[

"I really planned",

"to greet you",

"on time.",

"",

"But...",

"",

"I kept putting it off.",

"",

"Not because",

"I forgot.",

"",

"Actually...",

"",

"I was a little shy.",

"",

"I felt like",

"a birthday greeting",

"should come with",

"something more",

"than just words.",

"",

"Then I realized...",

"",

"Maybe...",

"",

"this could be",

"my gift",

"for you."

]

},

{

number:"Chapter Three",

title:"Don't Forget",

lines:[

"There are",

"a few things",

"",

"I've noticed",

"about you.",

"",

"Not the big things.",

"",

"The little things.",

"",

"The way",

"you enjoy reading.",

"",

"The way",

"you faithfully serve.",

"",

"The way",

"you bring joy",

"to the people",

"around you.",

"",

"Those things",

"always remind me",

"",

"that God",

"is continually",

"working in you.",

"",

"So if one day...",

"",

"life feels heavy,",

"",

"or you begin",

"to question",

"your worth...",

"",

"I hope",

"you remember this:",

"",

"Your value",

"has never been",

"found in what",

"you achieve...",

"",

"or in what",

"others think",

"about you.",

"",

"Your value",

"has always been",

"found in Christ.",

"",

"And because of Him...",

"",

"you have always",

"been deeply loved."

]

},

{

number:"Chapter Four",

title:"A Quiet Reminder",

lines:[

"Whenever I look",

"up at the sky...",

"",

"I'm reminded",

"",

"that every new day",

"is another reminder",

"of God's faithfulness.",

"",

"No matter",

"what yesterday",

"looked like...",

"",

"His mercy",

"is new",

"every morning.",

"",

"My prayer",

"for you",

"is that this year",

"",

"you'll continue",

"to walk closely",

"with Him,",

"",

"trust Him,",

"",

"and find your joy",

"in Him.",

"",

"Because with Him...",

"",

"every new day",

"is filled",

"with hope."

]

},

{

number:"Chapter Five",

title:"A Prayer",

lines:[

"My prayer",

"for you",

"is simple.",

"",

"May you",

"continue",

"to grow",

"in your love",

"for Christ.",

"",

"May He",

"guide you",

"when life",

"feels uncertain.",

"",

"Give you peace",

"when life",

"feels overwhelming.",

"",

"Give you wisdom",

"in every decision.",

"",

"And may",

"everything you do...",

"",

"whether big",

"or small...",

"",

"always bring",

"glory",

"to Him."

]

},

{

number:"The Last Page",

title:"Thank You",

lines:[

"If you've made it",

"to this last page...",

"",

"Thank you.",

"",

"Thank you",

"for spending",

"a little time",

"reading",

"this story.",

"",

"I hope",

"it made you smile.",

"",

"More importantly...",

"",

"I hope",

"it reminded you",

"",

"how deeply",

"you are loved",

"by God.",

"",

"I may not have had",

"a wrapped present...",

"",

"But I hope",

"this little story",

"made you feel",

"celebrated.",

"",

"Happy Belated Birthday,",

"Micah.",

"",

"May the Lord",

"continue",

"to bless you,",

"keep you,",

"and remind you",

"every day",

"that your identity",

"is found",

"in Him.",

"",

"With love",

"in Christ,",

"",

"— Archie"

]

}

];

// ======================

let currentChapter = 0;

// ======================

function typeText(text, callback){

    let index = 0;

    function typeCharacter(){

        if(index < text.length){

            storyText.innerHTML += text.charAt(index);

            let delay = 40;

            const currentChar = text.charAt(index);

            if(currentChar === "," || currentChar === ";"){

                delay = 180;

            }else if(currentChar === "." ||
                     currentChar === "!" ||
                     currentChar === "?"){

                delay = 350;

            }

            index++;

            setTimeout(typeCharacter, delay);

        }else{

            storyText.innerHTML += "<br>";

            setTimeout(callback, 500);

        }

    }

    typeCharacter();

}


function typeChapter(){

    storyText.innerHTML = "";

    document.querySelector(".book").scrollTop = 0;

    nextPage.style.display = "none";

    chapterNumber.textContent =
        chapters[currentChapter].number;

    chapterTitle.textContent =
        chapters[currentChapter].title;

    pageNumber.textContent =
        "Page " + (currentChapter + 1);

    let line = 0;

    function writeLine(){

        if(line >= chapters[currentChapter].lines.length){

            setTimeout(() => {

            nextPage.style.display = "inline-block";
            nextPage.disabled = false;

            },1000);

            return;

        }

        typeText(chapters[currentChapter].lines[line], () => {

            line++;

            writeLine();

        });

}

writeLine();

}

// ======================

openBook.onclick = () => {

    cover.style.display = "none";

    story.style.display = "block";

    typeChapter();

};

nextPage.onclick = () => {

    const book = document.querySelector(".book");

    nextPage.disabled = true;

    book.classList.add("fade");

    setTimeout(() => {

        if(currentChapter < chapters.length - 1){

            currentChapter++;

            typeChapter();

            book.classList.remove("fade");

        }else{

            closeBook();

        }

    },350);

};

function closeBook(){

    story.style.display = "none";

    ending.style.display = "flex";

    endingText.innerHTML = "";

    const messages = [

        "Before you go...",

        "I have one last thing.",

        "Thank you\nfor being you.",

        "Never forget...\n\nyour identity\nhas always been\nfound in Christ."

    ];

    let current = 0;

    function showMessage(){

        if(current >= messages.length){

            lookUpButton.style.display = "inline-block";

            return;

        }

        endingText.innerHTML = messages[current];

        current++;

        setTimeout(showMessage, 2500);

    }

    showMessage();

}

function closeBook(){

    story.style.display = "none";

    ending.style.display = "flex";

    endingText.innerHTML = "";

    lookUpButton.style.display = "none";

    const messages = [

        "Before you leave...",

        "I have one last thing.",

        "Thank you\nfor reading this little story.",

        "Never forget...\n\nYour identity\nhas always been\nfound in Christ."

    ];

    let current = 0;

    function nextMessage(){

        if(current >= messages.length){

            lookUpButton.style.display = "inline-block";
            return;

        }

        endingText.innerHTML = messages[current];

        current++;

        setTimeout(nextMessage, 2200);

    }

    nextMessage();

}

lookUpButton.onclick = () => {

    ending.classList.add("fadeOut");

    setTimeout(() => {

        ending.style.display = "none";

        finalSky.classList.add("show");

    },1500);

};