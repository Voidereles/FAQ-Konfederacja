new WOW().init();

$(".owl-categories").owlCarousel({
    autoplayHoverPause: true,
    loop: true,
    nav: false,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    margin: 16,
    responsive: {
        0: {
            items: 1,
            autoplayTimeout: 1500
        },
        700: {
            items: 3,
            autoplayTimeout: 4000
        },
        1200: {
            items: 5
        }
    }
});


$(window).scroll(function () {
    const elem = ('.about');
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();

    let elemTop = $(elem).offset().top;
    let elemBottom = elemTop + $(elem).height();

    if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
        $('.about .img-fluid').css('transform', 'translateY(-100%)');
    }
});

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
    if (window.innerWidth <= 992) {
        headerOnScroll();
    }
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