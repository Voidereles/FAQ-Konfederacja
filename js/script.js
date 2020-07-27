new WOW().init();

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
        $('.navbar-brand img').attr('src', '../images/logo__high-contrast.svg');
    }

    else {
        highContrast = false;
        switchStyles('normal');
        $('.navbar-brand img').attr('src', '../images/logo.svg');

        if (window.innerWidth <= 992) {

            $('.navbar-brand img').attr('src', '../images/logo-white.svg');
        }
    }
}

$(document).on('click', '#highContrastBtn', function () {
    if (highContrast) {
        switchStyles('normal'); $('.navbar-brand img').attr('src', '../images/logo.svg');
        highContrast = false;
    }

    else {
        switchStyles('high-contrast');
        $('.navbar-brand img').attr('src', '../images/logo__high-contrast.svg');
        highContrast = true;
    }
}

);


// roziwazanie problemu SEO
// var scrolled=false;

// $(window).on('scroll', function () {
//         if ( !scrolled) {
//             scrolled=true;
//             new WOW.init();
//         }
//     }

// );

fontSize = 16; //globalna zmienna

$(document).on('click', '#makeFontSmaller', function () {
    fontSize = fontSize - 1;

    if (fontSize <= 24 && fontSize >= 14) {
        $('html').css('font-size', fontSize + "px");
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

    if (fontSize <= 24 && fontSize >= 14) {
        $('html').css('font-size', fontSize + "px");
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


$(document).on('click', '.nav-item .dropdown-menu', function (e) {
    e.stopPropagation();
}
);

// $('.fields-of-study .collapse').on('show.bs.collapse', function () {
//     this.parent()
// })

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
}

);

function headerOnScroll() {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        $('.dropdown').removeClass('show');
        $('.dropdown-menu').removeClass('show');

        if (this.window.pageYOffset > 105) {


            if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").style.top = "0";
            }

            else {
                document.getElementById("header").style.top = "-145px";
            }

            prevScrollpos = currentScrollPos;
        }
    }
}

$("#mainOwlSlider").owlCarousel({
    autoplayHoverPause: true,
    loop: true,
    nav: false,
    dots: true,
    lazyLoad: true,
    items: 1,
    autoplay: true,
    margin: 0
}

);


$('.instagram__carousel').owlCarousel({

    loop: true,
    margin: 0,
    dots: true,
    lazyLoad: true,
    responsiveClass: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        }

        ,
        600: {
            items: 3
        }

        ,
        1000: {
            items: 5
        }
    }
}

);

$(document).ready(function () {
    if (window.innerWidth <= 992) {
        $('.navbar-accessibility').prependTo('.collapse .nav');
        headerOnScroll();
    }
    else if ($('.header').hasClass('header--subpages')) {
        headerOnScroll();
    }
}

);

$('.navbar-collapse').on('show.bs.collapse', function () {
    $('body').addClass('body-on-menu-show');
    $('.navbar-collapse').addClass('open');
}

);

if (window.innerWidth <= 992) {
    // $('.navbar-accessibility').prependTo('.collapse .nav');
    $('.navbar-brand img').attr('src', '../images/logo-white.svg');

    $('.navbar-collapse').on('show.bs.collapse', function () {
        $('body').addClass('body-on-menu-show');
        $('.navbar-collapse').addClass('open');
    }

    );

    $('.navbar-collapse').on('hide.bs.collapse', function () {
        $('body').removeClass('body-on-menu-show');
        $('.navbar-collapse').removeClass('open');
        $('#megaMenu .nav-link').text("Menu");
    }

    );

    $('.header .mega-menu').on('shown.bs.dropdown', function () {
        $('.mega-menu>.nav-link').text("Ukryj menu");
    }

    );

    $('.header .mega-menu').on('hide.bs.dropdown', function () {
        $('.mega-menu>.nav-link').text("Menu");
    }

    );
}

else {
    $('#mainOwlSlider .owl-dots').appendTo('#mainOwlSlider .owl-stage-outer');
}







$('[data-fancybox="images"]').fancybox({
    afterLoad: function (instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;

        if (pixelRatio > 1.5) {
            current.width = current.width / pixelRatio;
            current.height = current.height / pixelRatio;
        }
    }
});