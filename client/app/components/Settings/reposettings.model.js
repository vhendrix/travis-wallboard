export class RepoSettings {
    name = "";
    token = "";
    lastUpdate;

    constructor(name:string, token:string) {
        this.name = name;
        this.token = token;
        this.refreshRate = 30;
    }

    getName() {
        return this.name;
    }

    getToken() {
        return this.token;
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
