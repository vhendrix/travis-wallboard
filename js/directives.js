'use strict';

/* Directives */

angular.module('travisWallBoard.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }
    ]
).
    directive('toggleHidden', [function () {
        return function (scope, elm, attrs) {
            console.debug('test');
        };
    }
    ]
);
