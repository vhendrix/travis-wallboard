import {Injectable} from 'angular2/core';
import {RepoSettings} from '../components/Settings/reposettings.model'
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

    constructor(store:Store) {
        this.store = store;

        this.migrateOldUsers();
        this.users = this.store.getValue('users');
    }

    migrateOldUsers() {
        let oldUsers = this.store.getCookie('userData');
        let newUsers = [];
        if (typeof oldUsers !== 'undefined' && oldUsers !== null) {
            console.debug('SETTINGS: Old settings found migrating:');
            oldUsers.forEach((user) => {
                console.debug('SETTINGS: migrated '+ user.name + ' token.' + user.token);
                let newUser = new RepoSettings(user.name,user.token);
                newUsers.push(newUser);
            });
            this.store.setValue('users', JSON.stringify(newUsers));
            this.store.setCookie('userData', null, -222);
        }

    }

    setUsers(users) {
        this.users = users;

        this.store.setValue('user-settings', users);
    }

    getUsers() {
        return this.users;
    }

    setProjects($projects) {
        this.projects = $projects;
        TW.helpers.setCookie('projectData', JSON.stringify($projects), 750);
    }

    getToken(isPrivate, token) {
        if (isPrivate == true) {
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

    getUri(repoSettings:RepoSettings) {
        if (this.useMocks) {
            if (repoSettings.isPrivate()) {
                return 'http://localhost:9002/mock.php?type=private&path=';
            } else {
                return 'http://localhost:9002/mock.php?type=protected&path=';
            }
        } else if (repoSettings.isPrivate()) {
            return this.private_uri;
        } else {
            return this.opensource_uri;
        }
    }

    loadProjectData() {
        data.projects = JSON.parse(TW.helpers.getCookie('projectData'));
        if (data.projects == null) {
            data.projects = {};
        }
    }
}

