'use strict';
export class Project {
    _id;
    _active;
    _slug;
    _description;
    _lastBuildStartedAt;
    _lastBuildFinishedAt;
    _lastBuildId;
    _lastBuildNr;
    _lastBuildState;

    constructor(id, slug, active, description, lastBuildStartedAt, lastBuildFinishedAt, lastBuildId, lastBuildNr, lastBuildState) {
        this._id = id;
        this._active = active;
        this._slug = slug;
        this._description = description;
        this._lastBuildStartedAt = lastBuildStartedAt;
        this._lastBuildFinishedAt = lastBuildFinishedAt;
        this._lastBuildId = lastBuildId;
        this._lastBuildNr = lastBuildNr;
        this._lastBuildState = lastBuildState;
    }

    getId() {
        return this._id;
    }

    getActive() {
        return this._active;
    }

    getSlug() {
        return this._slug;
    }

    getDescription() {
        return this._description;
    }

    getLastBuildStartedAt() {
        return this._lastBuildStartedAt;
    }

    getLastBuildFinishedAt() {
        return this._lastBuildFinishedAt;
    }

    getLastBuildId() {
        return this._lastBuildId;
    }

    getLastBuildNr() {
        return this._lastBuildNr;
    }

    getLastBuildState() {
        return this._lastBuildState;
    }

    equals(project:Project) {
        return  (
            this.getId() === project.getId() &&
            this.getActive() === project.getActive() &&
            this.getSlug() === project.getSlug() &&
            this.getLastBuildState() === project.getLastBuildState() &&
            this.getLastBuildStartedAt() === project.getLastBuildStartedAt() &&
            this.getLastBuildFinishedAt() === project.getLastBuildFinishedAt() &&
            this.getLastBuildNr() === project.getLastBuildNr() &&
            this.getLastBuildId() === project.getLastBuildId() &&
            this.getDescription() === project.getDescription()
        );
    }
}
