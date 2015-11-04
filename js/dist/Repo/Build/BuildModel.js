'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Build = (function () {
    function Build(id, number, name, state, startedAt, finishedAt, isPr) {
        _classCallCheck(this, Build);

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

    _createClass(Build, [{
        key: 'setCommit',
        value: function setCommit(commit) {
            this.commit = commit;
        }
    }, {
        key: 'setBranch',
        value: function setBranch(branch) {
            this.branch = branch;
        }
    }, {
        key: 'isBuilding',
        value: function isBuilding() {
            return this.state === 'started' || this.state === 'created' || this.state === 'received';
        }
    }, {
        key: 'isPassing',
        value: function isPassing() {
            return this.state === 'passed' || this.state === 'canceled';
        }
    }, {
        key: 'isFailed',
        value: function isFailed() {
            return this.state === 'failed' || this.state === 'error' || this.state === 'errored';
        }
    }, {
        key: 'hasRecentError',
        value: function hasRecentError() {
            var dt = new Date(Date.parse(this.finishedAt));
            var now = new Date();

            var diff = now.getTime() - dt.getTime();

            var minutes = Math.floor(diff / 60000);

            if (minutes < 5) {
                return true;
            }
            return false;
        }
    }]);

    return Build;
})();
//# sourceMappingURL=BuildModel.js.map
