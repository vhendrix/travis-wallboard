import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {ProjectSettings}    from './projectsettings.model';
import {ProjectRepoSettings}    from './projectreposettings.model';
import {Store} from "../../../services/store";
import {Request} from "../../../services/request";

import appTemplate from './projectsettings.component.html';

@Component({
    template: appTemplate,
    selector: 'projectsettings'
})

export class ProjectSettingsComponent {
    users = [];
    store = null;
    request = null;
    settings = [];

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
                console.debug('PROJECT SETTINGS COMPONENT: adding project item ' + repoSetting.getKey());
                var resource = this.request.loadProjectData(repoSetting);
                resource.subscribe(projects => this.addToSettings(projects, repoSetting));
            }
        }, this);
    }

    isEmpty(val) {
        return (val === "" || typeof(val) === "undefined" || val === null);
    }

    addToSettings(projects, repoSetting:RepoSettings) {
        let repoProjectSettings = new ProjectRepoSettings(repoSetting.getKey());
        projects.forEach((project) => {
            repoProjectSettings.addSettings(new ProjectSettings(project.getSlug(), true));
        }, this);
        this.settings.push(repoProjectSettings);
        console.debug(this.settings);
    }

    submit() {
        this.store.setValue('project-settings', JSON.stringify(this.settings));
    }
}



