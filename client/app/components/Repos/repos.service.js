'use strict';
export class ReposService {
    constructor() {
    }

    setRepos(repos) {
        if(typeof(this.repos) === "undefined") {
            this.repos = repos;
        } else {
            this.repos = this.mergeObjects(this.repos, repos);
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

    getRepos() {
        return this.repos;
    }
}
