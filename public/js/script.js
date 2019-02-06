window.onload = function() {
    var btnMoveNoteUp = document.getElementById("move-note-up");
    var btnMoveNoteDown = document.getElementById("move-note-down");
    
    var noteArray = ["note-a", "note-b", "note-c", "note-d", "note-e", "note-f", "note-g"];
    var i = 3

    document.getElementById("note").classList.toggle(noteArray[i]);


    
    btnMoveNoteUp.addEventListener("click", function() {
        moveNoteUp();
    });

    btnMoveNoteDown.addEventListener("click", function() {
        moveNoteDown();
    });


    function moveNoteUp() {
        if (i != 6) {
            var currentNote = i;
            i ++;
            var nextNote = i;

            document.getElementById("note").classList.toggle(noteArray[currentNote]);
            document.getElementById("note").classList.toggle(noteArray[nextNote]);
        }
    }

    function moveNoteDown() {
        if (i != 0) {
            var currentNote = i;
            i --;
            var nextNote = i;

            document.getElementById("note").classList.toggle(noteArray[currentNote]);
            document.getElementById("note").classList.toggle(noteArray[nextNote]);
        }
    }
    
}