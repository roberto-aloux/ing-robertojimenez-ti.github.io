const cursor = document.getElementById("cursor-blink");
const changeling = document.getElementById("changeling");
const wordArray = [
    'Diseñador y Desarrollador Web Front-end',
    'Ingeniero en Tecnologías de la Información'
];
var wordIndex = 0;
var letterIndex = 0;
var displayString = '';
var wordComplete = false;
var wordTypeInterval = 125;
var timeDelayRounds = 15;

function typeWord() {
    var currentWord = wordArray[wordIndex];
    if (!wordComplete) { // begin writing word
        if (letterIndex < currentWord.length) {
            displayString += currentWord[letterIndex];
            changeling.innerHTML = displayString;
            letterIndex++;
        } // this 'else if' is here to waste time so there
        // is some delay before the word is erased
        else if (letterIndex < currentWord.length + timeDelayRounds) {
            letterIndex++;
        } else {
            letterIndex -= timeDelayRounds; // makes up for wasted time
            wordComplete = true;
        }
    } else { // begin deleting word
        if (letterIndex > 0) {
            displayString = displayString.slice(0, letterIndex - 1);
            changeling.innerHTML = displayString;
            letterIndex--;
        } else { // once word is deleted, go to next word
            wordComplete = false;
            if (wordIndex === wordArray.length - 1) {
                wordIndex = 0;
            } else {
                wordIndex++;
            }
        }
    }
}

function cursorBlink() {
    if (cursor.style.opacity === '0') {
        cursor.style.opacity = '1';
    } else {
        cursor.style.opacity = '0';
    }
}

setInterval(cursorBlink, 500);
setInterval(typeWord, wordTypeInterval);