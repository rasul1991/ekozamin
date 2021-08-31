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
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        closeOnBgClick: false,

    });
    $('.phone-mask').mask('+998(00) 000 0000');
    $(document).on('click', '#sendformData', function (event) {
        event.stopPropagation();
        event.preventDefault();
        if ($('#name').val().length <= 0) {
            $('#name').addClass('error');
            $('.error-name-text').removeClass('hidden');
            return false;
        }

        if ($('#phone').val().length <= 0) {
            $('#phone').addClass('error');

            $('.error-phone-text').removeClass('hidden');

            return false;
        }
        $.ajax({
            type: 'post',
            url: '/telegram.php',
            data: {
                name: $('#name').val(),
                phone: $('#phone').val(),
                // message: $('#message').val(),
            }
        }).done(function (response) {
            console.log(response);
            $('#form-w').addClass('hidden');
            $('#sucess-form').removeClass('hidden');
        }).fail(function () {
            console.error('fail');
        });
        $("form")[0].reset();
    });
    $(document).on('click', '.mfp-wrap, .mfp-close', function (event) {
        setTimeout(function () {
            $('#form-w').removeClass('hidden');
            $('#sucess-form').addClass('hidden');
        }, 15000);

    });
    $('.telegramm').on('submit', function (event) {

        event.stopPropagation();
        event.preventDefault();

        let form = this,
            submit = $('.submit', form),
            data = new FormData(),
            files = $('input[type=file]')


        $('.submit', form).val('Отправка...');
        $('input, textarea', form).attr('disabled', '');

        data.append('Исм', $('[name="name-3"]', form).val());
        data.append('Телефон', $('[name="phone-3"]', form).val());



        files.each(function (key, file) {
            let cont = file.files;
            if (cont) {
                $.each(cont, function (key, value) {
                    data.append(key, value);
                });
            }
        });
        let succes = $('#form-succes-2');
        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            xhr: function () {
                let myXhr = $.ajaxSettings.xhr();

                if (myXhr.upload) {
                    myXhr.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {
                            let percentage = (e.loaded / e.total) * 100;
                            percentage = percentage.toFixed(0);
                            $('.submit', form)
                                .html(percentage + '%');
                        }
                    }, false);
                }

                return myXhr;
            },
            error: function (jqXHR, textStatus) {

            },
            complete: function () {


                console.log('succes');
                succes.removeClass('hidden');
                form.reset();

            }
        });

        return false;
    });
    $('.telegram-2').on('submit', function (event) {

        event.stopPropagation();
        event.preventDefault();
        let form = this,
            submit = $('.submit', form),
            data = new FormData(),
            files = $('input[type=file]')
        $('.submit', form).val('Отправка...');
        $('input, textarea', form).attr('disabled', '');

        data.append('Исм', $('[name="name-2"]', form).val());
        data.append('Телефон', $('[name="phone-2"]', form).val());
        data.append('Савол', $('[name="message-2"]', form).val());
        files.each(function (key, file) {
            let cont = file.files;
            if (cont) {
                $.each(cont, function (key, value) {
                    data.append(key, value);
                });
            }
        });
        let succes = $('#form-succes-3');
        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            xhr: function () {
                let myXhr = $.ajaxSettings.xhr();

                if (myXhr.upload) {
                    myXhr.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {
                            let percentage = (e.loaded / e.total) * 100;
                            percentage = percentage.toFixed(0);
                            $('.submit', form)
                                .html(percentage + '%');
                        }
                    }, false);
                }

                return myXhr;
            },
            error: function (jqXHR, textStatus) {

            },
            complete: function () {


                console.log('succes');
                succes.removeClass('hidden');
                form.reset();

            }
        });

        return false;
    });
    AOS.init({
        disable: function () {
            var maxWidth = 800;
            return window.innerWidth < maxWidth;
        }
    });
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});
