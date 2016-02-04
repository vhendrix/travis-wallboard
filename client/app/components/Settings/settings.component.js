import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import appTemplate from './settings.component.html';
import {NgForm}    from 'angular2/common';
import { RepoSettings }    from './reposettings.model';

@Component({
    template: appTemplate,
    selector: 'settings'
})


export class SettingsComponent {
    users = [];

    constructor() {
        this.users.push(new RepoSettings('', '', false));
    }

    newUser() {
        this.users.push(new RepoSettings('', '', false));
    }

    getUsers() {
        return this.users;
    }

    showUsers() {
        console.debug(this.users);
    }
}



