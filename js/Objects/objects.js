angular.module('travisWallBoard.objects', [])
  .provider(
  'twsettings', function () {
    var data = {
      token: '',
      slug: '',
      private: 'NO',
      useMocks: false,
      private_uri: 'https://api.travis-ci.com/',
      opensource_uri: 'https://api.travis-ci.org/',

      getToken: function () {
        if ( this.private === "YES" ) {
          return 'token ' + this.token;
        } else {
          return null;
        }
      },
      getUri: function ($endpoint) {
        if ( this.useMocks ) {
          return '/Mocks/MockServer.php/?endpoint=' + $endpoint + '&slug=';
        } else if ( this.private === "YES" ) {
          return this.private_uri + $endpoint + '/';
        } else {
          return this.opensource_uri + $endpoint + '/';
        }
      }
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
      loadPrivate: function () {
        data.private = readCookie('private');
      },
      $get: function () {
        return {
          data: data
        };
      }
    };
  }
);
