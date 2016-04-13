'use strict';

import {Component, ChangeDetectorRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import appTemplate from './project.component.html';
import {Store} from "../../services/store";
import {Request} from "../../services/request";
import {RepoSettings}    from '../Settings/reposettings.model';
import {StatusSuccessComponent} from '../status/status.success.component';
import {StatusFailedComponent} from '../status/status.failed.component';
import {StatusPendingComponent} from '../status/status.pending.component';

import {ArraySortPipe} from '../../pipes/arrayfilter';


import { OnDestroy,OnInit} from 'angular2/core';
@Component({
    template: appTemplate,
    directives: [StatusSuccessComponent, StatusFailedComponent, StatusPendingComponent],
    pipes: [ArraySortPipe]
})

export class ProjectComponent implements OnDestroy, OnInit {
    builds = [];

    interval = 30000;
    repoSettings = {};

    repo;
    isPrivate;

    constructor(store:Store, request:Request, cdr:ChangeDetectorRef, routeParams:RouteParams) {
        this.store = store;
        this.request = request;
        this.cdr = cdr;
        this.routeParams = routeParams;
        this.setRepoSettings();
    }

    ngOnInit() {
        this.repo = this.routeParams.get('repo');
        this.project = this.routeParams.get('project');
        let isPrivate = this.routeParams.get('private');
        this.isPrivate = typeof isPrivate !== "undefined" && isPrivate !== null;

        this.init();
        this.timer = setInterval(() => {
            this.init();
        }, this.interval);
        console.debug('PROJECT COMPONENT: Added interval');
    }

    ngOnDestroy() {
        clearInterval(this.timer);
        console.debug('PROJECT COMPONENT: Removed interval');
    }

    /**
     * Initializes builds and repos.
     */
    init() {
        let key = this.repo;

        if (this.isPrivate) {
            key += '_private';
        }
        let repoSetting = this.repoSettings[key];
        var resource = this.request.getTravisBuilds(repoSetting, this.project, true);
        resource.subscribe(builds => this.setBuilds(builds));
    }

    setBuilds(builds) {
        let buildsObject = {};

        builds.forEach((build:Build) => {
                console.debug(build.getCommit().getBranch());
                if (typeof  buildsObject[build.getCommit().getBranch() + build.getPrnr()] === 'undefined') {
                    buildsObject[build.getCommit().getBranch() + build.getPrnr()] = build;
                }
            }, this
        );

        this.builds = this.transform(buildsObject);
    }

    setRepoSettings() {
        let settings = this.store.getRepoSettings();
        settings.forEach((repoSetting:RepoSettings) => {
                this.repoSettings[repoSetting.getKey()] = repoSetting;
            }, this
        );
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
}
