window.onload = function() {
    var answerMargin = 80;
    var answersDiv = document.getElementById("answers");
    var btnGuess = document.querySelectorAll(".btn-guess");
    var btnMoveNoteUp = document.getElementById("move-note-up");
    var btnMoveNoteDown = document.getElementById("move-note-down");
    var cleff = "bass";
    var currentNote = 0;
    var notesDiv = document.getElementById("notes");

    var notePositions = ["pos-1", "pos-2", "pos-3", "pos-4", "pos-5", "pos-6", "pos-7"];
    var notes = [];
    var notesBass = ["A", "B", "C", "D", "E", "F", "G"];

    createNotes(4);

    function createNotes(numNotes) {
        var margin = 80;
        for (var i = 0; i < numNotes; i++) {
            var div = document.createElement("div");
            var randomNote = Math.floor(Math.random() * (notePositions.length -1));
            if (cleff == "bass") {
                notes.push(notesBass[randomNote]);
            }
            div.innerHTML += '<img class="note ' + notePositions[randomNote] + ' " src="public/img/note_quarter.svg" alt="Quarter Note"></img>';
            div.style.marginLeft = margin + "px";
            notesDiv.appendChild(div);
            margin += 40;
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
                answersDiv.appendChild(div);
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
        if (randomNote != 6) {
            var currentNote = randomNote;
            randomNote ++;
            var nextNote = randomNote;

            document.getElementById("note").classList.toggle(notePositions[currentNote]);
            document.getElementById("note").classList.toggle(notePositions[nextNote]);
        }
    }

    function moveNoteDown() {
        if (randomNote != 0) {
            var currentNote = randomNote;
            randomNote --;
            var nextNote = randomNote;

            document.getElementById("note").classList.toggle(notePositions[currentNote]);
            document.getElementById("note").classList.toggle(notePositions[nextNote]);
        }
    }
    
}