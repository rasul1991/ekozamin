jQuery(document).ready(function ($) {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('about');
    var parallaxInstance = new Parallax(about);
    var scene = document.getElementById('prod');
    var parallaxInstance = new Parallax(prod);

    $(function () {
        $(".accordion__title").on("click", function (e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.hasClass("accordion-active")) {
                $(".accordion__content").slideUp(400);
                $(".accordion__title").removeClass("accordion-active");
                $('.accordion__arrow').removeClass('accordion__rotate');
            }
            $this.toggleClass("accordion-active");
            $this.next().slideToggle();
            $('.accordion__arrow', this).toggleClass('accordion__rotate');
        });
    });
    $(function () {
        $(".accordion__title_s").on("click", function (e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.hasClass("accordion-active")) {
                $(".accordion__content").slideUp(400);
                $(".accordion__title").removeClass("accordion-active");
                $('.accordion__arrow').removeClass('accordion__rotate');
            }
            $this.toggleClass("accordion-active");
            $this.next().slideToggle();
            $('.accordion__arrow', this).toggleClass('accordion__rotate');
        });
    });
    $('#video-popup').magnificPopup({
        items: [
            {
                src: 'https://www.youtube.com/watch?v=QBQxjSOn4Pc',
                type: 'iframe' // this overrides default type
            },
        ]
    });
    $('#video-popup-head').magnificPopup({
        items: [
            {
                src: 'https://www.youtube.com/watch?v=kJ77otj1_-I',
                type: 'iframe' // this overrides default type
            },
        ]
    });
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
});
