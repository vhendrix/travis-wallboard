(function () {
    'use strict';
    var isMenuHidden = true;
    var isMenuAnimating = false;

    var getAgo = function (dateString) {
        var dt = new Date(Date.parse(dateString));
        var now = new Date();

        var diff = now.getTime() - dt.getTime();

        var minutes = Math.floor((diff / (60000)));

        if ( isNaN(minutes) ) {
            return 1 + ' Seconds';
        } else if ( minutes === 0 ) {
            var seconds = Math.floor((diff / (1000)));
            return seconds + ' Seconds';
        } else if ( minutes > 1440 ) {
            return Math.floor((diff / 86400000)) + ' Days';
        } else if ( minutes > 60 ) {
            var hours = Math.floor((diff / 3600000));
            minutes = Math.floor(((diff % 3600000) / 60000));
            return hours + ' Hours and ' + minutes + ' Minutes';
        } else {
            return minutes + ' Minutes';
        }
    };

    //Double functionality lets see how we can do this in angular.
    $(document).ready(function () {
        setInterval(
            function () {
                $('.time').each(
                    function () {
                        if ( typeof $(this).data('finished_at') === 'undefined' ) {
                            $(this).attr('data-finished_at', Date('Now').toString());
                        }
                        $(this).text(getAgo($(this).data('finished_at')));
                    }
                );
            },
            1000
        );

        function showMenu() {
            $('.top-menu').animate(
                {
                    opacity: 1,
                    top: 0
                },
                1000,
                function () {
                    isMenuAnimating = false;
                }
            );
            $('.board').animate(
                {
                    top: 52
                },
                1000
            );
        }

        function hideMenu() {
            $('.top-menu').animate(
                {
                    opacity: 0.25,
                    top: -52
                },
                2000,
                function () {
                    isMenuAnimating = false;
                }
            );
            $('.board').animate(
                {
                    top: 0
                },
                2000
            );
        }

        $(".board").mousemove(
            function (event) {
                if (event.pageY < 72 &&
                    !isMenuAnimating &&
                    isMenuHidden) {
                    isMenuAnimating = true;
                    isMenuHidden = false;
                    showMenu();
                }
                // Check if we are not in the settings page and the nav-bar has no open drop-down menu.
                else if(window.location.hash.indexOf('settings') === -1 &&
                    !$('ul.nav.navbar-nav').find('li').hasClass('open') &&
                    !isMenuAnimating &&
                    !isMenuHidden) {
                    isMenuAnimating = true;
                    isMenuHidden = true;
                    hideMenu();
                }
            }
        );
    });
})
($);
