'use strict';

import {Component, ChangeDetectorRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import appTemplate from './repos.component.html';
import {Store} from "../../services/store";
import {Request} from "../../services/request";
import {RepoSettings}    from '../Settings/reposettings.model';
import {ReposService} from './repos.service';
import {StatusSuccessComponent} from '../status/status.success.component';
import {StatusFailedComponent} from '../status/status.failed.component';
@Component({
    template: appTemplate,
    directives: [StatusSuccessComponent, StatusFailedComponent]
})


export class ReposComponent {
    builds = {};
    buildsArray = [];

    constructor(store:Store, request:Request, reposService:ReposService, cdr:ChangeDetectorRef) {
        this.store = store;
        this.request = request;
        this.reposService = reposService;
        this.cdr = cdr;
        this.loadLatestBuildForRepos();
    }

    destructor() {
        clearInterval(this.timer);
    }

    isEmpty(val) {
        return (val === "" || typeof(val) === "undefined" || val === null);
    }

    loadLatestBuildForRepos() {
        var that = this;
        var projects = this.store.getUsers();

        projects.forEach(function (userSettings) {
            if (!that.isEmpty(userSettings.name)) {
                var resource = that.request.loadProjectData(userSettings, false);
                resource.subscribe(project => that.checkBuildsForProject(project, userSettings));
            }
        });
    }

    getBuilds() {

        return Array.from(this.builds);
    }

    checkBuildsForProject(project, userSettings) {
        this.reposService.setRepos(project);
        this.loadBuildsForProject(project, userSettings)
    }

    transform(dict:Object):Array {
        var a = [];
        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                a.push({key: key, val: dict[key]});
            }
        }

        return a;
    }

    updateBuild(repo, builds, slug) {
        if (typeof(builds) !== 'undefined' && typeof(builds[0]) !== 'undefined') {
            var newbuild = builds[0];
            newbuild.name = slug;
            this.builds[repo.id] = newbuild;
            this.errors = 0;
        }

        this.buildsArray = this.transform(this.builds);
        this.cdr.detectChanges();
    }

    /**
     * Loads builds for a given repository and sets this to the scope.
     *
     * @param {Object} project
     */
    loadBuildsForProject(project, userSettings:RepoSettings, $first) {

        var that = this;

        project.forEach(function (rep) {
            let slug = rep.slug.replace(userSettings.getName() + '/', "");
            var resource = that.request.getTravisBuilds(userSettings, slug, false);
            resource.subscribe(build => that.updateBuild(rep, build, slug));
        });
    };
}



