'use strict';

angular.module('travisWallBoard.objects', []).provider('twsettings', function () {
  var helper = new Helper();
  var data = {
    useMocks: false,
    private_uri: 'https://api.travis-ci.com/',
    opensource_uri: 'https://api.travis-ci.org/',
    users: [],
    projects: {},
    //holds what repos use what connection data.
    repos: {},

    setUsers: function setUsers($users) {
      this.users = $users;
      helper.setCookie('userData', JSON.stringify($users), 750);
    },

    setProjects: function setProjects($projects) {
      this.projects = $projects;
      helper.setCookie('projectData', JSON.stringify($projects), 750);
    },

    getToken: function getToken(isPrivate, token) {
      if (isPrivate === "YES") {
        return 'token ' + token;
      } else {
        return null;
      }
    },

    getSlug: function getSlug() {
      return this.slug;
    },

    getUri: function getUri($user) {
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
    loadUserData: function loadUserData() {
      data.users = JSON.parse(helper.getCookie('userData'));
    },
    loadProjectData: function loadProjectData() {
      data.projects = JSON.parse(helper.getCookie('projectData'));
      if (data.projects == null) {
        data.projects = {};
      }
    },
    $get: function $get() {
      return {
        data: data
      };
    }
  };
});
//# sourceMappingURL=Objects.js.map
