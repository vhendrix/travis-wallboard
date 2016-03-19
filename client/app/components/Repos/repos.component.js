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
import {StatusPendingComponent} from '../status/status.pending.component';

import {ArraySortPipe} from '../../pipes/arrayfilter';


import {
    OnDestroy
} from 'angular2/core';
@Component({
    template: appTemplate,
    directives: [StatusSuccessComponent, StatusFailedComponent, StatusPendingComponent],
    pipes: [ArraySortPipe]
})


export class ReposComponent implements OnDestroy {
    builds = {};
    buildsArray = [];
    timer;
    interval = 1000;
    repoSettings;

    constructor(store:Store, request:Request, reposService:ReposService, cdr:ChangeDetectorRef) {
        this.store = store;
        this.request = request;
        this.reposService = reposService;
        this.cdr = cdr;
        this.repoSettings = this.store.getRepoSettings();

        this.init(true);
        this.timer = setInterval(() => {
            this.init();
        }, this.interval);


    }

    /**
     * Initializes builds and repos.
     */
    init(first) {
        var that = this;
        this.repoSettings.forEach((repoSetting) => {
            let shouldUpdate = repoSetting.shouldUpdate(that.interval);
            console.debug('REPO COMPONENT: should update ' + repoSetting.getName() + " :: " + shouldUpdate);
            if (first || (!that.isEmpty(repoSetting.name) && shouldUpdate)) {
                var resource = that.request.loadProjectData(repoSetting);
                resource.subscribe(project => that.checkBuildsForProject(project, repoSetting));
            }
        });
    }

    /**
     * Get the builds for a given Project.
     *
     * @param projects
     * @param {RepoSettings} repoSettings
     */
    checkBuildsForProject(projects, repoSettings:RepoSettings) {
        let updateableProjects = this.reposService.getProjectsToUpdate(repoSettings.getName(), projects);

        this.updatePending();

        this.loadBuildsForProjects(updateableProjects, repoSettings, true);
    }

    checkRepos() {
        var that = this;
        this.repoSettings.forEach(function (repoSetting) {
            if (!that.isEmpty(repoSetting.name) && repoSetting.shouldUpdate(that.interval)) {
                var resource = that.request.loadProjectData(repoSetting, false);
                resource.subscribe(project => that.checkBuildsForProject(project, repoSetting));
            }
        });
    }

    /**
     * Loads builds for a given repository and sets this to the scope.
     *
     * @param {Object} project
     * @param {RepoSettings} userSettings
     * @param {Boolean} $first
     */
    loadBuildsForProjects(projects, userSettings:RepoSettings, $first) {
        var that = this;
        Object.keys(projects).forEach(function (key) {
            let rep = projects[key];
            let slug = rep.getSlug().replace(userSettings.getName() + '/', "");

            var resource = that.request.getTravisBuilds(userSettings, slug);
            resource.subscribe(build => that.updateBuild(rep, build, slug));
        });
    };

    ngOnDestroy() {
        clearInterval(this.timer);
    }

    isEmpty(val) {
        return (val === "" || typeof(val) === "undefined" || val === null);
    }


    getBuilds() {
        return Array.from(this.builds);
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
            this.builds[repo.getId()] = newbuild;
            this.errors = 0;
        }
        this.buildsArray = this.transform(this.builds);
        this.cdr.detectChanges();
    }


    updatePending() {
        this.reposService.getPending(this.builds);
    }
}



