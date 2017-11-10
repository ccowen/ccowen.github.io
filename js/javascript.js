// -------------------------- draggable --------------------------
var i = 1;

function newDraggable() {
    console.log("newDraggable");
    $(".expressions").draggable({
        axis: "y",
        helper: "clone",
        containment: "parent"
    }).on('dragstart', function (e, ui) {
        $(ui.helper).css('z-index','auto');
        $(ui.helper).attr('class', 'expressions expressions' + i);
        console.log(i);        
    }).on('dragstop', function (e, ui) {
        var expressions = $(this).after($(ui.helper).clone());
        i++;
        if (i == 6){
            i = 0;
        }
        console.log(i);
        newDraggable(expressions);
    });
}

$(document).ready( function () {
    $(".expressions").each( function (i) {
        console.log("test");
        newDraggable(this);
    });
});


// --------------------- modal -----------------------------------

window.onload = function(){ 
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("instructionsBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-mycss")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};