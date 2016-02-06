import {Injectable} from 'angular2/core';
import {Http, Response,Headers, RequestOptions} from 'angular2/http';
import {Settings} from './settings';
import 'rxjs/Rx';
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

    getTravisToken(token) {
        var uri = "https://api.travis-ci.com/auth/github?github_token=" + token;

        var headers = new Headers({'Accept': this.settings.getAcceptHeader()});
        var options = new RequestOptions({headers: headers});

        var params = JSON.stringify({github_token: token});
        return this.http.post(uri, params, options).map(res => res.json()).do(data => console.log(data));
    }

    handleError(error:Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
