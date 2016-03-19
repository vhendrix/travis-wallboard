'use strict';
export class ReposService {
    repos = {};
    previousRepos = {};

    constructor() {

    }

    getPending(builds) {
        let selfBuilds = builds;
        Object.keys(this.repos).forEach((key) => {
            let repo = this.repos[key];
            Object.keys(repo).forEach((rkey) => {
                if (typeof(builds[rkey]) !== 'undefined') {
                    var project = repo[rkey];
                    console.debug(rkey);
                    console.debug(project);
                    console.debug(builds[rkey]);
                }
            }, this);
        }, this);

    }

    getProjectsToUpdate(repo, projects) {
        var that = this;
        projects = this.toObject(projects);
        if (typeof(this.repos[repo]) === "undefined") {
            this.repos[repo] = projects;
        } else {
            this.previousRepos = this.clone(this.repos);
            this.repos[repo] = this.mergeObjects(this.repos[repo], projects);
        }

        let updatableProjects = [];

        if (typeof this.previousRepos[repo] === "undefined") {
            console.debug('REPO SERVICE: empty list so returning all');
            return this.repos[repo];
        }

        Object.keys(this.repos[repo]).forEach((key) => {
            var project = that.repos[repo][key];
            if (
                typeof(that.previousRepos[repo][project.getId()]) === "undefined"
                || project.equals(that.previousRepos[repo][project.getId()]) === false
            ) {
                console.debug('REPO SERVICE: difference for repo ' + project.getSlug());
                updatableProjects.push(project);
            }
        });

        return updatableProjects;
    }

    /**
     * Create a assosiative array for projects.
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
