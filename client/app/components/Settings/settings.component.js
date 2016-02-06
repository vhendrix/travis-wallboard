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
        this.users.push(new RepoSettings('', '', false));
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
        var privateRepo = "";
        var publicRepo = "";
        if (user.token !== "") {
            privateRepo = " Private ";
        }

        if (user.includePublic !== false) {
            if (user.token !== "") {
                publicRepo += "and";
            }
            publicRepo += " Public ";
        }

        if (user.name === "") {
            return "New repo " + i;
        }

        if (privateRepo !== "" || publicRepo !== "") {
            return user.name + " Repository (" + privateRepo + publicRepo + ')';
        }
        return user.name + " Repository"
    }
}



