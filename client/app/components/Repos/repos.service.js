'use strict';

import {Request} from "../../services/request";
import {RepoSettings}    from '../Settings/reposettings.model';

export class ReposService {
    repos = {};
    previousRepos = {};
    retrievedBuilds = {};
    pendingProjects = [];

    constructor(request:Request) {
        this.request = request;
    }

    updateBuild(project, build, slug) {
        this.retrievedBuilds[slug] = {};
        this.retrievedBuilds[slug].id = build.getId();
        this.retrievedBuilds[slug].type = build.getType();

        if (build.getType() === "push") {
            this.pendingProjects.push(project);
        }
    }

    getPending(builds, repoSettings:RepoSettings) {
        let selfBuilds =    builds;
        let repo = this.repos[repoSettings.getKey()];
        Object.keys(repo).forEach((rkey) => {
            if (typeof(builds[rkey]) !== 'undefined') {
                let project = repo[rkey];
                let build = selfBuilds[rkey];

                if (
                    project.getLastBuildState() !== build.getState()
                    && (typeof(this.retrievedBuilds[project.getSlug()]) === "undefined"
                        || this.retrievedBuilds[project.getSlug()].id !== project.getLastBuildId()
                    )
                ) {
                    var resource = this.request.getTravisBuild(repoSettings, project.getSlug(), project.getLastBuildId());
                    resource.subscribe(build => this.updateBuild(project, build, project.getSlug()));

                    console.debug('REPO SERVCE -- PENDING: different states for' + project.getSlug() + ' on ' + repoSettings.getKey());
                    console.debug('REPO SERVCE -- PENDING: state project = ' + project.getLastBuildState() + ' for build id ' + project.getLastBuildId() + ' on ' + repoSettings.getKey());
                    console.debug('REPO SERVCE -- PENDING: state build = ' + build.getState() + ' for build id ' + build.getId() + ' on ' + repoSettings.getKey());
                }
            }
        }, this);

    }

    getProjectsToUpdate(repoSettings:RepoSettings, projects) {
        var that = this;
        let repoKey = repoSettings.getKey();

        projects = this.toObject(projects);
        if (typeof(this.repos[repoKey]) === "undefined") {
            this.repos[repoKey] = projects;
        } else {
            this.previousRepos = this.clone(this.repos);
            this.repos[repoKey] = this.mergeObjects(this.repos[repoKey], projects);
        }

        let updatableProjects = this.pendingProjects || [];

        // Reset pendingProjects.
        this.pendingProjects = [];

        if (typeof this.previousRepos[repoKey] === "undefined") {
            console.debug('REPO SERVICE -- UPDATE: empty list so returning all for ' + repoKey);
            return this.repos[repoKey];
        }

        Object.keys(this.repos[repoKey]).forEach((key) => {
            var project = that.repos[repoKey][key];
            if (
                typeof(that.previousRepos[repoKey][project.getId()]) === "undefined"
                || project.equals(that.previousRepos[repoKey][project.getId()]) === false
            ) {
                console.debug('REPO SERVICE: difference for repo ' + project.getSlug());
                updatableProjects.push(project);
            }
        });
        return updatableProjects;
    }

    /**
     * Create a associative array for projects.
     *
     * @param projects
     * @returns {{}}
     */
    toObject(projects) {
        let repos = {};
        for (let i = 0; i < projects.length; i++) {
            let project = projects[i];
            repos[project.getId()] = project;
        }
        return repos;
    }

    /**
     * Merge the attributes of two objects.
     *
     * @param obj1
     * @param obj2
     * @returns {{}}
     */
    mergeObjects(obj1, obj2) {
        var obj3 = {};
        for (var attrname1 in obj1) {
            obj3[attrname1] = obj1[attrname1];
        }
        for (var attrname2 in obj2) {
            obj3[attrname2] = obj2[attrname2];
        }
        return obj3;
    }

    clone(orig) {
        let origProto = Object.getPrototypeOf(orig);
        return Object.assign(Object.create(origProto), orig);
    }

    getRepos() {
        return this.repos;
    }
}
