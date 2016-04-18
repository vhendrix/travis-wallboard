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

import {OnDestroy,OnInit} from 'angular2/core';
@Component({
    template: appTemplate,
    directives: [StatusSuccessComponent, StatusFailedComponent, StatusPendingComponent],
    pipes: [ArraySortPipe]
})


export class ReposComponent implements OnDestroy, OnInit {
    builds = {};
    successBuildsArray = [];
    failedBuildsArray = [];
    pendingBuildsArray = [];
    timer;
    interval = 1000;
    repoSettings;

    constructor(store:Store, request:Request, reposService:ReposService, cdr:ChangeDetectorRef) {
        this.store = store;
        this.request = request;
        this.reposService = reposService;
        this.cdr = cdr;
        this.repoSettings = this.store.getRepoSettings();
    }

    /**
     * Initializes builds and repos.
     */
    init(first) {
        var that = this;
        this.repoSettings.forEach((repoSetting) => {
            let shouldUpdate = repoSetting.shouldUpdate(that.interval);
            if (first || (!that.isEmpty(repoSetting.name) && shouldUpdate)) {
                console.debug('REPO COMPONENT: should update ' + repoSetting.getKey() + " :: " + shouldUpdate);
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
        let updateableProjects = this.reposService.getProjectsToUpdate(repoSettings, projects);

        this.updatePending(repoSettings);

        this.loadBuildsForProjects(updateableProjects, repoSettings, true);
    }

    checkRepos() {
        var that = this;
        this.repoSettings.forEach(function (repoSetting) {
            if (!that.isEmpty(repoSetting.name) && repoSetting.shouldUpdate(that.interval)) {
                var resource = that.request.loadProjectData(repoSetting);
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

    ngOnInit() {
        this.init(true);
        this.timer = setInterval(() => {
            this.init();
            this.adjustToScreenHeight()

        }, this.interval);

        console.debug('REPO COMPONENT: Added interval');
    }

    ngOnDestroy() {
        clearInterval(this.timer);
        console.debug('REPO COMPONENT: Removed interval');
    }

    isEmpty(val) {
        return (val === "" || typeof(val) === "undefined" || val === null);
    }

    updateBuild(repo, builds, slug) {
        if (typeof(builds) !== 'undefined' && typeof(builds[0]) !== 'undefined') {
            var newbuild = builds[0];
            newbuild.name = slug;
            this.builds[repo.getId()] = newbuild;
            this.errors = 0;
        }

        this.pendingBuildsArray = [];
        this.failedBuildsArray = [];
        this.successBuildsArray = [];
        Object.keys(this.builds).forEach((build:Build) => {
            if (this.builds[build].isPassing()) {
                this.successBuildsArray.push({key: build, val: this.builds[build]})
            } else if (this.builds[build].isFailed()) {
                this.failedBuildsArray.push({key: build, val: this.builds[build]})
            } else if (this.builds[build].isBuilding()) {
                this.pendingBuildsArray.push({key: build, val: this.builds[build]})
            }
        });

        let sort = new ArraySortPipe();

        this.pendingBuildsArray = sort.transform(this.pendingBuildsArray);
        this.failedBuildsArray = sort.transform(this.failedBuildsArray);
        this.successBuildsArray = sort.transform(this.successBuildsArray);


        let index =1;

        this.pendingBuildsArray.forEach((build) => {
            build.index = index;
            index++
        });
        this.failedBuildsArray.forEach((build) => {
            build.index = index;
            index++
        });
        this.successBuildsArray.forEach((build) => {
            build.index = index;
            index++
        });

        this.cdr.detectChanges();
    }


    adjustToScreenHeight() {
        // Try to set opimal height to show 4 rows on screen
        // 745 Is height of rows 2,3,4 inclusive margines.
        let firstRowHeight = $(window).height() - 805;
        $('.first-row .ablock').height(Math.max(firstRowHeight, 280));
    }
    updatePending(repoSettings:RepoSettings) {
        this.reposService.getPending(this.builds, repoSettings);
    }
}



