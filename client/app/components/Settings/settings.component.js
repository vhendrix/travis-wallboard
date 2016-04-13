import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import appTemplate from './settings.component.html';
import {NgForm}    from 'angular2/common';
import {RepoSettings}    from './reposettings.model';
import {Store} from "../../services/store";
import {Request} from "../../services/request";

@Component({
    template: appTemplate,
    selector: 'settings'
})

export class SettingsComponent {
    users = [];
    githubToken = "";
    travisToken = "";
    store = null;
    request = null;

    refreshrates = [
        {value: 15, label: '15 sec'},
        {value: 30, label: '30 sec'},
        {value: 60, label: '1 min'},
        {value: 90, label: '1.5 min'},
        {value: 120, label: '2 min'},
        {value: 150, label: '2.5 min'},
        {value: 180, label: '3 min'},
        {value: 300, label: '5 min'},
        {value: 600, label: '10 min'},
        {value: 1800, label: '30 min'},
        {value: 3600, label: '1 hour'}
    ];

    constructor(store:Store, request:Request) {
        this.store = store;
        this.request = request;

        this.loadUsers();

        if (this.users == null || this.users.length == 0) {
            this.newUser();
        }
    }

    newUser() {
        this.users = this.users || [];
        this.users.push(new RepoSettings('', '', 30));
    }

    getUsers() {
        return this.users;
    }

    showUsers() {
        console.debug(this.users);
    }

    saveUsers() {
        this.store.setValue('users', JSON.stringify(this.users));
    }

    /**
     * Load users from the store and set them to the users variable.
     */
    loadUsers() {
        this.users = this.store.getValue('users');
    }

    /**
     * Do a request to travis with an github token to generate a travis token.
     */
    generateToken() {
        this.request.getTravisToken(this.githubToken).subscribe(token => this.travisToken = token.access_token);
    }

    getHeading(i) {
        return 'heading' + i;
    }

    getCollapse(i) {
        return 'collapse' + i;
    }

    getTitle(user:RepoSettings, i:Number) {
        var access = "";
        if (user.token !== "") {
            access = " Private ";
        } else {
            access = " Public ";
        }


        if (user.name === "") {
            return "New repo " + i;
        }


        return user.name + " Repository (" + access + ')';

    }

    remove(index) {
        this.users.splice(index, 1);
    }
}



