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



fontSize = 16; //globalna zmienna

$(document).on('click', '#makeFontSmaller', function () {
        fontSize = fontSize - 1;

        if (fontSize <= 24 && fontSize >= 12) {
            $('article p').css('font-size', fontSize + "px");
            // if (fontSize < 24) {
            //     document.getElementById("makeFontSmaller").setAttribute('title', 'Zmniejsz czcionkę (obecnie ' + fontSize + ')');
            // }
            // else {
            //     document.getElementById("makeFontSmaller").setAttribute('title', 'Nie możesz dalej zmniejszać czcionki (obecnie ' + fontSize + ')');
            // }
        }
    }

);

$(document).on('click', '#makeFontBigger', function () {
        fontSize = fontSize + 1;

        if (fontSize <= 24 && fontSize >= 12) {
            $('article p').css('font-size', fontSize + "px");
            // if (fontSize < 24) {
            //     document.getElementById("makeFontBigger").setAttribute('title', 'Zwiększ czcionkę (obecnie ' + fontSize + ')');
            // }
            // else {
            //     document.getElementById("makeFontBigger").setAttribute('title', 'Nie możesz dalej zwiększać czcionki (obecnie ' + fontSize + ')');
            // }

            // title = "Zwiększ czcionkę (obecnie" + fontSize + ")";
        }
    }

);


let highContrast;

function switchStyles(className) {
    document.body.className = className;
    localStorage.setItem("bodyClassName", className);
}

var storedClassName = localStorage.getItem("bodyClassName");

if (storedClassName) {
    switchStyles(storedClassName);
    console.log(storedClassName);

    if (storedClassName == 'high-contrast') {
        highContrast = true;
    } else {
        highContrast = false;
        switchStyles('normal');
    }
}

$(document).on('click', '#highContrastBtn', function () {
        if (highContrast) {
            switchStyles('normal');
            highContrast = false;
        } else {
            switchStyles('high-contrast');
            highContrast = true;
        }
    }

);