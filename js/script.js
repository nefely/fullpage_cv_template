$(document).ready(function() {

    /*get true value of screen (without browser adress bar)*/
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    $(window).on('orientationchange resize', function() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    $('#fullpage').fullpage({
        scrollOverflow: true,
        menu: '#navigation'
    });

    $('.button_gamburger').on("click", "p", function(event) {
        event.preventDefault();
        $('nav').slideToggle(300);
        $(this).toggleClass('active_menu');
        $('.button_gamburger p img').toggleClass('hidden_icon');
        $('.button_gamburger p').toggleClass('active_menu_vis');
        $('.logo p').toggleClass('active_menu_vis');
    });

    $(".nav li").on("click", "a", function(event) {
        $('nav').slideToggle(300);
        $('.button_gamburger p img').toggleClass('hidden_icon');
        $('.button_gamburger p').toggleClass('active_menu_vis');
        $('.logo p').toggleClass('active_menu_vis');
    });

    var portfolio_img_width = $('.slider_container_img > div').width();
    $('.slider_container_img > div').height(portfolio_img_width * 0.56);

    $(window).resize(function() {
        portfolio_img_width = $('.slider_container_img > div').width();
        $('.slider_container_img > div').height(portfolio_img_width * 0.56);
    });

    $(function() {
        (function($) {
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

            $.fn.attrchange = function(callback) {
                if (MutationObserver) {
                    var options = {
                        subtree: false,
                        attributes: true
                    };

                    var observer = new MutationObserver(function(mutations) {
                        mutations.forEach(function(e) {
                            callback.call(e.target, e.attributeName);
                        });
                    });

                    return this.each(function() {
                        observer.observe(this, options);
                    });

                }
            }
        })(jQuery);

        $('body *').attrchange(function(attrName) {

            if (attrName == 'class') {
                setTimeout(function() {
                    if ($('.intro').hasClass('active')) {
                        $('header').removeClass('not_intro_block_active');
                    } else {
                        $('header').addClass('not_intro_block_active');
                    }
                    /*animation here*/
                    if ($('.intro').hasClass('active')) {
                        $('.intro').addClass('active_section');
                    } else {
                        $('.intro').removeClass('active_section');
                    }

                    if ($('.about').hasClass('active')) {
                        $('.about').addClass('active_section');
                    } else {
                        $('.about').removeClass('active_section');
                    }

                    if ($('.skills').hasClass('active')) {
                        $('.skills').addClass('active_section');
                    } else {
                        $('.skills').removeClass('active_section');
                    }

                    if ($('.portfolio').hasClass('active')) {
                        $('.portfolio').addClass('active_section');
                    } else {
                        $('.portfolio').removeClass('active_section');
                    }

                    if ($('.contact').hasClass('active')) {
                        $('.contact').addClass('active_section');
                    } else {
                        $('.contact').removeClass('active_section');
                    }

                }, 10);
            }

        });
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate() {
        var email = $("#email").val();
        if (validateEmail(email)) {
            $(".result").addClass('after_validation');
            $('#textarea').addClass('after_validation');
            $('.footer_form button').attr('type', 'submit');
        } else {
            $(".result").removeClass('after_validation');
            $('#textarea').removeClass('after_validation');
            $('.footer_form button').attr('type', 'button');
        }
        return false;
    }
    $("#email").on("change paste keyup", function() {
        validate();
    });

    /*remove hash*/
    $(window).on('hashchange', function(){
       history.replaceState(null, null, ' ');
    });

    /*remove links tooltip*/
    $("body").on('mouseover', 'a', function (e) {
        var $link = $(this),
            href = $link.attr('href') || $link.data("href");

        $link.off('click');
        $link.on('click', function () {
            window.location.href = href;
        })
        .attr('data-href', href)
        .css({ cursor: 'pointer' })
        .removeAttr('href');
    });


    $preloader = $('.preloader'),
    $loader = $preloader.find('.preloader');
    $loader.fadeOut();
    $preloader.delay(1000).fadeOut(1500);

});