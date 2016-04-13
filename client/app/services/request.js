'use strict';
import {Injectable} from 'angular2/core';
import {Http, Response,Headers, RequestOptions} from 'angular2/http';
import {Settings} from './settings';
import 'rxjs/Rx';

// Models.
import {Build} from '../components/Builds/build.model'
import {Commit} from '../components/Builds/commit.model'
import {RepoSettings} from '../components/Settings/reposettings.model'
import {Project} from '../components/Project/project.model'
@Injectable()

export class Request {
    constructor(http:Http, settings:Settings) {
        this.http = http;
        this.settings = settings;
    }

    /**
     * Load project data from travis.
     *
     * @param {RepoSettings} settings
     * @returns {Observable<R>}
     */
    loadProjectData(settings:RepoSettings) {
        // Protected does not need repo slug.
        if (settings.isPrivate()) {
            var uri = this.settings.getUri(settings) + 'repos' + '?active=true';
        } else {
            var uri = this.settings.getUri(settings) + 'repos/' + encodeURI(settings.name) + '?active=true';
        }

        var headers = new Headers({
            'Accept': this.settings.getAcceptHeader(),
            'Authorization': this.settings.getToken(settings.isPrivate(), settings.getToken())
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

    /**
     * Fet a travis access token from a git hub token.
     *
     * @param {String} gitHubToken
     * @returns {Observable<R>}
     */
    getTravisToken(gitHubToken:String) {
        var uri = "https://api.travis-ci.com/auth/github?github_token=" + gitHubToken;

        var headers = new Headers({'Accept': this.settings.getAcceptHeader()});
        var options = new RequestOptions({headers: headers});

        var params = JSON.stringify({github_token: gitHubToken});
        return this.http.post(uri, params, options).map(res => res.json());
    }

    /**
     * Retrieve a single travis build.
     *
     * @param {RepoSettings} settings
     * @param {String} slug
     * @param {Integer} buildId
     * @returns {Observable<R>}
     */
    getTravisBuild(settings:RepoSettings, slug:String, buildId) {
        var uri = this.settings.getUri(settings) + 'repos/' + encodeURI(slug) + "/builds/" + buildId;

        var headers = new Headers({
            'Accept': this.settings.getAcceptHeader(),
            'Authorization': this.settings.getToken(settings.isPrivate(), settings.getToken())
        });
        var options = new RequestOptions({headers: headers});

        return this.http.get(uri, options).map(res => {
            return this.createBuildModel(res.json().build, res.json().commit, slug);
        });
    }

    /**
     *
     * @param {RepoSettings} settings
     * @param {String} slug
     *
     * @param all
     * @returns {Observable<R>}
     */
    getTravisBuilds(settings:RepoSettings, slug:String, all) {
        if (typeof all === 'undefined') {
            all = false;
        }
        var uri = this.settings.getUri(settings) + 'repos/' + encodeURI(settings.getName()) + "/" + encodeURI(slug) + "/builds";

        if (all == false) {
            uri += '?event_type=push';
        }
        var headers = new Headers({
            'Accept': this.settings.getAcceptHeader(),
            'Authorization': this.settings.getToken(settings.isPrivate(), settings.getToken())
        });
        var options = new RequestOptions({headers: headers});

        return this.http.get(uri, options).map(res => {
            let buildsData = res.json().builds;
            let commitsData = res.json().commits;
            let builds = [];

            for (let index in buildsData) {
                let build = this.createBuildModel(buildsData[index], commitsData[index], slug);
                builds.push(build);
            }
            return builds;
        });
    }

    /**
     * Create a build mode from the retreived data.
     *
     * @param {Object} data
     * @param {Object} commit
     *
     * @returns {Build} Build object.
     */
    createBuildModel(data, commit, slug) {
        let commitModel = new Commit(
            commit.id,
            commit.branch,
            commit.committer_email,
            commit.committer_name,
            commit.message,
            commit.pull_request_number
        );
        return new Build(
            data.id,
            data.number,
            slug,
            data.state,
            data.started_at,
            data.finished_at,
            data.pull_request_number !== null,
            data.pull_request_number,
            data.event_type,
            commitModel
        );
    }

    handleError(error:Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
