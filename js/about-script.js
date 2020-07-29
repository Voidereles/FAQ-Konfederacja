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