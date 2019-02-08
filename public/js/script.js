window.onload = function() {
    var answers = document.getElementById("answers");
    var btnGuess = document.querySelectorAll(".btn-guess");
    var btnMoveNoteUp = document.getElementById("move-note-up");
    var btnMoveNoteDown = document.getElementById("move-note-down");
    var div = document.createElement("div");

    var notePositions = ["note-a", "note-b", "note-c", "note-d", "note-e", "note-f", "note-g"];
    var notesBass = ["A", "B", "C", "D", "E", "F", "G"];
    var randomNote = Math.floor(Math.random() * (notePositions.length -1));

    document.getElementById("note").classList.toggle(notePositions[randomNote]);

    for (var i = 0; i < btnGuess.length; i++) {
        btnGuess[i].addEventListener('click', function() {
            div.innerHTML = (this.textContent);
            div.className = "answer-box";
            div.style.marginLeft = "95px";
            if (this.textContent == notesBass[randomNote]) {
                div.style.backgroundColor = "green";
            } else {
                div.style.backgroundColor = "red";
            };
            answers.appendChild(div);
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