import {Injectable} from 'angular2/core';
import {Store} from './store';

@Injectable()

export class Settings {
    useMocks = false;
    private_uri = 'https://api.travis-ci.com/';
    opensource_uri = 'https://api.travis-ci.org/';
    users = [];
    projects = {};
    //holds what repos use what connection data.
    repos = {};
    slug = "";
    acceptHeader = 'application/vnd.travis-ci.2+json';


    setUsers($users) {
        this.users = $users;
        TW.helpers.setCookie('userData', JSON.stringify($users), 750);
    }

    setProjects($projects) {
        this.projects = $projects;
        TW.helpers.setCookie('projectData', JSON.stringify($projects), 750);
    }

    getToken(isPrivate, token) {
        if (isPrivate === "YES") {
            return 'token ' + token;
        } else {
            return null;
        }
    }

    getAcceptHeader() {
        return this.acceptHeader;
    }

    getSlug() {
        return this.slug;
    }

    getUri($user) {
        if (this.useMocks) {
            return '/Mocks/MockServer.php/?slug=';
        } else if ($user.isPrivate === "YES") {
            return this.private_uri;
        } else {
            return this.opensource_uri;
        }
    }

    loadUserData() {
        data.users = JSON.parse(TW.helpers.getCookie('userData'));
    }

    loadProjectData() {
        data.projects = JSON.parse(TW.helpers.getCookie('projectData'));
        if (data.projects == null) {
            data.projects = {};
        }
    }
}

