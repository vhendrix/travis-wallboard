import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Settings} from './settings';

@Injectable()

export class Request {
    constructor(http:Http, settings:Settings) {
        this.http = http;
        this.settings = settings;
    }

    loadRepoData(name, uri, isPrivate, token) {
        var uri = uri + 'repos/' + name;
        var params = {active: true};
        var headers = {
            'Accept': this.settings.getAcceptHeader(),
            'Authorization': this.settings.getToken(isPrivate, token)
        };

        console.debug(uri);
        console.debug(params);
        console.debug(headers);
    }
}
