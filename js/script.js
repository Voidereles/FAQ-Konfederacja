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

$('.img-fluid').css('transform', 'translateY(-100%)');