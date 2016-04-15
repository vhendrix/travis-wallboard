'use strict';
export class Commit {
    _id;
    _committerEmail;
    _committerName;
    _message;
    _isPullRequest;
    _branch;

    constructor(id, branch, committerEmail, committerName, message, pullRequestNr) {
        this._id = id;
        this._branch = branch;
        this._committerEmail = committerEmail;
        this._committerName = committerName;
        this._message = message;
        this._isPullRequest = pullRequestNr !== null;
    }

    getId() {
        return this._id;
    }

    getBranch() {
        return this._branch;
    }

    getCommitterEmail() {
        return this._committerEmail;
    }

    getCommitterName() {
        return this._committerName;
    }

    getMessage() {
        return this._message;
    }

    getIsPullRequest() {
        return this._isPullRequest;
    }
}
