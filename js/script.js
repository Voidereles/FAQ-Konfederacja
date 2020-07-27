new WOW().init();

$(".owl-categories").owlCarousel({
    autoplayHoverPause: true,
    loop: true,
    nav: false,
    dots: false,
    lazyLoad: true,
    autoplay: false,
    margin: 16,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 3
        },
        1200: {
            items: 5
        }
    }
});