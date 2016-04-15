'use strict';

import {Component, Output, Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// COMPONENTS
import {StatusSuccessComponent} from './status.success.component';

// PIPES
import {StateClass} from '../../pipes/state.class';
import {Gravatar} from '../../pipes/gravatar';
import {TimeAgo} from '../../pipes/timeago';

// TEMPLATE
import appTemplate from './status.pending.html';
@Component({
    selector: 'pending-item',
    template: appTemplate,
    pipes: [StateClass, Gravatar, TimeAgo]
})

export class StatusPendingComponent extends StatusSuccessComponent{
}
