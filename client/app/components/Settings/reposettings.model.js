export class RepoSettings {
    name = "";
    token = "";
    includePublic = false;

    constructor(name:string, token:string, includePublic:bool) {
        this.name = name;
        this.token = token;
        this.includePublic = includePublic;
    }

    getName() {
        return this.name;
    }
}
