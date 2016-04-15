'use strict';

import {Component, Output, Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// PIPES
import {StateClass} from '../../pipes/state.class';
import {Gravatar} from '../../pipes/gravatar';
import {TimeAgo} from '../../pipes/timeago';

// TEMPLATE
import appTemplate from './status.success.html';
@Component({
    selector: 'success-item',
    template: appTemplate,
    pipes: [StateClass, Gravatar, TimeAgo]
})

export class StatusSuccessComponent {
    @Input()
    build;
    getBuild() {
        return this.build.val;
    }

    getClasses() {
        let index = this.build.index;
        if(index <=3) {
            return 'col-md-4 first-row';
        } else if(index > 3 && index <=7) {
            return 'col-md-3 second-row';
        } else if(index >7 && index <=13) {
            return 'col-md-2 third-row';
        } else {
            return 'col-md-1 other-rows';
        }
    }
}
