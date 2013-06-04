(function ($) {
    'use strict';
    $.fn.showHide = function (options) {

        //default vars for the plugin
        var defaults = {
            speed: 250,
            easing: '',
            changeText: true,
            showText: 'Show',
            hideText: 'Hide'

        };
        options = $.extend(defaults, options);

        $(this).hide().data('hidden', true);

        $(this).after('<button class="_show_hide" type="button">' + options.showText + '</button>');

        $('._show_hide').click(function () {
            var me = $(this);
            var el = $(this).prev();
            el.slideToggle(options.speed, function() {
                if (options.changeText) {
                    if (el.data('hidden')) {
                        el.data('hidden', false);
                        me.text(options.hideText);
                    } else {
                        el.data('hidden', true);
                        me.text(options.showText);
                    }
                }
            });
        });
    };
})(jQuery);

(function ($) {
  $(document).ready(function() {
    'use strict';
    // select all elements between a Solution header and the next header,
    // and wrap them in a div with class "solution"
    $(":header:contains('Solution')").each(function() {
        $(this).nextUntil(":header").wrapAll('<div class="solution" />');
    });
    // hide all those divs with a "Solution" button
    $(".solution").showHide();
  });
})(jQuery);
