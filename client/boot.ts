'use strict';
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/lib/browser/zone-microtask';
import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Store} from './app/services/store';
import {Settings} from './app/services/settings';
import {ReposService} from './app/components/Repos/repos.service';
import {Request} from './app/services/request';
import {Menu} from './app/components/Menu/menu.component';
import {Wallboard} from './app/components/Wallboard/wallboard.component';
import {HTTP_PROVIDERS} from 'angular2/http';

if (ENVIRONMENT == 'production') {
    enableProdMode();
}

bootstrap(Menu, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

bootstrap(Wallboard, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    Store,
    Request,
    Settings,
    ReposService,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
