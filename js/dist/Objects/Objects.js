angular.module('travisWallBoard.objects', []).provider('twsettings', function () {
  var data = {
    useMocks: false,
    private_uri: 'https://api.travis-ci.com/',
    opensource_uri: 'https://api.travis-ci.org/',
    users: [],
    projects: {},
    //holds what repos use what connection data.
    repos: {},

    setUsers: function ($users) {
      this.users = $users;
      TW.helpers.setCookie('userData', JSON.stringify($users), 750);
    },

    setProjects: function ($projects) {
      this.projects = $projects;
      TW.helpers.setCookie('projectData', JSON.stringify($projects), 750);
    },

    getToken: function (isPrivate, token) {
      if (isPrivate === "YES") {
        return 'token ' + token;
      } else {
        return null;
      }
    },

    getSlug: function () {
      return this.slug;
    },

    getUri: function ($user) {
      if (this.useMocks) {
        return '/Mocks/MockServer.php/?slug=';
      } else if ($user.isPrivate === "YES") {
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
    loadProjectData: function () {
      data.projects = JSON.parse(TW.helpers.getCookie('projectData'));
      if (data.projects == null) {
        data.projects = {};
      }
    },
    $get: function () {
      return {
        data: data
      };
    }
  };
});
//# sourceMappingURL=Objects.js.map
