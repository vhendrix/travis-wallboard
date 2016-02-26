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
        return _id;
    }

    getActive() {
        return _active;
    }

    getSlug() {
        return _slug;
    }

    getDescription() {
        return _description;
    }

    getLastBuildStartedAt() {
        return _lastBuildStartedAt;
    }

    getLastBuildFinishedAt() {
        return _lastBuildFinishedAt;
    }

    getLastBuildId() {
        return _lastBuildId;
    }

    getLastBuildNr() {
        return _lastBuildNr;
    }

    getLastBuildState() {
        return _lastBuildState;
    }
}
