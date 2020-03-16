$(document).ready(function() {
    let opts = {
            lines: 13,
            length: 28,
            width: 14,
            radius: 42,
            scale: 1,
            corners: 1,
            color: "#FFF",
            opacity: 0.25,
            rotate: 0,
            direction: 1,
            speed: 1,
            trail: 60,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "50%",
            left: "50%",
            shadow: false,
            hwaccel: true,
            position: "absolute"
        },
        target = document.getElementById("spinner"),
        spinner = new Spinner(opts).spin(target);

    // During loading, the content and sidebar don't appear
    $(".container").css({
        display: "none"
    });

    $(".sidebar").css({
        display: "none"
    });

    $("header").css({
        display: "none"
    });
    $(".menu-mobile").css({
        display: "none"
    });

    // After loading, appears the content and the sidebar
    setTimeout(function() {
        $("#spinner").css({
            display: "none"
        });
        $(".container").css({
            display: "block"
        });
        $(".sidebar").css({
            display: "block"
        });
        $("header").css({
            display: "block"
        });
        if (isMobile()) {
            $(".menu-mobile").css({
                display: "block"
            });
        }
    }, 2000);

});


function isMobile() {
    widthWindows = $(window).width();
    if (widthWindows < 1024) {
        return true;
    }
}