$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnDotsHover: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        draggable: true,
        swipe: true,
        touchThresHold: 10,
        touchMove: true,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4
                }
            },

            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.second__slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 4,
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnDotsHover: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        draggable: true,
        swipe: true,
        touchThresHold: 10,
        touchMove: true,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});






