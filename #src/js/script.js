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
});
