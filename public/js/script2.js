var answerMargin = 20;
var answersOneDiv = document.getElementById("answers-one");
var btnGuess = document.querySelectorAll(".btn-guess");
var btnMoveNoteUp = document.getElementById("move-note-up");
var btnMoveNoteDown = document.getElementById("move-note-down");
var cleff = "bass";
var currentNote = 0;
var devNote = document.getElementById("dev-note");
var devNotePos = 3;
var notes = [];
const notesBass = [['pos-1', 'A'],['pos-2', 'B'],['pos-3', 'C'],['pos-4', 'D'],['pos-5', 'E'],['pos-6', 'F'],['pos-7', 'G']];
var barOneDiv = document.getElementById("bar-one");
var barTwoDiv = document.getElementById("bar-two");
var notesDiv = document.getElementById("notes");

devNote.classList.toggle(notesBass[devNotePos][0]);

createNotes(4);

function createNotes(numNotes) {
    var margin = 20;
    var noteChoices = [];
    for (var i = 0; i < notesBass.length; i++) {
        noteChoices.push(notesBass[i]);
    }
    for (var i = 0; i < numNotes; i++) {
        var div = document.createElement("div");
        var randomNote = Math.floor(Math.random() * (noteChoices.length -1));
        if (cleff == "bass") {
            notes.push(noteChoices[randomNote][1]);
        }
        div.innerHTML += '<img class="note ' + noteChoices[randomNote][0] + ' " src="public/img/note_quarter.svg" alt="Quarter Note"></img>';
        div.style.marginLeft = margin + "px";
        barOneDiv.appendChild(div);
        margin += 40;
        noteChoices.splice(randomNote, 1);
    }
}

console.log(notes);

for (var i = 0; i < btnGuess.length; i++) {
    btnGuess[i].addEventListener('click', function() {
        if (currentNote < notes.length) {
            var div = document.createElement("div");
            div.innerHTML = (this.textContent);
            div.className = "answer-box";
            div.style.marginLeft = answerMargin + "px";
            if (this.textContent == notes[currentNote]) {
                div.style.backgroundColor = "green";
            } else {
                div.style.backgroundColor = "red";
            };
            answersOneDiv.appendChild(div);
            answerMargin += 40;
            currentNote += 1;
        }
    });
}

btnMoveNoteUp.addEventListener("click", function() {
    moveNoteUp();
});

btnMoveNoteDown.addEventListener("click", function() {
    moveNoteDown();
});


function moveNoteUp() {
    if (devNotePos != 6) {
        devNote.classList.toggle(notesBass[devNotePos][0]);
        devNotePos ++;
        devNote.classList.toggle(notesBass[devNotePos][0]);
    }
}

function moveNoteDown() {
    if (devNotePos != 0) {
        devNote.classList.toggle(notesBass[devNotePos][0]);
        devNotePos --;
        devNote.classList.toggle(notesBass[devNotePos][0]);
    }
}