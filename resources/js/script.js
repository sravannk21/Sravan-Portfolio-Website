$('document').ready(function(){
    /* sticky navigation */
    $('.js-about-section').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky')
        }
        else {
            $('nav').removeClass('sticky')
        }
    },
    {
        offset: '60px'
    })

    /* MOBILE NAVIGATION */
    $('.js--mobile-nav').click(function() {
        var nav = $('.js--main-nav')
        nav.slideToggle(200)
        /*code for change icon to close icon*/
        var icon = $('.js--mobile-nav i')
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    })


    /* Scroll to Top*/
    $('.js-contact').waypoint(function(direction){
        if(direction == 'down'){
            $('.ion-arrow-up-b').addClass('scroll-top')
        }
        else {
            $('.ion-arrow-up-b').removeClass('scroll-top')
        }
    })

    /* click to scroll page*/
    $('.js-about').click(function(){
        $('html, body').animate({scrollTop: $('.js-about-section').offset().top}, 1000)
    })

    $('.js-connect').click(function(){
        $('html, body').animate({scrollTop: $('.js-contact').offset().top},1000)
    })

    /* ANIMATIONS*/
    $('.about-img').waypoint(function(direction){
        $('.about-img').addClass('animate__animated animate__fadeInUp')
    },
    {
        offset: '50%'
    })
    $('.js-animation-2').waypoint(function(direction) {
        $('.js-animation-2').addClass('animate__animated animate__fadeInUp')
    },
    {
        offset: '50%'
    })
    $('.js-animation-3').waypoint(function(direction) {
        $('.js-animation-3').addClass('animate__animated animate__fadeInUp')
    },
    {
        offset: '50%'
    })
    $('.js-animation-4').waypoint(function(direction) {
        $('.js-animation-4').addClass('animate__animated animate__fadeInUp')
    },
    {
        offset: '50%'
    })
    $('.js-animation-5').waypoint(function(direction) {
        $('.js-animation-5').addClass('animate__animated animate__fadeInUp')
    },
    {
        offset: '50%'
    })
    $('.js-animation-6').waypoint(function(direction) {
        $('.js-animation-6').addClass('animate__animated animate__fadeInUp')
    },
    {
        offset: '50%'
    })

    /* NAVIGATION SCROLL */
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
        });
})