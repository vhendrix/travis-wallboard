import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import appTemplate from './menu.component.html';

@Component({
    selector: 'top-menu',
    template: appTemplate
})
export class Menu {
}
