'use strict';
import {Injectable} from 'angular2/core';
import {Http, Response,Headers, RequestOptions} from 'angular2/http';
import {Settings} from './settings';
import 'rxjs/Rx';

// Models.
import {Build} from '../components/Builds/build.model'
import {Commit} from '../components/Builds/commit.model'
import {Project} from '../components/Project/project.model'
@Injectable()

export class Request {
    constructor(http:Http, settings:Settings) {
        this.http = http;
        this.settings = settings;
    }

    loadProjectData(settings, isPrivate) {
        var uri = this.settings.getUri(settings) + 'repos/' + encodeURI(settings.name) + '?active=true';
        //var uri = "./mocks/mock.js?";
        var headers = new Headers({
            'Accept': this.settings.getAcceptHeader(),
            'Authorization': this.settings.getToken(isPrivate, settings.getToken())
        });
        var options = new RequestOptions({headers: headers});

        return this.http.get(uri, options).map(res => {
                let repos = res.json().repos;
                let repositories = [];

                for (let repo of repos) {
                    if (repo.active) {
                        let projectModel = new Project(
                            repo.id,
                            repo.slug,
                            repo.active,
                            repo.description,
                            repo.last_build_started_at,
                            repo.last_build_finished_at,
                            repo.last_build_id,
                            repo.last_build_number,
                            repo.last_build_state
                        );
                        repositories.push(projectModel);
                    }
                }

            return repositories;
            }
        );
    }

    getTravisToken(token) {
        var uri = "https://api.travis-ci.com/auth/github?github_token=" + token;

        var headers = new Headers({'Accept': this.settings.getAcceptHeader()});
        var options = new RequestOptions({headers: headers});

        var params = JSON.stringify({github_token: token});
        return this.http.post(uri, params, options).map(res => res.json());
    }

    getTravisBuilds(settings, slug, isPrivate) {
        var uri = this.settings.getUri(settings) + 'repos/' + encodeURI(settings.getName()) + "/" + encodeURI(slug) + "/builds?event_type=push";
        var uri = "./mocks/mockbuild.js?";
        var headers = new Headers({
            'Accept': this.settings.getAcceptHeader(),
            'Authorization': this.settings.getToken(isPrivate, settings.getToken())
        });
        var options = new RequestOptions({headers: headers});

        return this.http.get(uri, options).map(res => {
            let buildsData = res.json().builds;
            let commitsData = res.json().commits;
            let builds = [];

            for (let index in buildsData) {
                let data = buildsData[index];
                let commit = commitsData[index];
                let commitModel = new Commit(
                    commit.id,
                    commit.branch,
                    commit.committer_email,
                    commit.committer_name,
                    commit.message,
                    commit.pull_request_number
                );
                let build = new Build(
                    data.id,
                    data.number,
                    slug,
                    data.state,
                    data.started_at,
                    data.finished_at,
                    data.pull_request_number !== null,
                    commitModel
                );
                console.debug(build);
                builds.push(build);
            }
            return builds;
        });
    }

    handleError(error:Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
