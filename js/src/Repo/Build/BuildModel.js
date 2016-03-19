class Build {
    constructor(id, number, name, state, startedAt, finishedAt, isPr) {
        this.id = id;
        this.number = number;
        this.name = name;
        this.state = state;
        this.startedAt = startedAt;
        this.finishedAt = finishedAt;
        this.isPr = isPr;
        this.branch = null;
        this.commit = null;
    }

    setCommit(commit) {
        this.commit = commit;
    }

    setBranch(branch) {
        this.branch = branch;
    }

    isBuilding() {
        return this.state === 'started' || this.state === 'created' || this.state === 'received';
    }

    isPassing() {
        return this.state === 'passed' || this.state === 'canceled';
    }

    isFailed() {
        return this.state === 'failed' || this.state === 'error' || this.state === 'errored';
    }

    hasRecentError() {
        var dt = new Date(Date.parse(this.finishedAt));
        var now = new Date();

        var diff = now.getTime() - dt.getTime();

        var minutes = Math.floor((diff / (60000)));

        if (minutes < 5) {
            return true;
        }
        return false;
    }
}
