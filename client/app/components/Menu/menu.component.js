import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Request} from "../../services/request";
import {RepoSettings}    from '../Settings/reposettings.model';
import {Store} from "../../services/store";
import {Project}    from '../Project/project.model';

import appTemplate from './menu.component.html';
@Component({
    selector: 'top-menu',
    template: appTemplate
})
export class Menu {
    projects = [];
    repoSettings;

    constructor(store:Store, request:Request) {
        this.store = store;
        this.request = request;
        this.repoSettings = this.store.getRepoSettings();

        this.loadUsers();

        this.getProjects();
    }

    /**
     * Load users from the store and set them to the users variable.
     */
    loadUsers() {
        this.users = this.store.getValue('user-settings');
    }

    getProjects() {
        this.repoSettings.forEach((repoSetting) => {
            if (!this.isEmpty(repoSetting.name)) {
                console.debug('MENU COMPONENT: adding menu item ' + repoSetting.getKey());
                var resource = this.request.loadProjectData(repoSetting);
                resource.subscribe(projects => this.addToMenu(projects, repoSetting));
            }
        }, this);
    }

    isEmpty(val) {
        return (val === "" || typeof(val) === "undefined" || val === null);
    }

    addToMenu(projects, repoSetting:RepoSettings) {
        projects.forEach((project) => {
            let path = project.getSlug();
            if (repoSetting.isPrivate()) {
                path += '/private';
            }
            this.projects.push({slug: project.getSlug(), path: path});
        }, this);

    }
}
