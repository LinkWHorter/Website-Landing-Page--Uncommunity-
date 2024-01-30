$(document).on('ready', function () {
    $(".first-slider").slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 750,
        speed: 750
    });

    $(".second-slider").slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 750,
        speed: 750
    });
});