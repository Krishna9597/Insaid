(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
     


    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    
})(jQuery);