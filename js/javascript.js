// -------------------------- draggable --------------------------
var i = 1;

function newDraggable() {
    console.log("newDraggable");
    $(".expressions").draggable({
        axis: "y",
        helper: "clone",
        containment: "parent"
    }).on('dragstart', function(e, ui) {
        $(ui.helper).css('z-index', 'auto');
        $(ui.helper).attr('class', 'expressions expressions' + i);
        console.log(i);
    }).on('dragstop', function(e, ui) {

        var expressions = $(this).after($(ui.helper).clone());
        i++;
        if (i == 6) {
            i = 0;
        }
        console.log(i);
        newDraggable(expressions);
    });
}

$(document).ready(function() {
    $(".expressions").each(function(i) {
        console.log("test");
        newDraggable(this);
    });
});


// --------------------- modal -----------------------------------

window.onload = function() {
    // Get the modal
    var modal = document.getElementById('instructionsModal');

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

    // second modal ------------------------
    // Get the modal
    var modal2 = document.getElementById('infoModal');

    // Get the button that opens the modal
    var btn2 = document.getElementById("infoBtn");

    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close2-mycss")[0];

    // When the user clicks on the button, open the modal 
    btn2.onclick = function() {
        modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
        modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
};

// --------------------- hello -----------------------------------

function helloClassTimeout(i) {
    var factor = (i % 5);
    var lastFactor;
    if (factor == 0) {
        lastFactor = 4;
    } else {
        lastFactor = (factor - 1);
    }
    $("#helloLetter" + [factor]).addClass("helloLetterColor");
    $("#helloLetter" + [lastFactor]).removeClass("helloLetterColor");
};

for (var x = 0; x < 1500; x++) {
  (function (x) {
    setTimeout(function () {
      helloClassTimeout(x);
    }, 800*x);
  })(x);
};
