import {ProjectSettings}    from './projectsettings.model';
export class ProjectRepoSettings {
    name = "";
    projectSettings = [];

    constructor(name:string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addSettings(settings:ProjectSettings) {
        this.projectSettings.push(settings);
    }

    getSettings() {
        return this.projectSettings;
    }
}
