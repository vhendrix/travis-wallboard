(function () {
  'use strict';
  var menuTimer;

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

  $(document).ready(
    //double functionalty lets see how we can do this in angular.
    function () {
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
        }, 1000
      );

      $("body").mousemove(
        function () {

          if ( typeof menuTimer !== "undefined" ) {
            window.clearInterval(menuTimer);
          }

          $('.twmenu').removeClass('hidden');
          $(".twmenu").animate(
            {
              opacity: 1,
              top: "0"
            }, 1000, function () {
            }
          );

          menuTimer = setInterval(
            function () {
              $(".twmenu").animate(
                {
                  opacity: 0.25,
                  top: "-52"
                }, 1000, function () {
                  $('.twmenu').addClass('hidden');
                }
              );

            }, 5000
          );
        }
      );
    }
  );
})
($);
