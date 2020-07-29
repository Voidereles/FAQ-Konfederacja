function headerChangePlace() {
    if ((window.innerWidth) < 380) {
        $('.header--subpages .header__h1').prependTo('.navbar-collapse .row');
    } else {
        $('.header--subpages .header__h1').appendTo('.navbar');
        $('.header--subpages .navbar-toggler').appendTo('.navbar');

    }
    if ((window.innerWidth) <= 992) {
        $('.header--subpages .navbar-collapse').appendTo('.navbar');
    } else {
        $('.header--subpages .navbar-collapse').prependTo('.navbar');
        $('.header--subpages .navbar-brand').prependTo('.navbar');
    }
}


$(document).ready(function () {
    window.onresize = function () {
        headerChangePlace();
    }

    headerChangePlace();
    headerOnScroll();

});


function headerOnScroll() {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;

        if (this.window.pageYOffset > 105) {


            if (prevScrollpos > currentScrollPos) {
                document.getElementById("headerSubpages").style.top = "0";
            } else {
                document.getElementById("headerSubpages").style.top = "-145px";
            }

            prevScrollpos = currentScrollPos;
        }
    }
}