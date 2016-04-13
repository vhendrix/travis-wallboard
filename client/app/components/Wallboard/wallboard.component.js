import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import appTemplate from './wallboard.component.html';
import {TestComponent} from '../Test/test.component';
import {SettingsComponent} from '../Settings/settings.component';
import {ProjectSettingsComponent} from '../Settings/Project/projectsettings.component';
import {UserSettingsComponent} from '../Settings/User/usersettings.component';
import {ReposComponent} from '../Repos/repos.component';
import {ProjectComponent} from '../Project/project.component';

@Component({
    selector: 'wall-board',
    template: appTemplate,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig(
    [
        {path: '/repos', name: 'Repos', component: ReposComponent},
        {path: '/settings', name: 'Settings', component: SettingsComponent},
        {path: '/project-settings', name: 'PRoject settings', component: ProjectSettingsComponent},
        {path: '/user-settings', name: 'User-Settings', component: UserSettingsComponent},
        {path: '/project/:repo/:project', name: 'Projects', component: ProjectComponent},
        {path: '/project/:repo/:project/:private', name: 'Projects', component: ProjectComponent}
    ]
)

export class Wallboard {
}



