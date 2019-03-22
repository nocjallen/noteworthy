// Variable Declarations
var answerMargin = 20;
var answered = 0;
var answersDivs = document.querySelectorAll(".answers");
var btnChangeCleff = document.getElementById("btn-change-cleff");
var btnCleffTreble = document.getElementById("a-cleff-treble");
var btnCleffBass = document.getElementById("a-cleff-bass");
var btnContinue = document.getElementById("btn-continue");
var btnGuess = document.querySelectorAll(".btn-guess");
var btnMoveNoteUp = document.getElementById("move-note-up");
var btnMoveNoteDown = document.getElementById("move-note-down");
var cleff = "bass";
var correct = 0;
var currentNote = 0;
var devNote = document.getElementById("dev-note");
var devNotePos = 3;
var idChangeCleff = document.getElementById("change-cleff");
var modalContentDiv = document.getElementById("modal-content")
var modalDiv = document.getElementById("modal-overlay");
var noteDivs = document.querySelectorAll(".notes");
var notes = [];
const notesBass = [['pos-1', 'A'],['pos-2', 'B'],['pos-3', 'C'],['pos-4', 'D'],['pos-5', 'E'],['pos-6', 'F'],['pos-7', 'G']];
const notesTreble = [['pos-1', 'F'],['pos-2', 'G'],['pos-3', 'A'],['pos-4', 'B'],['pos-5', 'C'],['pos-6', 'D'],['pos-7', 'E']];
var signatureDiv = document.getElementById("signature");
//devNote.classList.toggle(notesBass[devNotePos][0]);

addCleff();
createNotes();

// DOM Elements
btnChangeCleff.addEventListener("click", function() {
    idChangeCleff.classList.toggle("visible");
})

btnCleffBass.addEventListener("click", function() {
    cleff = "bass";
    removeCleff();
    addCleff();
    cleanUp();
    createNotes();
})

btnCleffTreble.addEventListener("click", function() {
    cleff = "treble";
    removeCleff();
    addCleff();
    cleanUp();
    createNotes();
})

btnContinue.addEventListener("click", function() {
    cleanUp();
    createNotes();
    modalDiv.classList.toggle("visible");
})

//btnMoveNoteUp.addEventListener("click", function() {
//  moveNote("Up");
//});

//btnMoveNoteDown.addEventListener("click", function() {
//    moveNote("Down");
//});

window.onclick = function(event) {
    if (!event.target.matches('.btn-change-cleff')) {
        if (idChangeCleff.classList.contains('visible')) {
            idChangeCleff.classList.toggle("visible");     
        }   
    }
}

for (var i = 0; i < btnGuess.length; i++) {
    btnGuess[i].addEventListener('click', function() {
        if (currentNote < notes.length) {
            var div = document.createElement("div");
            div.innerHTML = (this.textContent);
            div.className = "answer-box";
            
            if (this.textContent == notes[currentNote]) {
                div.style.backgroundColor = "a1de93";
                correct ++;
            }
            else {
                div.style.backgroundColor = "f47c7c";
            }

            if (answerMargin == 180){
                answerMargin = 20;
            }

            div.style.marginLeft = answerMargin + "px";

            if (answered <= 3) {
                answersDivs[0].appendChild(div);
            }
            else {
                answersDivs[1].appendChild(div);
            }

            answered ++;
            answerMargin += 40;
            currentNote ++;
            if (answered == 8) {
                modalContentDiv.innerHTML = "You answered " + correct + " of " + answered + " notes correctly."
                modalDiv.classList.toggle("visible");
            }
        }
    })
}

// Functions
function addCleff() {
    var div = document.createElement("div");
    if (cleff == "bass") {
        div.innerHTML += '<img id="cleff" class="cleff-bass" src="public/img/cleff_bass.svg" alt="Bass Cleff"></img>';
    }

    if (cleff =="treble") {
        div.innerHTML += '<img id="cleff" class="cleff-treble" src="public/img/cleff_treble.svg" alt="Treble Cleff"></img>';
    }
    signatureDiv.prepend(div);
}

function cleanUp() {
    var currentAnswers = document.querySelectorAll(".answer-box");
    for (var i = 0; i < currentAnswers.length; i++) {
        console.log("Removing: " + currentAnswers[i]);
        var element = currentAnswers[i];
        element.parentNode.removeChild(element);
    }

    var currentNotes = document.querySelectorAll(".note");
    for (var i = 0; i < currentNotes.length; i++) {
        console.log("Removing: " + currentNotes[i]);
        var element = currentNotes[i];
        element.parentNode.removeChild(element);
    }
}

function createNotes() {
    answerMargin = 20;
    answered = 0;
    correct = 0;
    currentNote = 0;
    notes = [];
    for (var noteDiv = 0; noteDiv < noteDivs.length; noteDiv++) {
        var margin = 20;
        var noteChoices = [];

        if (cleff == "bass") {
            for (var i = 0; i < notesBass.length; i++) {
                noteChoices.push(notesBass[i]);
            }
        }

        if (cleff == "treble") {
            for (var i = 0; i < notesTreble.length; i++) {
                noteChoices.push(notesTreble[i]);
            }
        }

        for (var i = 0; i < 4; i++) {
            var div = document.createElement("div");
            var randomNote = Math.floor(Math.random() * (noteChoices.length -1));
            notes.push(noteChoices[randomNote][1]);
            div.innerHTML += '<img class="note ' + noteChoices[randomNote][0] + ' " src="public/img/note_quarter.svg" alt="Quarter Note"></img>';
            div.style.marginLeft = margin + "px";
            noteDivs[noteDiv].appendChild(div);
            margin += 40;
            noteChoices.splice(randomNote, 1);
        }
    }
}

function moveNote(direction) {
    devNote.classList.toggle(notesBass[devNotePos][0]);

    if (direction == "Up") {
        if (devNotePos != 6) {
            devNotePos ++;
        }
    }

    if (direction =="Down") {
        if (devNotePos != 0) {
            devNotePos --;
        }
    }

    devNote.classList.toggle(notesBass[devNotePos][0]);
}

function removeCleff() {
    if (document.getElementById("cleff")) {
        var element = document.getElementById("cleff");
        element.parentNode.removeChild(element);
    }
}