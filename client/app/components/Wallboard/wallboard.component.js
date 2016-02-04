import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import appTemplate from './wallboard.component.html';
import {TestComponent} from '../Test/test.component';
import {SettingsComponent} from '../Settings/settings.component';
@Component({
    selector: 'wall-board',
    template: appTemplate,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig(
    [
        {path: '/repos', name: 'Repos', component: TestComponent},
        {path: '/settings', name: 'Settings', component: SettingsComponent}

    ]
)


export class Wallboard {
}



