angular.module('travisWallBoard.objects', [])
  .provider(
  'twsettings', function () {
    var data = {
      token: 'a',
      slug: 'v',
      private: false
    };

    var readCookie = function (name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[ i ];
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
        }

        if ( c.indexOf(nameEQ) === 0 ) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    };

    return {
      loadSlug: function () {
        data.slug = readCookie('repo');
      },
      loadToken: function () {
        data.token = readCookie('token');
      },
      $get: function () {
        return {
          data: data
        }
      }
    };
  }
);
