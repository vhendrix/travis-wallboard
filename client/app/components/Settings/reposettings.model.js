export class RepoSettings {
    name = "";
    token = "";
    lastUpdate;

    constructor(name:string, token:string, refreshRate:Number) {
        this.name = name;
        this.token = token;
        this.refreshRate = refreshRate;
    }

    getName() {
        return this.name;
    }

    getToken() {
        return this.token;
    }

    getKey() {
        let postfix = "";
        if (this.isPrivate()) {
            postfix = '_private';
        }
        return this.getName() + postfix;
    }

    isPrivate() {
        return typeof(this.token) !== "undefined" && this.token != "";
    }

    shouldUpdate(interval) {
        if (typeof this.lastUpdate === "undefined" || this.lastUpdate >= (this.refreshRate * interval)) {
            this.lastUpdate = 0;
            return true;
        } else {
            this.lastUpdate += interval;
            return false;
        }
    }
}
