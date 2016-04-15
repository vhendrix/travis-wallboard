import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {UserSettings}    from './usersettings.model';
import {Store} from "../../../services/store";
import {Settings} from "../../../services/settings";
import {Request} from "../../../services/request";

import appTemplate from './usersettings.component.html';

@Component({
    template: appTemplate,
    selector: 'usersettings'
})

export class UserSettingsComponent {
    users = [];
    store = null;
    request = null;

    constructor(store:Store, request:Request, settings:Settings) {
        this.store = store;
        this.request = request;
        this.settings = settings;

        this.loadUsers();

        if (this.users == null || this.users.length == 0) {
            this.newUser();
        }
    }

    newUser() {
        this.users = this.users || [];
        this.users.push(new UserSettings('New', ''));
    }

    getUsers() {
        return this.users;
    }

    saveUsers() {
        this.store.setValue('user-settings', JSON.stringify(this.users));
    }

    /**
     * Load users from the store and set them to the users variable.
     */
    loadUsers() {
        this.users = this.store.getValue('user-settings');
    }

    getHeading(i) {
        return 'heading' + i;
    }

    getCollapse(i) {
        return 'collapse' + i;
    }

    getTitle(user:RepoSettings, i:Number) {
        return 'User:' + user.name;
    }

    remove(index) {
        this.users.splice(index, 1);
    }
}



