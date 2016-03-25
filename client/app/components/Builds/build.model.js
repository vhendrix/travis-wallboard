'use strict';
import{Commit} from './commit.model';
export class Build {
    _id;
    _number;
    _name;
    _state;
    _startedAt;
    _finishedAt;
    _isPr;
    _commit;
x    _type;

    constructor(id, number, name, state, startedAt, finishedAt, isPr, type, commit:Commit) {
        this._id = id;
        this._number = number;
        this._name = name;
        this._state = state;
        this._startedAt = startedAt;
        this._finishedAt = finishedAt;
        this._isPr = isPr;
        this._type = type;
        this._commit = commit;
    }

    getId() {
        return this._id;
    }

    getType() {
        return this._type;
    }

    getNumber() {
        return this._number;
    }

    getName() {
        return this._name;
    }

    getState() {
        return this._state;
    }

    getStartedAt() {
        return this._startedAt;
    }

    getFinishedAt() {
        return this._finishedAt;
    }

    isPr() {
        return this._isPr;
    }

    getCommit() {
        return this._commit;
    }

    isBuilding() {
        return this._state === 'started' || this._state === 'created' || this._state === 'received';
    }

    isPassing() {
        return this._state === 'passed' || this._state === 'canceled' || this._state === 'finished';
    }

    isFailed() {
        return this._state === 'failed' || this._state === 'error' || this._state === 'errored';
    }

    hasRecentError() {
        var dt = new Date(Date.parse(this._finishedAt));
        var now = new Date();

        var diff = now.getTime() - dt.getTime();

        var minutes = Math.floor((diff / (60000)));

        if (minutes < 5) {
            return true;
        }
        return false;
    }
}
