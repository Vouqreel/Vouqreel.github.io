jQuery(document).ready(function () {
    $(".menu, .main__text, .our-trip__body").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 700);
    });
})