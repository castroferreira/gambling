filterSelection("all");

function filterSelection(c) {

    isGame = $(".filterDiv div").hasClass(c);

    if (c == "all") {

        $(".filterDiv").addClass("show");
        $(".filterDiv").removeClass("none");

    } else {
        if (isGame) {

            $(".filterDiv").removeClass("show");
            $(".filterDiv").addClass("none");

            $("." + c).parent().addClass("show");
            $("." + c).parent().removeClass("none");
        }
    }
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}