angular.module('travisWallBoard.objects', [])
  .provider(
  'twsettings', function () {
    var data = {
      useMocks: true,
      private_uri: 'https://api.travis-ci.com/',
      opensource_uri: 'https://api.travis-ci.org/',
      users: [],
      //holds what repos use what connection data.
      repos: {},

      setUsers: function ($users) {
        this.users = $users;
        TW.helpers.setCookie('userData', JSON.stringify($users), 750);
      },
      getToken: function (isPrivate, token) {
        if ( isPrivate === "YES" ) {
          return 'token ' + token;
        } else {
          return null;
        }
      },


      getSlug: function () {
        return this.slug;
      },

      getUri: function ($user) {
        if ( this.useMocks ) {
          return '/Mocks/MockServer.php/?slug=';
        } else if ( $user.isPrivate === "YES" ) {
          return this.private_uri;
        } else {
          return this.opensource_uri;
        }
      }
    };

    return {
      loadUserData: function () {
        data.users = JSON.parse(TW.helpers.getCookie('userData'));
      },
      $get: function () {
        return {
          data: data
        };
      }
    };
  }
);
