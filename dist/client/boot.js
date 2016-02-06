webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(3);
	
	__webpack_require__(26);
	
	var _browser = __webpack_require__(46);
	
	var _core = __webpack_require__(67);
	
	var _router = __webpack_require__(262);
	
	var _store = __webpack_require__(286);
	
	var _settings = __webpack_require__(287);
	
	var _request = __webpack_require__(288);
	
	var _menu = __webpack_require__(304);
	
	var _wallboard = __webpack_require__(306);
	
	var _http = __webpack_require__(289);
	
	if (false) {
	    (0, _core.enableProdMode)();
	}
	
	(0, _browser.bootstrap)(_menu.Menu, [_http.HTTP_PROVIDERS, _router.ROUTER_PROVIDERS, (0, _core.provide)(_router.LocationStrategy, { useClass: _router.HashLocationStrategy })]);
	
	(0, _browser.bootstrap)(_wallboard.Wallboard, [_http.HTTP_PROVIDERS, _router.ROUTER_PROVIDERS, _store.Store, _request.Request, _settings.Settings, (0, _core.provide)(_router.LocationStrategy, { useClass: _router.HashLocationStrategy })]);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Store = exports.Store = function () {
	    function Store() {
	        _classCallCheck(this, Store);
	
	        this.useLocalStorage = false;
	
	        this.useLocalStorage = this.hasLocalStorage();
	    }
	
	    /**
	     * Gets a cookie for the given name.
	     *
	     * @param name
	     * @returns {*}
	     */
	
	    _createClass(Store, [{
	        key: 'getCookie',
	        value: function getCookie(name) {
	            return JSON.parse($.cookie(name));
	        }
	
	        /**
	         * Sets a cookie to the given name.
	         *
	         * @param name
	         * @param value
	         * @param days
	         */
	
	    }, {
	        key: 'setCookie',
	        value: function setCookie(name, value, days) {
	            if (typeof value !== "string") {
	                value = JSON.stringify(value);
	            }
	            $.cookie(name, value, { expires: days, path: '/' });
	        }
	    }, {
	        key: 'setToLocalStorage',
	        value: function setToLocalStorage(name, value) {
	            console.debug(value);
	            if (typeof value !== "string") {
	                value = JSON.stringify(value);
	            }
	            window.localStorage.setItem(name, value);
	        }
	    }, {
	        key: 'getFromLocalStorage',
	        value: function getFromLocalStorage(name) {
	            var data = window.localStorage.getItem(name);
	
	            try {
	                return JSON.parse(data);
	            } catch (e) {
	                return data;
	            }
	        }
	    }, {
	        key: 'getValue',
	        value: function getValue(name) {
	            if (this.hasLocalStorage()) {
	                return this.getFromLocalStorage(name);
	            } else {
	                return this.getCookie(name);
	            }
	        }
	    }, {
	        key: 'setValue',
	        value: function setValue(name, value) {
	            if (this.hasLocalStorage()) {
	                return this.setToLocalStorage(name, value);
	            } else {
	                return this.setCookie(name, value, 700);
	            }
	        }
	    }, {
	        key: 'hasLocalStorage',
	        value: function hasLocalStorage() {
	            return typeof Storage !== "undefined";
	        }
	    }]);
	
	    return Store;
	}();

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Settings = undefined;
	
	var _core = __webpack_require__(67);
	
	var _store = __webpack_require__(286);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Settings = exports.Settings = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
	    function Settings() {
	        _classCallCheck(this, Settings);
	
	        this.useMocks = false;
	        this.private_uri = 'https://api.travis-ci.com/';
	        this.opensource_uri = 'https://api.travis-ci.org/';
	        this.users = [];
	        this.projects = {};
	        this.repos = {};
	        this.slug = "";
	        this.acceptHeader = 'application/vnd.travis-ci.2+json';
	    }
	    //holds what repos use what connection data.
	
	    _createClass(Settings, [{
	        key: 'setUsers',
	        value: function setUsers($users) {
	            this.users = $users;
	            TW.helpers.setCookie('userData', JSON.stringify($users), 750);
	        }
	    }, {
	        key: 'setProjects',
	        value: function setProjects($projects) {
	            this.projects = $projects;
	            TW.helpers.setCookie('projectData', JSON.stringify($projects), 750);
	        }
	    }, {
	        key: 'getToken',
	        value: function getToken(isPrivate, token) {
	            if (isPrivate === "YES") {
	                return 'token ' + token;
	            } else {
	                return null;
	            }
	        }
	    }, {
	        key: 'getAcceptHeader',
	        value: function getAcceptHeader() {
	            return this.acceptHeader;
	        }
	    }, {
	        key: 'getSlug',
	        value: function getSlug() {
	            return this.slug;
	        }
	    }, {
	        key: 'getUri',
	        value: function getUri($user) {
	            if (this.useMocks) {
	                return '/Mocks/MockServer.php/?slug=';
	            } else if ($user.isPrivate === "YES") {
	                return this.private_uri;
	            } else {
	                return this.opensource_uri;
	            }
	        }
	    }, {
	        key: 'loadUserData',
	        value: function loadUserData() {
	            data.users = JSON.parse(TW.helpers.getCookie('userData'));
	        }
	    }, {
	        key: 'loadProjectData',
	        value: function loadProjectData() {
	            data.projects = JSON.parse(TW.helpers.getCookie('projectData'));
	            if (data.projects == null) {
	                data.projects = {};
	            }
	        }
	    }]);
	
	    return Settings;
	}()) || _class);

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Request = undefined;
	
	var _core = __webpack_require__(67);
	
	var _http = __webpack_require__(289);
	
	var _settings = __webpack_require__(287);
	
	__webpack_require__(321);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Request = exports.Request = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
	    function Request(http, settings) {
	        _classCallCheck(this, Request);
	
	        this.http = http;
	        this.settings = settings;
	    }
	
	    _createClass(Request, [{
	        key: 'loadRepoData',
	        value: function loadRepoData(name, uri, isPrivate, token) {
	            var uri = uri + 'repos/' + name;
	            var params = { active: true };
	            var headers = {
	                'Accept': this.settings.getAcceptHeader(),
	                'Authorization': this.settings.getToken(isPrivate, token)
	            };
	
	            console.debug(uri);
	            console.debug(params);
	            console.debug(headers);
	        }
	    }, {
	        key: 'getTravisToken',
	        value: function getTravisToken(token) {
	            var uri = "https://api.travis-ci.com/auth/github?github_token=" + token;
	
	            var headers = new _http.Headers({ 'Accept': this.settings.getAcceptHeader() });
	            var options = new _http.RequestOptions({ headers: headers });
	
	            var params = JSON.stringify({ github_token: token });
	            return this.http.post(uri, params, options).map(function (res) {
	                return res.json();
	            }).do(function (data) {
	                return console.log(data);
	            });
	        }
	    }, {
	        key: 'handleError',
	        value: function handleError(error) {
	            // in a real world app, we may send the server to some remote logging infrastructure
	            // instead of just logging it to the console
	            console.error(error);
	            return Observable.throw(error.json().error || 'Server error');
	        }
	    }]);
	
	    return Request;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_http.Http, _settings.Settings], Request);

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * @module
	 * @description
	 * The http module provides services to perform http requests. To get started, see the {@link Http}
	 * class.
	 */
	var core_1 = __webpack_require__(67);
	var http_1 = __webpack_require__(290);
	var xhr_backend_1 = __webpack_require__(298);
	var jsonp_backend_1 = __webpack_require__(302);
	var browser_xhr_1 = __webpack_require__(301);
	var browser_jsonp_1 = __webpack_require__(303);
	var base_request_options_1 = __webpack_require__(296);
	var base_response_options_1 = __webpack_require__(300);
	var static_request_1 = __webpack_require__(292);
	exports.Request = static_request_1.Request;
	var static_response_1 = __webpack_require__(299);
	exports.Response = static_response_1.Response;
	var interfaces_1 = __webpack_require__(291);
	exports.Connection = interfaces_1.Connection;
	exports.ConnectionBackend = interfaces_1.ConnectionBackend;
	var browser_xhr_2 = __webpack_require__(301);
	exports.BrowserXhr = browser_xhr_2.BrowserXhr;
	var base_request_options_2 = __webpack_require__(296);
	exports.BaseRequestOptions = base_request_options_2.BaseRequestOptions;
	exports.RequestOptions = base_request_options_2.RequestOptions;
	var base_response_options_2 = __webpack_require__(300);
	exports.BaseResponseOptions = base_response_options_2.BaseResponseOptions;
	exports.ResponseOptions = base_response_options_2.ResponseOptions;
	var xhr_backend_2 = __webpack_require__(298);
	exports.XHRBackend = xhr_backend_2.XHRBackend;
	exports.XHRConnection = xhr_backend_2.XHRConnection;
	var jsonp_backend_2 = __webpack_require__(302);
	exports.JSONPBackend = jsonp_backend_2.JSONPBackend;
	exports.JSONPConnection = jsonp_backend_2.JSONPConnection;
	var http_2 = __webpack_require__(290);
	exports.Http = http_2.Http;
	exports.Jsonp = http_2.Jsonp;
	var headers_1 = __webpack_require__(293);
	exports.Headers = headers_1.Headers;
	var enums_1 = __webpack_require__(295);
	exports.ResponseType = enums_1.ResponseType;
	exports.ReadyState = enums_1.ReadyState;
	exports.RequestMethod = enums_1.RequestMethod;
	var url_search_params_1 = __webpack_require__(297);
	exports.URLSearchParams = url_search_params_1.URLSearchParams;
	/**
	 * Provides a basic set of injectables to use the {@link Http} service in any application.
	 *
	 * The `HTTP_PROVIDERS` should be included either in a component's injector,
	 * or in the root injector when bootstrapping an application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/snj7Nv?p=preview))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {NgFor} from 'angular2/common';
	 * import {HTTP_PROVIDERS, Http} from 'angular2/http';
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [HTTP_PROVIDERS],
	 *   template: `
	 *     <div>
	 *       <h1>People</h1>
	 *       <ul>
	 *         <li *ngFor="#person of people">
	 *           {{person.name}}
	 *         </li>
	 *       </ul>
	 *     </div>
	 *   `,
	 *   directives: [NgFor]
	 * })
	 * export class App {
	 *   people: Object[];
	 *   constructor(http:Http) {
	 *     http.get('people.json').subscribe(res => {
	 *       this.people = res.json();
	 *     });
	 *   }
	 *   active:boolean = false;
	 *   toggleActiveState() {
	 *     this.active = !this.active;
	 *   }
	 * }
	 *
	 * bootstrap(App)
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * The primary public API included in `HTTP_PROVIDERS` is the {@link Http} class.
	 * However, other providers required by `Http` are included,
	 * which may be beneficial to override in certain cases.
	 *
	 * The providers included in `HTTP_PROVIDERS` include:
	 *  * {@link Http}
	 *  * {@link XHRBackend}
	 *  * `BrowserXHR` - Private factory to create `XMLHttpRequest` instances
	 *  * {@link RequestOptions} - Bound to {@link BaseRequestOptions} class
	 *  * {@link ResponseOptions} - Bound to {@link BaseResponseOptions} class
	 *
	 * There may be cases where it makes sense to extend the base request options,
	 * such as to add a search string to be appended to all URLs.
	 * To accomplish this, a new provider for {@link RequestOptions} should
	 * be added in the same injector as `HTTP_PROVIDERS`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/aCMEXi?p=preview))
	 *
	 * ```
	 * import {provide} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
	 *
	 * class MyOptions extends BaseRequestOptions {
	 *   search: string = 'coreTeam=true';
	 * }
	 *
	 * bootstrap(App, [HTTP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})])
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * Likewise, to use a mock backend for unit tests, the {@link XHRBackend}
	 * provider should be bound to {@link MockBackend}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/7LWALD?p=preview))
	 *
	 * ```
	 * import {provide} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {HTTP_PROVIDERS, Http, Response, XHRBackend} from 'angular2/http';
	 * import {MockBackend} from 'angular2/http/testing';
	 *
	 * var people = [{name: 'Jeff'}, {name: 'Tobias'}];
	 *
	 * var injector = Injector.resolveAndCreate([
	 *   HTTP_PROVIDERS,
	 *   MockBackend,
	 *   provide(XHRBackend, {useExisting: MockBackend})
	 * ]);
	 * var http = injector.get(Http);
	 * var backend = injector.get(MockBackend);
	 *
	 * // Listen for any new requests
	 * backend.connections.observer({
	 *   next: connection => {
	 *     var response = new Response({body: people});
	 *     setTimeout(() => {
	 *       // Send a response to the request
	 *       connection.mockRespond(response);
	 *     });
	 *   });
	 *
	 * http.get('people.json').observer({
	 *   next: res => {
	 *     // Response came from mock backend
	 *     console.log('first person', res.json()[0].name);
	 *   }
	 * });
	 * ```
	 */
	exports.HTTP_PROVIDERS = [
	    // TODO(pascal): use factory type annotations once supported in DI
	    // issue: https://github.com/angular/angular/issues/3183
	    core_1.provide(http_1.Http, {
	        useFactory: function (xhrBackend, requestOptions) { return new http_1.Http(xhrBackend, requestOptions); },
	        deps: [xhr_backend_1.XHRBackend, base_request_options_1.RequestOptions]
	    }),
	    browser_xhr_1.BrowserXhr,
	    core_1.provide(base_request_options_1.RequestOptions, { useClass: base_request_options_1.BaseRequestOptions }),
	    core_1.provide(base_response_options_1.ResponseOptions, { useClass: base_response_options_1.BaseResponseOptions }),
	    xhr_backend_1.XHRBackend
	];
	/**
	 * See {@link HTTP_PROVIDERS} instead.
	 *
	 * @deprecated
	 */
	exports.HTTP_BINDINGS = exports.HTTP_PROVIDERS;
	/**
	 * Provides a basic set of providers to use the {@link Jsonp} service in any application.
	 *
	 * The `JSONP_PROVIDERS` should be included either in a component's injector,
	 * or in the root injector when bootstrapping an application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/vmeN4F?p=preview))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {NgFor} from 'angular2/common';
	 * import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [JSONP_PROVIDERS],
	 *   template: `
	 *     <div>
	 *       <h1>People</h1>
	 *       <ul>
	 *         <li *ngFor="#person of people">
	 *           {{person.name}}
	 *         </li>
	 *       </ul>
	 *     </div>
	 *   `,
	 *   directives: [NgFor]
	 * })
	 * export class App {
	 *   people: Array<Object>;
	 *   constructor(jsonp:Jsonp) {
	 *     jsonp.request('people.json').subscribe(res => {
	 *       this.people = res.json();
	 *     })
	 *   }
	 * }
	 * ```
	 *
	 * The primary public API included in `JSONP_PROVIDERS` is the {@link Jsonp} class.
	 * However, other providers required by `Jsonp` are included,
	 * which may be beneficial to override in certain cases.
	 *
	 * The providers included in `JSONP_PROVIDERS` include:
	 *  * {@link Jsonp}
	 *  * {@link JSONPBackend}
	 *  * `BrowserJsonp` - Private factory
	 *  * {@link RequestOptions} - Bound to {@link BaseRequestOptions} class
	 *  * {@link ResponseOptions} - Bound to {@link BaseResponseOptions} class
	 *
	 * There may be cases where it makes sense to extend the base request options,
	 * such as to add a search string to be appended to all URLs.
	 * To accomplish this, a new provider for {@link RequestOptions} should
	 * be added in the same injector as `JSONP_PROVIDERS`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/TFug7x?p=preview))
	 *
	 * ```
	 * import {provide} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {JSONP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
	 *
	 * class MyOptions extends BaseRequestOptions {
	 *   search: string = 'coreTeam=true';
	 * }
	 *
	 * bootstrap(App, [JSONP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})])
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * Likewise, to use a mock backend for unit tests, the {@link JSONPBackend}
	 * provider should be bound to {@link MockBackend}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/HDqZWL?p=preview))
	 *
	 * ```
	 * import {provide, Injector} from 'angular2/core';
	 * import {JSONP_PROVIDERS, Jsonp, Response, JSONPBackend} from 'angular2/http';
	 * import {MockBackend} from 'angular2/http/testing';
	 *
	 * var people = [{name: 'Jeff'}, {name: 'Tobias'}];
	 * var injector = Injector.resolveAndCreate([
	 *   JSONP_PROVIDERS,
	 *   MockBackend,
	 *   provide(JSONPBackend, {useExisting: MockBackend})
	 * ]);
	 * var jsonp = injector.get(Jsonp);
	 * var backend = injector.get(MockBackend);
	 *
	 * // Listen for any new requests
	 * backend.connections.observer({
	 *   next: connection => {
	 *     var response = new Response({body: people});
	 *     setTimeout(() => {
	 *       // Send a response to the request
	 *       connection.mockRespond(response);
	 *     });
	 *   });
	
	 * jsonp.get('people.json').observer({
	 *   next: res => {
	 *     // Response came from mock backend
	 *     console.log('first person', res.json()[0].name);
	 *   }
	 * });
	 * ```
	 */
	exports.JSONP_PROVIDERS = [
	    // TODO(pascal): use factory type annotations once supported in DI
	    // issue: https://github.com/angular/angular/issues/3183
	    core_1.provide(http_1.Jsonp, {
	        useFactory: function (jsonpBackend, requestOptions) { return new http_1.Jsonp(jsonpBackend, requestOptions); },
	        deps: [jsonp_backend_1.JSONPBackend, base_request_options_1.RequestOptions]
	    }),
	    browser_jsonp_1.BrowserJsonp,
	    core_1.provide(base_request_options_1.RequestOptions, { useClass: base_request_options_1.BaseRequestOptions }),
	    core_1.provide(base_response_options_1.ResponseOptions, { useClass: base_response_options_1.BaseResponseOptions }),
	    core_1.provide(jsonp_backend_1.JSONPBackend, { useClass: jsonp_backend_1.JSONPBackend_ })
	];
	/**
	 * See {@link JSONP_PROVIDERS} instead.
	 *
	 * @deprecated
	 */
	exports.JSON_BINDINGS = exports.JSONP_PROVIDERS;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL2h0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQscUJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsNEJBQXdDLGlDQUFpQyxDQUFDLENBQUE7QUFDMUUsOEJBQTJELG1DQUFtQyxDQUFDLENBQUE7QUFDL0YsNEJBQXlCLGlDQUFpQyxDQUFDLENBQUE7QUFDM0QsOEJBQTJCLG1DQUFtQyxDQUFDLENBQUE7QUFDL0QscUNBQWlELGlDQUFpQyxDQUFDLENBQUE7QUFFbkYsc0NBQW1ELGtDQUFrQyxDQUFDLENBQUE7QUFDdEYsK0JBQXNCLDJCQUEyQixDQUFDO0FBQTFDLDJDQUEwQztBQUNsRCxnQ0FBdUIsNEJBQTRCLENBQUM7QUFBNUMsOENBQTRDO0FBRXBELDJCQUtPLHVCQUF1QixDQUFDO0FBRjdCLDZDQUFVO0FBQ1YsMkRBQzZCO0FBRS9CLDRCQUF5QixpQ0FBaUMsQ0FBQztBQUFuRCw4Q0FBbUQ7QUFDM0QscUNBQWlELGlDQUFpQyxDQUFDO0FBQTNFLHVFQUFrQjtBQUFFLCtEQUF1RDtBQUNuRixzQ0FBbUQsa0NBQWtDLENBQUM7QUFBOUUsMEVBQW1CO0FBQUUsa0VBQXlEO0FBQ3RGLDRCQUF3QyxpQ0FBaUMsQ0FBQztBQUFsRSw4Q0FBVTtBQUFFLG9EQUFzRDtBQUMxRSw4QkFBNEMsbUNBQW1DLENBQUM7QUFBeEUsb0RBQVk7QUFBRSwwREFBMEQ7QUFDaEYscUJBQTBCLGlCQUFpQixDQUFDO0FBQXBDLDJCQUFJO0FBQUUsNkJBQThCO0FBRTVDLHdCQUFzQixvQkFBb0IsQ0FBQztBQUFuQyxvQ0FBbUM7QUFFM0Msc0JBQXNELGtCQUFrQixDQUFDO0FBQWpFLDRDQUFZO0FBQUUsd0NBQVU7QUFBRSw4Q0FBdUM7QUFDekUsa0NBQThCLDhCQUE4QixDQUFDO0FBQXJELDhEQUFxRDtBQUU3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1IRztBQUNVLHNCQUFjLEdBQVU7SUFDbkMsa0VBQWtFO0lBQ2xFLHdEQUF3RDtJQUN4RCxjQUFPLENBQUMsV0FBSSxFQUNKO1FBQ0UsVUFBVSxFQUFFLFVBQUMsVUFBVSxFQUFFLGNBQWMsSUFBSyxPQUFBLElBQUksV0FBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsRUFBcEMsQ0FBb0M7UUFDaEYsSUFBSSxFQUFFLENBQUMsd0JBQVUsRUFBRSxxQ0FBYyxDQUFDO0tBQ25DLENBQUM7SUFDVix3QkFBVTtJQUNWLGNBQU8sQ0FBQyxxQ0FBYyxFQUFFLEVBQUMsUUFBUSxFQUFFLHlDQUFrQixFQUFDLENBQUM7SUFDdkQsY0FBTyxDQUFDLHVDQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsMkNBQW1CLEVBQUMsQ0FBQztJQUN6RCx3QkFBVTtDQUNYLENBQUM7QUFFRjs7OztHQUlHO0FBQ1UscUJBQWEsR0FBRyxzQkFBYyxDQUFDO0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5R0c7QUFDVSx1QkFBZSxHQUFVO0lBQ3BDLGtFQUFrRTtJQUNsRSx3REFBd0Q7SUFDeEQsY0FBTyxDQUFDLFlBQUssRUFDTDtRQUNFLFVBQVUsRUFBRSxVQUFDLFlBQVksRUFBRSxjQUFjLElBQUssT0FBQSxJQUFJLFlBQUssQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLEVBQXZDLENBQXVDO1FBQ3JGLElBQUksRUFBRSxDQUFDLDRCQUFZLEVBQUUscUNBQWMsQ0FBQztLQUNyQyxDQUFDO0lBQ1YsNEJBQVk7SUFDWixjQUFPLENBQUMscUNBQWMsRUFBRSxFQUFDLFFBQVEsRUFBRSx5Q0FBa0IsRUFBQyxDQUFDO0lBQ3ZELGNBQU8sQ0FBQyx1Q0FBZSxFQUFFLEVBQUMsUUFBUSxFQUFFLDJDQUFtQixFQUFDLENBQUM7SUFDekQsY0FBTyxDQUFDLDRCQUFZLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQWEsRUFBQyxDQUFDO0NBQ2pELENBQUM7QUFFRjs7OztHQUlHO0FBQ1UscUJBQWEsR0FBRyx1QkFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBodHRwIG1vZHVsZSBwcm92aWRlcyBzZXJ2aWNlcyB0byBwZXJmb3JtIGh0dHAgcmVxdWVzdHMuIFRvIGdldCBzdGFydGVkLCBzZWUgdGhlIHtAbGluayBIdHRwfVxuICogY2xhc3MuXG4gKi9cbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBKc29ucH0gZnJvbSAnLi9zcmMvaHR0cC9odHRwJztcbmltcG9ydCB7WEhSQmFja2VuZCwgWEhSQ29ubmVjdGlvbn0gZnJvbSAnLi9zcmMvaHR0cC9iYWNrZW5kcy94aHJfYmFja2VuZCc7XG5pbXBvcnQge0pTT05QQmFja2VuZCwgSlNPTlBCYWNrZW5kXywgSlNPTlBDb25uZWN0aW9ufSBmcm9tICcuL3NyYy9odHRwL2JhY2tlbmRzL2pzb25wX2JhY2tlbmQnO1xuaW1wb3J0IHtCcm93c2VyWGhyfSBmcm9tICcuL3NyYy9odHRwL2JhY2tlbmRzL2Jyb3dzZXJfeGhyJztcbmltcG9ydCB7QnJvd3Nlckpzb25wfSBmcm9tICcuL3NyYy9odHRwL2JhY2tlbmRzL2Jyb3dzZXJfanNvbnAnO1xuaW1wb3J0IHtCYXNlUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICcuL3NyYy9odHRwL2Jhc2VfcmVxdWVzdF9vcHRpb25zJztcbmltcG9ydCB7Q29ubmVjdGlvbkJhY2tlbmR9IGZyb20gJy4vc3JjL2h0dHAvaW50ZXJmYWNlcyc7XG5pbXBvcnQge0Jhc2VSZXNwb25zZU9wdGlvbnMsIFJlc3BvbnNlT3B0aW9uc30gZnJvbSAnLi9zcmMvaHR0cC9iYXNlX3Jlc3BvbnNlX29wdGlvbnMnO1xuZXhwb3J0IHtSZXF1ZXN0fSBmcm9tICcuL3NyYy9odHRwL3N0YXRpY19yZXF1ZXN0JztcbmV4cG9ydCB7UmVzcG9uc2V9IGZyb20gJy4vc3JjL2h0dHAvc3RhdGljX3Jlc3BvbnNlJztcblxuZXhwb3J0IHtcbiAgUmVxdWVzdE9wdGlvbnNBcmdzLFxuICBSZXNwb25zZU9wdGlvbnNBcmdzLFxuICBDb25uZWN0aW9uLFxuICBDb25uZWN0aW9uQmFja2VuZFxufSBmcm9tICcuL3NyYy9odHRwL2ludGVyZmFjZXMnO1xuXG5leHBvcnQge0Jyb3dzZXJYaHJ9IGZyb20gJy4vc3JjL2h0dHAvYmFja2VuZHMvYnJvd3Nlcl94aHInO1xuZXhwb3J0IHtCYXNlUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICcuL3NyYy9odHRwL2Jhc2VfcmVxdWVzdF9vcHRpb25zJztcbmV4cG9ydCB7QmFzZVJlc3BvbnNlT3B0aW9ucywgUmVzcG9uc2VPcHRpb25zfSBmcm9tICcuL3NyYy9odHRwL2Jhc2VfcmVzcG9uc2Vfb3B0aW9ucyc7XG5leHBvcnQge1hIUkJhY2tlbmQsIFhIUkNvbm5lY3Rpb259IGZyb20gJy4vc3JjL2h0dHAvYmFja2VuZHMveGhyX2JhY2tlbmQnO1xuZXhwb3J0IHtKU09OUEJhY2tlbmQsIEpTT05QQ29ubmVjdGlvbn0gZnJvbSAnLi9zcmMvaHR0cC9iYWNrZW5kcy9qc29ucF9iYWNrZW5kJztcbmV4cG9ydCB7SHR0cCwgSnNvbnB9IGZyb20gJy4vc3JjL2h0dHAvaHR0cCc7XG5cbmV4cG9ydCB7SGVhZGVyc30gZnJvbSAnLi9zcmMvaHR0cC9oZWFkZXJzJztcblxuZXhwb3J0IHtSZXNwb25zZVR5cGUsIFJlYWR5U3RhdGUsIFJlcXVlc3RNZXRob2R9IGZyb20gJy4vc3JjL2h0dHAvZW51bXMnO1xuZXhwb3J0IHtVUkxTZWFyY2hQYXJhbXN9IGZyb20gJy4vc3JjL2h0dHAvdXJsX3NlYXJjaF9wYXJhbXMnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgYmFzaWMgc2V0IG9mIGluamVjdGFibGVzIHRvIHVzZSB0aGUge0BsaW5rIEh0dHB9IHNlcnZpY2UgaW4gYW55IGFwcGxpY2F0aW9uLlxuICpcbiAqIFRoZSBgSFRUUF9QUk9WSURFUlNgIHNob3VsZCBiZSBpbmNsdWRlZCBlaXRoZXIgaW4gYSBjb21wb25lbnQncyBpbmplY3RvcixcbiAqIG9yIGluIHRoZSByb290IGluamVjdG9yIHdoZW4gYm9vdHN0cmFwcGluZyBhbiBhcHBsaWNhdGlvbi5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvc25qN052P3A9cHJldmlldykpXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG4gKiBpbXBvcnQge05nRm9yfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuICogaW1wb3J0IHtIVFRQX1BST1ZJREVSUywgSHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgcHJvdmlkZXJzOiBbSFRUUF9QUk9WSURFUlNdLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8aDE+UGVvcGxlPC9oMT5cbiAqICAgICAgIDx1bD5cbiAqICAgICAgICAgPGxpICpuZ0Zvcj1cIiNwZXJzb24gb2YgcGVvcGxlXCI+XG4gKiAgICAgICAgICAge3twZXJzb24ubmFtZX19XG4gKiAgICAgICAgIDwvbGk+XG4gKiAgICAgICA8L3VsPlxuICogICAgIDwvZGl2PlxuICogICBgLFxuICogICBkaXJlY3RpdmVzOiBbTmdGb3JdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiAgIHBlb3BsZTogT2JqZWN0W107XG4gKiAgIGNvbnN0cnVjdG9yKGh0dHA6SHR0cCkge1xuICogICAgIGh0dHAuZ2V0KCdwZW9wbGUuanNvbicpLnN1YnNjcmliZShyZXMgPT4ge1xuICogICAgICAgdGhpcy5wZW9wbGUgPSByZXMuanNvbigpO1xuICogICAgIH0pO1xuICogICB9XG4gKiAgIGFjdGl2ZTpib29sZWFuID0gZmFsc2U7XG4gKiAgIHRvZ2dsZUFjdGl2ZVN0YXRlKCkge1xuICogICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlO1xuICogICB9XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcClcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICogYGBgXG4gKlxuICogVGhlIHByaW1hcnkgcHVibGljIEFQSSBpbmNsdWRlZCBpbiBgSFRUUF9QUk9WSURFUlNgIGlzIHRoZSB7QGxpbmsgSHR0cH0gY2xhc3MuXG4gKiBIb3dldmVyLCBvdGhlciBwcm92aWRlcnMgcmVxdWlyZWQgYnkgYEh0dHBgIGFyZSBpbmNsdWRlZCxcbiAqIHdoaWNoIG1heSBiZSBiZW5lZmljaWFsIHRvIG92ZXJyaWRlIGluIGNlcnRhaW4gY2FzZXMuXG4gKlxuICogVGhlIHByb3ZpZGVycyBpbmNsdWRlZCBpbiBgSFRUUF9QUk9WSURFUlNgIGluY2x1ZGU6XG4gKiAgKiB7QGxpbmsgSHR0cH1cbiAqICAqIHtAbGluayBYSFJCYWNrZW5kfVxuICogICogYEJyb3dzZXJYSFJgIC0gUHJpdmF0ZSBmYWN0b3J5IHRvIGNyZWF0ZSBgWE1MSHR0cFJlcXVlc3RgIGluc3RhbmNlc1xuICogICoge0BsaW5rIFJlcXVlc3RPcHRpb25zfSAtIEJvdW5kIHRvIHtAbGluayBCYXNlUmVxdWVzdE9wdGlvbnN9IGNsYXNzXG4gKiAgKiB7QGxpbmsgUmVzcG9uc2VPcHRpb25zfSAtIEJvdW5kIHRvIHtAbGluayBCYXNlUmVzcG9uc2VPcHRpb25zfSBjbGFzc1xuICpcbiAqIFRoZXJlIG1heSBiZSBjYXNlcyB3aGVyZSBpdCBtYWtlcyBzZW5zZSB0byBleHRlbmQgdGhlIGJhc2UgcmVxdWVzdCBvcHRpb25zLFxuICogc3VjaCBhcyB0byBhZGQgYSBzZWFyY2ggc3RyaW5nIHRvIGJlIGFwcGVuZGVkIHRvIGFsbCBVUkxzLlxuICogVG8gYWNjb21wbGlzaCB0aGlzLCBhIG5ldyBwcm92aWRlciBmb3Ige0BsaW5rIFJlcXVlc3RPcHRpb25zfSBzaG91bGRcbiAqIGJlIGFkZGVkIGluIHRoZSBzYW1lIGluamVjdG9yIGFzIGBIVFRQX1BST1ZJREVSU2AuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L2FDTUVYaT9wPXByZXZpZXcpKVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbiAqIGltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEJhc2VSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICpcbiAqIGNsYXNzIE15T3B0aW9ucyBleHRlbmRzIEJhc2VSZXF1ZXN0T3B0aW9ucyB7XG4gKiAgIHNlYXJjaDogc3RyaW5nID0gJ2NvcmVUZWFtPXRydWUnO1xuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHAsIFtIVFRQX1BST1ZJREVSUywgcHJvdmlkZShSZXF1ZXN0T3B0aW9ucywge3VzZUNsYXNzOiBNeU9wdGlvbnN9KV0pXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqIGBgYFxuICpcbiAqIExpa2V3aXNlLCB0byB1c2UgYSBtb2NrIGJhY2tlbmQgZm9yIHVuaXQgdGVzdHMsIHRoZSB7QGxpbmsgWEhSQmFja2VuZH1cbiAqIHByb3ZpZGVyIHNob3VsZCBiZSBib3VuZCB0byB7QGxpbmsgTW9ja0JhY2tlbmR9LlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC83TFdBTEQ/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7cHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG4gKiBpbXBvcnQge0hUVFBfUFJPVklERVJTLCBIdHRwLCBSZXNwb25zZSwgWEhSQmFja2VuZH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gKiBpbXBvcnQge01vY2tCYWNrZW5kfSBmcm9tICdhbmd1bGFyMi9odHRwL3Rlc3RpbmcnO1xuICpcbiAqIHZhciBwZW9wbGUgPSBbe25hbWU6ICdKZWZmJ30sIHtuYW1lOiAnVG9iaWFzJ31dO1xuICpcbiAqIHZhciBpbmplY3RvciA9IEluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1xuICogICBIVFRQX1BST1ZJREVSUyxcbiAqICAgTW9ja0JhY2tlbmQsXG4gKiAgIHByb3ZpZGUoWEhSQmFja2VuZCwge3VzZUV4aXN0aW5nOiBNb2NrQmFja2VuZH0pXG4gKiBdKTtcbiAqIHZhciBodHRwID0gaW5qZWN0b3IuZ2V0KEh0dHApO1xuICogdmFyIGJhY2tlbmQgPSBpbmplY3Rvci5nZXQoTW9ja0JhY2tlbmQpO1xuICpcbiAqIC8vIExpc3RlbiBmb3IgYW55IG5ldyByZXF1ZXN0c1xuICogYmFja2VuZC5jb25uZWN0aW9ucy5vYnNlcnZlcih7XG4gKiAgIG5leHQ6IGNvbm5lY3Rpb24gPT4ge1xuICogICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZSh7Ym9keTogcGVvcGxlfSk7XG4gKiAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gKiAgICAgICAvLyBTZW5kIGEgcmVzcG9uc2UgdG8gdGhlIHJlcXVlc3RcbiAqICAgICAgIGNvbm5lY3Rpb24ubW9ja1Jlc3BvbmQocmVzcG9uc2UpO1xuICogICAgIH0pO1xuICogICB9KTtcbiAqXG4gKiBodHRwLmdldCgncGVvcGxlLmpzb24nKS5vYnNlcnZlcih7XG4gKiAgIG5leHQ6IHJlcyA9PiB7XG4gKiAgICAgLy8gUmVzcG9uc2UgY2FtZSBmcm9tIG1vY2sgYmFja2VuZFxuICogICAgIGNvbnNvbGUubG9nKCdmaXJzdCBwZXJzb24nLCByZXMuanNvbigpWzBdLm5hbWUpO1xuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgSFRUUF9QUk9WSURFUlM6IGFueVtdID0gW1xuICAvLyBUT0RPKHBhc2NhbCk6IHVzZSBmYWN0b3J5IHR5cGUgYW5ub3RhdGlvbnMgb25jZSBzdXBwb3J0ZWQgaW4gRElcbiAgLy8gaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzMxODNcbiAgcHJvdmlkZShIdHRwLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6ICh4aHJCYWNrZW5kLCByZXF1ZXN0T3B0aW9ucykgPT4gbmV3IEh0dHAoeGhyQmFja2VuZCwgcmVxdWVzdE9wdGlvbnMpLFxuICAgICAgICAgICAgZGVwczogW1hIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zXVxuICAgICAgICAgIH0pLFxuICBCcm93c2VyWGhyLFxuICBwcm92aWRlKFJlcXVlc3RPcHRpb25zLCB7dXNlQ2xhc3M6IEJhc2VSZXF1ZXN0T3B0aW9uc30pLFxuICBwcm92aWRlKFJlc3BvbnNlT3B0aW9ucywge3VzZUNsYXNzOiBCYXNlUmVzcG9uc2VPcHRpb25zfSksXG4gIFhIUkJhY2tlbmRcbl07XG5cbi8qKlxuICogU2VlIHtAbGluayBIVFRQX1BST1ZJREVSU30gaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgSFRUUF9CSU5ESU5HUyA9IEhUVFBfUFJPVklERVJTO1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgYmFzaWMgc2V0IG9mIHByb3ZpZGVycyB0byB1c2UgdGhlIHtAbGluayBKc29ucH0gc2VydmljZSBpbiBhbnkgYXBwbGljYXRpb24uXG4gKlxuICogVGhlIGBKU09OUF9QUk9WSURFUlNgIHNob3VsZCBiZSBpbmNsdWRlZCBlaXRoZXIgaW4gYSBjb21wb25lbnQncyBpbmplY3RvcixcbiAqIG9yIGluIHRoZSByb290IGluamVjdG9yIHdoZW4gYm9vdHN0cmFwcGluZyBhbiBhcHBsaWNhdGlvbi5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvdm1lTjRGP3A9cHJldmlldykpXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge05nRm9yfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuICogaW1wb3J0IHtKU09OUF9QUk9WSURFUlMsIEpzb25wfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICBwcm92aWRlcnM6IFtKU09OUF9QUk9WSURFUlNdLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8aDE+UGVvcGxlPC9oMT5cbiAqICAgICAgIDx1bD5cbiAqICAgICAgICAgPGxpICpuZ0Zvcj1cIiNwZXJzb24gb2YgcGVvcGxlXCI+XG4gKiAgICAgICAgICAge3twZXJzb24ubmFtZX19XG4gKiAgICAgICAgIDwvbGk+XG4gKiAgICAgICA8L3VsPlxuICogICAgIDwvZGl2PlxuICogICBgLFxuICogICBkaXJlY3RpdmVzOiBbTmdGb3JdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiAgIHBlb3BsZTogQXJyYXk8T2JqZWN0PjtcbiAqICAgY29uc3RydWN0b3IoanNvbnA6SnNvbnApIHtcbiAqICAgICBqc29ucC5yZXF1ZXN0KCdwZW9wbGUuanNvbicpLnN1YnNjcmliZShyZXMgPT4ge1xuICogICAgICAgdGhpcy5wZW9wbGUgPSByZXMuanNvbigpO1xuICogICAgIH0pXG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIFRoZSBwcmltYXJ5IHB1YmxpYyBBUEkgaW5jbHVkZWQgaW4gYEpTT05QX1BST1ZJREVSU2AgaXMgdGhlIHtAbGluayBKc29ucH0gY2xhc3MuXG4gKiBIb3dldmVyLCBvdGhlciBwcm92aWRlcnMgcmVxdWlyZWQgYnkgYEpzb25wYCBhcmUgaW5jbHVkZWQsXG4gKiB3aGljaCBtYXkgYmUgYmVuZWZpY2lhbCB0byBvdmVycmlkZSBpbiBjZXJ0YWluIGNhc2VzLlxuICpcbiAqIFRoZSBwcm92aWRlcnMgaW5jbHVkZWQgaW4gYEpTT05QX1BST1ZJREVSU2AgaW5jbHVkZTpcbiAqICAqIHtAbGluayBKc29ucH1cbiAqICAqIHtAbGluayBKU09OUEJhY2tlbmR9XG4gKiAgKiBgQnJvd3Nlckpzb25wYCAtIFByaXZhdGUgZmFjdG9yeVxuICogICoge0BsaW5rIFJlcXVlc3RPcHRpb25zfSAtIEJvdW5kIHRvIHtAbGluayBCYXNlUmVxdWVzdE9wdGlvbnN9IGNsYXNzXG4gKiAgKiB7QGxpbmsgUmVzcG9uc2VPcHRpb25zfSAtIEJvdW5kIHRvIHtAbGluayBCYXNlUmVzcG9uc2VPcHRpb25zfSBjbGFzc1xuICpcbiAqIFRoZXJlIG1heSBiZSBjYXNlcyB3aGVyZSBpdCBtYWtlcyBzZW5zZSB0byBleHRlbmQgdGhlIGJhc2UgcmVxdWVzdCBvcHRpb25zLFxuICogc3VjaCBhcyB0byBhZGQgYSBzZWFyY2ggc3RyaW5nIHRvIGJlIGFwcGVuZGVkIHRvIGFsbCBVUkxzLlxuICogVG8gYWNjb21wbGlzaCB0aGlzLCBhIG5ldyBwcm92aWRlciBmb3Ige0BsaW5rIFJlcXVlc3RPcHRpb25zfSBzaG91bGRcbiAqIGJlIGFkZGVkIGluIHRoZSBzYW1lIGluamVjdG9yIGFzIGBKU09OUF9QUk9WSURFUlNgLlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9URnVnN3g/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7cHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG4gKiBpbXBvcnQge0pTT05QX1BST1ZJREVSUywgQmFzZVJlcXVlc3RPcHRpb25zLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gKlxuICogY2xhc3MgTXlPcHRpb25zIGV4dGVuZHMgQmFzZVJlcXVlc3RPcHRpb25zIHtcbiAqICAgc2VhcmNoOiBzdHJpbmcgPSAnY29yZVRlYW09dHJ1ZSc7XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcCwgW0pTT05QX1BST1ZJREVSUywgcHJvdmlkZShSZXF1ZXN0T3B0aW9ucywge3VzZUNsYXNzOiBNeU9wdGlvbnN9KV0pXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqIGBgYFxuICpcbiAqIExpa2V3aXNlLCB0byB1c2UgYSBtb2NrIGJhY2tlbmQgZm9yIHVuaXQgdGVzdHMsIHRoZSB7QGxpbmsgSlNPTlBCYWNrZW5kfVxuICogcHJvdmlkZXIgc2hvdWxkIGJlIGJvdW5kIHRvIHtAbGluayBNb2NrQmFja2VuZH0uXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L0hEcVpXTD9wPXByZXZpZXcpKVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtwcm92aWRlLCBJbmplY3Rvcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge0pTT05QX1BST1ZJREVSUywgSnNvbnAsIFJlc3BvbnNlLCBKU09OUEJhY2tlbmR9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICogaW1wb3J0IHtNb2NrQmFja2VuZH0gZnJvbSAnYW5ndWxhcjIvaHR0cC90ZXN0aW5nJztcbiAqXG4gKiB2YXIgcGVvcGxlID0gW3tuYW1lOiAnSmVmZid9LCB7bmFtZTogJ1RvYmlhcyd9XTtcbiAqIHZhciBpbmplY3RvciA9IEluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1xuICogICBKU09OUF9QUk9WSURFUlMsXG4gKiAgIE1vY2tCYWNrZW5kLFxuICogICBwcm92aWRlKEpTT05QQmFja2VuZCwge3VzZUV4aXN0aW5nOiBNb2NrQmFja2VuZH0pXG4gKiBdKTtcbiAqIHZhciBqc29ucCA9IGluamVjdG9yLmdldChKc29ucCk7XG4gKiB2YXIgYmFja2VuZCA9IGluamVjdG9yLmdldChNb2NrQmFja2VuZCk7XG4gKlxuICogLy8gTGlzdGVuIGZvciBhbnkgbmV3IHJlcXVlc3RzXG4gKiBiYWNrZW5kLmNvbm5lY3Rpb25zLm9ic2VydmVyKHtcbiAqICAgbmV4dDogY29ubmVjdGlvbiA9PiB7XG4gKiAgICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKHtib2R5OiBwZW9wbGV9KTtcbiAqICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAqICAgICAgIC8vIFNlbmQgYSByZXNwb25zZSB0byB0aGUgcmVxdWVzdFxuICogICAgICAgY29ubmVjdGlvbi5tb2NrUmVzcG9uZChyZXNwb25zZSk7XG4gKiAgICAgfSk7XG4gKiAgIH0pO1xuXG4gKiBqc29ucC5nZXQoJ3Blb3BsZS5qc29uJykub2JzZXJ2ZXIoe1xuICogICBuZXh0OiByZXMgPT4ge1xuICogICAgIC8vIFJlc3BvbnNlIGNhbWUgZnJvbSBtb2NrIGJhY2tlbmRcbiAqICAgICBjb25zb2xlLmxvZygnZmlyc3QgcGVyc29uJywgcmVzLmpzb24oKVswXS5uYW1lKTtcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IEpTT05QX1BST1ZJREVSUzogYW55W10gPSBbXG4gIC8vIFRPRE8ocGFzY2FsKTogdXNlIGZhY3RvcnkgdHlwZSBhbm5vdGF0aW9ucyBvbmNlIHN1cHBvcnRlZCBpbiBESVxuICAvLyBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzE4M1xuICBwcm92aWRlKEpzb25wLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChqc29ucEJhY2tlbmQsIHJlcXVlc3RPcHRpb25zKSA9PiBuZXcgSnNvbnAoanNvbnBCYWNrZW5kLCByZXF1ZXN0T3B0aW9ucyksXG4gICAgICAgICAgICBkZXBzOiBbSlNPTlBCYWNrZW5kLCBSZXF1ZXN0T3B0aW9uc11cbiAgICAgICAgICB9KSxcbiAgQnJvd3Nlckpzb25wLFxuICBwcm92aWRlKFJlcXVlc3RPcHRpb25zLCB7dXNlQ2xhc3M6IEJhc2VSZXF1ZXN0T3B0aW9uc30pLFxuICBwcm92aWRlKFJlc3BvbnNlT3B0aW9ucywge3VzZUNsYXNzOiBCYXNlUmVzcG9uc2VPcHRpb25zfSksXG4gIHByb3ZpZGUoSlNPTlBCYWNrZW5kLCB7dXNlQ2xhc3M6IEpTT05QQmFja2VuZF99KVxuXTtcblxuLyoqXG4gKiBTZWUge0BsaW5rIEpTT05QX1BST1ZJREVSU30gaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgSlNPTl9CSU5ESU5HUyA9IEpTT05QX1BST1ZJREVSUztcbiJdfQ==

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(48);
	var exceptions_1 = __webpack_require__(58);
	var core_1 = __webpack_require__(67);
	var interfaces_1 = __webpack_require__(291);
	var static_request_1 = __webpack_require__(292);
	var base_request_options_1 = __webpack_require__(296);
	var enums_1 = __webpack_require__(295);
	function httpRequest(backend, request) {
	    return backend.createConnection(request).response;
	}
	function mergeOptions(defaultOpts, providedOpts, method, url) {
	    var newOptions = defaultOpts;
	    if (lang_1.isPresent(providedOpts)) {
	        // Hack so Dart can used named parameters
	        return newOptions.merge(new base_request_options_1.RequestOptions({
	            method: providedOpts.method || method,
	            url: providedOpts.url || url,
	            search: providedOpts.search,
	            headers: providedOpts.headers,
	            body: providedOpts.body
	        }));
	    }
	    if (lang_1.isPresent(method)) {
	        return newOptions.merge(new base_request_options_1.RequestOptions({ method: method, url: url }));
	    }
	    else {
	        return newOptions.merge(new base_request_options_1.RequestOptions({ url: url }));
	    }
	}
	/**
	 * Performs http requests using `XMLHttpRequest` as the default backend.
	 *
	 * `Http` is available as an injectable class, with methods to perform http requests. Calling
	 * `request` returns an `Observable` which will emit a single {@link Response} when a
	 * response is received.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {Http, HTTP_PROVIDERS} from 'angular2/http';
	 * @Component({
	 *   selector: 'http-app',
	 *   viewProviders: [HTTP_PROVIDERS],
	 *   templateUrl: 'people.html'
	 * })
	 * class PeopleComponent {
	 *   constructor(http: Http) {
	 *     http.get('people.json')
	 *       // Call map on the response observable to get the parsed people object
	 *       .map(res => res.json())
	 *       // Subscribe to the observable to get the parsed people object and attach it to the
	 *       // component
	 *       .subscribe(people => this.people = people);
	 *   }
	 * }
	 * ```
	 *
	 *
	 * ### Example
	 *
	 * ```
	 * http.get('people.json').observer({next: (value) => this.people = value});
	 * ```
	 *
	 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
	 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
	 * the {@link XHRBackend} provider, as in the following example:
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {BaseRequestOptions, Http} from 'angular2/http';
	 * import {MockBackend} from 'angular2/http/testing';
	 * var injector = Injector.resolveAndCreate([
	 *   BaseRequestOptions,
	 *   MockBackend,
	 *   provide(Http, {useFactory:
	 *       function(backend, defaultOptions) {
	 *         return new Http(backend, defaultOptions);
	 *       },
	 *       deps: [MockBackend, BaseRequestOptions]})
	 * ]);
	 * var http = injector.get(Http);
	 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
	 * ```
	 *
	 **/
	var Http = (function () {
	    function Http(_backend, _defaultOptions) {
	        this._backend = _backend;
	        this._defaultOptions = _defaultOptions;
	    }
	    /**
	     * Performs any type of http request. First argument is required, and can either be a url or
	     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
	     * object can be provided as the 2nd argument. The options object will be merged with the values
	     * of {@link BaseRequestOptions} before performing the request.
	     */
	    Http.prototype.request = function (url, options) {
	        var responseObservable;
	        if (lang_1.isString(url)) {
	            responseObservable = httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Get, url)));
	        }
	        else if (url instanceof static_request_1.Request) {
	            responseObservable = httpRequest(this._backend, url);
	        }
	        else {
	            throw exceptions_1.makeTypeError('First argument must be a url string or Request instance.');
	        }
	        return responseObservable;
	    };
	    /**
	     * Performs a request with `get` http method.
	     */
	    Http.prototype.get = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Get, url)));
	    };
	    /**
	     * Performs a request with `post` http method.
	     */
	    Http.prototype.post = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethod.Post, url)));
	    };
	    /**
	     * Performs a request with `put` http method.
	     */
	    Http.prototype.put = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethod.Put, url)));
	    };
	    /**
	     * Performs a request with `delete` http method.
	     */
	    Http.prototype.delete = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Delete, url)));
	    };
	    /**
	     * Performs a request with `patch` http method.
	     */
	    Http.prototype.patch = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethod.Patch, url)));
	    };
	    /**
	     * Performs a request with `head` http method.
	     */
	    Http.prototype.head = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Head, url)));
	    };
	    Http = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [interfaces_1.ConnectionBackend, base_request_options_1.RequestOptions])
	    ], Http);
	    return Http;
	})();
	exports.Http = Http;
	var Jsonp = (function (_super) {
	    __extends(Jsonp, _super);
	    function Jsonp(backend, defaultOptions) {
	        _super.call(this, backend, defaultOptions);
	    }
	    /**
	     * Performs any type of http request. First argument is required, and can either be a url or
	     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
	     * object can be provided as the 2nd argument. The options object will be merged with the values
	     * of {@link BaseRequestOptions} before performing the request.
	     */
	    Jsonp.prototype.request = function (url, options) {
	        var responseObservable;
	        if (lang_1.isString(url)) {
	            url = new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Get, url));
	        }
	        if (url instanceof static_request_1.Request) {
	            if (url.method !== enums_1.RequestMethod.Get) {
	                exceptions_1.makeTypeError('JSONP requests must use GET request method.');
	            }
	            responseObservable = httpRequest(this._backend, url);
	        }
	        else {
	            throw exceptions_1.makeTypeError('First argument must be a url string or Request instance.');
	        }
	        return responseObservable;
	    };
	    Jsonp = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [interfaces_1.ConnectionBackend, base_request_options_1.RequestOptions])
	    ], Jsonp);
	    return Jsonp;
	})(Http);
	exports.Jsonp = Jsonp;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2h0dHAudHMiXSwibmFtZXMiOlsiaHR0cFJlcXVlc3QiLCJtZXJnZU9wdGlvbnMiLCJIdHRwIiwiSHR0cC5jb25zdHJ1Y3RvciIsIkh0dHAucmVxdWVzdCIsIkh0dHAuZ2V0IiwiSHR0cC5wb3N0IiwiSHR0cC5wdXQiLCJIdHRwLmRlbGV0ZSIsIkh0dHAucGF0Y2giLCJIdHRwLmhlYWQiLCJKc29ucCIsIkpzb25wLmNvbnN0cnVjdG9yIiwiSnNvbnAucmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsMEJBQTBCLENBQUMsQ0FBQTtBQUN0RSwyQkFBNEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM3RCxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsMkJBQWdFLGNBQWMsQ0FBQyxDQUFBO0FBQy9FLCtCQUFzQixrQkFBa0IsQ0FBQyxDQUFBO0FBRXpDLHFDQUFpRCx3QkFBd0IsQ0FBQyxDQUFBO0FBQzFFLHNCQUE0QixTQUFTLENBQUMsQ0FBQTtBQUd0QyxxQkFBcUIsT0FBMEIsRUFBRSxPQUFnQjtJQUMvREEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQTtBQUNwREEsQ0FBQ0E7QUFFRCxzQkFBc0IsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsR0FBRztJQUMxREMsSUFBSUEsVUFBVUEsR0FBR0EsV0FBV0EsQ0FBQ0E7SUFDN0JBLEVBQUVBLENBQUNBLENBQUNBLGdCQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM1QkEseUNBQXlDQTtRQUN6Q0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEscUNBQWNBLENBQUNBO1lBQ3pDQSxNQUFNQSxFQUFFQSxZQUFZQSxDQUFDQSxNQUFNQSxJQUFJ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QkFBYUEsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDekZBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLFlBQVlBLHdCQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsS0FBS0EscUJBQWFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUNyQ0EsMEJBQWFBLENBQUNBLDZDQUE2Q0EsQ0FBQ0EsQ0FBQ0E7WUFDL0RBLENBQUNBO1lBQ0RBLGtCQUFrQkEsR0FBR0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDdkRBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLE1BQU1BLDBCQUFhQSxDQUFDQSwwREFBMERBLENBQUNBLENBQUNBO1FBQ2xGQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBO0lBQzVCQSxDQUFDQTtJQTFCSEY7UUFBQ0EsaUJBQVVBLEVBQUVBOztjQTJCWkE7SUFBREEsWUFBQ0E7QUFBREEsQ0FBQ0EsQUEzQkQsRUFDMkIsSUFBSSxFQTBCOUI7QUExQlksYUFBSyxRQTBCakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNTdHJpbmcsIGlzUHJlc2VudCwgaXNCbGFua30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7bWFrZVR5cGVFcnJvcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JlcXVlc3RPcHRpb25zQXJncywgQ29ubmVjdGlvbiwgQ29ubmVjdGlvbkJhY2tlbmR9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge1JlcXVlc3R9IGZyb20gJy4vc3RhdGljX3JlcXVlc3QnO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSAnLi9zdGF0aWNfcmVzcG9uc2UnO1xuaW1wb3J0IHtCYXNlUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICcuL2Jhc2VfcmVxdWVzdF9vcHRpb25zJztcbmltcG9ydCB7UmVxdWVzdE1ldGhvZH0gZnJvbSAnLi9lbnVtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmZ1bmN0aW9uIGh0dHBSZXF1ZXN0KGJhY2tlbmQ6IENvbm5lY3Rpb25CYWNrZW5kLCByZXF1ZXN0OiBSZXF1ZXN0KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICByZXR1cm4gYmFja2VuZC5jcmVhdGVDb25uZWN0aW9uKHJlcXVlc3QpLnJlc3BvbnNlO1xufVxuXG5mdW5jdGlvbiBtZXJnZU9wdGlvbnMoZGVmYXVsdE9wdHMsIHByb3ZpZGVkT3B0cywgbWV0aG9kLCB1cmwpOiBSZXF1ZXN0T3B0aW9ucyB7XG4gIHZhciBuZXdPcHRpb25zID0gZGVmYXVsdE9wdHM7XG4gIGlmIChpc1ByZXNlbnQocHJvdmlkZWRPcHRzKSkge1xuICAgIC8vIEhhY2sgc28gRGFydCBjYW4gdXNlZCBuYW1lZCBwYXJhbWV0ZXJzXG4gICAgcmV0dXJuIG5ld09wdGlvbnMubWVyZ2UobmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgIG1ldGhvZDogcHJvdmlkZWRPcHRzLm1ldGhvZCB8fCBtZXRob2QsXG4gICAgICB1cmw6IHByb3ZpZGVkT3B0cy51cmwgfHwgdXJsLFxuICAgICAgc2VhcmNoOiBwcm92aWRlZE9wdHMuc2VhcmNoLFxuICAgICAgaGVhZGVyczogcHJvdmlkZWRPcHRzLmhlYWRlcnMsXG4gICAgICBib2R5OiBwcm92aWRlZE9wdHMuYm9keVxuICAgIH0pKTtcbiAgfVxuICBpZiAoaXNQcmVzZW50KG1ldGhvZCkpIHtcbiAgICByZXR1cm4gbmV3T3B0aW9ucy5tZXJnZShuZXcgUmVxdWVzdE9wdGlvbnMoe21ldGhvZDogbWV0aG9kLCB1cmw6IHVybH0pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3T3B0aW9ucy5tZXJnZShuZXcgUmVxdWVzdE9wdGlvbnMoe3VybDogdXJsfSkpO1xuICB9XG59XG5cbi8qKlxuICogUGVyZm9ybXMgaHR0cCByZXF1ZXN0cyB1c2luZyBgWE1MSHR0cFJlcXVlc3RgIGFzIHRoZSBkZWZhdWx0IGJhY2tlbmQuXG4gKlxuICogYEh0dHBgIGlzIGF2YWlsYWJsZSBhcyBhbiBpbmplY3RhYmxlIGNsYXNzLCB3aXRoIG1ldGhvZHMgdG8gcGVyZm9ybSBodHRwIHJlcXVlc3RzLiBDYWxsaW5nXG4gKiBgcmVxdWVzdGAgcmV0dXJucyBhbiBgT2JzZXJ2YWJsZWAgd2hpY2ggd2lsbCBlbWl0IGEgc2luZ2xlIHtAbGluayBSZXNwb25zZX0gd2hlbiBhXG4gKiByZXNwb25zZSBpcyByZWNlaXZlZC5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7SHR0cCwgSFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnaHR0cC1hcHAnLFxuICogICB2aWV3UHJvdmlkZXJzOiBbSFRUUF9QUk9WSURFUlNdLFxuICogICB0ZW1wbGF0ZVVybDogJ3Blb3BsZS5odG1sJ1xuICogfSlcbiAqIGNsYXNzIFBlb3BsZUNvbXBvbmVudCB7XG4gKiAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcbiAqICAgICBodHRwLmdldCgncGVvcGxlLmpzb24nKVxuICogICAgICAgLy8gQ2FsbCBtYXAgb24gdGhlIHJlc3BvbnNlIG9ic2VydmFibGUgdG8gZ2V0IHRoZSBwYXJzZWQgcGVvcGxlIG9iamVjdFxuICogICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAqICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgb2JzZXJ2YWJsZSB0byBnZXQgdGhlIHBhcnNlZCBwZW9wbGUgb2JqZWN0IGFuZCBhdHRhY2ggaXQgdG8gdGhlXG4gKiAgICAgICAvLyBjb21wb25lbnRcbiAqICAgICAgIC5zdWJzY3JpYmUocGVvcGxlID0+IHRoaXMucGVvcGxlID0gcGVvcGxlKTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBodHRwLmdldCgncGVvcGxlLmpzb24nKS5vYnNlcnZlcih7bmV4dDogKHZhbHVlKSA9PiB0aGlzLnBlb3BsZSA9IHZhbHVlfSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgZGVmYXVsdCBjb25zdHJ1Y3QgdXNlZCB0byBwZXJmb3JtIHJlcXVlc3RzLCBgWE1MSHR0cFJlcXVlc3RgLCBpcyBhYnN0cmFjdGVkIGFzIGEgXCJCYWNrZW5kXCIgKFxuICoge0BsaW5rIFhIUkJhY2tlbmR9IGluIHRoaXMgY2FzZSksIHdoaWNoIGNvdWxkIGJlIG1vY2tlZCB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGJ5IHJlcGxhY2luZ1xuICogdGhlIHtAbGluayBYSFJCYWNrZW5kfSBwcm92aWRlciwgYXMgaW4gdGhlIGZvbGxvd2luZyBleGFtcGxlOlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtCYXNlUmVxdWVzdE9wdGlvbnMsIEh0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICogaW1wb3J0IHtNb2NrQmFja2VuZH0gZnJvbSAnYW5ndWxhcjIvaHR0cC90ZXN0aW5nJztcbiAqIHZhciBpbmplY3RvciA9IEluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1xuICogICBCYXNlUmVxdWVzdE9wdGlvbnMsXG4gKiAgIE1vY2tCYWNrZW5kLFxuICogICBwcm92aWRlKEh0dHAsIHt1c2VGYWN0b3J5OlxuICogICAgICAgZnVuY3Rpb24oYmFja2VuZCwgZGVmYXVsdE9wdGlvbnMpIHtcbiAqICAgICAgICAgcmV0dXJuIG5ldyBIdHRwKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zKTtcbiAqICAgICAgIH0sXG4gKiAgICAgICBkZXBzOiBbTW9ja0JhY2tlbmQsIEJhc2VSZXF1ZXN0T3B0aW9uc119KVxuICogXSk7XG4gKiB2YXIgaHR0cCA9IGluamVjdG9yLmdldChIdHRwKTtcbiAqIGh0dHAuZ2V0KCdyZXF1ZXN0LWZyb20tbW9jay1iYWNrZW5kLmpzb24nKS5zdWJzY3JpYmUoKHJlczpSZXNwb25zZSkgPT4gZG9Tb21ldGhpbmcocmVzKSk7XG4gKiBgYGBcbiAqXG4gKiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfYmFja2VuZDogQ29ubmVjdGlvbkJhY2tlbmQsIHByb3RlY3RlZCBfZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zKSB7fVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhbnkgdHlwZSBvZiBodHRwIHJlcXVlc3QuIEZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkLCBhbmQgY2FuIGVpdGhlciBiZSBhIHVybCBvclxuICAgKiBhIHtAbGluayBSZXF1ZXN0fSBpbnN0YW5jZS4gSWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgdXJsLCBhbiBvcHRpb25hbCB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9XG4gICAqIG9iamVjdCBjYW4gYmUgcHJvdmlkZWQgYXMgdGhlIDJuZCBhcmd1bWVudC4gVGhlIG9wdGlvbnMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIHZhbHVlc1xuICAgKiBvZiB7QGxpbmsgQmFzZVJlcXVlc3RPcHRpb25zfSBiZWZvcmUgcGVyZm9ybWluZyB0aGUgcmVxdWVzdC5cbiAgICovXG4gIHJlcXVlc3QodXJsOiBzdHJpbmcgfCBSZXF1ZXN0LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHZhciByZXNwb25zZU9ic2VydmFibGU6IGFueTtcbiAgICBpZiAoaXNTdHJpbmcodXJsKSkge1xuICAgICAgcmVzcG9uc2VPYnNlcnZhYmxlID0gaHR0cFJlcXVlc3QoXG4gICAgICAgICAgdGhpcy5fYmFja2VuZCxcbiAgICAgICAgICBuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuR2V0LCB1cmwpKSk7XG4gICAgfSBlbHNlIGlmICh1cmwgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICByZXNwb25zZU9ic2VydmFibGUgPSBodHRwUmVxdWVzdCh0aGlzLl9iYWNrZW5kLCB1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtYWtlVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgdXJsIHN0cmluZyBvciBSZXF1ZXN0IGluc3RhbmNlLicpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2VPYnNlcnZhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBnZXRgIGh0dHAgbWV0aG9kLlxuICAgKi9cbiAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiBodHRwUmVxdWVzdCh0aGlzLl9iYWNrZW5kLCBuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0TWV0aG9kLkdldCwgdXJsKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwb3N0YCBodHRwIG1ldGhvZC5cbiAgICovXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gaHR0cFJlcXVlc3QoXG4gICAgICAgIHRoaXMuX2JhY2tlbmQsXG4gICAgICAgIG5ldyBSZXF1ZXN0KG1lcmdlT3B0aW9ucyh0aGlzLl9kZWZhdWx0T3B0aW9ucy5tZXJnZShuZXcgUmVxdWVzdE9wdGlvbnMoe2JvZHk6IGJvZHl9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLCBSZXF1ZXN0TWV0aG9kLlBvc3QsIHVybCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgcHV0YCBodHRwIG1ldGhvZC5cbiAgICovXG4gIHB1dCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiBodHRwUmVxdWVzdChcbiAgICAgICAgdGhpcy5fYmFja2VuZCxcbiAgICAgICAgbmV3IFJlcXVlc3QobWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLm1lcmdlKG5ldyBSZXF1ZXN0T3B0aW9ucyh7Ym9keTogYm9keX0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuUHV0LCB1cmwpKSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYGRlbGV0ZWAgaHR0cCBtZXRob2QuXG4gICAqL1xuICBkZWxldGUgKHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiBodHRwUmVxdWVzdCh0aGlzLl9iYWNrZW5kLCBuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0TWV0aG9kLkRlbGV0ZSwgdXJsKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwYXRjaGAgaHR0cCBtZXRob2QuXG4gICAqL1xuICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiBodHRwUmVxdWVzdChcbiAgICAgICAgdGhpcy5fYmFja2VuZCxcbiAgICAgICAgbmV3IFJlcXVlc3QobWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLm1lcmdlKG5ldyBSZXF1ZXN0T3B0aW9ucyh7Ym9keTogYm9keX0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuUGF0Y2gsIHVybCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgaGVhZGAgaHR0cCBtZXRob2QuXG4gICAqL1xuICBoZWFkKHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiBodHRwUmVxdWVzdCh0aGlzLl9iYWNrZW5kLCBuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0TWV0aG9kLkhlYWQsIHVybCkpKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnNvbnAgZXh0ZW5kcyBIdHRwIHtcbiAgY29uc3RydWN0b3IoYmFja2VuZDogQ29ubmVjdGlvbkJhY2tlbmQsIGRlZmF1bHRPcHRpb25zOiBSZXF1ZXN0T3B0aW9ucykge1xuICAgIHN1cGVyKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhbnkgdHlwZSBvZiBodHRwIHJlcXVlc3QuIEZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkLCBhbmQgY2FuIGVpdGhlciBiZSBhIHVybCBvclxuICAgKiBhIHtAbGluayBSZXF1ZXN0fSBpbnN0YW5jZS4gSWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgdXJsLCBhbiBvcHRpb25hbCB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9XG4gICAqIG9iamVjdCBjYW4gYmUgcHJvdmlkZWQgYXMgdGhlIDJuZCBhcmd1bWVudC4gVGhlIG9wdGlvbnMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIHZhbHVlc1xuICAgKiBvZiB7QGxpbmsgQmFzZVJlcXVlc3RPcHRpb25zfSBiZWZvcmUgcGVyZm9ybWluZyB0aGUgcmVxdWVzdC5cbiAgICovXG4gIHJlcXVlc3QodXJsOiBzdHJpbmcgfCBSZXF1ZXN0LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHZhciByZXNwb25zZU9ic2VydmFibGU6IGFueTtcbiAgICBpZiAoaXNTdHJpbmcodXJsKSkge1xuICAgICAgdXJsID0gbmV3IFJlcXVlc3QobWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zLCBSZXF1ZXN0TWV0aG9kLkdldCwgdXJsKSk7XG4gICAgfVxuICAgIGlmICh1cmwgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAodXJsLm1ldGhvZCAhPT0gUmVxdWVzdE1ldGhvZC5HZXQpIHtcbiAgICAgICAgbWFrZVR5cGVFcnJvcignSlNPTlAgcmVxdWVzdHMgbXVzdCB1c2UgR0VUIHJlcXVlc3QgbWV0aG9kLicpO1xuICAgICAgfVxuICAgICAgcmVzcG9uc2VPYnNlcnZhYmxlID0gaHR0cFJlcXVlc3QodGhpcy5fYmFja2VuZCwgdXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWFrZVR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHVybCBzdHJpbmcgb3IgUmVxdWVzdCBpbnN0YW5jZS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlT2JzZXJ2YWJsZTtcbiAgfVxufVxuIl19

/***/ },
/* 291 */
/***/ function(module, exports) {

	'use strict';/**
	 * Abstract class from which real backends are derived.
	 *
	 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
	 * {@link Request}.
	 */
	var ConnectionBackend = (function () {
	    function ConnectionBackend() {
	    }
	    return ConnectionBackend;
	})();
	exports.ConnectionBackend = ConnectionBackend;
	/**
	 * Abstract class from which real connections are derived.
	 */
	var Connection = (function () {
	    function Connection() {
	    }
	    return Connection;
	})();
	exports.Connection = Connection;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOlsiQ29ubmVjdGlvbkJhY2tlbmQiLCJDb25uZWN0aW9uQmFja2VuZC5jb25zdHJ1Y3RvciIsIkNvbm5lY3Rpb24iLCJDb25uZWN0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFPQTs7Ozs7R0FLRztBQUNIO0lBQUFBO0lBQStGQyxDQUFDQTtJQUFERCx3QkFBQ0E7QUFBREEsQ0FBQ0EsQUFBaEcsSUFBZ0c7QUFBMUUseUJBQWlCLG9CQUF5RCxDQUFBO0FBRWhHOztHQUVHO0FBQ0g7SUFBQUU7SUFJQUMsQ0FBQ0E7SUFBREQsaUJBQUNBO0FBQURBLENBQUNBLEFBSkQsSUFJQztBQUpxQixrQkFBVSxhQUkvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWFkeVN0YXRlLCBSZXF1ZXN0TWV0aG9kLCBSZXNwb25zZVR5cGV9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtSZXF1ZXN0fSBmcm9tICcuL3N0YXRpY19yZXF1ZXN0JztcbmltcG9ydCB7VVJMU2VhcmNoUGFyYW1zfSBmcm9tICcuL3VybF9zZWFyY2hfcGFyYW1zJztcblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmcm9tIHdoaWNoIHJlYWwgYmFja2VuZHMgYXJlIGRlcml2ZWQuXG4gKlxuICogVGhlIHByaW1hcnkgcHVycG9zZSBvZiBhIGBDb25uZWN0aW9uQmFja2VuZGAgaXMgdG8gY3JlYXRlIG5ldyBjb25uZWN0aW9ucyB0byBmdWxmaWxsIGEgZ2l2ZW5cbiAqIHtAbGluayBSZXF1ZXN0fS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbm5lY3Rpb25CYWNrZW5kIHsgYWJzdHJhY3QgY3JlYXRlQ29ubmVjdGlvbihyZXF1ZXN0OiBhbnkpOiBDb25uZWN0aW9uOyB9XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgZnJvbSB3aGljaCByZWFsIGNvbm5lY3Rpb25zIGFyZSBkZXJpdmVkLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29ubmVjdGlvbiB7XG4gIHJlYWR5U3RhdGU6IFJlYWR5U3RhdGU7XG4gIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gIHJlc3BvbnNlOiBhbnk7ICAvLyBUT0RPOiBnZW5lcmljIG9mIDxSZXNwb25zZT47XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBvcHRpb25zIHRvIGNvbnN0cnVjdCBhIFJlcXVlc3RPcHRpb25zLCBiYXNlZCBvblxuICogW1JlcXVlc3RJbml0XShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVxdWVzdGluaXQpIGZyb20gdGhlIEZldGNoIHNwZWMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdE9wdGlvbnNBcmdzIHtcbiAgdXJsPzogc3RyaW5nO1xuICBtZXRob2Q/OiBzdHJpbmcgfCBSZXF1ZXN0TWV0aG9kO1xuICBzZWFyY2g/OiBzdHJpbmcgfCBVUkxTZWFyY2hQYXJhbXM7XG4gIGhlYWRlcnM/OiBIZWFkZXJzO1xuICAvLyBUT0RPOiBTdXBwb3J0IEJsb2IsIEFycmF5QnVmZmVyLCBKU09OLCBVUkxTZWFyY2hQYXJhbXMsIEZvcm1EYXRhXG4gIGJvZHk/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogUmVxdWlyZWQgc3RydWN0dXJlIHdoZW4gY29uc3RydWN0aW5nIG5ldyBSZXF1ZXN0KCk7XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFyZ3MgZXh0ZW5kcyBSZXF1ZXN0T3B0aW9uc0FyZ3MgeyB1cmw6IHN0cmluZzsgfVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3Igb3B0aW9ucyB0byBjb25zdHJ1Y3QgYSBSZXNwb25zZSwgYmFzZWQgb25cbiAqIFtSZXNwb25zZUluaXRdKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNyZXNwb25zZWluaXQpIGZyb20gdGhlIEZldGNoIHNwZWMuXG4gKi9cbmV4cG9ydCB0eXBlIFJlc3BvbnNlT3B0aW9uc0FyZ3MgPSB7XG4gIC8vIFRPRE86IFN1cHBvcnQgQmxvYiwgQXJyYXlCdWZmZXIsIEpTT05cbiAgYm9keT86IHN0cmluZyB8IE9iamVjdCB8IEZvcm1EYXRhO1xuICBzdGF0dXM/OiBudW1iZXI7XG4gIHN0YXR1c1RleHQ/OiBzdHJpbmc7XG4gIGhlYWRlcnM/OiBIZWFkZXJzO1xuICB0eXBlPzogUmVzcG9uc2VUeXBlO1xuICB1cmw/OiBzdHJpbmc7XG59XG4iXX0=

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var headers_1 = __webpack_require__(293);
	var http_utils_1 = __webpack_require__(294);
	var lang_1 = __webpack_require__(48);
	// TODO(jeffbcross): properly implement body accessors
	/**
	 * Creates `Request` instances from provided values.
	 *
	 * The Request's interface is inspired by the Request constructor defined in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#request-class),
	 * but is considered a static value whose body can be accessed many times. There are other
	 * differences in the implementation, but this is the most significant.
	 *
	 * `Request` instances are typically created by higher-level classes, like {@link Http} and
	 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
	 * One such example is when creating services that wrap higher-level services, like {@link Http},
	 * where it may be useful to generate a `Request` with arbitrary headers and search params.
	 *
	 * ```typescript
	 * import {Injectable, Injector} from 'angular2/core';
	 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from 'angular2/http';
	 *
	 * @Injectable()
	 * class AutoAuthenticator {
	 *   constructor(public http:Http) {}
	 *   request(url:string) {
	 *     return this.http.request(new Request({
	 *       method: RequestMethod.Get,
	 *       url: url,
	 *       search: 'password=123'
	 *     }));
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
	 * var authenticator = injector.get(AutoAuthenticator);
	 * authenticator.request('people.json').subscribe(res => {
	 *   //URL should have included '?password=123'
	 *   console.log('people', res.json());
	 * });
	 * ```
	 */
	var Request = (function () {
	    function Request(requestOptions) {
	        // TODO: assert that url is present
	        var url = requestOptions.url;
	        this.url = requestOptions.url;
	        if (lang_1.isPresent(requestOptions.search)) {
	            var search = requestOptions.search.toString();
	            if (search.length > 0) {
	                var prefix = '?';
	                if (lang_1.StringWrapper.contains(this.url, '?')) {
	                    prefix = (this.url[this.url.length - 1] == '&') ? '' : '&';
	                }
	                // TODO: just delete search-query-looking string in url?
	                this.url = url + prefix + search;
	            }
	        }
	        this._body = requestOptions.body;
	        this.method = http_utils_1.normalizeMethodName(requestOptions.method);
	        // TODO(jeffbcross): implement behavior
	        // Defaults to 'omit', consistent with browser
	        // TODO(jeffbcross): implement behavior
	        this.headers = new headers_1.Headers(requestOptions.headers);
	    }
	    /**
	     * Returns the request's body as string, assuming that body exists. If body is undefined, return
	     * empty
	     * string.
	     */
	    Request.prototype.text = function () { return lang_1.isPresent(this._body) ? this._body.toString() : ''; };
	    return Request;
	})();
	exports.Request = Request;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljX3JlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC9zdGF0aWNfcmVxdWVzdC50cyJdLCJuYW1lcyI6WyJSZXF1ZXN0IiwiUmVxdWVzdC5jb25zdHJ1Y3RvciIsIlJlcXVlc3QudGV4dCJdLCJtYXBwaW5ncyI6IkFBRUEsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLDJCQUFrQyxjQUFjLENBQUMsQ0FBQTtBQUNqRCxxQkFNTywwQkFBMEIsQ0FBQyxDQUFBO0FBRWxDLHNEQUFzRDtBQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NHO0FBQ0g7SUFhRUEsaUJBQVlBLGNBQTJCQTtRQUNyQ0MsbUNBQW1DQTtRQUNuQ0EsSUFBSUEsR0FBR0EsR0FBR0EsY0FBY0EsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDN0JBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBO1FBQzlCQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckNBLElBQUlBLE1BQU1BLEdBQUdBLGNBQWNBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO1lBQzlDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdEJBLElBQUlBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBO2dCQUNqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0Esb0JBQWFBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUMxQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsR0FBR0EsQ0FBQ0E7Z0JBQzdEQSxDQUFDQTtnQkFDREEsd0RBQXdEQTtnQkFDeERBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLEdBQUdBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO1lBQ25DQSxDQUFDQTtRQUNIQSxDQUFDQTtRQUNEQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNqQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsZ0NBQW1CQSxDQUFDQSxjQUFjQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6REEsdUNBQXVDQTtRQUN2Q0EsOENBQThDQTtRQUM5Q0EsdUNBQXVDQTtRQUN2Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsaUJBQU9BLENBQUNBLGNBQWNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO0lBQ3JEQSxDQUFDQTtJQUdERDs7OztPQUlHQTtJQUNIQSxzQkFBSUEsR0FBSkEsY0FBaUJFLE1BQU1BLENBQUNBLGdCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxFQUFFQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUMvRUYsY0FBQ0E7QUFBREEsQ0FBQ0EsQUEzQ0QsSUEyQ0M7QUEzQ1ksZUFBTyxVQTJDbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVxdWVzdE1ldGhvZH0gZnJvbSAnLi9lbnVtcyc7XG5pbXBvcnQge1JlcXVlc3RBcmdzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuaW1wb3J0IHtub3JtYWxpemVNZXRob2ROYW1lfSBmcm9tICcuL2h0dHBfdXRpbHMnO1xuaW1wb3J0IHtcbiAgUmVnRXhwV3JhcHBlcixcbiAgQ09OU1RfRVhQUixcbiAgaXNQcmVzZW50LFxuICBpc0pzT2JqZWN0LFxuICBTdHJpbmdXcmFwcGVyXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbi8vIFRPRE8oamVmZmJjcm9zcyk6IHByb3Blcmx5IGltcGxlbWVudCBib2R5IGFjY2Vzc29yc1xuLyoqXG4gKiBDcmVhdGVzIGBSZXF1ZXN0YCBpbnN0YW5jZXMgZnJvbSBwcm92aWRlZCB2YWx1ZXMuXG4gKlxuICogVGhlIFJlcXVlc3QncyBpbnRlcmZhY2UgaXMgaW5zcGlyZWQgYnkgdGhlIFJlcXVlc3QgY29uc3RydWN0b3IgZGVmaW5lZCBpbiB0aGUgW0ZldGNoXG4gKiBTcGVjXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVxdWVzdC1jbGFzcyksXG4gKiBidXQgaXMgY29uc2lkZXJlZCBhIHN0YXRpYyB2YWx1ZSB3aG9zZSBib2R5IGNhbiBiZSBhY2Nlc3NlZCBtYW55IHRpbWVzLiBUaGVyZSBhcmUgb3RoZXJcbiAqIGRpZmZlcmVuY2VzIGluIHRoZSBpbXBsZW1lbnRhdGlvbiwgYnV0IHRoaXMgaXMgdGhlIG1vc3Qgc2lnbmlmaWNhbnQuXG4gKlxuICogYFJlcXVlc3RgIGluc3RhbmNlcyBhcmUgdHlwaWNhbGx5IGNyZWF0ZWQgYnkgaGlnaGVyLWxldmVsIGNsYXNzZXMsIGxpa2Uge0BsaW5rIEh0dHB9IGFuZFxuICoge0BsaW5rIEpzb25wfSwgYnV0IGl0IG1heSBvY2Nhc2lvbmFsbHkgYmUgdXNlZnVsIHRvIGV4cGxpY2l0bHkgY3JlYXRlIGBSZXF1ZXN0YCBpbnN0YW5jZXMuXG4gKiBPbmUgc3VjaCBleGFtcGxlIGlzIHdoZW4gY3JlYXRpbmcgc2VydmljZXMgdGhhdCB3cmFwIGhpZ2hlci1sZXZlbCBzZXJ2aWNlcywgbGlrZSB7QGxpbmsgSHR0cH0sXG4gKiB3aGVyZSBpdCBtYXkgYmUgdXNlZnVsIHRvIGdlbmVyYXRlIGEgYFJlcXVlc3RgIHdpdGggYXJiaXRyYXJ5IGhlYWRlcnMgYW5kIHNlYXJjaCBwYXJhbXMuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3Rvcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge0hUVFBfUFJPVklERVJTLCBIdHRwLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqXG4gKiBASW5qZWN0YWJsZSgpXG4gKiBjbGFzcyBBdXRvQXV0aGVudGljYXRvciB7XG4gKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHApIHt9XG4gKiAgIHJlcXVlc3QodXJsOnN0cmluZykge1xuICogICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChuZXcgUmVxdWVzdCh7XG4gKiAgICAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuR2V0LFxuICogICAgICAgdXJsOiB1cmwsXG4gKiAgICAgICBzZWFyY2g6ICdwYXNzd29yZD0xMjMnXG4gKiAgICAgfSkpO1xuICogICB9XG4gKiB9XG4gKlxuICogdmFyIGluamVjdG9yID0gSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShbSFRUUF9QUk9WSURFUlMsIEF1dG9BdXRoZW50aWNhdG9yXSk7XG4gKiB2YXIgYXV0aGVudGljYXRvciA9IGluamVjdG9yLmdldChBdXRvQXV0aGVudGljYXRvcik7XG4gKiBhdXRoZW50aWNhdG9yLnJlcXVlc3QoJ3Blb3BsZS5qc29uJykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gKiAgIC8vVVJMIHNob3VsZCBoYXZlIGluY2x1ZGVkICc/cGFzc3dvcmQ9MTIzJ1xuICogICBjb25zb2xlLmxvZygncGVvcGxlJywgcmVzLmpzb24oKSk7XG4gKiB9KTtcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBIdHRwIG1ldGhvZCB3aXRoIHdoaWNoIHRvIHBlcmZvcm0gdGhlIHJlcXVlc3QuXG4gICAqL1xuICBtZXRob2Q6IFJlcXVlc3RNZXRob2Q7XG4gIC8qKlxuICAgKiB7QGxpbmsgSGVhZGVyc30gaW5zdGFuY2VcbiAgICovXG4gIGhlYWRlcnM6IEhlYWRlcnM7XG4gIC8qKiBVcmwgb2YgdGhlIHJlbW90ZSByZXNvdXJjZSAqL1xuICB1cmw6IHN0cmluZztcbiAgLy8gVE9ETzogc3VwcG9ydCBVUkxTZWFyY2hQYXJhbXMgfCBGb3JtRGF0YSB8IEJsb2IgfCBBcnJheUJ1ZmZlclxuICBwcml2YXRlIF9ib2R5OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zOiBSZXF1ZXN0QXJncykge1xuICAgIC8vIFRPRE86IGFzc2VydCB0aGF0IHVybCBpcyBwcmVzZW50XG4gICAgbGV0IHVybCA9IHJlcXVlc3RPcHRpb25zLnVybDtcbiAgICB0aGlzLnVybCA9IHJlcXVlc3RPcHRpb25zLnVybDtcbiAgICBpZiAoaXNQcmVzZW50KHJlcXVlc3RPcHRpb25zLnNlYXJjaCkpIHtcbiAgICAgIGxldCBzZWFyY2ggPSByZXF1ZXN0T3B0aW9ucy5zZWFyY2gudG9TdHJpbmcoKTtcbiAgICAgIGlmIChzZWFyY2gubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgcHJlZml4ID0gJz8nO1xuICAgICAgICBpZiAoU3RyaW5nV3JhcHBlci5jb250YWlucyh0aGlzLnVybCwgJz8nKSkge1xuICAgICAgICAgIHByZWZpeCA9ICh0aGlzLnVybFt0aGlzLnVybC5sZW5ndGggLSAxXSA9PSAnJicpID8gJycgOiAnJic7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzoganVzdCBkZWxldGUgc2VhcmNoLXF1ZXJ5LWxvb2tpbmcgc3RyaW5nIGluIHVybD9cbiAgICAgICAgdGhpcy51cmwgPSB1cmwgKyBwcmVmaXggKyBzZWFyY2g7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2JvZHkgPSByZXF1ZXN0T3B0aW9ucy5ib2R5O1xuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kTmFtZShyZXF1ZXN0T3B0aW9ucy5tZXRob2QpO1xuICAgIC8vIFRPRE8oamVmZmJjcm9zcyk6IGltcGxlbWVudCBiZWhhdmlvclxuICAgIC8vIERlZmF1bHRzIHRvICdvbWl0JywgY29uc2lzdGVudCB3aXRoIGJyb3dzZXJcbiAgICAvLyBUT0RPKGplZmZiY3Jvc3MpOiBpbXBsZW1lbnQgYmVoYXZpb3JcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0T3B0aW9ucy5oZWFkZXJzKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlcXVlc3QncyBib2R5IGFzIHN0cmluZywgYXNzdW1pbmcgdGhhdCBib2R5IGV4aXN0cy4gSWYgYm9keSBpcyB1bmRlZmluZWQsIHJldHVyblxuICAgKiBlbXB0eVxuICAgKiBzdHJpbmcuXG4gICAqL1xuICB0ZXh0KCk6IFN0cmluZyB7IHJldHVybiBpc1ByZXNlbnQodGhpcy5fYm9keSkgPyB0aGlzLl9ib2R5LnRvU3RyaW5nKCkgOiAnJzsgfVxufVxuIl19

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(48);
	var exceptions_1 = __webpack_require__(58);
	var collection_1 = __webpack_require__(56);
	/**
	 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
	 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
	 *
	 * The only known difference between this `Headers` implementation and the spec is the
	 * lack of an `entries` method.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/MTdwT6?p=preview))
	 *
	 * ```
	 * import {Headers} from 'angular2/http';
	 *
	 * var firstHeaders = new Headers();
	 * firstHeaders.append('Content-Type', 'image/jpeg');
	 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
	 *
	 * // Create headers from Plain Old JavaScript Object
	 * var secondHeaders = new Headers({
	 *   'X-My-Custom-Header': 'Angular'
	 * });
	 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
	 *
	 * var thirdHeaders = new Headers(secondHeaders);
	 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
	 * ```
	 */
	var Headers = (function () {
	    function Headers(headers) {
	        var _this = this;
	        if (headers instanceof Headers) {
	            this._headersMap = headers._headersMap;
	            return;
	        }
	        this._headersMap = new collection_1.Map();
	        if (lang_1.isBlank(headers)) {
	            return;
	        }
	        // headers instanceof StringMap
	        collection_1.StringMapWrapper.forEach(headers, function (v, k) { _this._headersMap.set(k, collection_1.isListLikeIterable(v) ? v : [v]); });
	    }
	    /**
	     * Returns a new Headers instance from the given DOMString of Response Headers
	     */
	    Headers.fromResponseHeaderString = function (headersString) {
	        return headersString.trim()
	            .split('\n')
	            .map(function (val) { return val.split(':'); })
	            .map(function (_a) {
	            var key = _a[0], parts = _a.slice(1);
	            return ([key.trim(), parts.join(':').trim()]);
	        })
	            .reduce(function (headers, _a) {
	            var key = _a[0], value = _a[1];
	            return !headers.set(key, value) && headers;
	        }, new Headers());
	    };
	    /**
	     * Appends a header to existing list of header values for a given header name.
	     */
	    Headers.prototype.append = function (name, value) {
	        var mapName = this._headersMap.get(name);
	        var list = collection_1.isListLikeIterable(mapName) ? mapName : [];
	        list.push(value);
	        this._headersMap.set(name, list);
	    };
	    /**
	     * Deletes all header values for the given name.
	     */
	    Headers.prototype.delete = function (name) { this._headersMap.delete(name); };
	    Headers.prototype.forEach = function (fn) {
	        this._headersMap.forEach(fn);
	    };
	    /**
	     * Returns first header that matches given name.
	     */
	    Headers.prototype.get = function (header) { return collection_1.ListWrapper.first(this._headersMap.get(header)); };
	    /**
	     * Check for existence of header by given name.
	     */
	    Headers.prototype.has = function (header) { return this._headersMap.has(header); };
	    /**
	     * Provides names of set headers
	     */
	    Headers.prototype.keys = function () { return collection_1.MapWrapper.keys(this._headersMap); };
	    /**
	     * Sets or overrides header value for given name.
	     */
	    Headers.prototype.set = function (header, value) {
	        var list = [];
	        if (collection_1.isListLikeIterable(value)) {
	            var pushValue = value.join(',');
	            list.push(pushValue);
	        }
	        else {
	            list.push(value);
	        }
	        this._headersMap.set(header, list);
	    };
	    /**
	     * Returns values of all headers.
	     */
	    Headers.prototype.values = function () { return collection_1.MapWrapper.values(this._headersMap); };
	    /**
	     * Returns string of all headers.
	     */
	    Headers.prototype.toJSON = function () { return lang_1.Json.stringify(this.values()); };
	    /**
	     * Returns list of header values for a given name.
	     */
	    Headers.prototype.getAll = function (header) {
	        var headers = this._headersMap.get(header);
	        return collection_1.isListLikeIterable(headers) ? headers : [];
	    };
	    /**
	     * This method is not implemented.
	     */
	    Headers.prototype.entries = function () { throw new exceptions_1.BaseException('"entries" method is not implemented on Headers class'); };
	    return Headers;
	})();
	exports.Headers = Headers;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2hlYWRlcnMudHMiXSwibmFtZXMiOlsiSGVhZGVycyIsIkhlYWRlcnMuY29uc3RydWN0b3IiLCJIZWFkZXJzLmZyb21SZXNwb25zZUhlYWRlclN0cmluZyIsIkhlYWRlcnMuYXBwZW5kIiwiSGVhZGVycy5kZWxldGUiLCJIZWFkZXJzLmZvckVhY2giLCJIZWFkZXJzLmdldCIsIkhlYWRlcnMuaGFzIiwiSGVhZGVycy5rZXlzIiwiSGVhZGVycy5zZXQiLCJIZWFkZXJzLnZhbHVlcyIsIkhlYWRlcnMudG9KU09OIiwiSGVhZGVycy5nZXRBbGwiLCJIZWFkZXJzLmVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBLHFCQU9PLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsMkJBQThDLGdDQUFnQyxDQUFDLENBQUE7QUFDL0UsMkJBTU8sZ0NBQWdDLENBQUMsQ0FBQTtBQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUNIO0lBR0VBLGlCQUFZQSxPQUF3Q0E7UUFIdERDLGlCQXVHQ0E7UUFuR0dBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLFlBQVlBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO1lBQy9CQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFhQSxPQUFRQSxDQUFDQSxXQUFXQSxDQUFDQTtZQUNsREEsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsZ0JBQUdBLEVBQW9CQSxDQUFDQTtRQUUvQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckJBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBRURBLCtCQUErQkE7UUFDL0JBLDZCQUFnQkEsQ0FBQ0EsT0FBT0EsQ0FDcEJBLE9BQU9BLEVBQUVBLFVBQUNBLENBQUNBLEVBQUVBLENBQUNBLElBQU9BLEtBQUlBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLCtCQUFrQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDeEZBLENBQUNBO0lBRUREOztPQUVHQTtJQUNJQSxnQ0FBd0JBLEdBQS9CQSxVQUFnQ0EsYUFBcUJBO1FBQ25ERSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxFQUFFQTthQUN0QkEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7YUFDWEEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBZEEsQ0FBY0EsQ0FBQ0E7YUFDMUJBLEdBQUdBLENBQUNBLFVBQUNBLEVBQWVBO2dCQUFkQSxHQUFHQSxVQUFLQSxLQUFLQTttQkFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFBdENBLENBQXNDQSxDQUFDQTthQUNoRUEsTUFBTUEsQ0FBQ0EsVUFBQ0EsT0FBT0EsRUFBRUEsRUFBWUE7Z0JBQVhBLEdBQUdBLFVBQUVBLEtBQUtBO21CQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxLQUFLQSxDQUFDQSxJQUFJQSxPQUFPQTtRQUFuQ0EsQ0FBbUNBLEVBQUVBLElBQUlBLE9BQU9BLEVBQUVBLENBQUNBLENBQUNBO0lBQzdGQSxDQUFDQTtJQUVERjs7T0FFR0E7SUFDSEEsd0JBQU1BLEdBQU5BLFVBQU9BLElBQVlBLEVBQUVBLEtBQWFBO1FBQ2hDRyxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsSUFBSUEsR0FBR0EsK0JBQWtCQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxPQUFPQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUN0REEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDakJBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUVESDs7T0FFR0E7SUFDSEEsd0JBQU1BLEdBQU5BLFVBQVFBLElBQVlBLElBQVVJLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRTlESix5QkFBT0EsR0FBUEEsVUFBUUEsRUFBNEVBO1FBQ2xGSyxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUMvQkEsQ0FBQ0E7SUFFREw7O09BRUdBO0lBQ0hBLHFCQUFHQSxHQUFIQSxVQUFJQSxNQUFjQSxJQUFZTSxNQUFNQSxDQUFDQSx3QkFBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFdkZOOztPQUVHQTtJQUNIQSxxQkFBR0EsR0FBSEEsVUFBSUEsTUFBY0EsSUFBYU8sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFckVQOztPQUVHQTtJQUNIQSxzQkFBSUEsR0FBSkEsY0FBbUJRLE1BQU1BLENBQUNBLHVCQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUU5RFI7O09BRUdBO0lBQ0hBLHFCQUFHQSxHQUFIQSxVQUFJQSxNQUFjQSxFQUFFQSxLQUF3QkE7UUFDMUNTLElBQUlBLElBQUlBLEdBQUdBLEVBQUVBLENBQUNBO1FBRWRBLEVBQUVBLENBQUNBLENBQUNBLCtCQUFrQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLElBQUlBLFNBQVNBLEdBQWNBLEtBQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQzVDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUN2QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbkJBLENBQUNBO1FBRURBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0lBQ3JDQSxDQUFDQTtJQUVEVDs7T0FFR0E7SUFDSEEsd0JBQU1BLEdBQU5BLGNBQXVCVSxNQUFNQSxDQUFDQSx1QkFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFcEVWOztPQUVHQTtJQUNIQSx3QkFBTUEsR0FBTkEsY0FBbUJXLE1BQU1BLENBQUNBLFdBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRTFEWDs7T0FFR0E7SUFDSEEsd0JBQU1BLEdBQU5BLFVBQU9BLE1BQWNBO1FBQ25CWSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUMzQ0EsTUFBTUEsQ0FBQ0EsK0JBQWtCQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxPQUFPQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUNwREEsQ0FBQ0E7SUFFRFo7O09BRUdBO0lBQ0hBLHlCQUFPQSxHQUFQQSxjQUFZYSxNQUFNQSxJQUFJQSwwQkFBYUEsQ0FBQ0Esc0RBQXNEQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNoR2IsY0FBQ0E7QUFBREEsQ0FBQ0EsQUF2R0QsSUF1R0M7QUF2R1ksZUFBTyxVQXVHbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGlzUHJlc2VudCxcbiAgaXNCbGFuayxcbiAgaXNKc09iamVjdCxcbiAgaXNUeXBlLFxuICBTdHJpbmdXcmFwcGVyLFxuICBKc29uXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb24sIFdyYXBwZWRFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge1xuICBpc0xpc3RMaWtlSXRlcmFibGUsXG4gIE1hcCxcbiAgTWFwV3JhcHBlcixcbiAgU3RyaW5nTWFwV3JhcHBlcixcbiAgTGlzdFdyYXBwZXIsXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIFtIZWFkZXJzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGVhZGVycy9IZWFkZXJzKSwgYXNcbiAqIHNwZWNpZmllZCBpbiB0aGUgW0ZldGNoIFNwZWNdKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNoZWFkZXJzLWNsYXNzKS5cbiAqXG4gKiBUaGUgb25seSBrbm93biBkaWZmZXJlbmNlIGJldHdlZW4gdGhpcyBgSGVhZGVyc2AgaW1wbGVtZW50YXRpb24gYW5kIHRoZSBzcGVjIGlzIHRoZVxuICogbGFjayBvZiBhbiBgZW50cmllc2AgbWV0aG9kLlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9NVGR3VDY/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7SGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gKlxuICogdmFyIGZpcnN0SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gKiBmaXJzdEhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnaW1hZ2UvanBlZycpO1xuICogY29uc29sZS5sb2coZmlyc3RIZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykpIC8vJ2ltYWdlL2pwZWcnXG4gKlxuICogLy8gQ3JlYXRlIGhlYWRlcnMgZnJvbSBQbGFpbiBPbGQgSmF2YVNjcmlwdCBPYmplY3RcbiAqIHZhciBzZWNvbmRIZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICogICAnWC1NeS1DdXN0b20tSGVhZGVyJzogJ0FuZ3VsYXInXG4gKiB9KTtcbiAqIGNvbnNvbGUubG9nKHNlY29uZEhlYWRlcnMuZ2V0KCdYLU15LUN1c3RvbS1IZWFkZXInKSk7IC8vJ0FuZ3VsYXInXG4gKlxuICogdmFyIHRoaXJkSGVhZGVycyA9IG5ldyBIZWFkZXJzKHNlY29uZEhlYWRlcnMpO1xuICogY29uc29sZS5sb2codGhpcmRIZWFkZXJzLmdldCgnWC1NeS1DdXN0b20tSGVhZGVyJykpOyAvLydBbmd1bGFyJ1xuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBIZWFkZXJzIHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfaGVhZGVyc01hcDogTWFwPHN0cmluZywgc3RyaW5nW10+O1xuICBjb25zdHJ1Y3RvcihoZWFkZXJzPzogSGVhZGVycyB8IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICB0aGlzLl9oZWFkZXJzTWFwID0gKDxIZWFkZXJzPmhlYWRlcnMpLl9oZWFkZXJzTWFwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2hlYWRlcnNNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG5cbiAgICBpZiAoaXNCbGFuayhoZWFkZXJzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGhlYWRlcnMgaW5zdGFuY2VvZiBTdHJpbmdNYXBcbiAgICBTdHJpbmdNYXBXcmFwcGVyLmZvckVhY2goXG4gICAgICAgIGhlYWRlcnMsICh2LCBrKSA9PiB7IHRoaXMuX2hlYWRlcnNNYXAuc2V0KGssIGlzTGlzdExpa2VJdGVyYWJsZSh2KSA/IHYgOiBbdl0pOyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbmV3IEhlYWRlcnMgaW5zdGFuY2UgZnJvbSB0aGUgZ2l2ZW4gRE9NU3RyaW5nIG9mIFJlc3BvbnNlIEhlYWRlcnNcbiAgICovXG4gIHN0YXRpYyBmcm9tUmVzcG9uc2VIZWFkZXJTdHJpbmcoaGVhZGVyc1N0cmluZzogc3RyaW5nKTogSGVhZGVycyB7XG4gICAgcmV0dXJuIGhlYWRlcnNTdHJpbmcudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgLm1hcCh2YWwgPT4gdmFsLnNwbGl0KCc6JykpXG4gICAgICAgIC5tYXAoKFtrZXksIC4uLnBhcnRzXSkgPT4gKFtrZXkudHJpbSgpLCBwYXJ0cy5qb2luKCc6JykudHJpbSgpXSkpXG4gICAgICAgIC5yZWR1Y2UoKGhlYWRlcnMsIFtrZXksIHZhbHVlXSkgPT4gIWhlYWRlcnMuc2V0KGtleSwgdmFsdWUpICYmIGhlYWRlcnMsIG5ldyBIZWFkZXJzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoZWFkZXIgdG8gZXhpc3RpbmcgbGlzdCBvZiBoZWFkZXIgdmFsdWVzIGZvciBhIGdpdmVuIGhlYWRlciBuYW1lLlxuICAgKi9cbiAgYXBwZW5kKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHZhciBtYXBOYW1lID0gdGhpcy5faGVhZGVyc01hcC5nZXQobmFtZSk7XG4gICAgdmFyIGxpc3QgPSBpc0xpc3RMaWtlSXRlcmFibGUobWFwTmFtZSkgPyBtYXBOYW1lIDogW107XG4gICAgbGlzdC5wdXNoKHZhbHVlKTtcbiAgICB0aGlzLl9oZWFkZXJzTWFwLnNldChuYW1lLCBsaXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGFsbCBoZWFkZXIgdmFsdWVzIGZvciB0aGUgZ2l2ZW4gbmFtZS5cbiAgICovXG4gIGRlbGV0ZSAobmFtZTogc3RyaW5nKTogdm9pZCB7IHRoaXMuX2hlYWRlcnNNYXAuZGVsZXRlKG5hbWUpOyB9XG5cbiAgZm9yRWFjaChmbjogKHZhbHVlczogc3RyaW5nW10sIG5hbWU6IHN0cmluZywgaGVhZGVyczogTWFwPHN0cmluZywgc3RyaW5nW10+KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5faGVhZGVyc01hcC5mb3JFYWNoKGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZpcnN0IGhlYWRlciB0aGF0IG1hdGNoZXMgZ2l2ZW4gbmFtZS5cbiAgICovXG4gIGdldChoZWFkZXI6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiBMaXN0V3JhcHBlci5maXJzdCh0aGlzLl9oZWFkZXJzTWFwLmdldChoZWFkZXIpKTsgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBmb3IgZXhpc3RlbmNlIG9mIGhlYWRlciBieSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgaGFzKGhlYWRlcjogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9oZWFkZXJzTWFwLmhhcyhoZWFkZXIpOyB9XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIG5hbWVzIG9mIHNldCBoZWFkZXJzXG4gICAqL1xuICBrZXlzKCk6IHN0cmluZ1tdIHsgcmV0dXJuIE1hcFdyYXBwZXIua2V5cyh0aGlzLl9oZWFkZXJzTWFwKTsgfVxuXG4gIC8qKlxuICAgKiBTZXRzIG9yIG92ZXJyaWRlcyBoZWFkZXIgdmFsdWUgZm9yIGdpdmVuIG5hbWUuXG4gICAqL1xuICBzZXQoaGVhZGVyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHZhciBsaXN0ID0gW107XG5cbiAgICBpZiAoaXNMaXN0TGlrZUl0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgdmFyIHB1c2hWYWx1ZSA9ICg8c3RyaW5nW10+dmFsdWUpLmpvaW4oJywnKTtcbiAgICAgIGxpc3QucHVzaChwdXNoVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMuX2hlYWRlcnNNYXAuc2V0KGhlYWRlciwgbGlzdCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB2YWx1ZXMgb2YgYWxsIGhlYWRlcnMuXG4gICAqL1xuICB2YWx1ZXMoKTogc3RyaW5nW11bXSB7IHJldHVybiBNYXBXcmFwcGVyLnZhbHVlcyh0aGlzLl9oZWFkZXJzTWFwKTsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHN0cmluZyBvZiBhbGwgaGVhZGVycy5cbiAgICovXG4gIHRvSlNPTigpOiBzdHJpbmcgeyByZXR1cm4gSnNvbi5zdHJpbmdpZnkodGhpcy52YWx1ZXMoKSk7IH1cblxuICAvKipcbiAgICogUmV0dXJucyBsaXN0IG9mIGhlYWRlciB2YWx1ZXMgZm9yIGEgZ2l2ZW4gbmFtZS5cbiAgICovXG4gIGdldEFsbChoZWFkZXI6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICB2YXIgaGVhZGVycyA9IHRoaXMuX2hlYWRlcnNNYXAuZ2V0KGhlYWRlcik7XG4gICAgcmV0dXJuIGlzTGlzdExpa2VJdGVyYWJsZShoZWFkZXJzKSA/IGhlYWRlcnMgOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXG4gICAqL1xuICBlbnRyaWVzKCkgeyB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbignXCJlbnRyaWVzXCIgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvbiBIZWFkZXJzIGNsYXNzJyk7IH1cbn1cbiJdfQ==

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(48);
	var enums_1 = __webpack_require__(295);
	var exceptions_1 = __webpack_require__(58);
	function normalizeMethodName(method) {
	    if (lang_1.isString(method)) {
	        var originalMethod = method;
	        method = method.replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); });
	        method = enums_1.RequestMethod[method];
	        if (typeof method !== 'number')
	            throw exceptions_1.makeTypeError("Invalid request method. The method \"" + originalMethod + "\" is not supported.");
	    }
	    return method;
	}
	exports.normalizeMethodName = normalizeMethodName;
	exports.isSuccess = function (status) { return (status >= 200 && status < 300); };
	function getResponseURL(xhr) {
	    if ('responseURL' in xhr) {
	        return xhr.responseURL;
	    }
	    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	        return xhr.getResponseHeader('X-Request-URL');
	    }
	    return;
	}
	exports.getResponseURL = getResponseURL;
	var lang_2 = __webpack_require__(48);
	exports.isJsObject = lang_2.isJsObject;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cF91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2h0dHBfdXRpbHMudHMiXSwibmFtZXMiOlsibm9ybWFsaXplTWV0aG9kTmFtZSIsImdldFJlc3BvbnNlVVJMIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBdUIsMEJBQTBCLENBQUMsQ0FBQTtBQUNsRCxzQkFBNEIsU0FBUyxDQUFDLENBQUE7QUFDdEMsMkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFHN0QsNkJBQW9DLE1BQU07SUFDeENBLEVBQUVBLENBQUNBLENBQUNBLGVBQVFBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3JCQSxJQUFJQSxjQUFjQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUM1QkEsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsRUFBRUEsVUFBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsSUFBS0EsT0FBQUEsRUFBRUEsQ0FBQ0EsV0FBV0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBbkNBLENBQW1DQSxDQUFDQSxDQUFDQTtRQUMzRkEsTUFBTUEsR0FBR0EscUJBQWFBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQy9CQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxNQUFNQSxLQUFLQSxRQUFRQSxDQUFDQTtZQUM3QkEsTUFBTUEsMEJBQWFBLENBQ2ZBLDBDQUF1Q0EsY0FBY0EseUJBQXFCQSxDQUFDQSxDQUFDQTtJQUNwRkEsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7QUFDaEJBLENBQUNBO0FBVmUsMkJBQW1CLHNCQVVsQyxDQUFBO0FBRVksaUJBQVMsR0FBRyxVQUFDLE1BQWMsSUFBYyxPQUFBLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQS9CLENBQStCLENBQUM7QUFFdEYsd0JBQStCLEdBQVE7SUFDckNDLEVBQUVBLENBQUNBLENBQUNBLGFBQWFBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1FBQ3pCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxXQUFXQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3pEQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBaUJBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO0lBQ2hEQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFDQTtBQUNUQSxDQUFDQTtBQVJlLHNCQUFjLGlCQVE3QixDQUFBO0FBRUQscUJBQXlCLDBCQUEwQixDQUFDO0FBQTVDLHVDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNTdHJpbmd9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1JlcXVlc3RNZXRob2R9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHttYWtlVHlwZUVycm9yfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSAnLi9zdGF0aWNfcmVzcG9uc2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kTmFtZShtZXRob2QpOiBSZXF1ZXN0TWV0aG9kIHtcbiAgaWYgKGlzU3RyaW5nKG1ldGhvZCkpIHtcbiAgICB2YXIgb3JpZ2luYWxNZXRob2QgPSBtZXRob2Q7XG4gICAgbWV0aG9kID0gbWV0aG9kLnJlcGxhY2UoLyhcXHcpKFxcdyopL2csIChnMCwgZzEsIGcyKSA9PiBnMS50b1VwcGVyQ2FzZSgpICsgZzIudG9Mb3dlckNhc2UoKSk7XG4gICAgbWV0aG9kID0gUmVxdWVzdE1ldGhvZFttZXRob2RdO1xuICAgIGlmICh0eXBlb2YgbWV0aG9kICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG1ha2VUeXBlRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgcmVxdWVzdCBtZXRob2QuIFRoZSBtZXRob2QgXCIke29yaWdpbmFsTWV0aG9kfVwiIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZDtcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3VjY2VzcyA9IChzdGF0dXM6IG51bWJlcik6IGJvb2xlYW4gPT4gKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc3BvbnNlVVJMKHhocjogYW55KTogc3RyaW5nIHtcbiAgaWYgKCdyZXNwb25zZVVSTCcgaW4geGhyKSB7XG4gICAgcmV0dXJuIHhoci5yZXNwb25zZVVSTDtcbiAgfVxuICBpZiAoL15YLVJlcXVlc3QtVVJMOi9tLnRlc3QoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSkge1xuICAgIHJldHVybiB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgfVxuICByZXR1cm47XG59XG5cbmV4cG9ydCB7aXNKc09iamVjdH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbiJdfQ==

/***/ },
/* 295 */
/***/ function(module, exports) {

	'use strict';/**
	 * Supported http methods.
	 */
	(function (RequestMethod) {
	    RequestMethod[RequestMethod["Get"] = 0] = "Get";
	    RequestMethod[RequestMethod["Post"] = 1] = "Post";
	    RequestMethod[RequestMethod["Put"] = 2] = "Put";
	    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
	    RequestMethod[RequestMethod["Options"] = 4] = "Options";
	    RequestMethod[RequestMethod["Head"] = 5] = "Head";
	    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
	})(exports.RequestMethod || (exports.RequestMethod = {}));
	var RequestMethod = exports.RequestMethod;
	/**
	 * All possible states in which a connection can be, based on
	 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
	 * additional "CANCELLED" state.
	 */
	(function (ReadyState) {
	    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
	    ReadyState[ReadyState["Open"] = 1] = "Open";
	    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
	    ReadyState[ReadyState["Loading"] = 3] = "Loading";
	    ReadyState[ReadyState["Done"] = 4] = "Done";
	    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
	})(exports.ReadyState || (exports.ReadyState = {}));
	var ReadyState = exports.ReadyState;
	/**
	 * Acceptable response types to be associated with a {@link Response}, based on
	 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
	 */
	(function (ResponseType) {
	    ResponseType[ResponseType["Basic"] = 0] = "Basic";
	    ResponseType[ResponseType["Cors"] = 1] = "Cors";
	    ResponseType[ResponseType["Default"] = 2] = "Default";
	    ResponseType[ResponseType["Error"] = 3] = "Error";
	    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
	})(exports.ResponseType || (exports.ResponseType = {}));
	var ResponseType = exports.ResponseType;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC9lbnVtcy50cyJdLCJuYW1lcyI6WyJSZXF1ZXN0TWV0aG9kIiwiUmVhZHlTdGF0ZSIsIlJlc3BvbnNlVHlwZSJdLCJtYXBwaW5ncyI6IkFBRUE7O0dBRUc7QUFDSCxXQUFZLGFBQWE7SUFDdkJBLCtDQUFHQSxDQUFBQTtJQUNIQSxpREFBSUEsQ0FBQUE7SUFDSkEsK0NBQUdBLENBQUFBO0lBQ0hBLHFEQUFNQSxDQUFBQTtJQUNOQSx1REFBT0EsQ0FBQUE7SUFDUEEsaURBQUlBLENBQUFBO0lBQ0pBLG1EQUFLQSxDQUFBQTtBQUNQQSxDQUFDQSxFQVJXLHFCQUFhLEtBQWIscUJBQWEsUUFReEI7QUFSRCxJQUFZLGFBQWEsR0FBYixxQkFRWCxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNILFdBQVksVUFBVTtJQUNwQkMsK0NBQU1BLENBQUFBO0lBQ05BLDJDQUFJQSxDQUFBQTtJQUNKQSxpRUFBZUEsQ0FBQUE7SUFDZkEsaURBQU9BLENBQUFBO0lBQ1BBLDJDQUFJQSxDQUFBQTtJQUNKQSxxREFBU0EsQ0FBQUE7QUFDWEEsQ0FBQ0EsRUFQVyxrQkFBVSxLQUFWLGtCQUFVLFFBT3JCO0FBUEQsSUFBWSxVQUFVLEdBQVYsa0JBT1gsQ0FBQTtBQUVEOzs7R0FHRztBQUNILFdBQVksWUFBWTtJQUN0QkMsaURBQUtBLENBQUFBO0lBQ0xBLCtDQUFJQSxDQUFBQTtJQUNKQSxxREFBT0EsQ0FBQUE7SUFDUEEsaURBQUtBLENBQUFBO0lBQ0xBLG1EQUFNQSxDQUFBQTtBQUNSQSxDQUFDQSxFQU5XLG9CQUFZLEtBQVosb0JBQVksUUFNdkI7QUFORCxJQUFZLFlBQVksR0FBWixvQkFNWCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdHJpbmdNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuXG4vKipcbiAqIFN1cHBvcnRlZCBodHRwIG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBlbnVtIFJlcXVlc3RNZXRob2Qge1xuICBHZXQsXG4gIFBvc3QsXG4gIFB1dCxcbiAgRGVsZXRlLFxuICBPcHRpb25zLFxuICBIZWFkLFxuICBQYXRjaFxufVxuXG4vKipcbiAqIEFsbCBwb3NzaWJsZSBzdGF0ZXMgaW4gd2hpY2ggYSBjb25uZWN0aW9uIGNhbiBiZSwgYmFzZWQgb25cbiAqIFtTdGF0ZXNdKGh0dHA6Ly93d3cudzMub3JnL1RSL1hNTEh0dHBSZXF1ZXN0LyNzdGF0ZXMpIGZyb20gdGhlIGBYTUxIdHRwUmVxdWVzdGAgc3BlYywgYnV0IHdpdGggYW5cbiAqIGFkZGl0aW9uYWwgXCJDQU5DRUxMRURcIiBzdGF0ZS5cbiAqL1xuZXhwb3J0IGVudW0gUmVhZHlTdGF0ZSB7XG4gIFVuc2VudCxcbiAgT3BlbixcbiAgSGVhZGVyc1JlY2VpdmVkLFxuICBMb2FkaW5nLFxuICBEb25lLFxuICBDYW5jZWxsZWRcbn1cblxuLyoqXG4gKiBBY2NlcHRhYmxlIHJlc3BvbnNlIHR5cGVzIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCBhIHtAbGluayBSZXNwb25zZX0sIGJhc2VkIG9uXG4gKiBbUmVzcG9uc2VUeXBlXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVzcG9uc2V0eXBlKSBmcm9tIHRoZSBGZXRjaCBzcGVjLlxuICovXG5leHBvcnQgZW51bSBSZXNwb25zZVR5cGUge1xuICBCYXNpYyxcbiAgQ29ycyxcbiAgRGVmYXVsdCxcbiAgRXJyb3IsXG4gIE9wYXF1ZVxufVxuIl19

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(48);
	var headers_1 = __webpack_require__(293);
	var enums_1 = __webpack_require__(295);
	var core_1 = __webpack_require__(67);
	var url_search_params_1 = __webpack_require__(297);
	var http_utils_1 = __webpack_require__(294);
	/**
	 * Creates a request options object to be optionally provided when instantiating a
	 * {@link Request}.
	 *
	 * This class is based on the `RequestInit` description in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#requestinit).
	 *
	 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
	 * class, which sub-classes `RequestOptions`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
	 *
	 * ```typescript
	 * import {RequestOptions, Request, RequestMethod} from 'angular2/http';
	 *
	 * var options = new RequestOptions({
	 *   method: RequestMethod.Post,
	 *   url: 'https://google.com'
	 * });
	 * var req = new Request(options);
	 * console.log('req.method:', RequestMethod[req.method]); // Post
	 * console.log('options.url:', options.url); // https://google.com
	 * ```
	 */
	var RequestOptions = (function () {
	    function RequestOptions(_a) {
	        var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search;
	        this.method = lang_1.isPresent(method) ? http_utils_1.normalizeMethodName(method) : null;
	        this.headers = lang_1.isPresent(headers) ? headers : null;
	        this.body = lang_1.isPresent(body) ? body : null;
	        this.url = lang_1.isPresent(url) ? url : null;
	        this.search = lang_1.isPresent(search) ? (lang_1.isString(search) ? new url_search_params_1.URLSearchParams((search)) :
	            (search)) :
	            null;
	    }
	    /**
	     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
	     * existing values. This method will not change the values of the instance on which it is being
	     * called.
	     *
	     * Note that `headers` and `search` will override existing values completely if present in
	     * the `options` object. If these values should be merged, it should be done prior to calling
	     * `merge` on the `RequestOptions` instance.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
	     *
	     * ```typescript
	     * import {RequestOptions, Request, RequestMethod} from 'angular2/http';
	     *
	     * var options = new RequestOptions({
	     *   method: RequestMethod.Post
	     * });
	     * var req = new Request(options.merge({
	     *   url: 'https://google.com'
	     * }));
	     * console.log('req.method:', RequestMethod[req.method]); // Post
	     * console.log('options.url:', options.url); // null
	     * console.log('req.url:', req.url); // https://google.com
	     * ```
	     */
	    RequestOptions.prototype.merge = function (options) {
	        return new RequestOptions({
	            method: lang_1.isPresent(options) && lang_1.isPresent(options.method) ? options.method : this.method,
	            headers: lang_1.isPresent(options) && lang_1.isPresent(options.headers) ? options.headers : this.headers,
	            body: lang_1.isPresent(options) && lang_1.isPresent(options.body) ? options.body : this.body,
	            url: lang_1.isPresent(options) && lang_1.isPresent(options.url) ? options.url : this.url,
	            search: lang_1.isPresent(options) && lang_1.isPresent(options.search) ?
	                (lang_1.isString(options.search) ? new url_search_params_1.URLSearchParams((options.search)) :
	                    (options.search).clone()) :
	                this.search
	        });
	    };
	    return RequestOptions;
	})();
	exports.RequestOptions = RequestOptions;
	/**
	 * Subclass of {@link RequestOptions}, with default values.
	 *
	 * Default values:
	 *  * method: {@link RequestMethod RequestMethod.Get}
	 *  * headers: empty {@link Headers} object
	 *
	 * This class could be extended and bound to the {@link RequestOptions} class
	 * when configuring an {@link Injector}, in order to override the default options
	 * used by {@link Http} to create and send {@link Request Requests}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
	 *
	 * ```typescript
	 * import {provide} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from 'angular2/http';
	 * import {App} from './myapp';
	 *
	 * class MyOptions extends BaseRequestOptions {
	 *   search: string = 'coreTeam=true';
	 * }
	 *
	 * bootstrap(App, [HTTP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})]);
	 * ```
	 *
	 * The options could also be extended when manually creating a {@link Request}
	 * object.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
	 *
	 * ```
	 * import {BaseRequestOptions, Request, RequestMethod} from 'angular2/http';
	 *
	 * var options = new BaseRequestOptions();
	 * var req = new Request(options.merge({
	 *   method: RequestMethod.Post,
	 *   url: 'https://google.com'
	 * }));
	 * console.log('req.method:', RequestMethod[req.method]); // Post
	 * console.log('options.url:', options.url); // null
	 * console.log('req.url:', req.url); // https://google.com
	 * ```
	 */
	var BaseRequestOptions = (function (_super) {
	    __extends(BaseRequestOptions, _super);
	    function BaseRequestOptions() {
	        _super.call(this, { method: enums_1.RequestMethod.Get, headers: new headers_1.Headers() });
	    }
	    BaseRequestOptions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BaseRequestOptions);
	    return BaseRequestOptions;
	})(RequestOptions);
	exports.BaseRequestOptions = BaseRequestOptions;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9yZXF1ZXN0X29wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC9iYXNlX3JlcXVlc3Rfb3B0aW9ucy50cyJdLCJuYW1lcyI6WyJSZXF1ZXN0T3B0aW9ucyIsIlJlcXVlc3RPcHRpb25zLmNvbnN0cnVjdG9yIiwiUmVxdWVzdE9wdGlvbnMubWVyZ2UiLCJCYXNlUmVxdWVzdE9wdGlvbnMiLCJCYXNlUmVxdWVzdE9wdGlvbnMuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWtDLDBCQUEwQixDQUFDLENBQUE7QUFDN0Qsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLHNCQUE0QixTQUFTLENBQUMsQ0FBQTtBQUV0QyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsa0NBQThCLHFCQUFxQixDQUFDLENBQUE7QUFDcEQsMkJBQWtDLGNBQWMsQ0FBQyxDQUFBO0FBRWpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUNIO0lBdUJFQSx3QkFBWUEsRUFBNkRBO2lDQUFGQyxFQUFFQSxPQUE1REEsTUFBTUEsY0FBRUEsT0FBT0EsZUFBRUEsSUFBSUEsWUFBRUEsR0FBR0EsV0FBRUEsTUFBTUE7UUFDN0NBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLGdCQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxnQ0FBbUJBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3JFQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkRBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLGdCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsZ0JBQVNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3ZDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsSUFBSUEsbUNBQWVBLENBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ3BCQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUM5Q0EsSUFBSUEsQ0FBQ0E7SUFDekNBLENBQUNBO0lBRUREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F3QkdBO0lBQ0hBLDhCQUFLQSxHQUFMQSxVQUFNQSxPQUE0QkE7UUFDaENFLE1BQU1BLENBQUNBLElBQUlBLGNBQWNBLENBQUNBO1lBQ3hCQSxNQUFNQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BO1lBQ3RGQSxPQUFPQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BO1lBQzFGQSxJQUFJQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBO1lBQzlFQSxHQUFHQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBO1lBQzFFQSxNQUFNQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBO2dCQUMzQ0EsQ0FBQ0EsZUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsSUFBSUEsbUNBQWVBLENBQVNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUMzQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7Z0JBQ3hFQSxJQUFJQSxDQUFDQSxNQUFNQTtTQUN4QkEsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFDSEYscUJBQUNBO0FBQURBLENBQUNBLEFBdEVELElBc0VDO0FBdEVZLHNCQUFjLGlCQXNFMUIsQ0FBQTtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkNHO0FBQ0g7SUFDd0NHLHNDQUFjQTtJQUNwREE7UUFBZ0JDLGtCQUFNQSxFQUFDQSxNQUFNQSxFQUFFQSxxQkFBYUEsQ0FBQ0EsR0FBR0EsRUFBRUEsT0FBT0EsRUFBRUEsSUFBSUEsaUJBQU9BLEVBQUVBLEVBQUNBLENBQUNBLENBQUNBO0lBQUNBLENBQUNBO0lBRi9FRDtRQUFDQSxpQkFBVUEsRUFBRUE7OzJCQUdaQTtJQUFEQSx5QkFBQ0E7QUFBREEsQ0FBQ0EsQUFIRCxFQUN3QyxjQUFjLEVBRXJEO0FBRlksMEJBQWtCLHFCQUU5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnQsIGlzU3RyaW5nfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuaW1wb3J0IHtSZXF1ZXN0TWV0aG9kfSBmcm9tICcuL2VudW1zJztcbmltcG9ydCB7UmVxdWVzdE9wdGlvbnNBcmdzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VVJMU2VhcmNoUGFyYW1zfSBmcm9tICcuL3VybF9zZWFyY2hfcGFyYW1zJztcbmltcG9ydCB7bm9ybWFsaXplTWV0aG9kTmFtZX0gZnJvbSAnLi9odHRwX3V0aWxzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVxdWVzdCBvcHRpb25zIG9iamVjdCB0byBiZSBvcHRpb25hbGx5IHByb3ZpZGVkIHdoZW4gaW5zdGFudGlhdGluZyBhXG4gKiB7QGxpbmsgUmVxdWVzdH0uXG4gKlxuICogVGhpcyBjbGFzcyBpcyBiYXNlZCBvbiB0aGUgYFJlcXVlc3RJbml0YCBkZXNjcmlwdGlvbiBpbiB0aGUgW0ZldGNoXG4gKiBTcGVjXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVxdWVzdGluaXQpLlxuICpcbiAqIEFsbCB2YWx1ZXMgYXJlIG51bGwgYnkgZGVmYXVsdC4gVHlwaWNhbCBkZWZhdWx0cyBjYW4gYmUgZm91bmQgaW4gdGhlIHtAbGluayBCYXNlUmVxdWVzdE9wdGlvbnN9XG4gKiBjbGFzcywgd2hpY2ggc3ViLWNsYXNzZXMgYFJlcXVlc3RPcHRpb25zYC5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvN1d2aTNsZkxxNDFhUVBLbHhCNE8/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQge1JlcXVlc3RPcHRpb25zLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqXG4gKiB2YXIgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gKiAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0LFxuICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gKiB9KTtcbiAqIHZhciByZXEgPSBuZXcgUmVxdWVzdChvcHRpb25zKTtcbiAqIGNvbnNvbGUubG9nKCdyZXEubWV0aG9kOicsIFJlcXVlc3RNZXRob2RbcmVxLm1ldGhvZF0pOyAvLyBQb3N0XG4gKiBjb25zb2xlLmxvZygnb3B0aW9ucy51cmw6Jywgb3B0aW9ucy51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdE9wdGlvbnMge1xuICAvKipcbiAgICogSHR0cCBtZXRob2Qgd2l0aCB3aGljaCB0byBleGVjdXRlIGEge0BsaW5rIFJlcXVlc3R9LlxuICAgKiBBY2NlcHRhYmxlIG1ldGhvZHMgYXJlIGRlZmluZWQgaW4gdGhlIHtAbGluayBSZXF1ZXN0TWV0aG9kfSBlbnVtLlxuICAgKi9cbiAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kIHwgc3RyaW5nO1xuICAvKipcbiAgICoge0BsaW5rIEhlYWRlcnN9IHRvIGJlIGF0dGFjaGVkIHRvIGEge0BsaW5rIFJlcXVlc3R9LlxuICAgKi9cbiAgaGVhZGVyczogSGVhZGVycztcbiAgLyoqXG4gICAqIEJvZHkgdG8gYmUgdXNlZCB3aGVuIGNyZWF0aW5nIGEge0BsaW5rIFJlcXVlc3R9LlxuICAgKi9cbiAgLy8gVE9ETzogc3VwcG9ydCBGb3JtRGF0YSwgQmxvYiwgVVJMU2VhcmNoUGFyYW1zXG4gIGJvZHk6IHN0cmluZztcbiAgLyoqXG4gICAqIFVybCB3aXRoIHdoaWNoIHRvIHBlcmZvcm0gYSB7QGxpbmsgUmVxdWVzdH0uXG4gICAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqXG4gICAqIFNlYXJjaCBwYXJhbWV0ZXJzIHRvIGJlIGluY2x1ZGVkIGluIGEge0BsaW5rIFJlcXVlc3R9LlxuICAgKi9cbiAgc2VhcmNoOiBVUkxTZWFyY2hQYXJhbXM7XG4gIGNvbnN0cnVjdG9yKHttZXRob2QsIGhlYWRlcnMsIGJvZHksIHVybCwgc2VhcmNofTogUmVxdWVzdE9wdGlvbnNBcmdzID0ge30pIHtcbiAgICB0aGlzLm1ldGhvZCA9IGlzUHJlc2VudChtZXRob2QpID8gbm9ybWFsaXplTWV0aG9kTmFtZShtZXRob2QpIDogbnVsbDtcbiAgICB0aGlzLmhlYWRlcnMgPSBpc1ByZXNlbnQoaGVhZGVycykgPyBoZWFkZXJzIDogbnVsbDtcbiAgICB0aGlzLmJvZHkgPSBpc1ByZXNlbnQoYm9keSkgPyBib2R5IDogbnVsbDtcbiAgICB0aGlzLnVybCA9IGlzUHJlc2VudCh1cmwpID8gdXJsIDogbnVsbDtcbiAgICB0aGlzLnNlYXJjaCA9IGlzUHJlc2VudChzZWFyY2gpID8gKGlzU3RyaW5nKHNlYXJjaCkgPyBuZXcgVVJMU2VhcmNoUGFyYW1zKDxzdHJpbmc+KHNlYXJjaCkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VVJMU2VhcmNoUGFyYW1zPihzZWFyY2gpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGBSZXF1ZXN0T3B0aW9uc2AgaW5zdGFuY2UsIHVzaW5nIHRoZSBvcHRpb25hbCBpbnB1dCBhcyB2YWx1ZXMgdG8gb3ZlcnJpZGVcbiAgICogZXhpc3RpbmcgdmFsdWVzLiBUaGlzIG1ldGhvZCB3aWxsIG5vdCBjaGFuZ2UgdGhlIHZhbHVlcyBvZiB0aGUgaW5zdGFuY2Ugb24gd2hpY2ggaXQgaXMgYmVpbmdcbiAgICogY2FsbGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgYGhlYWRlcnNgIGFuZCBgc2VhcmNoYCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIHZhbHVlcyBjb21wbGV0ZWx5IGlmIHByZXNlbnQgaW5cbiAgICogdGhlIGBvcHRpb25zYCBvYmplY3QuIElmIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgbWVyZ2VkLCBpdCBzaG91bGQgYmUgZG9uZSBwcmlvciB0byBjYWxsaW5nXG4gICAqIGBtZXJnZWAgb24gdGhlIGBSZXF1ZXN0T3B0aW9uc2AgaW5zdGFuY2UuXG4gICAqXG4gICAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC82dzhYQThZVGtEUmNQWXBkQjlkaz9wPXByZXZpZXcpKVxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGltcG9ydCB7UmVxdWVzdE9wdGlvbnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2R9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICAgKlxuICAgKiB2YXIgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAqICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3RcbiAgICogfSk7XG4gICAqIHZhciByZXEgPSBuZXcgUmVxdWVzdChvcHRpb25zLm1lcmdlKHtcbiAgICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gICAqIH0pKTtcbiAgICogY29uc29sZS5sb2coJ3JlcS5tZXRob2Q6JywgUmVxdWVzdE1ldGhvZFtyZXEubWV0aG9kXSk7IC8vIFBvc3RcbiAgICogY29uc29sZS5sb2coJ29wdGlvbnMudXJsOicsIG9wdGlvbnMudXJsKTsgLy8gbnVsbFxuICAgKiBjb25zb2xlLmxvZygncmVxLnVybDonLCByZXEudXJsKTsgLy8gaHR0cHM6Ly9nb29nbGUuY29tXG4gICAqIGBgYFxuICAgKi9cbiAgbWVyZ2Uob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgIG1ldGhvZDogaXNQcmVzZW50KG9wdGlvbnMpICYmIGlzUHJlc2VudChvcHRpb25zLm1ldGhvZCkgPyBvcHRpb25zLm1ldGhvZCA6IHRoaXMubWV0aG9kLFxuICAgICAgaGVhZGVyczogaXNQcmVzZW50KG9wdGlvbnMpICYmIGlzUHJlc2VudChvcHRpb25zLmhlYWRlcnMpID8gb3B0aW9ucy5oZWFkZXJzIDogdGhpcy5oZWFkZXJzLFxuICAgICAgYm9keTogaXNQcmVzZW50KG9wdGlvbnMpICYmIGlzUHJlc2VudChvcHRpb25zLmJvZHkpID8gb3B0aW9ucy5ib2R5IDogdGhpcy5ib2R5LFxuICAgICAgdXJsOiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMudXJsKSA/IG9wdGlvbnMudXJsIDogdGhpcy51cmwsXG4gICAgICBzZWFyY2g6IGlzUHJlc2VudChvcHRpb25zKSAmJiBpc1ByZXNlbnQob3B0aW9ucy5zZWFyY2gpID9cbiAgICAgICAgICAgICAgICAgIChpc1N0cmluZyhvcHRpb25zLnNlYXJjaCkgPyBuZXcgVVJMU2VhcmNoUGFyYW1zKDxzdHJpbmc+KG9wdGlvbnMuc2VhcmNoKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8VVJMU2VhcmNoUGFyYW1zPihvcHRpb25zLnNlYXJjaCkpLmNsb25lKCkpIDpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoXG4gICAgfSk7XG4gIH1cbn1cblxuXG4vKipcbiAqIFN1YmNsYXNzIG9mIHtAbGluayBSZXF1ZXN0T3B0aW9uc30sIHdpdGggZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogRGVmYXVsdCB2YWx1ZXM6XG4gKiAgKiBtZXRob2Q6IHtAbGluayBSZXF1ZXN0TWV0aG9kIFJlcXVlc3RNZXRob2QuR2V0fVxuICogICogaGVhZGVyczogZW1wdHkge0BsaW5rIEhlYWRlcnN9IG9iamVjdFxuICpcbiAqIFRoaXMgY2xhc3MgY291bGQgYmUgZXh0ZW5kZWQgYW5kIGJvdW5kIHRvIHRoZSB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9IGNsYXNzXG4gKiB3aGVuIGNvbmZpZ3VyaW5nIGFuIHtAbGluayBJbmplY3Rvcn0sIGluIG9yZGVyIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAqIHVzZWQgYnkge0BsaW5rIEh0dHB9IHRvIGNyZWF0ZSBhbmQgc2VuZCB7QGxpbmsgUmVxdWVzdCBSZXF1ZXN0c30uXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L0xFS1ZTeD9wPXByZXZpZXcpKVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7cHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG4gKiBpbXBvcnQge0hUVFBfUFJPVklERVJTLCBIdHRwLCBCYXNlUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqIGltcG9ydCB7QXBwfSBmcm9tICcuL215YXBwJztcbiAqXG4gKiBjbGFzcyBNeU9wdGlvbnMgZXh0ZW5kcyBCYXNlUmVxdWVzdE9wdGlvbnMge1xuICogICBzZWFyY2g6IHN0cmluZyA9ICdjb3JlVGVhbT10cnVlJztcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwLCBbSFRUUF9QUk9WSURFUlMsIHByb3ZpZGUoUmVxdWVzdE9wdGlvbnMsIHt1c2VDbGFzczogTXlPcHRpb25zfSldKTtcbiAqIGBgYFxuICpcbiAqIFRoZSBvcHRpb25zIGNvdWxkIGFsc28gYmUgZXh0ZW5kZWQgd2hlbiBtYW51YWxseSBjcmVhdGluZyBhIHtAbGluayBSZXF1ZXN0fVxuICogb2JqZWN0LlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9veUJvRXZOdERoT1NmaTlZeGFWYj9wPXByZXZpZXcpKVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtCYXNlUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2R9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICpcbiAqIHZhciBvcHRpb25zID0gbmV3IEJhc2VSZXF1ZXN0T3B0aW9ucygpO1xuICogdmFyIHJlcSA9IG5ldyBSZXF1ZXN0KG9wdGlvbnMubWVyZ2Uoe1xuICogICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdCxcbiAqICAgdXJsOiAnaHR0cHM6Ly9nb29nbGUuY29tJ1xuICogfSkpO1xuICogY29uc29sZS5sb2coJ3JlcS5tZXRob2Q6JywgUmVxdWVzdE1ldGhvZFtyZXEubWV0aG9kXSk7IC8vIFBvc3RcbiAqIGNvbnNvbGUubG9nKCdvcHRpb25zLnVybDonLCBvcHRpb25zLnVybCk7IC8vIG51bGxcbiAqIGNvbnNvbGUubG9nKCdyZXEudXJsOicsIHJlcS51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZVJlcXVlc3RPcHRpb25zIGV4dGVuZHMgUmVxdWVzdE9wdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoe21ldGhvZDogUmVxdWVzdE1ldGhvZC5HZXQsIGhlYWRlcnM6IG5ldyBIZWFkZXJzKCl9KTsgfVxufVxuIl19

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(48);
	var collection_1 = __webpack_require__(56);
	function paramParser(rawParams) {
	    if (rawParams === void 0) { rawParams = ''; }
	    var map = new collection_1.Map();
	    if (rawParams.length > 0) {
	        var params = rawParams.split('&');
	        params.forEach(function (param) {
	            var split = param.split('=');
	            var key = split[0];
	            var val = split[1];
	            var list = lang_1.isPresent(map.get(key)) ? map.get(key) : [];
	            list.push(val);
	            map.set(key, list);
	        });
	    }
	    return map;
	}
	/**
	 * Map-like representation of url search parameters, based on
	 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
	 * with several extensions for merging URLSearchParams objects:
	 *   - setAll()
	 *   - appendAll()
	 *   - replaceAll()
	 */
	var URLSearchParams = (function () {
	    function URLSearchParams(rawParams) {
	        if (rawParams === void 0) { rawParams = ''; }
	        this.rawParams = rawParams;
	        this.paramsMap = paramParser(rawParams);
	    }
	    URLSearchParams.prototype.clone = function () {
	        var clone = new URLSearchParams();
	        clone.appendAll(this);
	        return clone;
	    };
	    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
	    URLSearchParams.prototype.get = function (param) {
	        var storedParam = this.paramsMap.get(param);
	        if (collection_1.isListLikeIterable(storedParam)) {
	            return collection_1.ListWrapper.first(storedParam);
	        }
	        else {
	            return null;
	        }
	    };
	    URLSearchParams.prototype.getAll = function (param) {
	        var mapParam = this.paramsMap.get(param);
	        return lang_1.isPresent(mapParam) ? mapParam : [];
	    };
	    URLSearchParams.prototype.set = function (param, val) {
	        var mapParam = this.paramsMap.get(param);
	        var list = lang_1.isPresent(mapParam) ? mapParam : [];
	        collection_1.ListWrapper.clear(list);
	        list.push(val);
	        this.paramsMap.set(param, list);
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
	    //
	    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.setAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            collection_1.ListWrapper.clear(list);
	            list.push(value[0]);
	            _this.paramsMap.set(param, list);
	        });
	    };
	    URLSearchParams.prototype.append = function (param, val) {
	        var mapParam = this.paramsMap.get(param);
	        var list = lang_1.isPresent(mapParam) ? mapParam : [];
	        list.push(val);
	        this.paramsMap.set(param, list);
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `append(name, value)`
	    // for each value in `values`.
	    //
	    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.appendAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            for (var i = 0; i < value.length; ++i) {
	                list.push(value[i]);
	            }
	            _this.paramsMap.set(param, list);
	        });
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `delete(name)`,
	    // followed by `set(name, values)`
	    //
	    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.replaceAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            collection_1.ListWrapper.clear(list);
	            for (var i = 0; i < value.length; ++i) {
	                list.push(value[i]);
	            }
	            _this.paramsMap.set(param, list);
	        });
	    };
	    URLSearchParams.prototype.toString = function () {
	        var paramsList = [];
	        this.paramsMap.forEach(function (values, k) { values.forEach(function (v) { return paramsList.push(k + '=' + v); }); });
	        return paramsList.join('&');
	    };
	    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
	    return URLSearchParams;
	})();
	exports.URLSearchParams = URLSearchParams;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX3NlYXJjaF9wYXJhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC91cmxfc2VhcmNoX3BhcmFtcy50cyJdLCJuYW1lcyI6WyJwYXJhbVBhcnNlciIsIlVSTFNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcy5jb25zdHJ1Y3RvciIsIlVSTFNlYXJjaFBhcmFtcy5jbG9uZSIsIlVSTFNlYXJjaFBhcmFtcy5oYXMiLCJVUkxTZWFyY2hQYXJhbXMuZ2V0IiwiVVJMU2VhcmNoUGFyYW1zLmdldEFsbCIsIlVSTFNlYXJjaFBhcmFtcy5zZXQiLCJVUkxTZWFyY2hQYXJhbXMuc2V0QWxsIiwiVVJMU2VhcmNoUGFyYW1zLmFwcGVuZCIsIlVSTFNlYXJjaFBhcmFtcy5hcHBlbmRBbGwiLCJVUkxTZWFyY2hQYXJhbXMucmVwbGFjZUFsbCIsIlVSTFNlYXJjaFBhcmFtcy50b1N0cmluZyIsIlVSTFNlYXJjaFBhcmFtcy5kZWxldGUiXSwibWFwcGluZ3MiOiJBQUFBLHFCQUE2QywwQkFBMEIsQ0FBQyxDQUFBO0FBQ3hFLDJCQUErRCxnQ0FBZ0MsQ0FBQyxDQUFBO0FBRWhHLHFCQUFxQixTQUFzQjtJQUF0QkEseUJBQXNCQSxHQUF0QkEsY0FBc0JBO0lBQ3pDQSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxnQkFBR0EsRUFBb0JBLENBQUNBO0lBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6QkEsSUFBSUEsTUFBTUEsR0FBYUEsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLEtBQWFBO1lBQzNCQSxJQUFJQSxLQUFLQSxHQUFhQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUN2Q0EsSUFBSUEsR0FBR0EsR0FB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LElBQVVZLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ2hFWixzQkFBQ0E7QUFBREEsQ0FBQ0EsQUF0R0QsSUFzR0M7QUF0R1ksdUJBQWUsa0JBc0czQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT05TVF9FWFBSLCBpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge01hcCwgTWFwV3JhcHBlciwgTGlzdFdyYXBwZXIsIGlzTGlzdExpa2VJdGVyYWJsZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcblxuZnVuY3Rpb24gcGFyYW1QYXJzZXIocmF3UGFyYW1zOiBzdHJpbmcgPSAnJyk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gIHZhciBtYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gIGlmIChyYXdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgIHZhciBwYXJhbXM6IHN0cmluZ1tdID0gcmF3UGFyYW1zLnNwbGl0KCcmJyk7XG4gICAgcGFyYW1zLmZvckVhY2goKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHZhciBzcGxpdDogc3RyaW5nW10gPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgICAgdmFyIGtleSA9IHNwbGl0WzBdO1xuICAgICAgdmFyIHZhbCA9IHNwbGl0WzFdO1xuICAgICAgdmFyIGxpc3QgPSBpc1ByZXNlbnQobWFwLmdldChrZXkpKSA/IG1hcC5nZXQoa2V5KSA6IFtdO1xuICAgICAgbGlzdC5wdXNoKHZhbCk7XG4gICAgICBtYXAuc2V0KGtleSwgbGlzdCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBNYXAtbGlrZSByZXByZXNlbnRhdGlvbiBvZiB1cmwgc2VhcmNoIHBhcmFtZXRlcnMsIGJhc2VkIG9uXG4gKiBbVVJMU2VhcmNoUGFyYW1zXShodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHNlYXJjaHBhcmFtcykgaW4gdGhlIHVybCBsaXZpbmcgc3RhbmRhcmQsXG4gKiB3aXRoIHNldmVyYWwgZXh0ZW5zaW9ucyBmb3IgbWVyZ2luZyBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0czpcbiAqICAgLSBzZXRBbGwoKVxuICogICAtIGFwcGVuZEFsbCgpXG4gKiAgIC0gcmVwbGFjZUFsbCgpXG4gKi9cbmV4cG9ydCBjbGFzcyBVUkxTZWFyY2hQYXJhbXMge1xuICBwYXJhbXNNYXA6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPjtcbiAgY29uc3RydWN0b3IocHVibGljIHJhd1BhcmFtczogc3RyaW5nID0gJycpIHsgdGhpcy5wYXJhbXNNYXAgPSBwYXJhbVBhcnNlcihyYXdQYXJhbXMpOyB9XG5cbiAgY2xvbmUoKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgICB2YXIgY2xvbmUgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgY2xvbmUuYXBwZW5kQWxsKHRoaXMpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuXG4gIGhhcyhwYXJhbTogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnBhcmFtc01hcC5oYXMocGFyYW0pOyB9XG5cbiAgZ2V0KHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhciBzdG9yZWRQYXJhbSA9IHRoaXMucGFyYW1zTWFwLmdldChwYXJhbSk7XG4gICAgaWYgKGlzTGlzdExpa2VJdGVyYWJsZShzdG9yZWRQYXJhbSkpIHtcbiAgICAgIHJldHVybiBMaXN0V3JhcHBlci5maXJzdChzdG9yZWRQYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbChwYXJhbTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHZhciBtYXBQYXJhbSA9IHRoaXMucGFyYW1zTWFwLmdldChwYXJhbSk7XG4gICAgcmV0dXJuIGlzUHJlc2VudChtYXBQYXJhbSkgPyBtYXBQYXJhbSA6IFtdO1xuICB9XG5cbiAgc2V0KHBhcmFtOiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XG4gICAgdmFyIG1hcFBhcmFtID0gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKTtcbiAgICB2YXIgbGlzdCA9IGlzUHJlc2VudChtYXBQYXJhbSkgPyBtYXBQYXJhbSA6IFtdO1xuICAgIExpc3RXcmFwcGVyLmNsZWFyKGxpc3QpO1xuICAgIGxpc3QucHVzaCh2YWwpO1xuICAgIHRoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gIH1cblxuICAvLyBBIG1lcmdlIG9wZXJhdGlvblxuICAvLyBGb3IgZWFjaCBuYW1lLXZhbHVlcyBwYWlyIGluIGBzZWFyY2hQYXJhbXNgLCBwZXJmb3JtIGBzZXQobmFtZSwgdmFsdWVzWzBdKWBcbiAgLy9cbiAgLy8gRS5nOiBcImE9WzEsMiwzXSwgYz1bOF1cIiArIFwiYT1bNCw1LDZdLCBiPVs3XVwiID0gXCJhPVs0XSwgYz1bOF0sIGI9WzddXCJcbiAgLy9cbiAgLy8gVE9ETyhAY2FpdHApOiBkb2N1bWVudCB0aGlzIGJldHRlclxuICBzZXRBbGwoc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICBzZWFyY2hQYXJhbXMucGFyYW1zTWFwLmZvckVhY2goKHZhbHVlLCBwYXJhbSkgPT4ge1xuICAgICAgdmFyIG1hcFBhcmFtID0gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKTtcbiAgICAgIHZhciBsaXN0ID0gaXNQcmVzZW50KG1hcFBhcmFtKSA/IG1hcFBhcmFtIDogW107XG4gICAgICBMaXN0V3JhcHBlci5jbGVhcihsaXN0KTtcbiAgICAgIGxpc3QucHVzaCh2YWx1ZVswXSk7XG4gICAgICB0aGlzLnBhcmFtc01hcC5zZXQocGFyYW0sIGxpc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kKHBhcmFtOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIG1hcFBhcmFtID0gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKTtcbiAgICB2YXIgbGlzdCA9IGlzUHJlc2VudChtYXBQYXJhbSkgPyBtYXBQYXJhbSA6IFtdO1xuICAgIGxpc3QucHVzaCh2YWwpO1xuICAgIHRoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gIH1cblxuICAvLyBBIG1lcmdlIG9wZXJhdGlvblxuICAvLyBGb3IgZWFjaCBuYW1lLXZhbHVlcyBwYWlyIGluIGBzZWFyY2hQYXJhbXNgLCBwZXJmb3JtIGBhcHBlbmQobmFtZSwgdmFsdWUpYFxuICAvLyBmb3IgZWFjaCB2YWx1ZSBpbiBgdmFsdWVzYC5cbiAgLy9cbiAgLy8gRS5nOiBcImE9WzEsMl0sIGM9WzhdXCIgKyBcImE9WzMsNF0sIGI9WzddXCIgPSBcImE9WzEsMiwzLDRdLCBjPVs4XSwgYj1bN11cIlxuICAvL1xuICAvLyBUT0RPKEBjYWl0cCk6IGRvY3VtZW50IHRoaXMgYmV0dGVyXG4gIGFwcGVuZEFsbChzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtcykge1xuICAgIHNlYXJjaFBhcmFtcy5wYXJhbXNNYXAuZm9yRWFjaCgodmFsdWUsIHBhcmFtKSA9PiB7XG4gICAgICB2YXIgbWFwUGFyYW0gPSB0aGlzLnBhcmFtc01hcC5nZXQocGFyYW0pO1xuICAgICAgdmFyIGxpc3QgPSBpc1ByZXNlbnQobWFwUGFyYW0pID8gbWFwUGFyYW0gOiBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgbGlzdC5wdXNoKHZhbHVlW2ldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIEEgbWVyZ2Ugb3BlcmF0aW9uXG4gIC8vIEZvciBlYWNoIG5hbWUtdmFsdWVzIHBhaXIgaW4gYHNlYXJjaFBhcmFtc2AsIHBlcmZvcm0gYGRlbGV0ZShuYW1lKWAsXG4gIC8vIGZvbGxvd2VkIGJ5IGBzZXQobmFtZSwgdmFsdWVzKWBcbiAgLy9cbiAgLy8gRS5nOiBcImE9WzEsMiwzXSwgYz1bOF1cIiArIFwiYT1bNCw1LDZdLCBiPVs3XVwiID0gXCJhPVs0LDUsNl0sIGM9WzhdLCBiPVs3XVwiXG4gIC8vXG4gIC8vIFRPRE8oQGNhaXRwKTogZG9jdW1lbnQgdGhpcyBiZXR0ZXJcbiAgcmVwbGFjZUFsbChzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtcykge1xuICAgIHNlYXJjaFBhcmFtcy5wYXJhbXNNYXAuZm9yRWFjaCgodmFsdWUsIHBhcmFtKSA9PiB7XG4gICAgICB2YXIgbWFwUGFyYW0gPSB0aGlzLnBhcmFtc01hcC5nZXQocGFyYW0pO1xuICAgICAgdmFyIGxpc3QgPSBpc1ByZXNlbnQobWFwUGFyYW0pID8gbWFwUGFyYW0gOiBbXTtcbiAgICAgIExpc3RXcmFwcGVyLmNsZWFyKGxpc3QpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBsaXN0LnB1c2godmFsdWVbaV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXJhbXNNYXAuc2V0KHBhcmFtLCBsaXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgdmFyIHBhcmFtc0xpc3QgPSBbXTtcbiAgICB0aGlzLnBhcmFtc01hcC5mb3JFYWNoKCh2YWx1ZXMsIGspID0+IHsgdmFsdWVzLmZvckVhY2godiA9PiBwYXJhbXNMaXN0LnB1c2goayArICc9JyArIHYpKTsgfSk7XG4gICAgcmV0dXJuIHBhcmFtc0xpc3Quam9pbignJicpO1xuICB9XG5cbiAgZGVsZXRlIChwYXJhbTogc3RyaW5nKTogdm9pZCB7IHRoaXMucGFyYW1zTWFwLmRlbGV0ZShwYXJhbSk7IH1cbn1cbiJdfQ==

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var enums_1 = __webpack_require__(295);
	var static_response_1 = __webpack_require__(299);
	var headers_1 = __webpack_require__(293);
	var base_response_options_1 = __webpack_require__(300);
	var core_1 = __webpack_require__(67);
	var browser_xhr_1 = __webpack_require__(301);
	var lang_1 = __webpack_require__(48);
	var Observable_1 = __webpack_require__(99);
	var http_utils_1 = __webpack_require__(294);
	/**
	* Creates connections using `XMLHttpRequest`. Given a fully-qualified
	* request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
	* request.
	*
	* This class would typically not be created or interacted with directly inside applications, though
	* the {@link MockConnection} may be interacted with in tests.
	*/
	var XHRConnection = (function () {
	    function XHRConnection(req, browserXHR, baseResponseOptions) {
	        var _this = this;
	        this.request = req;
	        this.response = new Observable_1.Observable(function (responseObserver) {
	            var _xhr = browserXHR.build();
	            _xhr.open(enums_1.RequestMethod[req.method].toUpperCase(), req.url);
	            // load event handler
	            var onLoad = function () {
	                // responseText is the old-school way of retrieving response (supported by IE8 & 9)
	                // response/responseType properties were introduced in XHR Level2 spec (supported by
	                // IE10)
	                var body = lang_1.isPresent(_xhr.response) ? _xhr.response : _xhr.responseText;
	                var headers = headers_1.Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
	                var url = http_utils_1.getResponseURL(_xhr);
	                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
	                var status = _xhr.status === 1223 ? 204 : _xhr.status;
	                // fix status code when it is 0 (0 status is undocumented).
	                // Occurs when accessing file resources or on Android 4.1 stock browser
	                // while retrieving files from application cache.
	                if (status === 0) {
	                    status = body ? 200 : 0;
	                }
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: body, status: status, headers: headers, url: url });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                var response = new static_response_1.Response(responseOptions);
	                if (http_utils_1.isSuccess(status)) {
	                    responseObserver.next(response);
	                    // TODO(gdi2290): defer complete if array buffer until done
	                    responseObserver.complete();
	                    return;
	                }
	                responseObserver.error(response);
	            };
	            // error event handler
	            var onError = function (err) {
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: err, type: enums_1.ResponseType.Error });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.error(new static_response_1.Response(responseOptions));
	            };
	            if (lang_1.isPresent(req.headers)) {
	                req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
	            }
	            _xhr.addEventListener('load', onLoad);
	            _xhr.addEventListener('error', onError);
	            _xhr.send(_this.request.text());
	            return function () {
	                _xhr.removeEventListener('load', onLoad);
	                _xhr.removeEventListener('error', onError);
	                _xhr.abort();
	            };
	        });
	    }
	    return XHRConnection;
	})();
	exports.XHRConnection = XHRConnection;
	/**
	 * Creates {@link XHRConnection} instances.
	 *
	 * This class would typically not be used by end users, but could be
	 * overridden if a different backend implementation should be used,
	 * such as in a node backend.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from 'angular2/http';
	 * @Component({
	 *   viewProviders: [
	 *     HTTP_PROVIDERS,
	 *     provide(Http, {useFactory: (backend, options) => {
	 *       return new Http(backend, options);
	 *     }, deps: [MyNodeBackend, BaseRequestOptions]})]
	 * })
	 * class MyComponent {
	 *   constructor(http:Http) {
	 *     http.request('people.json').subscribe(res => this.people = res.json());
	 *   }
	 * }
	 * ```
	 *
	 **/
	var XHRBackend = (function () {
	    function XHRBackend(_browserXHR, _baseResponseOptions) {
	        this._browserXHR = _browserXHR;
	        this._baseResponseOptions = _baseResponseOptions;
	    }
	    XHRBackend.prototype.createConnection = function (request) {
	        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
	    };
	    XHRBackend = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [browser_xhr_1.BrowserXhr, base_response_options_1.ResponseOptions])
	    ], XHRBackend);
	    return XHRBackend;
	})();
	exports.XHRBackend = XHRBackend;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGhyX2JhY2tlbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC9iYWNrZW5kcy94aHJfYmFja2VuZC50cyJdLCJuYW1lcyI6WyJYSFJDb25uZWN0aW9uIiwiWEhSQ29ubmVjdGlvbi5jb25zdHJ1Y3RvciIsIlhIUkJhY2tlbmQiLCJYSFJCYWNrZW5kLmNvbnN0cnVjdG9yIiwiWEhSQmFja2VuZC5jcmVhdGVDb25uZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxzQkFBc0QsVUFBVSxDQUFDLENBQUE7QUFFakUsZ0NBQXVCLG9CQUFvQixDQUFDLENBQUE7QUFDNUMsd0JBQXNCLFlBQVksQ0FBQyxDQUFBO0FBQ25DLHNDQUFtRCwwQkFBMEIsQ0FBQyxDQUFBO0FBQzlFLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyw0QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQXdCLDBCQUEwQixDQUFDLENBQUE7QUFDbkQsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFDM0MsMkJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBQ3hEOzs7Ozs7O0VBT0U7QUFDRjtJQVFFQSx1QkFBWUEsR0FBWUEsRUFBRUEsVUFBc0JBLEVBQUVBLG1CQUFxQ0E7UUFSekZDLGlCQXVFQ0E7UUE5REdBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEdBQUdBLENBQUNBO1FBQ25CQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSx1QkFBVUEsQ0FBQ0EsVUFBQUEsZ0JBQWdCQTtZQUM3Q0EsSUFBSUEsSUFBSUEsR0FBbUJBLFVBQVVBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1lBQzlDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxxQkFBYUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBRUEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDNURBLHFCQUFxQkE7WUFDckJB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V0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtJQUNqRkEsQ0FBQ0E7SUFMSEY7UUFBQ0EsaUJBQVVBLEVBQUVBOzttQkFNWkE7SUFBREEsaUJBQUNBO0FBQURBLENBQUNBLEFBTkQsSUFNQztBQUxZLGtCQUFVLGFBS3RCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nvbm5lY3Rpb25CYWNrZW5kLCBDb25uZWN0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7UmVhZHlTdGF0ZSwgUmVxdWVzdE1ldGhvZCwgUmVzcG9uc2VUeXBlfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQge1JlcXVlc3R9IGZyb20gJy4uL3N0YXRpY19yZXF1ZXN0JztcbmltcG9ydCB7UmVzcG9uc2V9IGZyb20gJy4uL3N0YXRpY19yZXNwb25zZSc7XG5pbXBvcnQge0hlYWRlcnN9IGZyb20gJy4uL2hlYWRlcnMnO1xuaW1wb3J0IHtSZXNwb25zZU9wdGlvbnMsIEJhc2VSZXNwb25zZU9wdGlvbnN9IGZyb20gJy4uL2Jhc2VfcmVzcG9uc2Vfb3B0aW9ucyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtCcm93c2VyWGhyfSBmcm9tICcuL2Jyb3dzZXJfeGhyJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtpc1N1Y2Nlc3MsIGdldFJlc3BvbnNlVVJMfSBmcm9tICcuLi9odHRwX3V0aWxzJztcbi8qKlxuKiBDcmVhdGVzIGNvbm5lY3Rpb25zIHVzaW5nIGBYTUxIdHRwUmVxdWVzdGAuIEdpdmVuIGEgZnVsbHktcXVhbGlmaWVkXG4qIHJlcXVlc3QsIGFuIGBYSFJDb25uZWN0aW9uYCB3aWxsIGltbWVkaWF0ZWx5IGNyZWF0ZSBhbiBgWE1MSHR0cFJlcXVlc3RgIG9iamVjdCBhbmQgc2VuZCB0aGVcbiogcmVxdWVzdC5cbipcbiogVGhpcyBjbGFzcyB3b3VsZCB0eXBpY2FsbHkgbm90IGJlIGNyZWF0ZWQgb3IgaW50ZXJhY3RlZCB3aXRoIGRpcmVjdGx5IGluc2lkZSBhcHBsaWNhdGlvbnMsIHRob3VnaFxuKiB0aGUge0BsaW5rIE1vY2tDb25uZWN0aW9ufSBtYXkgYmUgaW50ZXJhY3RlZCB3aXRoIGluIHRlc3RzLlxuKi9cbmV4cG9ydCBjbGFzcyBYSFJDb25uZWN0aW9uIGltcGxlbWVudHMgQ29ubmVjdGlvbiB7XG4gIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gIC8qKlxuICAgKiBSZXNwb25zZSB7QGxpbmsgRXZlbnRFbWl0dGVyfSB3aGljaCBlbWl0cyBhIHNpbmdsZSB7QGxpbmsgUmVzcG9uc2V9IHZhbHVlIG9uIGxvYWQgZXZlbnQgb2ZcbiAgICogYFhNTEh0dHBSZXF1ZXN0YC5cbiAgICovXG4gIHJlc3BvbnNlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcbiAgcmVhZHlTdGF0ZTogUmVhZHlTdGF0ZTtcbiAgY29uc3RydWN0b3IocmVxOiBSZXF1ZXN0LCBicm93c2VyWEhSOiBCcm93c2VyWGhyLCBiYXNlUmVzcG9uc2VPcHRpb25zPzogUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxO1xuICAgIHRoaXMucmVzcG9uc2UgPSBuZXcgT2JzZXJ2YWJsZShyZXNwb25zZU9ic2VydmVyID0+IHtcbiAgICAgIGxldCBfeGhyOiBYTUxIdHRwUmVxdWVzdCA9IGJyb3dzZXJYSFIuYnVpbGQoKTtcbiAgICAgIF94aHIub3BlbihSZXF1ZXN0TWV0aG9kW3JlcS5tZXRob2RdLnRvVXBwZXJDYXNlKCksIHJlcS51cmwpO1xuICAgICAgLy8gbG9hZCBldmVudCBoYW5kbGVyXG4gICAgICBsZXQgb25Mb2FkID0gKCkgPT4ge1xuICAgICAgICAvLyByZXNwb25zZVRleHQgaXMgdGhlIG9sZC1zY2hvb2wgd2F5IG9mIHJldHJpZXZpbmcgcmVzcG9uc2UgKHN1cHBvcnRlZCBieSBJRTggJiA5KVxuICAgICAgICAvLyByZXNwb25zZS9yZXNwb25zZVR5cGUgcHJvcGVydGllcyB3ZXJlIGludHJvZHVjZWQgaW4gWEhSIExldmVsMiBzcGVjIChzdXBwb3J0ZWQgYnlcbiAgICAgICAgLy8gSUUxMClcbiAgICAgICAgbGV0IGJvZHkgPSBpc1ByZXNlbnQoX3hoci5yZXNwb25zZSkgPyBfeGhyLnJlc3BvbnNlIDogX3hoci5yZXNwb25zZVRleHQ7XG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBIZWFkZXJzLmZyb21SZXNwb25zZUhlYWRlclN0cmluZyhfeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcblxuICAgICAgICBsZXQgdXJsID0gZ2V0UmVzcG9uc2VVUkwoX3hocik7XG5cbiAgICAgICAgLy8gbm9ybWFsaXplIElFOSBidWcgKGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzE0NTApXG4gICAgICAgIGxldCBzdGF0dXM6IG51bWJlciA9IF94aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogX3hoci5zdGF0dXM7XG5cbiAgICAgICAgLy8gZml4IHN0YXR1cyBjb2RlIHdoZW4gaXQgaXMgMCAoMCBzdGF0dXMgaXMgdW5kb2N1bWVudGVkKS5cbiAgICAgICAgLy8gT2NjdXJzIHdoZW4gYWNjZXNzaW5nIGZpbGUgcmVzb3VyY2VzIG9yIG9uIEFuZHJvaWQgNC4xIHN0b2NrIGJyb3dzZXJcbiAgICAgICAgLy8gd2hpbGUgcmV0cmlldmluZyBmaWxlcyBmcm9tIGFwcGxpY2F0aW9uIGNhY2hlLlxuICAgICAgICBpZiAoc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgc3RhdHVzID0gYm9keSA/IDIwMCA6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3BvbnNlT3B0aW9ucyA9IG5ldyBSZXNwb25zZU9wdGlvbnMoe2JvZHksIHN0YXR1cywgaGVhZGVycywgdXJsfSk7XG4gICAgICAgIGlmIChpc1ByZXNlbnQoYmFzZVJlc3BvbnNlT3B0aW9ucykpIHtcbiAgICAgICAgICByZXNwb25zZU9wdGlvbnMgPSBiYXNlUmVzcG9uc2VPcHRpb25zLm1lcmdlKHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgIGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xuICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIubmV4dChyZXNwb25zZSk7XG4gICAgICAgICAgLy8gVE9ETyhnZGkyMjkwKTogZGVmZXIgY29tcGxldGUgaWYgYXJyYXkgYnVmZmVyIHVudGlsIGRvbmVcbiAgICAgICAgICByZXNwb25zZU9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgfTtcbiAgICAgIC8vIGVycm9yIGV2ZW50IGhhbmRsZXJcbiAgICAgIGxldCBvbkVycm9yID0gKGVycikgPT4ge1xuICAgICAgICB2YXIgcmVzcG9uc2VPcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7Ym9keTogZXJyLCB0eXBlOiBSZXNwb25zZVR5cGUuRXJyb3J9KTtcbiAgICAgICAgaWYgKGlzUHJlc2VudChiYXNlUmVzcG9uc2VPcHRpb25zKSkge1xuICAgICAgICAgIHJlc3BvbnNlT3B0aW9ucyA9IGJhc2VSZXNwb25zZU9wdGlvbnMubWVyZ2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXNwb25zZU9ic2VydmVyLmVycm9yKG5ldyBSZXNwb25zZShyZXNwb25zZU9wdGlvbnMpKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChpc1ByZXNlbnQocmVxLmhlYWRlcnMpKSB7XG4gICAgICAgIHJlcS5oZWFkZXJzLmZvckVhY2goKHZhbHVlcywgbmFtZSkgPT4gX3hoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlcy5qb2luKCcsJykpKTtcbiAgICAgIH1cblxuICAgICAgX3hoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbiAgICAgIF94aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcblxuICAgICAgX3hoci5zZW5kKHRoaXMucmVxdWVzdC50ZXh0KCkpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBfeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICAgICAgICBfeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgIF94aHIuYWJvcnQoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIHtAbGluayBYSFJDb25uZWN0aW9ufSBpbnN0YW5jZXMuXG4gKlxuICogVGhpcyBjbGFzcyB3b3VsZCB0eXBpY2FsbHkgbm90IGJlIHVzZWQgYnkgZW5kIHVzZXJzLCBidXQgY291bGQgYmVcbiAqIG92ZXJyaWRkZW4gaWYgYSBkaWZmZXJlbnQgYmFja2VuZCBpbXBsZW1lbnRhdGlvbiBzaG91bGQgYmUgdXNlZCxcbiAqIHN1Y2ggYXMgaW4gYSBub2RlIGJhY2tlbmQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7SHR0cCwgTXlOb2RlQmFja2VuZCwgSFRUUF9QUk9WSURFUlMsIEJhc2VSZXF1ZXN0T3B0aW9uc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gKiBAQ29tcG9uZW50KHtcbiAqICAgdmlld1Byb3ZpZGVyczogW1xuICogICAgIEhUVFBfUFJPVklERVJTLFxuICogICAgIHByb3ZpZGUoSHR0cCwge3VzZUZhY3Rvcnk6IChiYWNrZW5kLCBvcHRpb25zKSA9PiB7XG4gKiAgICAgICByZXR1cm4gbmV3IEh0dHAoYmFja2VuZCwgb3B0aW9ucyk7XG4gKiAgICAgfSwgZGVwczogW015Tm9kZUJhY2tlbmQsIEJhc2VSZXF1ZXN0T3B0aW9uc119KV1cbiAqIH0pXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XG4gKiAgIGNvbnN0cnVjdG9yKGh0dHA6SHR0cCkge1xuICogICAgIGh0dHAucmVxdWVzdCgncGVvcGxlLmpzb24nKS5zdWJzY3JpYmUocmVzID0+IHRoaXMucGVvcGxlID0gcmVzLmpzb24oKSk7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBYSFJCYWNrZW5kIGltcGxlbWVudHMgQ29ubmVjdGlvbkJhY2tlbmQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9icm93c2VyWEhSOiBCcm93c2VyWGhyLCBwcml2YXRlIF9iYXNlUmVzcG9uc2VPcHRpb25zOiBSZXNwb25zZU9wdGlvbnMpIHt9XG4gIGNyZWF0ZUNvbm5lY3Rpb24ocmVxdWVzdDogUmVxdWVzdCk6IFhIUkNvbm5lY3Rpb24ge1xuICAgIHJldHVybiBuZXcgWEhSQ29ubmVjdGlvbihyZXF1ZXN0LCB0aGlzLl9icm93c2VyWEhSLCB0aGlzLl9iYXNlUmVzcG9uc2VPcHRpb25zKTtcbiAgfVxufVxuIl19

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(48);
	var exceptions_1 = __webpack_require__(58);
	var http_utils_1 = __webpack_require__(294);
	/**
	 * Creates `Response` instances from provided values.
	 *
	 * Though this object isn't
	 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
	 * add data to a view.
	 *
	 * ### Example
	 *
	 * ```
	 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
	 * ```
	 *
	 * The Response's interface is inspired by the Response constructor defined in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
	 * can be accessed many times. There are other differences in the implementation, but this is the
	 * most significant.
	 */
	var Response = (function () {
	    function Response(responseOptions) {
	        this._body = responseOptions.body;
	        this.status = responseOptions.status;
	        this.statusText = responseOptions.statusText;
	        this.headers = responseOptions.headers;
	        this.type = responseOptions.type;
	        this.url = responseOptions.url;
	    }
	    /**
	     * Not yet implemented
	     */
	    // TODO: Blob return type
	    Response.prototype.blob = function () { throw new exceptions_1.BaseException('"blob()" method not implemented on Response superclass'); };
	    /**
	     * Attempts to return body as parsed `JSON` object, or raises an exception.
	     */
	    Response.prototype.json = function () {
	        var jsonResponse;
	        if (http_utils_1.isJsObject(this._body)) {
	            jsonResponse = this._body;
	        }
	        else if (lang_1.isString(this._body)) {
	            jsonResponse = lang_1.Json.parse(this._body);
	        }
	        return jsonResponse;
	    };
	    /**
	     * Returns the body as a string, presuming `toString()` can be called on the response body.
	     */
	    Response.prototype.text = function () { return this._body.toString(); };
	    /**
	     * Not yet implemented
	     */
	    // TODO: ArrayBuffer return type
	    Response.prototype.arrayBuffer = function () {
	        throw new exceptions_1.BaseException('"arrayBuffer()" method not implemented on Response superclass');
	    };
	    return Response;
	})();
	exports.Response = Response;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljX3Jlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2h0dHAvc3RhdGljX3Jlc3BvbnNlLnRzIl0sIm5hbWVzIjpbIlJlc3BvbnNlIiwiUmVzcG9uc2UuY29uc3RydWN0b3IiLCJSZXNwb25zZS5ibG9iIiwiUmVzcG9uc2UuanNvbiIsIlJlc3BvbnNlLnRleHQiLCJSZXNwb25zZS5hcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6IkFBQ0EscUJBQW9ELDBCQUEwQixDQUFDLENBQUE7QUFDL0UsMkJBQThDLGdDQUFnQyxDQUFDLENBQUE7QUFHL0UsMkJBQXlCLGNBQWMsQ0FBQyxDQUFBO0FBRXhDOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNIO0lBa0RFQSxrQkFBWUEsZUFBZ0NBO1FBQzFDQyxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNsQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsZUFBZUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLGVBQWVBLENBQUNBLFVBQVVBLENBQUNBO1FBQzdDQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxlQUFlQSxDQUFDQSxPQUFPQSxDQUFDQTtRQUN2Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDakNBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLGVBQWVBLENBQUNBLEdBQUdBLENBQUNBO0lBQ2pDQSxDQUFDQTtJQUVERDs7T0FFR0E7SUFDSEEseUJBQXlCQTtJQUN6QkEsdUJBQUlBLEdBQUpBLGNBQWNFLE1BQU1BLElBQUlBLDBCQUFhQSxDQUFDQSx3REFBd0RBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRWxHRjs7T0FFR0E7SUFDSEEsdUJBQUlBLEdBQUpBO1FBQ0VHLElBQUlBLFlBQVlBLENBQUNBO1FBQ2pCQSxFQUFFQSxDQUFDQSxDQUFDQSx1QkFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1FBQzVCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxlQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoQ0EsWUFBWUEsR0FBR0EsV0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBU0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDaERBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBO0lBQ3RCQSxDQUFDQTtJQUVESDs7T0FFR0E7SUFDSEEsdUJBQUlBLEdBQUpBLGNBQWlCSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVoREo7O09BRUdBO0lBQ0hBLGdDQUFnQ0E7SUFDaENBLDhCQUFXQSxHQUFYQTtRQUNFSyxNQUFNQSxJQUFJQSwwQkFBYUEsQ0FBQ0EsK0RBQStEQSxDQUFDQSxDQUFDQTtJQUMzRkEsQ0FBQ0E7SUFDSEwsZUFBQ0E7QUFBREEsQ0FBQ0EsQUExRkQsSUEwRkM7QUExRlksZ0JBQVEsV0EwRnBCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Jlc3BvbnNlVHlwZX0gZnJvbSAnLi9lbnVtcyc7XG5pbXBvcnQge0NPTlNUX0VYUFIsIGlzU3RyaW5nLCBpc1ByZXNlbnQsIEpzb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb24sIFdyYXBwZWRFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge0hlYWRlcnN9IGZyb20gJy4vaGVhZGVycyc7XG5pbXBvcnQge1Jlc3BvbnNlT3B0aW9uc30gZnJvbSAnLi9iYXNlX3Jlc3BvbnNlX29wdGlvbnMnO1xuaW1wb3J0IHtpc0pzT2JqZWN0fSBmcm9tICcuL2h0dHBfdXRpbHMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYFJlc3BvbnNlYCBpbnN0YW5jZXMgZnJvbSBwcm92aWRlZCB2YWx1ZXMuXG4gKlxuICogVGhvdWdoIHRoaXMgb2JqZWN0IGlzbid0XG4gKiB1c3VhbGx5IGluc3RhbnRpYXRlZCBieSBlbmQtdXNlcnMsIGl0IGlzIHRoZSBwcmltYXJ5IG9iamVjdCBpbnRlcmFjdGVkIHdpdGggd2hlbiBpdCBjb21lcyB0aW1lIHRvXG4gKiBhZGQgZGF0YSB0byBhIHZpZXcuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGh0dHAucmVxdWVzdCgnbXktZnJpZW5kcy50eHQnKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5mcmllbmRzID0gcmVzcG9uc2UudGV4dCgpKTtcbiAqIGBgYFxuICpcbiAqIFRoZSBSZXNwb25zZSdzIGludGVyZmFjZSBpcyBpbnNwaXJlZCBieSB0aGUgUmVzcG9uc2UgY29uc3RydWN0b3IgZGVmaW5lZCBpbiB0aGUgW0ZldGNoXG4gKiBTcGVjXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVzcG9uc2UtY2xhc3MpLCBidXQgaXMgY29uc2lkZXJlZCBhIHN0YXRpYyB2YWx1ZSB3aG9zZSBib2R5XG4gKiBjYW4gYmUgYWNjZXNzZWQgbWFueSB0aW1lcy4gVGhlcmUgYXJlIG90aGVyIGRpZmZlcmVuY2VzIGluIHRoZSBpbXBsZW1lbnRhdGlvbiwgYnV0IHRoaXMgaXMgdGhlXG4gKiBtb3N0IHNpZ25pZmljYW50LlxuICovXG5leHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xuICAvKipcbiAgICogT25lIG9mIFwiYmFzaWNcIiwgXCJjb3JzXCIsIFwiZGVmYXVsdFwiLCBcImVycm9yLCBvciBcIm9wYXF1ZVwiLlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byBcImRlZmF1bHRcIi5cbiAgICovXG4gIHR5cGU6IFJlc3BvbnNlVHlwZTtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHJlc3BvbnNlJ3Mgc3RhdHVzIGlzIHdpdGhpbiAyMDAtMjk5XG4gICAqL1xuICBvazogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFVSTCBvZiByZXNwb25zZS5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gZW1wdHkgc3RyaW5nLlxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTdGF0dXMgY29kZSByZXR1cm5lZCBieSBzZXJ2ZXIuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIDIwMC5cbiAgICovXG4gIHN0YXR1czogbnVtYmVyO1xuICAvKipcbiAgICogVGV4dCByZXByZXNlbnRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgcmVhc29uIHBocmFzZSB0byB0aGUgYHN0YXR1c2AsIGFzIGRlZmluZWQgaW4gW2lldGYgcmZjIDI2MTZcbiAgICogc2VjdGlvbiA2LjEuMV0oaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI2MTYjc2VjdGlvbi02LjEuMSlcbiAgICpcbiAgICogRGVmYXVsdHMgdG8gXCJPS1wiXG4gICAqL1xuICBzdGF0dXNUZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBOb24tc3RhbmRhcmQgcHJvcGVydHlcbiAgICpcbiAgICogRGVub3RlcyBob3cgbWFueSBvZiB0aGUgcmVzcG9uc2UgYm9keSdzIGJ5dGVzIGhhdmUgYmVlbiBsb2FkZWQsIGZvciBleGFtcGxlIGlmIHRoZSByZXNwb25zZSBpc1xuICAgKiB0aGUgcmVzdWx0IG9mIGEgcHJvZ3Jlc3MgZXZlbnQuXG4gICAqL1xuICBieXRlc0xvYWRlZDogbnVtYmVyO1xuICAvKipcbiAgICogTm9uLXN0YW5kYXJkIHByb3BlcnR5XG4gICAqXG4gICAqIERlbm90ZXMgaG93IG1hbnkgYnl0ZXMgYXJlIGV4cGVjdGVkIGluIHRoZSBmaW5hbCByZXNwb25zZSBib2R5LlxuICAgKi9cbiAgdG90YWxCeXRlczogbnVtYmVyO1xuICAvKipcbiAgICogSGVhZGVycyBvYmplY3QgYmFzZWQgb24gdGhlIGBIZWFkZXJzYCBjbGFzcyBpbiB0aGUgW0ZldGNoXG4gICAqIFNwZWNdKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNoZWFkZXJzLWNsYXNzKS5cbiAgICovXG4gIGhlYWRlcnM6IEhlYWRlcnM7XG4gIC8vIFRPRE86IFN1cHBvcnQgQXJyYXlCdWZmZXIsIEpTT04sIEZvcm1EYXRhLCBCbG9iXG4gIHByaXZhdGUgX2JvZHk6IHN0cmluZyB8IE9iamVjdDtcbiAgY29uc3RydWN0b3IocmVzcG9uc2VPcHRpb25zOiBSZXNwb25zZU9wdGlvbnMpIHtcbiAgICB0aGlzLl9ib2R5ID0gcmVzcG9uc2VPcHRpb25zLmJvZHk7XG4gICAgdGhpcy5zdGF0dXMgPSByZXNwb25zZU9wdGlvbnMuc3RhdHVzO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9IHJlc3BvbnNlT3B0aW9ucy5zdGF0dXNUZXh0O1xuICAgIHRoaXMuaGVhZGVycyA9IHJlc3BvbnNlT3B0aW9ucy5oZWFkZXJzO1xuICAgIHRoaXMudHlwZSA9IHJlc3BvbnNlT3B0aW9ucy50eXBlO1xuICAgIHRoaXMudXJsID0gcmVzcG9uc2VPcHRpb25zLnVybDtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3QgeWV0IGltcGxlbWVudGVkXG4gICAqL1xuICAvLyBUT0RPOiBCbG9iIHJldHVybiB0eXBlXG4gIGJsb2IoKTogYW55IHsgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oJ1wiYmxvYigpXCIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZCBvbiBSZXNwb25zZSBzdXBlcmNsYXNzJyk7IH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gcmV0dXJuIGJvZHkgYXMgcGFyc2VkIGBKU09OYCBvYmplY3QsIG9yIHJhaXNlcyBhbiBleGNlcHRpb24uXG4gICAqL1xuICBqc29uKCk6IGFueSB7XG4gICAgdmFyIGpzb25SZXNwb25zZTtcbiAgICBpZiAoaXNKc09iamVjdCh0aGlzLl9ib2R5KSkge1xuICAgICAganNvblJlc3BvbnNlID0gdGhpcy5fYm9keTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHRoaXMuX2JvZHkpKSB7XG4gICAgICBqc29uUmVzcG9uc2UgPSBKc29uLnBhcnNlKDxzdHJpbmc+dGhpcy5fYm9keSk7XG4gICAgfVxuICAgIHJldHVybiBqc29uUmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm9keSBhcyBhIHN0cmluZywgcHJlc3VtaW5nIGB0b1N0cmluZygpYCBjYW4gYmUgY2FsbGVkIG9uIHRoZSByZXNwb25zZSBib2R5LlxuICAgKi9cbiAgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fYm9keS50b1N0cmluZygpOyB9XG5cbiAgLyoqXG4gICAqIE5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICovXG4gIC8vIFRPRE86IEFycmF5QnVmZmVyIHJldHVybiB0eXBlXG4gIGFycmF5QnVmZmVyKCk6IGFueSB7XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oJ1wiYXJyYXlCdWZmZXIoKVwiIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQgb24gUmVzcG9uc2Ugc3VwZXJjbGFzcycpO1xuICB9XG59XG4iXX0=

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(67);
	var lang_1 = __webpack_require__(48);
	var headers_1 = __webpack_require__(293);
	var enums_1 = __webpack_require__(295);
	/**
	 * Creates a response options object to be optionally provided when instantiating a
	 * {@link Response}.
	 *
	 * This class is based on the `ResponseInit` description in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#responseinit).
	 *
	 * All values are null by default. Typical defaults can be found in the
	 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
	 *
	 * This class may be used in tests to build {@link Response Responses} for
	 * mock responses (see {@link MockBackend}).
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
	 *
	 * ```typescript
	 * import {ResponseOptions, Response} from 'angular2/http';
	 *
	 * var options = new ResponseOptions({
	 *   body: '{"name":"Jeff"}'
	 * });
	 * var res = new Response(options);
	 *
	 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
	 * ```
	 */
	var ResponseOptions = (function () {
	    function ResponseOptions(_a) {
	        var _b = _a === void 0 ? {} : _a, body = _b.body, status = _b.status, headers = _b.headers, statusText = _b.statusText, type = _b.type, url = _b.url;
	        this.body = lang_1.isPresent(body) ? body : null;
	        this.status = lang_1.isPresent(status) ? status : null;
	        this.headers = lang_1.isPresent(headers) ? headers : null;
	        this.statusText = lang_1.isPresent(statusText) ? statusText : null;
	        this.type = lang_1.isPresent(type) ? type : null;
	        this.url = lang_1.isPresent(url) ? url : null;
	    }
	    /**
	     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
	     * override
	     * existing values. This method will not change the values of the instance on which it is being
	     * called.
	     *
	     * This may be useful when sharing a base `ResponseOptions` object inside tests,
	     * where certain properties may change from test to test.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
	     *
	     * ```typescript
	     * import {ResponseOptions, Response} from 'angular2/http';
	     *
	     * var options = new ResponseOptions({
	     *   body: {name: 'Jeff'}
	     * });
	     * var res = new Response(options.merge({
	     *   url: 'https://google.com'
	     * }));
	     * console.log('options.url:', options.url); // null
	     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
	     * console.log('res.url:', res.url); // https://google.com
	     * ```
	     */
	    ResponseOptions.prototype.merge = function (options) {
	        return new ResponseOptions({
	            body: lang_1.isPresent(options) && lang_1.isPresent(options.body) ? options.body : this.body,
	            status: lang_1.isPresent(options) && lang_1.isPresent(options.status) ? options.status : this.status,
	            headers: lang_1.isPresent(options) && lang_1.isPresent(options.headers) ? options.headers : this.headers,
	            statusText: lang_1.isPresent(options) && lang_1.isPresent(options.statusText) ? options.statusText :
	                this.statusText,
	            type: lang_1.isPresent(options) && lang_1.isPresent(options.type) ? options.type : this.type,
	            url: lang_1.isPresent(options) && lang_1.isPresent(options.url) ? options.url : this.url,
	        });
	    };
	    return ResponseOptions;
	})();
	exports.ResponseOptions = ResponseOptions;
	/**
	 * Subclass of {@link ResponseOptions}, with default values.
	 *
	 * Default values:
	 *  * status: 200
	 *  * headers: empty {@link Headers} object
	 *
	 * This class could be extended and bound to the {@link ResponseOptions} class
	 * when configuring an {@link Injector}, in order to override the default options
	 * used by {@link Http} to create {@link Response Responses}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
	 *
	 * ```typescript
	 * import {provide} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
	 * 'angular2/http';
	 * import {App} from './myapp';
	 *
	 * class MyOptions extends BaseResponseOptions {
	 *   headers:Headers = new Headers({network: 'github'});
	 * }
	 *
	 * bootstrap(App, [HTTP_PROVIDERS, provide(ResponseOptions, {useClass: MyOptions})]);
	 * ```
	 *
	 * The options could also be extended when manually creating a {@link Response}
	 * object.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
	 *
	 * ```
	 * import {BaseResponseOptions, Response} from 'angular2/http';
	 *
	 * var options = new BaseResponseOptions();
	 * var res = new Response(options.merge({
	 *   body: 'Angular2',
	 *   headers: new Headers({framework: 'angular'})
	 * }));
	 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
	 * console.log('res.text():', res.text()); // Angular2;
	 * ```
	 */
	var BaseResponseOptions = (function (_super) {
	    __extends(BaseResponseOptions, _super);
	    function BaseResponseOptions() {
	        _super.call(this, { status: 200, statusText: 'Ok', type: enums_1.ResponseType.Default, headers: new headers_1.Headers() });
	    }
	    BaseResponseOptions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BaseResponseOptions);
	    return BaseResponseOptions;
	})(ResponseOptions);
	exports.BaseResponseOptions = BaseResponseOptions;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9yZXNwb25zZV9vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2h0dHAvYmFzZV9yZXNwb25zZV9vcHRpb25zLnRzIl0sIm5hbWVzIjpbIlJlc3BvbnNlT3B0aW9ucyIsIlJlc3BvbnNlT3B0aW9ucy5jb25zdHJ1Y3RvciIsIlJlc3BvbnNlT3B0aW9ucy5tZXJnZSIsIkJhc2VSZXNwb25zZU9wdGlvbnMiLCJCYXNlUmVzcG9uc2VPcHRpb25zLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBb0MsMEJBQTBCLENBQUMsQ0FBQTtBQUMvRCx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMsc0JBQTJCLFNBQVMsQ0FBQyxDQUFBO0FBR3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBQ0g7SUF3QkVBLHlCQUFZQSxFQUF3RUE7aUNBQUZDLEVBQUVBLE9BQXZFQSxJQUFJQSxZQUFFQSxNQUFNQSxjQUFFQSxPQUFPQSxlQUFFQSxVQUFVQSxrQkFBRUEsSUFBSUEsWUFBRUEsR0FBR0E7UUFDdkRBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLGdCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsZ0JBQVNBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hEQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkRBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLGdCQUFTQSxDQUFDQSxVQUFVQSxDQUFDQSxHQUFHQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUM1REEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsZ0JBQVNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQzFDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDekNBLENBQUNBO0lBRUREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F3QkdBO0lBQ0hBLCtCQUFLQSxHQUFMQSxVQUFNQSxPQUE2QkE7UUFDakNFLE1BQU1BLENBQUNBLElBQUlBLGVBQWVBLENBQUNBO1lBQ3pCQSxJQUFJQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBO1lBQzlFQSxNQUFNQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BO1lBQ3RGQSxPQUFPQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BO1lBQzFGQSxVQUFVQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLFVBQVVBO2dCQUNsQkEsSUFBSUEsQ0FBQ0EsVUFBVUE7WUFDakZBLElBQUlBLEVBQUVBLGdCQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsT0FBT0EsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUE7WUFDOUVBLEdBQUdBLEVBQUVBLGdCQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsT0FBT0EsQ0FBQ0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0E7U0FDM0VBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBQ0hGLHNCQUFDQTtBQUFEQSxDQUFDQSxBQXJFRCxJQXFFQztBQXJFWSx1QkFBZSxrQkFxRTNCLENBQUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJDRztBQUNIO0lBQ3lDRyx1Q0FBZUE7SUFDdERBO1FBQ0VDLGtCQUFNQSxFQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFFQSxVQUFVQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxvQkFBWUEsQ0FBQ0EsT0FBT0EsRUFBRUEsT0FBT0EsRUFBRUEsSUFBSUEsaUJBQU9BLEVBQUVBLEVBQUNBLENBQUNBLENBQUNBO0lBQzdGQSxDQUFDQTtJQUpIRDtRQUFDQSxpQkFBVUEsRUFBRUE7OzRCQUtaQTtJQUFEQSwwQkFBQ0E7QUFBREEsQ0FBQ0EsQUFMRCxFQUN5QyxlQUFlLEVBSXZEO0FBSlksMkJBQW1CLHNCQUkvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7aXNQcmVzZW50LCBpc0pzT2JqZWN0fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuaW1wb3J0IHtSZXNwb25zZVR5cGV9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHtSZXNwb25zZU9wdGlvbnNBcmdzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZXNwb25zZSBvcHRpb25zIG9iamVjdCB0byBiZSBvcHRpb25hbGx5IHByb3ZpZGVkIHdoZW4gaW5zdGFudGlhdGluZyBhXG4gKiB7QGxpbmsgUmVzcG9uc2V9LlxuICpcbiAqIFRoaXMgY2xhc3MgaXMgYmFzZWQgb24gdGhlIGBSZXNwb25zZUluaXRgIGRlc2NyaXB0aW9uIGluIHRoZSBbRmV0Y2hcbiAqIFNwZWNdKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNyZXNwb25zZWluaXQpLlxuICpcbiAqIEFsbCB2YWx1ZXMgYXJlIG51bGwgYnkgZGVmYXVsdC4gVHlwaWNhbCBkZWZhdWx0cyBjYW4gYmUgZm91bmQgaW4gdGhlXG4gKiB7QGxpbmsgQmFzZVJlc3BvbnNlT3B0aW9uc30gY2xhc3MsIHdoaWNoIHN1Yi1jbGFzc2VzIGBSZXNwb25zZU9wdGlvbnNgLlxuICpcbiAqIFRoaXMgY2xhc3MgbWF5IGJlIHVzZWQgaW4gdGVzdHMgdG8gYnVpbGQge0BsaW5rIFJlc3BvbnNlIFJlc3BvbnNlc30gZm9yXG4gKiBtb2NrIHJlc3BvbnNlcyAoc2VlIHtAbGluayBNb2NrQmFja2VuZH0pLlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9QOUprazhlOGN6Nk5WemJjeEVzRD9wPXByZXZpZXcpKVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7UmVzcG9uc2VPcHRpb25zLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gKlxuICogdmFyIG9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHtcbiAqICAgYm9keTogJ3tcIm5hbWVcIjpcIkplZmZcIn0nXG4gKiB9KTtcbiAqIHZhciByZXMgPSBuZXcgUmVzcG9uc2Uob3B0aW9ucyk7XG4gKlxuICogY29uc29sZS5sb2coJ3Jlcy5qc29uKCk6JywgcmVzLmpzb24oKSk7IC8vIE9iamVjdCB7bmFtZTogXCJKZWZmXCJ9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJlc3BvbnNlT3B0aW9ucyB7XG4gIC8vIFRPRE86IEFycmF5QnVmZmVyIHwgRm9ybURhdGEgfCBCbG9iXG4gIC8qKlxuICAgKiBTdHJpbmcgb3IgT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYm9keSBvZiB0aGUge0BsaW5rIFJlc3BvbnNlfS5cbiAgICovXG4gIGJvZHk6IHN0cmluZyB8IE9iamVjdDtcbiAgLyoqXG4gICAqIEh0dHAge0BsaW5rIGh0dHA6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMTAuaHRtbCBzdGF0dXMgY29kZX1cbiAgICogYXNzb2NpYXRlZCB3aXRoIHRoZSByZXNwb25zZS5cbiAgICovXG4gIHN0YXR1czogbnVtYmVyO1xuICAvKipcbiAgICogUmVzcG9uc2Uge0BsaW5rIEhlYWRlcnMgaGVhZGVyc31cbiAgICovXG4gIGhlYWRlcnM6IEhlYWRlcnM7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHN0YXR1c1RleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdHlwZTogUmVzcG9uc2VUeXBlO1xuICB1cmw6IHN0cmluZztcbiAgY29uc3RydWN0b3Ioe2JvZHksIHN0YXR1cywgaGVhZGVycywgc3RhdHVzVGV4dCwgdHlwZSwgdXJsfTogUmVzcG9uc2VPcHRpb25zQXJncyA9IHt9KSB7XG4gICAgdGhpcy5ib2R5ID0gaXNQcmVzZW50KGJvZHkpID8gYm9keSA6IG51bGw7XG4gICAgdGhpcy5zdGF0dXMgPSBpc1ByZXNlbnQoc3RhdHVzKSA/IHN0YXR1cyA6IG51bGw7XG4gICAgdGhpcy5oZWFkZXJzID0gaXNQcmVzZW50KGhlYWRlcnMpID8gaGVhZGVycyA6IG51bGw7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gaXNQcmVzZW50KHN0YXR1c1RleHQpID8gc3RhdHVzVGV4dCA6IG51bGw7XG4gICAgdGhpcy50eXBlID0gaXNQcmVzZW50KHR5cGUpID8gdHlwZSA6IG51bGw7XG4gICAgdGhpcy51cmwgPSBpc1ByZXNlbnQodXJsKSA/IHVybCA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGBSZXNwb25zZU9wdGlvbnNgIGluc3RhbmNlLCB1c2luZyB0aGUgb3B0aW9uYWwgaW5wdXQgYXMgdmFsdWVzIHRvXG4gICAqIG92ZXJyaWRlXG4gICAqIGV4aXN0aW5nIHZhbHVlcy4gVGhpcyBtZXRob2Qgd2lsbCBub3QgY2hhbmdlIHRoZSB2YWx1ZXMgb2YgdGhlIGluc3RhbmNlIG9uIHdoaWNoIGl0IGlzIGJlaW5nXG4gICAqIGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyBtYXkgYmUgdXNlZnVsIHdoZW4gc2hhcmluZyBhIGJhc2UgYFJlc3BvbnNlT3B0aW9uc2Agb2JqZWN0IGluc2lkZSB0ZXN0cyxcbiAgICogd2hlcmUgY2VydGFpbiBwcm9wZXJ0aWVzIG1heSBjaGFuZ2UgZnJvbSB0ZXN0IHRvIHRlc3QuXG4gICAqXG4gICAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC8xbFhxdXFGZmdkdVRGQldqTm9SRT9wPXByZXZpZXcpKVxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGltcG9ydCB7UmVzcG9uc2VPcHRpb25zLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gICAqXG4gICAqIHZhciBvcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7XG4gICAqICAgYm9keToge25hbWU6ICdKZWZmJ31cbiAgICogfSk7XG4gICAqIHZhciByZXMgPSBuZXcgUmVzcG9uc2Uob3B0aW9ucy5tZXJnZSh7XG4gICAqICAgdXJsOiAnaHR0cHM6Ly9nb29nbGUuY29tJ1xuICAgKiB9KSk7XG4gICAqIGNvbnNvbGUubG9nKCdvcHRpb25zLnVybDonLCBvcHRpb25zLnVybCk7IC8vIG51bGxcbiAgICogY29uc29sZS5sb2coJ3Jlcy5qc29uKCk6JywgcmVzLmpzb24oKSk7IC8vIE9iamVjdCB7bmFtZTogXCJKZWZmXCJ9XG4gICAqIGNvbnNvbGUubG9nKCdyZXMudXJsOicsIHJlcy51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAgICogYGBgXG4gICAqL1xuICBtZXJnZShvcHRpb25zPzogUmVzcG9uc2VPcHRpb25zQXJncyk6IFJlc3BvbnNlT3B0aW9ucyB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZU9wdGlvbnMoe1xuICAgICAgYm9keTogaXNQcmVzZW50KG9wdGlvbnMpICYmIGlzUHJlc2VudChvcHRpb25zLmJvZHkpID8gb3B0aW9ucy5ib2R5IDogdGhpcy5ib2R5LFxuICAgICAgc3RhdHVzOiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMuc3RhdHVzKSA/IG9wdGlvbnMuc3RhdHVzIDogdGhpcy5zdGF0dXMsXG4gICAgICBoZWFkZXJzOiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMuaGVhZGVycykgPyBvcHRpb25zLmhlYWRlcnMgOiB0aGlzLmhlYWRlcnMsXG4gICAgICBzdGF0dXNUZXh0OiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMuc3RhdHVzVGV4dCkgPyBvcHRpb25zLnN0YXR1c1RleHQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgdHlwZTogaXNQcmVzZW50KG9wdGlvbnMpICYmIGlzUHJlc2VudChvcHRpb25zLnR5cGUpID8gb3B0aW9ucy50eXBlIDogdGhpcy50eXBlLFxuICAgICAgdXJsOiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMudXJsKSA/IG9wdGlvbnMudXJsIDogdGhpcy51cmwsXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTdWJjbGFzcyBvZiB7QGxpbmsgUmVzcG9uc2VPcHRpb25zfSwgd2l0aCBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBEZWZhdWx0IHZhbHVlczpcbiAqICAqIHN0YXR1czogMjAwXG4gKiAgKiBoZWFkZXJzOiBlbXB0eSB7QGxpbmsgSGVhZGVyc30gb2JqZWN0XG4gKlxuICogVGhpcyBjbGFzcyBjb3VsZCBiZSBleHRlbmRlZCBhbmQgYm91bmQgdG8gdGhlIHtAbGluayBSZXNwb25zZU9wdGlvbnN9IGNsYXNzXG4gKiB3aGVuIGNvbmZpZ3VyaW5nIGFuIHtAbGluayBJbmplY3Rvcn0sIGluIG9yZGVyIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAqIHVzZWQgYnkge0BsaW5rIEh0dHB9IHRvIGNyZWF0ZSB7QGxpbmsgUmVzcG9uc2UgUmVzcG9uc2VzfS5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvcXY4RExUP3A9cHJldmlldykpXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbiAqIGltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEhlYWRlcnMsIEh0dHAsIEJhc2VSZXNwb25zZU9wdGlvbnMsIFJlc3BvbnNlT3B0aW9uc30gZnJvbVxuICogJ2FuZ3VsYXIyL2h0dHAnO1xuICogaW1wb3J0IHtBcHB9IGZyb20gJy4vbXlhcHAnO1xuICpcbiAqIGNsYXNzIE15T3B0aW9ucyBleHRlbmRzIEJhc2VSZXNwb25zZU9wdGlvbnMge1xuICogICBoZWFkZXJzOkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7bmV0d29yazogJ2dpdGh1Yid9KTtcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwLCBbSFRUUF9QUk9WSURFUlMsIHByb3ZpZGUoUmVzcG9uc2VPcHRpb25zLCB7dXNlQ2xhc3M6IE15T3B0aW9uc30pXSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgb3B0aW9ucyBjb3VsZCBhbHNvIGJlIGV4dGVuZGVkIHdoZW4gbWFudWFsbHkgY3JlYXRpbmcgYSB7QGxpbmsgUmVzcG9uc2V9XG4gKiBvYmplY3QuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L1ZuZ29zT1dpYUV4RXRic3REb2l4P3A9cHJldmlldykpXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0Jhc2VSZXNwb25zZU9wdGlvbnMsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqXG4gKiB2YXIgb3B0aW9ucyA9IG5ldyBCYXNlUmVzcG9uc2VPcHRpb25zKCk7XG4gKiB2YXIgcmVzID0gbmV3IFJlc3BvbnNlKG9wdGlvbnMubWVyZ2Uoe1xuICogICBib2R5OiAnQW5ndWxhcjInLFxuICogICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ZnJhbWV3b3JrOiAnYW5ndWxhcid9KVxuICogfSkpO1xuICogY29uc29sZS5sb2coJ3Jlcy5oZWFkZXJzLmdldChcImZyYW1ld29ya1wiKTonLCByZXMuaGVhZGVycy5nZXQoJ2ZyYW1ld29yaycpKTsgLy8gYW5ndWxhclxuICogY29uc29sZS5sb2coJ3Jlcy50ZXh0KCk6JywgcmVzLnRleHQoKSk7IC8vIEFuZ3VsYXIyO1xuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXNlUmVzcG9uc2VPcHRpb25zIGV4dGVuZHMgUmVzcG9uc2VPcHRpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe3N0YXR1czogMjAwLCBzdGF0dXNUZXh0OiAnT2snLCB0eXBlOiBSZXNwb25zZVR5cGUuRGVmYXVsdCwgaGVhZGVyczogbmV3IEhlYWRlcnMoKX0pO1xuICB9XG59XG4iXX0=

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(67);
	/**
	 * A backend for http that uses the `XMLHttpRequest` browser API.
	 *
	 * Take care not to evaluate this in non-browser contexts.
	 */
	var BrowserXhr = (function () {
	    function BrowserXhr() {
	    }
	    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
	    BrowserXhr = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BrowserXhr);
	    return BrowserXhr;
	})();
	exports.BrowserXhr = BrowserXhr;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl94aHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC9iYWNrZW5kcy9icm93c2VyX3hoci50cyJdLCJuYW1lcyI6WyJCcm93c2VyWGhyIiwiQnJvd3Nlclhoci5jb25zdHJ1Y3RvciIsIkJyb3dzZXJYaHIuYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qzs7OztHQUlHO0FBQ0g7SUFFRUE7SUFBZUMsQ0FBQ0E7SUFDaEJELDBCQUFLQSxHQUFMQSxjQUFlRSxNQUFNQSxDQUFNQSxDQUFDQSxJQUFJQSxjQUFjQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUh0REY7UUFBQ0EsaUJBQVVBLEVBQUVBOzttQkFJWkE7SUFBREEsaUJBQUNBO0FBQURBLENBQUNBLEFBSkQsSUFJQztBQUhZLGtCQUFVLGFBR3RCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vKipcbiAqIEEgYmFja2VuZCBmb3IgaHR0cCB0aGF0IHVzZXMgdGhlIGBYTUxIdHRwUmVxdWVzdGAgYnJvd3NlciBBUEkuXG4gKlxuICogVGFrZSBjYXJlIG5vdCB0byBldmFsdWF0ZSB0aGlzIGluIG5vbi1icm93c2VyIGNvbnRleHRzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvd3NlclhociB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgYnVpbGQoKTogYW55IHsgcmV0dXJuIDxhbnk+KG5ldyBYTUxIdHRwUmVxdWVzdCgpKTsgfVxufVxuIl19

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var interfaces_1 = __webpack_require__(291);
	var enums_1 = __webpack_require__(295);
	var static_response_1 = __webpack_require__(299);
	var base_response_options_1 = __webpack_require__(300);
	var core_1 = __webpack_require__(67);
	var browser_jsonp_1 = __webpack_require__(303);
	var exceptions_1 = __webpack_require__(58);
	var lang_1 = __webpack_require__(48);
	var Observable_1 = __webpack_require__(99);
	var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
	var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
	/**
	 * Abstract base class for an in-flight JSONP request.
	 */
	var JSONPConnection = (function () {
	    function JSONPConnection() {
	    }
	    return JSONPConnection;
	})();
	exports.JSONPConnection = JSONPConnection;
	var JSONPConnection_ = (function (_super) {
	    __extends(JSONPConnection_, _super);
	    function JSONPConnection_(req, _dom, baseResponseOptions) {
	        var _this = this;
	        _super.call(this);
	        this._dom = _dom;
	        this.baseResponseOptions = baseResponseOptions;
	        this._finished = false;
	        if (req.method !== enums_1.RequestMethod.Get) {
	            throw exceptions_1.makeTypeError(JSONP_ERR_WRONG_METHOD);
	        }
	        this.request = req;
	        this.response = new Observable_1.Observable(function (responseObserver) {
	            _this.readyState = enums_1.ReadyState.Loading;
	            var id = _this._id = _dom.nextRequestID();
	            _dom.exposeConnection(id, _this);
	            // Workaround Dart
	            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
	            var callback = _dom.requestCallback(_this._id);
	            var url = req.url;
	            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
	                url = lang_1.StringWrapper.replace(url, '=JSONP_CALLBACK&', "=" + callback + "&");
	            }
	            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
	                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
	            }
	            var script = _this._script = _dom.build(url);
	            var onLoad = function (event) {
	                if (_this.readyState === enums_1.ReadyState.Cancelled)
	                    return;
	                _this.readyState = enums_1.ReadyState.Done;
	                _dom.cleanup(script);
	                if (!_this._finished) {
	                    var responseOptions_1 = new base_response_options_1.ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: enums_1.ResponseType.Error, url: url });
	                    if (lang_1.isPresent(baseResponseOptions)) {
	                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
	                    }
	                    responseObserver.error(new static_response_1.Response(responseOptions_1));
	                    return;
	                }
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: _this._responseData, url: url });
	                if (lang_1.isPresent(_this.baseResponseOptions)) {
	                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.next(new static_response_1.Response(responseOptions));
	                responseObserver.complete();
	            };
	            var onError = function (error) {
	                if (_this.readyState === enums_1.ReadyState.Cancelled)
	                    return;
	                _this.readyState = enums_1.ReadyState.Done;
	                _dom.cleanup(script);
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: error.message, type: enums_1.ResponseType.Error });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.error(new static_response_1.Response(responseOptions));
	            };
	            script.addEventListener('load', onLoad);
	            script.addEventListener('error', onError);
	            _dom.send(script);
	            return function () {
	                _this.readyState = enums_1.ReadyState.Cancelled;
	                script.removeEventListener('load', onLoad);
	                script.removeEventListener('error', onError);
	                if (lang_1.isPresent(script)) {
	                    _this._dom.cleanup(script);
	                }
	            };
	        });
	    }
	    JSONPConnection_.prototype.finished = function (data) {
	        // Don't leak connections
	        this._finished = true;
	        this._dom.removeConnection(this._id);
	        if (this.readyState === enums_1.ReadyState.Cancelled)
	            return;
	        this._responseData = data;
	    };
	    return JSONPConnection_;
	})(JSONPConnection);
	exports.JSONPConnection_ = JSONPConnection_;
	/**
	 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
	 */
	var JSONPBackend = (function (_super) {
	    __extends(JSONPBackend, _super);
	    function JSONPBackend() {
	        _super.apply(this, arguments);
	    }
	    return JSONPBackend;
	})(interfaces_1.ConnectionBackend);
	exports.JSONPBackend = JSONPBackend;
	var JSONPBackend_ = (function (_super) {
	    __extends(JSONPBackend_, _super);
	    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
	        _super.call(this);
	        this._browserJSONP = _browserJSONP;
	        this._baseResponseOptions = _baseResponseOptions;
	    }
	    JSONPBackend_.prototype.createConnection = function (request) {
	        return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
	    };
	    JSONPBackend_ = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [browser_jsonp_1.BrowserJsonp, base_response_options_1.ResponseOptions])
	    ], JSONPBackend_);
	    return JSONPBackend_;
	})(JSONPBackend);
	exports.JSONPBackend_ = JSONPBackend_;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbnBfYmFja2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2JhY2tlbmRzL2pzb25wX2JhY2tlbmQudHMiXSwibmFtZXMiOlsiSlNPTlBDb25uZWN0aW9uIiwiSlNPTlBDb25uZWN0aW9uLmNvbnN0cnVjdG9yIiwiSlNPTlBDb25uZWN0aW9uXyIsIkpTT05QQ29ubmVjdGlvbl8uY29uc3RydWN0b3IiLCJKU09OUENvbm5lY3Rpb25fLmZpbmlzaGVkIiwiSlNPTlBCYWNrZW5kIiwiSlNPTlBCYWNrZW5kLmNvbnN0cnVjdG9yIiwiSlNPTlBCYWNrZW5kXyIsIkpTT05QQmFja2VuZF8uY29uc3RydWN0b3IiLCJKU09OUEJhY2tlbmRfLmNyZWF0ZUNvbm5lY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELHNCQUFzRCxVQUFVLENBQUMsQ0FBQTtBQUVqRSxnQ0FBdUIsb0JBQW9CLENBQUMsQ0FBQTtBQUM1QyxzQ0FBbUQsMEJBQTBCLENBQUMsQ0FBQTtBQUM5RSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsMkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFDN0QscUJBQXVDLDBCQUEwQixDQUFDLENBQUE7QUFDbEUsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFFM0MsSUFBTSxxQkFBcUIsR0FBRyxnREFBZ0QsQ0FBQztBQUMvRSxJQUFNLHNCQUFzQixHQUFHLDZDQUE2QyxDQUFDO0FBRTdFOztHQUVHO0FBQ0g7SUFBQUE7SUFxQkFDLENBQUNBO0lBQURELHNCQUFDQTtBQUFEQSxDQUFDQSxBQXJCRCxJQXFCQztBQXJCcUIsdUJBQWUsa0JBcUJwQyxDQUFBO0FBRUQ7SUFBc0NFLG9DQUFlQTtJQU1uREEsMEJBQVlBLEdBQVlBLEVBQVVBLElBQWtCQSxFQUNoQ0EsbUJBQXFDQTtRQVAzREMs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QUNBLGlCQUFVQSxFQUFFQTs7c0JBU1pBO0lBQURBLG9CQUFDQTtBQUFEQSxDQUFDQSxBQVRELEVBQ21DLFlBQVksRUFROUM7QUFSWSxxQkFBYSxnQkFRekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29ubmVjdGlvbkJhY2tlbmQsIENvbm5lY3Rpb259IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtSZWFkeVN0YXRlLCBSZXF1ZXN0TWV0aG9kLCBSZXNwb25zZVR5cGV9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7UmVxdWVzdH0gZnJvbSAnLi4vc3RhdGljX3JlcXVlc3QnO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSAnLi4vc3RhdGljX3Jlc3BvbnNlJztcbmltcG9ydCB7UmVzcG9uc2VPcHRpb25zLCBCYXNlUmVzcG9uc2VPcHRpb25zfSBmcm9tICcuLi9iYXNlX3Jlc3BvbnNlX29wdGlvbnMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QnJvd3Nlckpzb25wfSBmcm9tICcuL2Jyb3dzZXJfanNvbnAnO1xuaW1wb3J0IHttYWtlVHlwZUVycm9yfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtTdHJpbmdXcmFwcGVyLCBpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmNvbnN0IEpTT05QX0VSUl9OT19DQUxMQkFDSyA9ICdKU09OUCBpbmplY3RlZCBzY3JpcHQgZGlkIG5vdCBpbnZva2UgY2FsbGJhY2suJztcbmNvbnN0IEpTT05QX0VSUl9XUk9OR19NRVRIT0QgPSAnSlNPTlAgcmVxdWVzdHMgbXVzdCB1c2UgR0VUIHJlcXVlc3QgbWV0aG9kLic7XG5cbi8qKlxuICogQWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgYW4gaW4tZmxpZ2h0IEpTT05QIHJlcXVlc3QuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBKU09OUENvbm5lY3Rpb24gaW1wbGVtZW50cyBDb25uZWN0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgUmVhZHlTdGF0ZX0gb2YgdGhpcyByZXF1ZXN0LlxuICAgKi9cbiAgcmVhZHlTdGF0ZTogUmVhZHlTdGF0ZTtcblxuICAvKipcbiAgICogVGhlIG91dGdvaW5nIEhUVFAgcmVxdWVzdC5cbiAgICovXG4gIHJlcXVlc3Q6IFJlcXVlc3Q7XG5cbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCBjb21wbGV0ZXMgd2l0aCB0aGUgcmVzcG9uc2UsIHdoZW4gdGhlIHJlcXVlc3QgaXMgZmluaXNoZWQuXG4gICAqL1xuICByZXNwb25zZTogT2JzZXJ2YWJsZTxSZXNwb25zZT47XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBKU09OUCByZXF1ZXN0IGNvbXBsZXRlcywgdG8gbm90aWZ5IHRoZSBhcHBsaWNhdGlvblxuICAgKiBvZiB0aGUgbmV3IGRhdGEuXG4gICAqL1xuICBhYnN0cmFjdCBmaW5pc2hlZChkYXRhPzogYW55KTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEpTT05QQ29ubmVjdGlvbl8gZXh0ZW5kcyBKU09OUENvbm5lY3Rpb24ge1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwcml2YXRlIF9zY3JpcHQ6IEVsZW1lbnQ7XG4gIHByaXZhdGUgX3Jlc3BvbnNlRGF0YTogYW55O1xuICBwcml2YXRlIF9maW5pc2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHJlcTogUmVxdWVzdCwgcHJpdmF0ZSBfZG9tOiBCcm93c2VySnNvbnAsXG4gICAgICAgICAgICAgIHByaXZhdGUgYmFzZVJlc3BvbnNlT3B0aW9ucz86IFJlc3BvbnNlT3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHJlcS5tZXRob2QgIT09IFJlcXVlc3RNZXRob2QuR2V0KSB7XG4gICAgICB0aHJvdyBtYWtlVHlwZUVycm9yKEpTT05QX0VSUl9XUk9OR19NRVRIT0QpO1xuICAgIH1cbiAgICB0aGlzLnJlcXVlc3QgPSByZXE7XG4gICAgdGhpcy5yZXNwb25zZSA9IG5ldyBPYnNlcnZhYmxlKHJlc3BvbnNlT2JzZXJ2ZXIgPT4ge1xuXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBSZWFkeVN0YXRlLkxvYWRpbmc7XG4gICAgICBsZXQgaWQgPSB0aGlzLl9pZCA9IF9kb20ubmV4dFJlcXVlc3RJRCgpO1xuXG4gICAgICBfZG9tLmV4cG9zZUNvbm5lY3Rpb24oaWQsIHRoaXMpO1xuXG4gICAgICAvLyBXb3JrYXJvdW5kIERhcnRcbiAgICAgIC8vIHVybCA9IHVybC5yZXBsYWNlKC89SlNPTlBfQ0FMTEJBQ0soJnwkKS8sIGBnZW5lcmF0ZWQgbWV0aG9kYCk7XG4gICAgICBsZXQgY2FsbGJhY2sgPSBfZG9tLnJlcXVlc3RDYWxsYmFjayh0aGlzLl9pZCk7XG4gICAgICBsZXQgdXJsOiBzdHJpbmcgPSByZXEudXJsO1xuICAgICAgaWYgKHVybC5pbmRleE9mKCc9SlNPTlBfQ0FMTEJBQ0smJykgPiAtMSkge1xuICAgICAgICB1cmwgPSBTdHJpbmdXcmFwcGVyLnJlcGxhY2UodXJsLCAnPUpTT05QX0NBTExCQUNLJicsIGA9JHtjYWxsYmFja30mYCk7XG4gICAgICB9IGVsc2UgaWYgKHVybC5sYXN0SW5kZXhPZignPUpTT05QX0NBTExCQUNLJykgPT09IHVybC5sZW5ndGggLSAnPUpTT05QX0NBTExCQUNLJy5sZW5ndGgpIHtcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gJz1KU09OUF9DQUxMQkFDSycubGVuZ3RoKSArIGA9JHtjYWxsYmFja31gO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2NyaXB0ID0gdGhpcy5fc2NyaXB0ID0gX2RvbS5idWlsZCh1cmwpO1xuXG4gICAgICBsZXQgb25Mb2FkID0gZXZlbnQgPT4ge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBSZWFkeVN0YXRlLkNhbmNlbGxlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBSZWFkeVN0YXRlLkRvbmU7XG4gICAgICAgIF9kb20uY2xlYW51cChzY3JpcHQpO1xuICAgICAgICBpZiAoIXRoaXMuX2ZpbmlzaGVkKSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlT3B0aW9ucyA9XG4gICAgICAgICAgICAgIG5ldyBSZXNwb25zZU9wdGlvbnMoe2JvZHk6IEpTT05QX0VSUl9OT19DQUxMQkFDSywgdHlwZTogUmVzcG9uc2VUeXBlLkVycm9yLCB1cmx9KTtcbiAgICAgICAgICBpZiAoaXNQcmVzZW50KGJhc2VSZXNwb25zZU9wdGlvbnMpKSB7XG4gICAgICAgICAgICByZXNwb25zZU9wdGlvbnMgPSBiYXNlUmVzcG9uc2VPcHRpb25zLm1lcmdlKHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuZXJyb3IobmV3IFJlc3BvbnNlKHJlc3BvbnNlT3B0aW9ucykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXNwb25zZU9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHtib2R5OiB0aGlzLl9yZXNwb25zZURhdGEsIHVybH0pO1xuICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMuYmFzZVJlc3BvbnNlT3B0aW9ucykpIHtcbiAgICAgICAgICByZXNwb25zZU9wdGlvbnMgPSB0aGlzLmJhc2VSZXNwb25zZU9wdGlvbnMubWVyZ2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIubmV4dChuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKSk7XG4gICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBvbkVycm9yID0gZXJyb3IgPT4ge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBSZWFkeVN0YXRlLkNhbmNlbGxlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBSZWFkeVN0YXRlLkRvbmU7XG4gICAgICAgIF9kb20uY2xlYW51cChzY3JpcHQpO1xuICAgICAgICBsZXQgcmVzcG9uc2VPcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7Ym9keTogZXJyb3IubWVzc2FnZSwgdHlwZTogUmVzcG9uc2VUeXBlLkVycm9yfSk7XG4gICAgICAgIGlmIChpc1ByZXNlbnQoYmFzZVJlc3BvbnNlT3B0aW9ucykpIHtcbiAgICAgICAgICByZXNwb25zZU9wdGlvbnMgPSBiYXNlUmVzcG9uc2VPcHRpb25zLm1lcmdlKHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKSk7XG4gICAgICB9O1xuXG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcblxuICAgICAgX2RvbS5zZW5kKHNjcmlwdCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFJlYWR5U3RhdGUuQ2FuY2VsbGVkO1xuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICBpZiAoaXNQcmVzZW50KHNjcmlwdCkpIHtcbiAgICAgICAgICB0aGlzLl9kb20uY2xlYW51cChzY3JpcHQpO1xuICAgICAgICB9XG5cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmaW5pc2hlZChkYXRhPzogYW55KSB7XG4gICAgLy8gRG9uJ3QgbGVhayBjb25uZWN0aW9uc1xuICAgIHRoaXMuX2ZpbmlzaGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9kb20ucmVtb3ZlQ29ubmVjdGlvbih0aGlzLl9pZCk7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gUmVhZHlTdGF0ZS5DYW5jZWxsZWQpIHJldHVybjtcbiAgICB0aGlzLl9yZXNwb25zZURhdGEgPSBkYXRhO1xuICB9XG59XG5cbi8qKlxuICogQSB7QGxpbmsgQ29ubmVjdGlvbkJhY2tlbmR9IHRoYXQgdXNlcyB0aGUgSlNPTlAgc3RyYXRlZ3kgb2YgbWFraW5nIHJlcXVlc3RzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSlNPTlBCYWNrZW5kIGV4dGVuZHMgQ29ubmVjdGlvbkJhY2tlbmQge31cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpTT05QQmFja2VuZF8gZXh0ZW5kcyBKU09OUEJhY2tlbmQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9icm93c2VySlNPTlA6IEJyb3dzZXJKc29ucCwgcHJpdmF0ZSBfYmFzZVJlc3BvbnNlT3B0aW9uczogUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbm5lY3Rpb24ocmVxdWVzdDogUmVxdWVzdCk6IEpTT05QQ29ubmVjdGlvbiB7XG4gICAgcmV0dXJuIG5ldyBKU09OUENvbm5lY3Rpb25fKHJlcXVlc3QsIHRoaXMuX2Jyb3dzZXJKU09OUCwgdGhpcy5fYmFzZVJlc3BvbnNlT3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(67);
	var lang_1 = __webpack_require__(48);
	var _nextRequestId = 0;
	exports.JSONP_HOME = '__ng_jsonp__';
	var _jsonpConnections = null;
	function _getJsonpConnections() {
	    if (_jsonpConnections === null) {
	        _jsonpConnections = lang_1.global[exports.JSONP_HOME] = {};
	    }
	    return _jsonpConnections;
	}
	// Make sure not to evaluate this in a non-browser environment!
	var BrowserJsonp = (function () {
	    function BrowserJsonp() {
	    }
	    // Construct a <script> element with the specified URL
	    BrowserJsonp.prototype.build = function (url) {
	        var node = document.createElement('script');
	        node.src = url;
	        return node;
	    };
	    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
	    BrowserJsonp.prototype.requestCallback = function (id) { return exports.JSONP_HOME + "." + id + ".finished"; };
	    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
	        var connections = _getJsonpConnections();
	        connections[id] = connection;
	    };
	    BrowserJsonp.prototype.removeConnection = function (id) {
	        var connections = _getJsonpConnections();
	        connections[id] = null;
	    };
	    // Attach the <script> element to the DOM
	    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
	    // Remove <script> element from the DOM
	    BrowserJsonp.prototype.cleanup = function (node) {
	        if (node.parentNode) {
	            node.parentNode.removeChild((node));
	        }
	    };
	    BrowserJsonp = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BrowserJsonp);
	    return BrowserJsonp;
	})();
	exports.BrowserJsonp = BrowserJsonp;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9qc29ucC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2JhY2tlbmRzL2Jyb3dzZXJfanNvbnAudHMiXSwibmFtZXMiOlsiX2dldEpzb25wQ29ubmVjdGlvbnMiLCJCcm93c2VySnNvbnAiLCJCcm93c2VySnNvbnAuY29uc3RydWN0b3IiLCJCcm93c2VySnNvbnAuYnVpbGQiLCJCcm93c2VySnNvbnAubmV4dFJlcXVlc3RJRCIsIkJyb3dzZXJKc29ucC5yZXF1ZXN0Q2FsbGJhY2siLCJCcm93c2VySnNvbnAuZXhwb3NlQ29ubmVjdGlvbiIsIkJyb3dzZXJKc29ucC5yZW1vdmVDb25uZWN0aW9uIiwiQnJvd3Nlckpzb25wLnNlbmQiLCJCcm93c2VySnNvbnAuY2xlYW51cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFxQiwwQkFBMEIsQ0FBQyxDQUFBO0FBRWhELElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztBQUNWLGtCQUFVLEdBQUcsY0FBYyxDQUFDO0FBQ3pDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0FBRTdCO0lBQ0VBLEVBQUVBLENBQUNBLENBQUNBLGlCQUFpQkEsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDL0JBLGlCQUFpQkEsR0FBR0EsYUFBTUEsQ0FBQ0Esa0JBQVVBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO0lBQzlDQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFDQSxpQkFBaUJBLENBQUNBO0FBQzNCQSxDQUFDQTtBQUVELCtEQUErRDtBQUMvRDtJQUFBQztJQWdDQUMsQ0FBQ0E7SUE5QkNELHNEQUFzREE7SUFDdERBLDRCQUFLQSxHQUFMQSxVQUFNQSxHQUFXQTtRQUNmRSxJQUFJQSxJQUFJQSxHQUFHQSxRQUFRQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUM1Q0EsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDZkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFFREYsb0NBQWFBLEdBQWJBLGNBQTBCRyxNQUFNQSxDQUFDQSxVQUFRQSxjQUFjQSxFQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUU5REgsc0NBQWVBLEdBQWZBLFVBQWdCQSxFQUFVQSxJQUFZSSxNQUFNQSxDQUFJQSxrQkFBVUEsU0FBSUEsRUFBRUEsY0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFOUVKLHVDQUFnQkEsR0FBaEJBLFVBQWlCQSxFQUFVQSxFQUFFQSxVQUFlQTtRQUMxQ0ssSUFBSUEsV0FBV0EsR0FBR0Esb0JBQW9CQSxFQUFFQSxDQUFDQTtRQUN6Q0EsV0FBV0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsVUFBVUEsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBRURMLHVDQUFnQkEsR0FBaEJBLFVBQWlCQSxFQUFVQTtRQUN6Qk0sSUFBSUEsV0FBV0EsR0FBR0Esb0JBQW9CQSxFQUFFQSxDQUFDQTtRQUN6Q0EsV0FBV0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBRUROLHlDQUF5Q0E7SUFDekNBLDJCQUFJQSxHQUFKQSxVQUFLQSxJQUFTQSxJQUFJTyxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUU1RFAsdUNBQXVDQTtJQUN2Q0EsOEJBQU9BLEdBQVBBLFVBQVFBLElBQVNBO1FBQ2ZRLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxXQUFXQSxDQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM1Q0EsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUEvQkhSO1FBQUNBLGlCQUFVQSxFQUFFQTs7cUJBZ0NaQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0FBQ0EsQUFoQ0QsSUFnQ0M7QUEvQlksb0JBQVksZUErQnhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtnbG9iYWx9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmxldCBfbmV4dFJlcXVlc3RJZCA9IDA7XG5leHBvcnQgY29uc3QgSlNPTlBfSE9NRSA9ICdfX25nX2pzb25wX18nO1xudmFyIF9qc29ucENvbm5lY3Rpb25zID0gbnVsbDtcblxuZnVuY3Rpb24gX2dldEpzb25wQ29ubmVjdGlvbnMoKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICBpZiAoX2pzb25wQ29ubmVjdGlvbnMgPT09IG51bGwpIHtcbiAgICBfanNvbnBDb25uZWN0aW9ucyA9IGdsb2JhbFtKU09OUF9IT01FXSA9IHt9O1xuICB9XG4gIHJldHVybiBfanNvbnBDb25uZWN0aW9ucztcbn1cblxuLy8gTWFrZSBzdXJlIG5vdCB0byBldmFsdWF0ZSB0aGlzIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQhXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvd3Nlckpzb25wIHtcbiAgLy8gQ29uc3RydWN0IGEgPHNjcmlwdD4gZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgVVJMXG4gIGJ1aWxkKHVybDogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIG5vZGUuc3JjID0gdXJsO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgbmV4dFJlcXVlc3RJRCgpOiBzdHJpbmcgeyByZXR1cm4gYF9fcmVxJHtfbmV4dFJlcXVlc3RJZCsrfWA7IH1cblxuICByZXF1ZXN0Q2FsbGJhY2soaWQ6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiBgJHtKU09OUF9IT01FfS4ke2lkfS5maW5pc2hlZGA7IH1cblxuICBleHBvc2VDb25uZWN0aW9uKGlkOiBzdHJpbmcsIGNvbm5lY3Rpb246IGFueSkge1xuICAgIGxldCBjb25uZWN0aW9ucyA9IF9nZXRKc29ucENvbm5lY3Rpb25zKCk7XG4gICAgY29ubmVjdGlvbnNbaWRdID0gY29ubmVjdGlvbjtcbiAgfVxuXG4gIHJlbW92ZUNvbm5lY3Rpb24oaWQ6IHN0cmluZykge1xuICAgIHZhciBjb25uZWN0aW9ucyA9IF9nZXRKc29ucENvbm5lY3Rpb25zKCk7XG4gICAgY29ubmVjdGlvbnNbaWRdID0gbnVsbDtcbiAgfVxuXG4gIC8vIEF0dGFjaCB0aGUgPHNjcmlwdD4gZWxlbWVudCB0byB0aGUgRE9NXG4gIHNlbmQobm9kZTogYW55KSB7IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoPE5vZGU+KG5vZGUpKTsgfVxuXG4gIC8vIFJlbW92ZSA8c2NyaXB0PiBlbGVtZW50IGZyb20gdGhlIERPTVxuICBjbGVhbnVwKG5vZGU6IGFueSkge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCg8Tm9kZT4obm9kZSkpO1xuICAgIH1cbiAgfVxufVxuIl19

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _dec, _class;
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Menu = undefined;
	
	var _core = __webpack_require__(67);
	
	var _router = __webpack_require__(262);
	
	var _menuComponent = __webpack_require__(305);
	
	var _menuComponent2 = _interopRequireDefault(_menuComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Menu = exports.Menu = (_dec = (0, _core.Component)({
	    selector: 'top-menu',
	    template: _menuComponent2.default
	}), _dec(_class = function Menu() {
	    _classCallCheck(this, Menu);
	}) || _class);

/***/ },
/* 305 */
/***/ function(module, exports) {

	module.exports = "<div ng-controller=\"MenuReposController\">\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" href=\"#repos\">Travis Wallboard v1.0</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"active\"><a href=\"#/repos\">All Repos <span class=\"sr-only\">(current)</span></a></li>\n                    <li>\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Settings <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li> <a href=\"#/settings\">Settings</a></li>\n                            <li> <a href=\"#/repo-settings\">Repo Settings</a></li>\n                        </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Projects <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\" role=\"menu\">\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>\n";

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _dec, _dec2, _class;
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Wallboard = undefined;
	
	var _core = __webpack_require__(67);
	
	var _router = __webpack_require__(262);
	
	var _wallboardComponent = __webpack_require__(307);
	
	var _wallboardComponent2 = _interopRequireDefault(_wallboardComponent);
	
	var _test = __webpack_require__(308);
	
	var _settings = __webpack_require__(310);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Wallboard = exports.Wallboard = (_dec = (0, _core.Component)({
	    selector: 'wall-board',
	    template: _wallboardComponent2.default,
	    directives: [_router.ROUTER_DIRECTIVES]
	}), _dec2 = (0, _router.RouteConfig)([{ path: '/repos', name: 'Repos', component: _test.TestComponent }, { path: '/settings', name: 'Settings', component: _settings.SettingsComponent }]), _dec(_class = _dec2(_class = function Wallboard() {
	    _classCallCheck(this, Wallboard);
	}) || _class) || _class);

/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = "<router-outlet></router-outlet>\n";

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _dec, _class;
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TestComponent = undefined;
	
	var _core = __webpack_require__(67);
	
	var _router = __webpack_require__(262);
	
	var _testComponent = __webpack_require__(309);
	
	var _testComponent2 = _interopRequireDefault(_testComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TestComponent = exports.TestComponent = (_dec = (0, _core.Component)({
	    template: _testComponent2.default
	}), _dec(_class = function TestComponent() {
	    _classCallCheck(this, TestComponent);
	}) || _class);

/***/ },
/* 309 */
/***/ function(module, exports) {

	module.exports = "<h1>LALALALALALLALA</h1>\n";

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SettingsComponent = undefined;
	
	var _core = __webpack_require__(67);
	
	var _router = __webpack_require__(262);
	
	var _settingsComponent = __webpack_require__(311);
	
	var _settingsComponent2 = _interopRequireDefault(_settingsComponent);
	
	var _common = __webpack_require__(159);
	
	var _reposettings = __webpack_require__(312);
	
	var _store = __webpack_require__(286);
	
	var _request = __webpack_require__(288);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SettingsComponent = exports.SettingsComponent = (_dec = (0, _core.Component)({
	    template: _settingsComponent2.default,
	    selector: 'settings'
	}), _dec(_class = function () {
	    function SettingsComponent(store, request) {
	        _classCallCheck(this, SettingsComponent);
	
	        this.users = [];
	        this.githubToken = "";
	        this.travisToken = "";
	        this.store = null;
	        this.request = null;
	
	        this.store = store;
	        this.request = request;
	
	        this.loadUsers();
	
	        if (this.users == null || this.users.length == 0) {
	            this.newUser();
	        }
	    }
	
	    _createClass(SettingsComponent, [{
	        key: 'newUser',
	        value: function newUser() {
	            this.users = this.users || [];
	            this.users.push(new _reposettings.RepoSettings('', '', false));
	        }
	    }, {
	        key: 'getUsers',
	        value: function getUsers() {
	            return this.users;
	        }
	    }, {
	        key: 'showUsers',
	        value: function showUsers() {
	            console.debug(this.users);
	        }
	    }, {
	        key: 'saveUsers',
	        value: function saveUsers() {
	            this.store.setValue('users', JSON.stringify(this.users));
	        }
	
	        /**
	         * Lopad users from the store and set them to the users variable.
	         */
	
	    }, {
	        key: 'loadUsers',
	        value: function loadUsers() {
	            this.users = this.store.getValue('users');
	        }
	
	        /**
	         * Do a request to travis with an github token to generate a travis token.
	         */
	
	    }, {
	        key: 'generateToken',
	        value: function generateToken() {
	            var _this = this;
	
	            this.request.getTravisToken(this.githubToken).subscribe(function (token) {
	                return _this.travisToken = token.access_token;
	            });
	        }
	    }, {
	        key: 'getHeading',
	        value: function getHeading(i) {
	            return 'heading' + i;
	        }
	    }, {
	        key: 'getCollapse',
	        value: function getCollapse(i) {
	            return 'collapse' + i;
	        }
	    }, {
	        key: 'getTitle',
	        value: function getTitle(user, i) {
	            var privateRepo = "";
	            var publicRepo = "";
	            if (user.token !== "") {
	                privateRepo = " Private ";
	            }
	
	            if (user.includePublic !== false) {
	                if (user.token !== "") {
	                    publicRepo += "and";
	                }
	                publicRepo += " Public ";
	            }
	
	            if (user.name === "") {
	                return "New repo " + i;
	            }
	
	            if (privateRepo !== "" || publicRepo !== "") {
	                return user.name + " Repository (" + privateRepo + publicRepo + ')';
	            }
	            return user.name + " Repository";
	        }
	    }]);
	
	    return SettingsComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_store.Store, _request.Request], SettingsComponent);

/***/ },
/* 311 */
/***/ function(module, exports) {

	module.exports = "<section class=\"settingsForm\">\n    <h3>Base settings:</h3>\n\n\n    <form (ngSubmit)=\"saveUsers()\" class=\"form-inline\">\n        <div class=\"panel-group\" id=\"accordion\" role=\"tablist\"\n             [attr.aria-multiselectable]=\"true\">\n            <div *ngFor=\"#user of getUsers();  #i = index\" class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"heading{{i}}\">\n                    <h4 class=\"panel-title\">\n                        <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{i}}\"\n                           [attr.aria-expanded]=\"true\" [attr.aria-controls]=\"getCollapse(i)\">\n                            {{getTitle(user, i)}}\n                        </a>\n                    </h4>\n                </div>\n                <div id=\"collapse{{i}}\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                     [attr.aria-labelledby]=\"getHeading(i)\">\n                    <div class=\"panel-body\">\n                        <div class=\"form-group\">\n                            <label>Name</label>\n                            <input [(ngModel)]=\"user.name\" type=\"text\" class=\"form-control\" placeholder=\"User name\">\n                            <label>Token</label>\n                            <input [(ngModel)]=\"user.token\" type=\"text\" class=\"form-control\" placeholder=\"Token\">\n                            <label>Include public</label>\n                            <input [(ngModel)]=\"user.includePublic\" type=\"checkbox\" class=\"form-control\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n    <form (ngSubmit)=\"generateToken()\">\n        <div class=\"form-group\">\n            <label for=\"githubtoken\">Github token</label>\n            <input [(ngModel)]=\"githubToken\" type=\"text\" class=\"form-control\" id=\"githubtoken\"\n                   placeholder=\"Enter github token travis token will be generated\">\n        </div>\n        <span>{{travisToken}}</span>\n        <br/>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n</section>\n";

/***/ },
/* 312 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RepoSettings = exports.RepoSettings = function () {
	    function RepoSettings(name, token, includePublic) {
	        _classCallCheck(this, RepoSettings);
	
	        this.name = "";
	        this.token = "";
	        this.includePublic = false;
	
	        this.name = name;
	        this.token = token;
	        this.includePublic = includePublic;
	    }
	
	    _createClass(RepoSettings, [{
	        key: "getName",
	        value: function getName() {
	            return this.name;
	        }
	    }, {
	        key: "getToken",
	        value: function getToken() {
	            return this.token;
	        }
	    }, {
	        key: "getIncludePublic",
	        value: function getIncludePublic() {
	            return this.includePublic;
	        }
	    }]);
	
	    return RepoSettings;
	}();

	Reflect.defineMetadata("design:paramtypes", [String, String, Boolean], RepoSettings);

/***/ },
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	/* tslint:disable:no-unused-variable */
	// Subject imported before Observable to bypass circular dependency issue since
	// Subject extends Observable and Observable references Subject in it's
	// definition
	var Subject_1 = __webpack_require__(98);
	exports.Subject = Subject_1.Subject;
	/* tslint:enable:no-unused-variable */
	var Observable_1 = __webpack_require__(99);
	exports.Observable = Observable_1.Observable;
	// statics
	/* tslint:disable:no-use-before-declare */
	__webpack_require__(322);
	__webpack_require__(336);
	__webpack_require__(339);
	__webpack_require__(341);
	__webpack_require__(344);
	__webpack_require__(346);
	__webpack_require__(347);
	__webpack_require__(350);
	__webpack_require__(355);
	__webpack_require__(356);
	__webpack_require__(358);
	__webpack_require__(360);
	__webpack_require__(361);
	__webpack_require__(369);
	__webpack_require__(371);
	__webpack_require__(373);
	__webpack_require__(374);
	__webpack_require__(377);
	//operators
	__webpack_require__(380);
	__webpack_require__(382);
	__webpack_require__(384);
	__webpack_require__(386);
	__webpack_require__(388);
	__webpack_require__(390);
	__webpack_require__(392);
	__webpack_require__(394);
	__webpack_require__(396);
	__webpack_require__(398);
	__webpack_require__(400);
	__webpack_require__(403);
	__webpack_require__(406);
	__webpack_require__(408);
	__webpack_require__(410);
	__webpack_require__(412);
	__webpack_require__(414);
	__webpack_require__(416);
	__webpack_require__(418);
	__webpack_require__(420);
	__webpack_require__(422);
	__webpack_require__(425);
	__webpack_require__(427);
	__webpack_require__(429);
	__webpack_require__(432);
	__webpack_require__(438);
	__webpack_require__(440);
	__webpack_require__(442);
	__webpack_require__(444);
	__webpack_require__(446);
	__webpack_require__(448);
	__webpack_require__(450);
	__webpack_require__(452);
	__webpack_require__(454);
	__webpack_require__(456);
	__webpack_require__(458);
	__webpack_require__(461);
	__webpack_require__(463);
	__webpack_require__(466);
	__webpack_require__(468);
	__webpack_require__(472);
	__webpack_require__(475);
	__webpack_require__(477);
	__webpack_require__(480);
	__webpack_require__(482);
	__webpack_require__(484);
	__webpack_require__(486);
	__webpack_require__(488);
	__webpack_require__(490);
	__webpack_require__(492);
	__webpack_require__(494);
	__webpack_require__(496);
	__webpack_require__(498);
	__webpack_require__(500);
	__webpack_require__(502);
	__webpack_require__(504);
	__webpack_require__(507);
	__webpack_require__(509);
	__webpack_require__(511);
	__webpack_require__(513);
	__webpack_require__(516);
	__webpack_require__(518);
	__webpack_require__(520);
	__webpack_require__(522);
	__webpack_require__(524);
	__webpack_require__(526);
	__webpack_require__(528);
	__webpack_require__(530);
	__webpack_require__(531);
	__webpack_require__(533);
	__webpack_require__(535);
	__webpack_require__(537);
	__webpack_require__(539);
	__webpack_require__(541);
	__webpack_require__(543);
	__webpack_require__(545);
	/* tslint:disable:no-unused-variable */
	var Subscription_1 = __webpack_require__(104);
	exports.Subscription = Subscription_1.Subscription;
	var Subscriber_1 = __webpack_require__(100);
	exports.Subscriber = Subscriber_1.Subscriber;
	var AsyncSubject_1 = __webpack_require__(343);
	exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
	var ReplaySubject_1 = __webpack_require__(474);
	exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
	var BehaviorSubject_1 = __webpack_require__(470);
	exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
	var ConnectableObservable_1 = __webpack_require__(460);
	exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
	var Notification_1 = __webpack_require__(354);
	exports.Notification = Notification_1.Notification;
	var EmptyError_1 = __webpack_require__(431);
	exports.EmptyError = EmptyError_1.EmptyError;
	var ArgumentOutOfRangeError_1 = __webpack_require__(515);
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	var ObjectUnsubscribedError_1 = __webpack_require__(471);
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
	var asap_1 = __webpack_require__(364);
	var queue_1 = __webpack_require__(110);
	var rxSubscriber_1 = __webpack_require__(105);
	/* tslint:enable:no-unused-variable */
	/* tslint:disable:no-var-keyword */
	var Scheduler = {
	    asap: asap_1.asap,
	    queue: queue_1.queue
	};
	exports.Scheduler = Scheduler;
	var Symbol = {
	    rxSubscriber: rxSubscriber_1.rxSubscriber
	};
	exports.Symbol = Symbol;
	/* tslint:enable:no-var-keyword */
	//# sourceMappingURL=Rx.js.map

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var combineLatest_static_1 = __webpack_require__(323);
	Observable_1.Observable.combineLatest = combineLatest_static_1.combineLatest;
	//# sourceMappingURL=combineLatest-static.js.map

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	var fromArray_1 = __webpack_require__(324);
	var combineLatest_support_1 = __webpack_require__(331);
	var isScheduler_1 = __webpack_require__(330);
	var isArray_1 = __webpack_require__(335);
	/**
	 * Combines the values from observables passed as arguments. This is done by subscribing
	 * to each observable, in order, and collecting an array of each of the most recent values any time any of the observables
	 * emits, then either taking that array and passing it as arguments to an option `project` function and emitting the return
	 * value of that, or just emitting the array of recent values directly if there is no `project` function.
	 * @param {...Observable} observables the observables to combine
	 * @param {function} [project] an optional function to project the values from the combined recent values into a new value for emission.
	 * @returns {Observable} an observable of other projected values from the most recent values from each observable, or an array of each of
	 * the most recent values from each observable.
	 */
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    var scheduler = null;
	    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
	        scheduler = observables.pop();
	    }
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    return new fromArray_1.ArrayObservable(observables, scheduler).lift(new combineLatest_support_1.CombineLatestOperator(project));
	}
	exports.combineLatest = combineLatest;
	//# sourceMappingURL=combineLatest-static.js.map

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var ScalarObservable_1 = __webpack_require__(325);
	var empty_1 = __webpack_require__(329);
	var isScheduler_1 = __webpack_require__(330);
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = void 0;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new empty_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            }));
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	})(Observable_1.Observable);
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=fromArray.js.map

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var throw_1 = __webpack_require__(328);
	var empty_1 = __webpack_require__(329);
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            }));
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	})(Observable_1.Observable);
	exports.ScalarObservable = ScalarObservable;
	// TypeScript is weird about class prototype member functions and instance properties touching on it's plate.
	var proto = ScalarObservable.prototype;
	proto.map = function (project, thisArg) {
	    var result = tryCatch_1.tryCatch(project).call(thisArg || this, this.value, 0);
	    if (result === errorObject_1.errorObject) {
	        return new throw_1.ErrorObservable(errorObject_1.errorObject.e);
	    }
	    else {
	        return new ScalarObservable(project.call(thisArg || this, this.value, 0));
	    }
	};
	proto.filter = function (select, thisArg) {
	    var result = tryCatch_1.tryCatch(select).call(thisArg || this, this.value, 0);
	    if (result === errorObject_1.errorObject) {
	        return new throw_1.ErrorObservable(errorObject_1.errorObject.e);
	    }
	    else if (result) {
	        return this;
	    }
	    else {
	        return new empty_1.EmptyObservable();
	    }
	};
	proto.reduce = function (project, seed) {
	    if (typeof seed === 'undefined') {
	        return this;
	    }
	    var result = tryCatch_1.tryCatch(project)(seed, this.value);
	    if (result === errorObject_1.errorObject) {
	        return new throw_1.ErrorObservable(errorObject_1.errorObject.e);
	    }
	    else {
	        return new ScalarObservable(result);
	    }
	};
	proto.scan = function (project, acc) {
	    return this.reduce(project, acc);
	};
	proto.count = function (predicate) {
	    if (!predicate) {
	        return new ScalarObservable(1);
	    }
	    else {
	        var result = tryCatch_1.tryCatch(predicate).call(this, this.value, 0, this);
	        if (result === errorObject_1.errorObject) {
	            return new throw_1.ErrorObservable(errorObject_1.errorObject.e);
	        }
	        else {
	            return new ScalarObservable(result ? 1 : 0);
	        }
	    }
	};
	proto.skip = function (count) {
	    if (count > 0) {
	        return new empty_1.EmptyObservable();
	    }
	    return this;
	};
	proto.take = function (count) {
	    if (count > 0) {
	        return this;
	    }
	    return new empty_1.EmptyObservable();
	};
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var errorObject_1 = __webpack_require__(327);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 327 */
/***/ function(module, exports) {

	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var ErrorObservable = (function (_super) {
	    __extends(ErrorObservable, _super);
	    function ErrorObservable(error, scheduler) {
	        _super.call(this);
	        this.error = error;
	        this.scheduler = scheduler;
	    }
	    ErrorObservable.create = function (error, scheduler) {
	        return new ErrorObservable(error, scheduler);
	    };
	    ErrorObservable.dispatch = function (_a) {
	        var error = _a.error, subscriber = _a.subscriber;
	        subscriber.error(error);
	    };
	    ErrorObservable.prototype._subscribe = function (subscriber) {
	        var error = this.error;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(scheduler.schedule(ErrorObservable.dispatch, 0, {
	                error: error, subscriber: subscriber
	            }));
	        }
	        else {
	            subscriber.error(error);
	        }
	    };
	    return ErrorObservable;
	})(Observable_1.Observable);
	exports.ErrorObservable = ErrorObservable;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (_a) {
	        var subscriber = _a.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber }));
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	})(Observable_1.Observable);
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 330 */
/***/ function(module, exports) {

	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var OuterSubscriber_1 = __webpack_require__(332);
	var subscribeToResult_1 = __webpack_require__(333);
	var CombineLatestOperator = (function () {
	    function CombineLatestOperator(project) {
	        this.project = project;
	    }
	    CombineLatestOperator.prototype.call = function (subscriber) {
	        return new CombineLatestSubscriber(subscriber, this.project);
	    };
	    return CombineLatestOperator;
	})();
	exports.CombineLatestOperator = CombineLatestOperator;
	var CombineLatestSubscriber = (function (_super) {
	    __extends(CombineLatestSubscriber, _super);
	    function CombineLatestSubscriber(destination, project) {
	        _super.call(this, destination);
	        this.project = project;
	        this.active = 0;
	        this.values = [];
	        this.observables = [];
	        this.toRespond = [];
	    }
	    CombineLatestSubscriber.prototype._next = function (observable) {
	        var toRespond = this.toRespond;
	        toRespond.push(toRespond.length);
	        this.observables.push(observable);
	    };
	    CombineLatestSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            this.active = len;
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
	        if ((this.active -= 1) === 0) {
	            this.destination.complete();
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyNext = function (observable, value, outerIndex, innerIndex) {
	        var values = this.values;
	        values[outerIndex] = value;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	        if (toRespond.length === 0) {
	            var project = this.project;
	            var destination = this.destination;
	            if (project) {
	                var result = tryCatch_1.tryCatch(project).apply(this, values);
	                if (result === errorObject_1.errorObject) {
	                    destination.error(errorObject_1.errorObject.e);
	                }
	                else {
	                    destination.next(result);
	                }
	            }
	            else {
	                destination.next(values);
	            }
	        }
	    };
	    return CombineLatestSubscriber;
	})(OuterSubscriber_1.OuterSubscriber);
	exports.CombineLatestSubscriber = CombineLatestSubscriber;
	//# sourceMappingURL=combineLatest-support.js.map

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var OuterSubscriber = (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyComplete = function (inner) {
	        this.destination.complete();
	    };
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, inner) {
	        this.destination.error(error);
	    };
	    return OuterSubscriber;
	})(Subscriber_1.Subscriber);
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var SymbolShim_1 = __webpack_require__(106);
	var InnerSubscriber_1 = __webpack_require__(334);
	var isArray = Array.isArray;
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.isUnsubscribed) {
	        return;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return;
	        }
	        else {
	            return result.subscribe(destination);
	        }
	    }
	    if (isArray(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (typeof result.then === 'function') {
	        result.then(function (x) {
	            if (!destination.isUnsubscribed) {
	                destination.next(x);
	                destination.complete();
	            }
	        }, function (err) { return destination.error(err); })
	            .then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            setTimeout(function () { throw err; });
	        });
	        return destination;
	    }
	    else if (typeof result[SymbolShim_1.SymbolShim.iterator] === 'function') {
	        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
	            var item = result_1[_i];
	            destination.next(item);
	            if (destination.isUnsubscribed) {
	                break;
	            }
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (typeof result[SymbolShim_1.SymbolShim.observable] === 'function') {
	        var obs = result[SymbolShim_1.SymbolShim.observable]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error('invalid observable');
	        }
	        else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    }
	    else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var InnerSubscriber = (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, index);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	    };
	    return InnerSubscriber;
	})(Subscriber_1.Subscriber);
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },
/* 335 */
/***/ function(module, exports) {

	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var concat_static_1 = __webpack_require__(337);
	Observable_1.Observable.concat = concat_static_1.concat;
	//# sourceMappingURL=concat-static.js.map

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var queue_1 = __webpack_require__(110);
	var mergeAll_support_1 = __webpack_require__(338);
	var fromArray_1 = __webpack_require__(324);
	var isScheduler_1 = __webpack_require__(330);
	/**
	 * Joins multiple observables together by subscribing to them one at a time and merging their results
	 * into the returned observable. Will wait for each observable to complete before moving on to the next.
	 * @params {...Observable} the observables to concatenate
	 * @params {Scheduler} [scheduler] an optional scheduler to schedule each observable subscription on.
	 * @returns {Observable} All values of each passed observable merged into a single observable, in order, in serial fashion.
	 */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var scheduler = queue_1.queue;
	    var args = observables;
	    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
	        scheduler = args.pop();
	    }
	    return new fromArray_1.ArrayObservable(observables, scheduler).lift(new mergeAll_support_1.MergeAllOperator(1));
	}
	exports.concat = concat;
	//# sourceMappingURL=concat-static.js.map

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(332);
	var subscribeToResult_1 = __webpack_require__(333);
	var MergeAllOperator = (function () {
	    function MergeAllOperator(concurrent) {
	        this.concurrent = concurrent;
	    }
	    MergeAllOperator.prototype.call = function (observer) {
	        return new MergeAllSubscriber(observer, this.concurrent);
	    };
	    return MergeAllOperator;
	})();
	exports.MergeAllOperator = MergeAllOperator;
	var MergeAllSubscriber = (function (_super) {
	    __extends(MergeAllSubscriber, _super);
	    function MergeAllSubscriber(destination, concurrent) {
	        _super.call(this, destination);
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	    }
	    MergeAllSubscriber.prototype._next = function (observable) {
	        if (this.active < this.concurrent) {
	            if (observable._isScalar) {
	                this.destination.next(observable.value);
	            }
	            else {
	                this.active++;
	                this.add(subscribeToResult_1.subscribeToResult(this, observable));
	            }
	        }
	        else {
	            this.buffer.push(observable);
	        }
	    };
	    MergeAllSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeAllSubscriber;
	})(OuterSubscriber_1.OuterSubscriber);
	exports.MergeAllSubscriber = MergeAllSubscriber;
	//# sourceMappingURL=mergeAll-support.js.map

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var merge_static_1 = __webpack_require__(340);
	Observable_1.Observable.merge = merge_static_1.merge;
	//# sourceMappingURL=merge-static.js.map

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var fromArray_1 = __webpack_require__(324);
	var mergeAll_support_1 = __webpack_require__(338);
	var queue_1 = __webpack_require__(110);
	var isScheduler_1 = __webpack_require__(330);
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = queue_1.queue;
	    var last = observables[observables.length - 1];
	    if (isScheduler_1.isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    }
	    else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (observables.length === 1) {
	        return observables[0];
	    }
	    return new fromArray_1.ArrayObservable(observables, scheduler).lift(new mergeAll_support_1.MergeAllOperator(concurrent));
	}
	exports.merge = merge;
	//# sourceMappingURL=merge-static.js.map

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var bindCallback_1 = __webpack_require__(342);
	Observable_1.Observable.bindCallback = bindCallback_1.BoundCallbackObservable.create;
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var AsyncSubject_1 = __webpack_require__(343);
	var BoundCallbackObservable = (function (_super) {
	    __extends(BoundCallbackObservable, _super);
	    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _super.call(this);
	        this.callbackFunc = callbackFunc;
	        this.selector = selector;
	        this.args = args;
	        this.scheduler = scheduler;
	    }
	    BoundCallbackObservable.create = function (callbackFunc, selector, scheduler) {
	        if (selector === void 0) { selector = undefined; }
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            return new BoundCallbackObservable(callbackFunc, selector, args, scheduler);
	        };
	    };
	    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
	        var callbackFunc = this.callbackFunc;
	        var args = this.args;
	        var scheduler = this.scheduler;
	        var subject = this.subject;
	        if (!scheduler) {
	            if (!subject) {
	                subject = this.subject = new AsyncSubject_1.AsyncSubject();
	                var handler = function handlerFn() {
	                    var innerArgs = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        innerArgs[_i - 0] = arguments[_i];
	                    }
	                    var source = handlerFn.source;
	                    var selector = source.selector, subject = source.subject;
	                    if (selector) {
	                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                        if (result_1 === errorObject_1.errorObject) {
	                            subject.error(errorObject_1.errorObject.e);
	                        }
	                        else {
	                            subject.next(result_1);
	                            subject.complete();
	                        }
	                    }
	                    else {
	                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                        subject.complete();
	                    }
	                };
	                // use named function instance to avoid closure.
	                handler.source = this;
	                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	                if (result === errorObject_1.errorObject) {
	                    subject.error(errorObject_1.errorObject.e);
	                }
	            }
	            return subject.subscribe(subscriber);
	        }
	        else {
	            subscriber.add(scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber }));
	            return subscriber;
	        }
	    };
	    return BoundCallbackObservable;
	})(Observable_1.Observable);
	exports.BoundCallbackObservable = BoundCallbackObservable;
	function dispatch(state) {
	    var source = state.source, subscriber = state.subscriber;
	    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
	    var subject = source.subject;
	    if (!subject) {
	        subject = source.subject = new AsyncSubject_1.AsyncSubject();
	        var handler = function handlerFn() {
	            var innerArgs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                innerArgs[_i - 0] = arguments[_i];
	            }
	            var source = handlerFn.source;
	            var selector = source.selector, subject = source.subject;
	            if (selector) {
	                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                if (result_2 === errorObject_1.errorObject) {
	                    subject.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
	                }
	                else {
	                    subject.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
	                }
	            }
	            else {
	                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                subject.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	            }
	        };
	        // use named function to pass values in without closure
	        handler.source = source;
	        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	        if (result === errorObject_1.errorObject) {
	            subject.error(errorObject_1.errorObject.e);
	        }
	    }
	    this.add(subject.subscribe(subscriber));
	}
	function dispatchNext(_a) {
	    var value = _a.value, subject = _a.subject;
	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(_a) {
	    var err = _a.err, subject = _a.subject;
	    subject.error(err);
	}
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(98);
	var AsyncSubject = (function (_super) {
	    __extends(AsyncSubject, _super);
	    function AsyncSubject() {
	        _super.call(this);
	        this._value = void 0;
	        this._hasNext = false;
	        this._isScalar = false;
	    }
	    AsyncSubject.prototype._subscribe = function (subscriber) {
	        if (this.completeSignal && this._hasNext) {
	            subscriber.next(this._value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    AsyncSubject.prototype._next = function (value) {
	        this._value = value;
	        this._hasNext = true;
	    };
	    AsyncSubject.prototype._complete = function () {
	        var index = -1;
	        var observers = this.observers;
	        var len = observers.length;
	        // optimization -- block next, complete, and unsubscribe while dispatching
	        this.observers = void 0; // optimization
	        this.isUnsubscribed = true;
	        if (this._hasNext) {
	            while (++index < len) {
	                var o = observers[index];
	                o.next(this._value);
	                o.complete();
	            }
	        }
	        else {
	            while (++index < len) {
	                observers[index].complete();
	            }
	        }
	        this.isUnsubscribed = false;
	    };
	    return AsyncSubject;
	})(Subject_1.Subject);
	exports.AsyncSubject = AsyncSubject;
	//# sourceMappingURL=AsyncSubject.js.map

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var defer_1 = __webpack_require__(345);
	Observable_1.Observable.defer = defer_1.DeferObservable.create;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var DeferObservable = (function (_super) {
	    __extends(DeferObservable, _super);
	    function DeferObservable(observableFactory) {
	        _super.call(this);
	        this.observableFactory = observableFactory;
	    }
	    DeferObservable.create = function (observableFactory) {
	        return new DeferObservable(observableFactory);
	    };
	    DeferObservable.prototype._subscribe = function (subscriber) {
	        var result = tryCatch_1.tryCatch(this.observableFactory)();
	        if (result === errorObject_1.errorObject) {
	            subscriber.error(errorObject_1.errorObject.e);
	        }
	        else {
	            result.subscribe(subscriber);
	        }
	    };
	    return DeferObservable;
	})(Observable_1.Observable);
	exports.DeferObservable = DeferObservable;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var empty_1 = __webpack_require__(329);
	Observable_1.Observable.empty = empty_1.EmptyObservable.create;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var forkJoin_1 = __webpack_require__(348);
	Observable_1.Observable.forkJoin = forkJoin_1.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var Subscriber_1 = __webpack_require__(100);
	var fromPromise_1 = __webpack_require__(109);
	var empty_1 = __webpack_require__(329);
	var isPromise_1 = __webpack_require__(349);
	var isArray_1 = __webpack_require__(335);
	var ForkJoinObservable = (function (_super) {
	    __extends(ForkJoinObservable, _super);
	    function ForkJoinObservable(sources, resultSelector) {
	        _super.call(this);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	    }
	    ForkJoinObservable.create = function () {
	        var sources = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sources[_i - 0] = arguments[_i];
	        }
	        if (sources === null || arguments.length === 0) {
	            return new empty_1.EmptyObservable();
	        }
	        var resultSelector = null;
	        if (typeof sources[sources.length - 1] === 'function') {
	            resultSelector = sources.pop();
	        }
	        // if the first and only other argument besides the resultSelector is an array
	        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
	            sources = sources[0];
	        }
	        return new ForkJoinObservable(sources, resultSelector);
	    };
	    ForkJoinObservable.prototype._subscribe = function (subscriber) {
	        var sources = this.sources;
	        var len = sources.length;
	        var context = { completed: 0, total: len, values: emptyArray(len), selector: this.resultSelector };
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            if (isPromise_1.isPromise(source)) {
	                source = new fromPromise_1.PromiseObservable(source);
	            }
	            source.subscribe(new AllSubscriber(subscriber, i, context));
	        }
	    };
	    return ForkJoinObservable;
	})(Observable_1.Observable);
	exports.ForkJoinObservable = ForkJoinObservable;
	var AllSubscriber = (function (_super) {
	    __extends(AllSubscriber, _super);
	    function AllSubscriber(destination, index, context) {
	        _super.call(this, destination);
	        this.index = index;
	        this.context = context;
	        this._value = null;
	    }
	    AllSubscriber.prototype._next = function (value) {
	        this._value = value;
	    };
	    AllSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this._value == null) {
	            destination.complete();
	        }
	        var context = this.context;
	        context.completed++;
	        context.values[this.index] = this._value;
	        var values = context.values;
	        if (context.completed !== values.length) {
	            return;
	        }
	        if (values.every(hasValue)) {
	            var value = context.selector ? context.selector.apply(this, values) :
	                values;
	            destination.next(value);
	        }
	        destination.complete();
	    };
	    return AllSubscriber;
	})(Subscriber_1.Subscriber);
	function hasValue(x) {
	    return x !== null;
	}
	function emptyArray(len) {
	    var arr = [];
	    for (var i = 0; i < len; i++) {
	        arr.push(null);
	    }
	    return arr;
	}
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 349 */
/***/ function(module, exports) {

	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var from_1 = __webpack_require__(351);
	Observable_1.Observable.from = from_1.FromObservable.create;
	//# sourceMappingURL=from.js.map

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var fromPromise_1 = __webpack_require__(109);
	var IteratorObservable_1 = __webpack_require__(352);
	var fromArray_1 = __webpack_require__(324);
	var SymbolShim_1 = __webpack_require__(106);
	var Observable_1 = __webpack_require__(99);
	var observeOn_support_1 = __webpack_require__(353);
	var queue_1 = __webpack_require__(110);
	var isArray = Array.isArray;
	var FromObservable = (function (_super) {
	    __extends(FromObservable, _super);
	    function FromObservable(ish, scheduler) {
	        _super.call(this, null);
	        this.ish = ish;
	        this.scheduler = scheduler;
	    }
	    FromObservable.create = function (ish, scheduler) {
	        if (scheduler === void 0) { scheduler = queue_1.queue; }
	        if (ish) {
	            if (isArray(ish)) {
	                return new fromArray_1.ArrayObservable(ish, scheduler);
	            }
	            else if (typeof ish.then === 'function') {
	                return new fromPromise_1.PromiseObservable(ish, scheduler);
	            }
	            else if (typeof ish[SymbolShim_1.SymbolShim.observable] === 'function') {
	                if (ish instanceof Observable_1.Observable) {
	                    return ish;
	                }
	                return new FromObservable(ish, scheduler);
	            }
	            else if (typeof ish[SymbolShim_1.SymbolShim.iterator] === 'function') {
	                return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
	            }
	        }
	        throw new TypeError((typeof ish) + ' is not observable');
	    };
	    FromObservable.prototype._subscribe = function (subscriber) {
	        var ish = this.ish;
	        var scheduler = this.scheduler;
	        if (scheduler === queue_1.queue) {
	            return ish[SymbolShim_1.SymbolShim.observable]().subscribe(subscriber);
	        }
	        else {
	            return ish[SymbolShim_1.SymbolShim.observable]().subscribe(new observeOn_support_1.ObserveOnSubscriber(subscriber, scheduler, 0));
	        }
	    };
	    return FromObservable;
	})(Observable_1.Observable);
	exports.FromObservable = FromObservable;
	//# sourceMappingURL=from.js.map

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var root_1 = __webpack_require__(107);
	var SymbolShim_1 = __webpack_require__(106);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var IteratorObservable = (function (_super) {
	    __extends(IteratorObservable, _super);
	    function IteratorObservable(iterator, project, thisArg, scheduler) {
	        _super.call(this);
	        this.project = project;
	        this.thisArg = thisArg;
	        this.scheduler = scheduler;
	        if (iterator == null) {
	            throw new Error('iterator cannot be null.');
	        }
	        if (project && typeof project !== 'function') {
	            throw new Error('When provided, `project` must be a function.');
	        }
	        this.iterator = getIterator(iterator);
	    }
	    IteratorObservable.create = function (iterator, project, thisArg, scheduler) {
	        return new IteratorObservable(iterator, project, thisArg, scheduler);
	    };
	    IteratorObservable.dispatch = function (state) {
	        var index = state.index, hasError = state.hasError, thisArg = state.thisArg, project = state.project, iterator = state.iterator, subscriber = state.subscriber;
	        if (hasError) {
	            subscriber.error(state.error);
	            return;
	        }
	        var result = iterator.next();
	        if (result.done) {
	            subscriber.complete();
	            return;
	        }
	        if (project) {
	            result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
	            if (result === errorObject_1.errorObject) {
	                state.error = errorObject_1.errorObject.e;
	                state.hasError = true;
	            }
	            else {
	                subscriber.next(result);
	                state.index = index + 1;
	            }
	        }
	        else {
	            subscriber.next(result.value);
	            state.index = index + 1;
	        }
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        this.schedule(state);
	    };
	    IteratorObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, iterator = _a.iterator, project = _a.project, thisArg = _a.thisArg, scheduler = _a.scheduler;
	        if (scheduler) {
	            subscriber.add(scheduler.schedule(IteratorObservable.dispatch, 0, {
	                index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
	            }));
	        }
	        else {
	            do {
	                var result = iterator.next();
	                if (result.done) {
	                    subscriber.complete();
	                    break;
	                }
	                else if (project) {
	                    result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
	                    if (result === errorObject_1.errorObject) {
	                        subscriber.error(errorObject_1.errorObject.e);
	                        break;
	                    }
	                    subscriber.next(result);
	                }
	                else {
	                    subscriber.next(result.value);
	                }
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return IteratorObservable;
	})(Observable_1.Observable);
	exports.IteratorObservable = IteratorObservable;
	var StringIterator = (function () {
	    function StringIterator(str, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = str.length; }
	        this.str = str;
	        this.idx = idx;
	        this.len = len;
	    }
	    StringIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () { return (this); };
	    StringIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.str.charAt(this.idx++)
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return StringIterator;
	})();
	var ArrayIterator = (function () {
	    function ArrayIterator(arr, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = toLength(arr); }
	        this.arr = arr;
	        this.idx = idx;
	        this.len = len;
	    }
	    ArrayIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () { return this; };
	    ArrayIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.arr[this.idx++]
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return ArrayIterator;
	})();
	function getIterator(obj) {
	    var i = obj[SymbolShim_1.SymbolShim.iterator];
	    if (!i && typeof obj === 'string') {
	        return new StringIterator(obj);
	    }
	    if (!i && obj.length !== undefined) {
	        return new ArrayIterator(obj);
	    }
	    if (!i) {
	        throw new TypeError('Object is not iterable');
	    }
	    return obj[SymbolShim_1.SymbolShim.iterator]();
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) {
	        return 0;
	    }
	    if (len === 0 || !numberIsFinite(len)) {
	        return len;
	    }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) {
	        return 0;
	    }
	    if (len > maxSafeInteger) {
	        return maxSafeInteger;
	    }
	    return len;
	}
	function numberIsFinite(value) {
	    return typeof value === 'number' && root_1.root.isFinite(value);
	}
	function sign(value) {
	    var valueAsNumber = +value;
	    if (valueAsNumber === 0) {
	        return valueAsNumber;
	    }
	    if (isNaN(valueAsNumber)) {
	        return valueAsNumber;
	    }
	    return valueAsNumber < 0 ? -1 : 1;
	}
	//# sourceMappingURL=IteratorObservable.js.map

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Notification_1 = __webpack_require__(354);
	var ObserveOnOperator = (function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber) {
	        return new ObserveOnSubscriber(subscriber, this.scheduler, this.delay);
	    };
	    return ObserveOnOperator;
	})();
	exports.ObserveOnOperator = ObserveOnOperator;
	var ObserveOnSubscriber = (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (_a) {
	        var notification = _a.notification, destination = _a.destination;
	        notification.observe(destination);
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	})(Subscriber_1.Subscriber);
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	})();
	//# sourceMappingURL=observeOn-support.js.map

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var Notification = (function () {
	    function Notification(kind, value, exception) {
	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next(this.value);
	            case 'E':
	                return observer.error(this.exception);
	            case 'C':
	                return observer.complete();
	        }
	    };
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next(this.value);
	            case 'E':
	                return error(this.exception);
	            case 'C':
	                return complete();
	        }
	    };
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.exception);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	    };
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return this.undefinedValueNotification;
	    };
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    Notification.createComplete = function () {
	        return this.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	})();
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var fromArray_1 = __webpack_require__(324);
	Observable_1.Observable.fromArray = fromArray_1.ArrayObservable.create;
	Observable_1.Observable.of = fromArray_1.ArrayObservable.of;
	//# sourceMappingURL=fromArray.js.map

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var fromEvent_1 = __webpack_require__(357);
	Observable_1.Observable.fromEvent = fromEvent_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var Subscription_1 = __webpack_require__(104);
	var FromEventObservable = (function (_super) {
	    __extends(FromEventObservable, _super);
	    function FromEventObservable(sourceObj, eventName, selector) {
	        _super.call(this);
	        this.sourceObj = sourceObj;
	        this.eventName = eventName;
	        this.selector = selector;
	    }
	    FromEventObservable.create = function (sourceObj, eventName, selector) {
	        return new FromEventObservable(sourceObj, eventName, selector);
	    };
	    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber) {
	        var unsubscribe;
	        var tag = sourceObj.toString();
	        if (tag === '[object NodeList]' || tag === '[object HTMLCollection]') {
	            for (var i = 0, len = sourceObj.length; i < len; i++) {
	                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
	            }
	        }
	        else if (typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function') {
	            sourceObj.addEventListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeEventListener(eventName, handler); };
	        }
	        else if (typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function') {
	            sourceObj.on(eventName, handler);
	            unsubscribe = function () { return sourceObj.off(eventName, handler); };
	        }
	        else if (typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function') {
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeListener(eventName, handler); };
	        }
	        subscriber.add(new Subscription_1.Subscription(unsubscribe));
	    };
	    FromEventObservable.prototype._subscribe = function (subscriber) {
	        var sourceObj = this.sourceObj;
	        var eventName = this.eventName;
	        var selector = this.selector;
	        var handler = selector ? function (e) {
	            var result = tryCatch_1.tryCatch(selector)(e);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(result.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { return subscriber.next(e); };
	        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
	    };
	    return FromEventObservable;
	})(Observable_1.Observable);
	exports.FromEventObservable = FromEventObservable;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var fromEventPattern_1 = __webpack_require__(359);
	Observable_1.Observable.fromEventPattern = fromEventPattern_1.FromEventPatternObservable.create;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var Subscription_1 = __webpack_require__(104);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var FromEventPatternObservable = (function (_super) {
	    __extends(FromEventPatternObservable, _super);
	    function FromEventPatternObservable(addHandler, removeHandler, selector) {
	        _super.call(this);
	        this.addHandler = addHandler;
	        this.removeHandler = removeHandler;
	        this.selector = selector;
	    }
	    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
	        return new FromEventPatternObservable(addHandler, removeHandler, selector);
	    };
	    FromEventPatternObservable.prototype._subscribe = function (subscriber) {
	        var addHandler = this.addHandler;
	        var removeHandler = this.removeHandler;
	        var selector = this.selector;
	        var handler = selector ? function (e) {
	            var result = tryCatch_1.tryCatch(selector).apply(null, arguments);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(result.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { subscriber.next(e); };
	        var result = tryCatch_1.tryCatch(addHandler)(handler);
	        if (result === errorObject_1.errorObject) {
	            subscriber.error(result.e);
	        }
	        subscriber.add(new Subscription_1.Subscription(function () {
	            //TODO: determine whether or not to forward to error handler
	            removeHandler(handler);
	        }));
	    };
	    return FromEventPatternObservable;
	})(Observable_1.Observable);
	exports.FromEventPatternObservable = FromEventPatternObservable;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var fromPromise_1 = __webpack_require__(109);
	Observable_1.Observable.fromPromise = fromPromise_1.PromiseObservable.create;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var interval_1 = __webpack_require__(362);
	Observable_1.Observable.interval = interval_1.IntervalObservable.create;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(363);
	var Observable_1 = __webpack_require__(99);
	var asap_1 = __webpack_require__(364);
	var IntervalObservable = (function (_super) {
	    __extends(IntervalObservable, _super);
	    function IntervalObservable(period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        _super.call(this);
	        this.period = period;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(period) || period < 0) {
	            this.period = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = asap_1.asap;
	        }
	    }
	    IntervalObservable.create = function (period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        return new IntervalObservable(period, scheduler);
	    };
	    IntervalObservable.dispatch = function (state) {
	        var index = state.index, subscriber = state.subscriber, period = state.period;
	        subscriber.next(index);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index += 1;
	        this.schedule(state, period);
	    };
	    IntervalObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var period = this.period;
	        var scheduler = this.scheduler;
	        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
	            index: index, subscriber: subscriber, period: period
	        }));
	    };
	    return IntervalObservable;
	})(Observable_1.Observable);
	exports.IntervalObservable = IntervalObservable;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 363 */
/***/ function(module, exports) {

	var is_array = Array.isArray;
	function isNumeric(val) {
	    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	    // subtraction forces infinities to NaN
	    // adding 1 corrects loss of precision from parseFloat (#15100)
	    return !is_array(val) && (val - parseFloat(val) + 1) >= 0;
	}
	exports.isNumeric = isNumeric;
	;
	//# sourceMappingURL=isNumeric.js.map

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	var AsapScheduler_1 = __webpack_require__(365);
	exports.asap = new AsapScheduler_1.AsapScheduler();
	//# sourceMappingURL=asap.js.map

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var QueueScheduler_1 = __webpack_require__(111);
	var AsapAction_1 = __webpack_require__(366);
	var QueueAction_1 = __webpack_require__(112);
	var AsapScheduler = (function (_super) {
	    __extends(AsapScheduler, _super);
	    function AsapScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsapScheduler.prototype.scheduleNow = function (work, state) {
	        return (this.scheduled ?
	            new QueueAction_1.QueueAction(this, work) :
	            new AsapAction_1.AsapAction(this, work)).schedule(state);
	    };
	    return AsapScheduler;
	})(QueueScheduler_1.QueueScheduler);
	exports.AsapScheduler = AsapScheduler;
	//# sourceMappingURL=AsapScheduler.js.map

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Immediate_1 = __webpack_require__(367);
	var QueueAction_1 = __webpack_require__(112);
	var AsapAction = (function (_super) {
	    __extends(AsapAction, _super);
	    function AsapAction() {
	        _super.apply(this, arguments);
	    }
	    AsapAction.prototype.schedule = function (state) {
	        var _this = this;
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        if (!scheduler.scheduled) {
	            scheduler.scheduled = true;
	            this.id = Immediate_1.Immediate.setImmediate(function () {
	                _this.id = null;
	                _this.scheduler.scheduled = false;
	                _this.scheduler.flush();
	            });
	        }
	        return this;
	    };
	    AsapAction.prototype.unsubscribe = function () {
	        var id = this.id;
	        var scheduler = this.scheduler;
	        _super.prototype.unsubscribe.call(this);
	        if (scheduler.actions.length === 0) {
	            scheduler.active = false;
	            scheduler.scheduled = false;
	        }
	        if (id) {
	            this.id = null;
	            Immediate_1.Immediate.clearImmediate(id);
	        }
	    };
	    return AsapAction;
	})(QueueAction_1.QueueAction);
	exports.AsapAction = AsapAction;
	//# sourceMappingURL=AsapAction.js.map

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(clearImmediate, setImmediate) {/**
	Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
	*/
	var root_1 = __webpack_require__(107);
	var ImmediateDefinition = (function () {
	    function ImmediateDefinition(root) {
	        this.root = root;
	        if (root.setImmediate) {
	            this.setImmediate = root.setImmediate;
	            this.clearImmediate = root.clearImmediate;
	        }
	        else {
	            this.nextHandle = 1;
	            this.tasksByHandle = {};
	            this.currentlyRunningATask = false;
	            // Don't get fooled by e.g. browserify environments.
	            if (this.canUseProcessNextTick()) {
	                // For Node.js before 0.9
	                this.setImmediate = this.createProcessNextTickSetImmediate();
	            }
	            else if (this.canUsePostMessage()) {
	                // For non-IE10 modern browsers
	                this.setImmediate = this.createPostMessageSetImmediate();
	            }
	            else if (this.canUseMessageChannel()) {
	                // For web workers, where supported
	                this.setImmediate = this.createMessageChannelSetImmediate();
	            }
	            else if (this.canUseReadyStateChange()) {
	                // For IE 6–8
	                this.setImmediate = this.createReadyStateChangeSetImmediate();
	            }
	            else {
	                // For older browsers
	                this.setImmediate = this.createSetTimeoutSetImmediate();
	            }
	            var ci = function clearImmediate(handle) {
	                delete clearImmediate.instance.tasksByHandle[handle];
	            };
	            ci.instance = this;
	            this.clearImmediate = ci;
	        }
	    }
	    ImmediateDefinition.prototype.identify = function (o) {
	        return this.root.Object.prototype.toString.call(o);
	    };
	    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
	        return this.identify(this.root.process) === '[object process]';
	    };
	    ImmediateDefinition.prototype.canUseMessageChannel = function () {
	        return Boolean(this.root.MessageChannel);
	    };
	    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
	        var document = this.root.document;
	        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
	    };
	    ImmediateDefinition.prototype.canUsePostMessage = function () {
	        var root = this.root;
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `root.postMessage` means something completely different and can't be used for this purpose.
	        if (root.postMessage && !root.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = root.onmessage;
	            root.onmessage = function () {
	                postMessageIsAsynchronous = false;
	            };
	            root.postMessage('', '*');
	            root.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	        return false;
	    };
	    // This function accepts the same arguments as setImmediate, but
	    // returns a function that requires no arguments.
	    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var fn = function result() {
	            var _a = result, handler = _a.handler, args = _a.args;
	            if (typeof handler === 'function') {
	                handler.apply(undefined, args);
	            }
	            else {
	                (new Function('' + handler))();
	            }
	        };
	        fn.handler = handler;
	        fn.args = args;
	        return fn;
	    };
	    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
	        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
	        return this.nextHandle++;
	    };
	    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	        var root = this.root;
	        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
	        var onGlobalMessage = function globalMessageHandler(event) {
	            var instance = globalMessageHandler.instance;
	            if (event.source === root &&
	                typeof event.data === 'string' &&
	                event.data.indexOf(messagePrefix) === 0) {
	                instance.runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	        onGlobalMessage.instance = this;
	        root.addEventListener('message', onGlobalMessage, false);
	        var fn = function setImmediate() {
	            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.postMessage(messagePrefix + handle, '*');
	            return handle;
	        };
	        fn.instance = this;
	        fn.messagePrefix = messagePrefix;
	        return fn;
	    };
	    ImmediateDefinition.prototype.runIfPresent = function (handle) {
	        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (this.currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // 'too much recursion' error.
	            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
	        }
	        else {
	            var task = this.tasksByHandle[handle];
	            if (task) {
	                this.currentlyRunningATask = true;
	                try {
	                    task();
	                }
	                finally {
	                    this.clearImmediate(handle);
	                    this.currentlyRunningATask = false;
	                }
	            }
	        }
	    };
	    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
	        var _this = this;
	        var channel = new this.root.MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            _this.runIfPresent(handle);
	        };
	        var fn = function setImmediate() {
	            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            channel.port2.postMessage(handle);
	            return handle;
	        };
	        fn.channel = channel;
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var root = instance.root;
	            var doc = root.document;
	            var html = doc.documentElement;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement('script');
	            script.onreadystatechange = function () {
	                instance.runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    return ImmediateDefinition;
	})();
	exports.ImmediateDefinition = ImmediateDefinition;
	exports.Immediate = new ImmediateDefinition(root_1.root);
	//# sourceMappingURL=Immediate.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(368).clearImmediate, __webpack_require__(368).setImmediate))

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(2).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(368).setImmediate, __webpack_require__(368).clearImmediate))

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var never_1 = __webpack_require__(370);
	Observable_1.Observable.never = never_1.InfiniteObservable.create;
	//# sourceMappingURL=never.js.map

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var noop_1 = __webpack_require__(101);
	var InfiniteObservable = (function (_super) {
	    __extends(InfiniteObservable, _super);
	    function InfiniteObservable() {
	        _super.call(this);
	    }
	    InfiniteObservable.create = function () {
	        return new InfiniteObservable();
	    };
	    InfiniteObservable.prototype._subscribe = function (subscriber) {
	        noop_1.noop();
	    };
	    return InfiniteObservable;
	})(Observable_1.Observable);
	exports.InfiniteObservable = InfiniteObservable;
	//# sourceMappingURL=never.js.map

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var range_1 = __webpack_require__(372);
	Observable_1.Observable.range = range_1.RangeObservable.create;
	//# sourceMappingURL=range.js.map

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var RangeObservable = (function (_super) {
	    __extends(RangeObservable, _super);
	    function RangeObservable(start, end, scheduler) {
	        _super.call(this);
	        this.start = start;
	        this.end = end;
	        this.scheduler = scheduler;
	    }
	    RangeObservable.create = function (start, end, scheduler) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = 0; }
	        return new RangeObservable(start, end, scheduler);
	    };
	    RangeObservable.dispatch = function (state) {
	        var start = state.start, index = state.index, end = state.end, subscriber = state.subscriber;
	        if (index >= end) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(start);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        state.start = start + 1;
	        this.schedule(state);
	    };
	    RangeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var start = this.start;
	        var end = this.end;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(scheduler.schedule(RangeObservable.dispatch, 0, {
	                index: index, end: end, start: start, subscriber: subscriber
	            }));
	        }
	        else {
	            do {
	                if (index++ >= end) {
	                    subscriber.complete();
	                    break;
	                }
	                subscriber.next(start++);
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return RangeObservable;
	})(Observable_1.Observable);
	exports.RangeObservable = RangeObservable;
	//# sourceMappingURL=range.js.map

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var throw_1 = __webpack_require__(328);
	Observable_1.Observable.throw = throw_1.ErrorObservable.create;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var timer_1 = __webpack_require__(375);
	Observable_1.Observable.timer = timer_1.TimerObservable.create;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(363);
	var Observable_1 = __webpack_require__(99);
	var asap_1 = __webpack_require__(364);
	var isScheduler_1 = __webpack_require__(330);
	var isDate_1 = __webpack_require__(376);
	var TimerObservable = (function (_super) {
	    __extends(TimerObservable, _super);
	    function TimerObservable(dueTime, period, scheduler) {
	        if (dueTime === void 0) { dueTime = 0; }
	        _super.call(this);
	        this.period = period;
	        this.scheduler = scheduler;
	        this.dueTime = 0;
	        if (isNumeric_1.isNumeric(period)) {
	            this._period = Number(period) < 1 && 1 || Number(period);
	        }
	        else if (isScheduler_1.isScheduler(period)) {
	            scheduler = period;
	        }
	        if (!isScheduler_1.isScheduler(scheduler)) {
	            scheduler = asap_1.asap;
	        }
	        this.scheduler = scheduler;
	        var absoluteDueTime = isDate_1.isDate(dueTime);
	        this.dueTime = absoluteDueTime ? (+dueTime - this.scheduler.now()) : dueTime;
	    }
	    TimerObservable.create = function (dueTime, period, scheduler) {
	        if (dueTime === void 0) { dueTime = 0; }
	        return new TimerObservable(dueTime, period, scheduler);
	    };
	    TimerObservable.dispatch = function (state) {
	        var index = state.index, period = state.period, subscriber = state.subscriber;
	        var action = this;
	        subscriber.next(index);
	        if (typeof period === 'undefined') {
	            subscriber.complete();
	            return;
	        }
	        else if (subscriber.isUnsubscribed) {
	            return;
	        }
	        if (typeof action.delay === 'undefined') {
	            action.add(action.scheduler.schedule(TimerObservable.dispatch, period, {
	                index: index + 1, period: period, subscriber: subscriber
	            }));
	        }
	        else {
	            state.index = index + 1;
	            action.schedule(state, period);
	        }
	    };
	    TimerObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var period = this._period;
	        var dueTime = this.dueTime;
	        var scheduler = this.scheduler;
	        subscriber.add(scheduler.schedule(TimerObservable.dispatch, dueTime, { index: index, period: period, subscriber: subscriber }));
	    };
	    return TimerObservable;
	})(Observable_1.Observable);
	exports.TimerObservable = TimerObservable;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 376 */
/***/ function(module, exports) {

	function isDate(value) {
	    return value instanceof Date && !isNaN(+value);
	}
	exports.isDate = isDate;
	//# sourceMappingURL=isDate.js.map

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var zip_static_1 = __webpack_require__(378);
	Observable_1.Observable.zip = zip_static_1.zip;
	//# sourceMappingURL=zip-static.js.map

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	var fromArray_1 = __webpack_require__(324);
	var zip_support_1 = __webpack_require__(379);
	function zip() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = observables[observables.length - 1];
	    if (typeof project === 'function') {
	        observables.pop();
	    }
	    return new fromArray_1.ArrayObservable(observables).lift(new zip_support_1.ZipOperator(project));
	}
	exports.zip = zip;
	//# sourceMappingURL=zip-static.js.map

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var OuterSubscriber_1 = __webpack_require__(332);
	var subscribeToResult_1 = __webpack_require__(333);
	var SymbolShim_1 = __webpack_require__(106);
	var isArray = Array.isArray;
	var ZipOperator = (function () {
	    function ZipOperator(project) {
	        this.project = project;
	    }
	    ZipOperator.prototype.call = function (subscriber) {
	        return new ZipSubscriber(subscriber, this.project);
	    };
	    return ZipOperator;
	})();
	exports.ZipOperator = ZipOperator;
	var ZipSubscriber = (function (_super) {
	    __extends(ZipSubscriber, _super);
	    function ZipSubscriber(destination, project, values) {
	        if (values === void 0) { values = Object.create(null); }
	        _super.call(this, destination);
	        this.index = 0;
	        this.iterators = [];
	        this.active = 0;
	        this.project = (typeof project === 'function') ? project : null;
	        this.values = values;
	    }
	    ZipSubscriber.prototype._next = function (value) {
	        var iterators = this.iterators;
	        var index = this.index++;
	        if (isArray(value)) {
	            iterators.push(new StaticArrayIterator(value));
	        }
	        else if (typeof value[SymbolShim_1.SymbolShim.iterator] === 'function') {
	            iterators.push(new StaticIterator(value[SymbolShim_1.SymbolShim.iterator]()));
	        }
	        else {
	            iterators.push(new ZipBufferIterator(this.destination, this, value, index));
	        }
	    };
	    ZipSubscriber.prototype._complete = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        this.active = len;
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (iterator.stillUnsubscribed) {
	                iterator.subscribe(iterator, i);
	            }
	            else {
	                this.active--; // not an observable
	            }
	        }
	    };
	    ZipSubscriber.prototype.notifyInactive = function () {
	        this.active--;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ZipSubscriber.prototype.checkIterators = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        var destination = this.destination;
	        // abort if not all of them have values
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
	                return;
	            }
	        }
	        var shouldComplete = false;
	        var args = [];
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            var result = iterator.next();
	            // check to see if it's completed now that you've gotten
	            // the next value.
	            if (iterator.hasCompleted()) {
	                shouldComplete = true;
	            }
	            if (result.done) {
	                destination.complete();
	                return;
	            }
	            args.push(result.value);
	        }
	        var project = this.project;
	        if (project) {
	            var result = tryCatch_1.tryCatch(project).apply(this, args);
	            if (result === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                destination.next(result);
	            }
	        }
	        else {
	            destination.next(args);
	        }
	        if (shouldComplete) {
	            destination.complete();
	        }
	    };
	    return ZipSubscriber;
	})(Subscriber_1.Subscriber);
	exports.ZipSubscriber = ZipSubscriber;
	var StaticIterator = (function () {
	    function StaticIterator(iterator) {
	        this.iterator = iterator;
	        this.nextResult = iterator.next();
	    }
	    StaticIterator.prototype.hasValue = function () {
	        return true;
	    };
	    StaticIterator.prototype.next = function () {
	        var result = this.nextResult;
	        this.nextResult = this.iterator.next();
	        return result;
	    };
	    StaticIterator.prototype.hasCompleted = function () {
	        var nextResult = this.nextResult;
	        return nextResult && nextResult.done;
	    };
	    return StaticIterator;
	})();
	var StaticArrayIterator = (function () {
	    function StaticArrayIterator(array) {
	        this.array = array;
	        this.index = 0;
	        this.length = 0;
	        this.length = array.length;
	    }
	    StaticArrayIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () {
	        return this;
	    };
	    StaticArrayIterator.prototype.next = function (value) {
	        var i = this.index++;
	        var array = this.array;
	        return i < this.length ? { value: array[i], done: false } : { done: true };
	    };
	    StaticArrayIterator.prototype.hasValue = function () {
	        return this.array.length > this.index;
	    };
	    StaticArrayIterator.prototype.hasCompleted = function () {
	        return this.array.length === this.index;
	    };
	    return StaticArrayIterator;
	})();
	var ZipBufferIterator = (function (_super) {
	    __extends(ZipBufferIterator, _super);
	    function ZipBufferIterator(destination, parent, observable, index) {
	        _super.call(this, destination);
	        this.parent = parent;
	        this.observable = observable;
	        this.index = index;
	        this.stillUnsubscribed = true;
	        this.buffer = [];
	        this.isComplete = false;
	    }
	    ZipBufferIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () {
	        return this;
	    };
	    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
	    //    this is legit because `next()` will never be called by a subscription in this case.
	    ZipBufferIterator.prototype.next = function () {
	        var buffer = this.buffer;
	        if (buffer.length === 0 && this.isComplete) {
	            return { done: true };
	        }
	        else {
	            return { value: buffer.shift(), done: false };
	        }
	    };
	    ZipBufferIterator.prototype.hasValue = function () {
	        return this.buffer.length > 0;
	    };
	    ZipBufferIterator.prototype.hasCompleted = function () {
	        return this.buffer.length === 0 && this.isComplete;
	    };
	    ZipBufferIterator.prototype.notifyComplete = function () {
	        if (this.buffer.length > 0) {
	            this.isComplete = true;
	            this.parent.notifyInactive();
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        this.buffer.push(innerValue);
	        this.parent.checkIterators();
	    };
	    ZipBufferIterator.prototype.subscribe = function (value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, this.observable, this, index));
	    };
	    return ZipBufferIterator;
	})(OuterSubscriber_1.OuterSubscriber);
	//# sourceMappingURL=zip-support.js.map

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var buffer_1 = __webpack_require__(381);
	Observable_1.Observable.prototype.buffer = buffer_1.buffer;
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	/**
	 * buffers the incoming observable values until the passed `closingNotifier` emits a value, at which point
	 * it emits the buffer on the returned observable and starts a new buffer internally, awaiting the
	 * next time `closingNotifier` emits
	 *
	 * @param {Observable<any>} closingNotifier an observable, that signals the buffer to be emitted} from the returned observable
	 * @returns {Observable<T[]>} an observable of buffers, which are arrays of values
	 */
	function buffer(closingNotifier) {
	    return this.lift(new BufferOperator(closingNotifier));
	}
	exports.buffer = buffer;
	var BufferOperator = (function () {
	    function BufferOperator(closingNotifier) {
	        this.closingNotifier = closingNotifier;
	    }
	    BufferOperator.prototype.call = function (subscriber) {
	        return new BufferSubscriber(subscriber, this.closingNotifier);
	    };
	    return BufferOperator;
	})();
	var BufferSubscriber = (function (_super) {
	    __extends(BufferSubscriber, _super);
	    function BufferSubscriber(destination, closingNotifier) {
	        _super.call(this, destination);
	        this.buffer = [];
	        this.notifierSubscriber = null;
	        this.notifierSubscriber = new BufferClosingNotifierSubscriber(this);
	        this.add(closingNotifier._subscribe(this.notifierSubscriber));
	    }
	    BufferSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	    };
	    BufferSubscriber.prototype._complete = function () {
	        this.destination.complete();
	    };
	    BufferSubscriber.prototype.flushBuffer = function () {
	        var buffer = this.buffer;
	        this.buffer = [];
	        this.destination.next(buffer);
	        if (this.isUnsubscribed) {
	            this.notifierSubscriber.unsubscribe();
	        }
	    };
	    return BufferSubscriber;
	})(Subscriber_1.Subscriber);
	var BufferClosingNotifierSubscriber = (function (_super) {
	    __extends(BufferClosingNotifierSubscriber, _super);
	    function BufferClosingNotifierSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	    }
	    BufferClosingNotifierSubscriber.prototype._next = function (value) {
	        this.parent.flushBuffer();
	    };
	    BufferClosingNotifierSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    BufferClosingNotifierSubscriber.prototype._complete = function () {
	        this.parent.complete();
	    };
	    return BufferClosingNotifierSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var bufferCount_1 = __webpack_require__(383);
	Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	/**
	 * buffers a number of values from the source observable by `bufferSize` then emits the buffer and clears it, and starts a
	 * new buffer each `startBufferEvery` values. If `startBufferEvery` is not provided or is `null`, then new buffers are
	 * started immediately at the start of the source and when each buffer closes and is emitted.
	 * @param {number} bufferSize the maximum size of the buffer emitted.
	 * @param {number} [startBufferEvery] optional interval at which to start a new buffer. (e.g. if `startBufferEvery` is `2`,asdf then a
	 *   new buffer will be started on every other value from the source.) A new buffer is started at the beginning of the source by default.
	 * @returns {Observable<T[]>} an observable of arrays of buffered values.
	 */
	function bufferCount(bufferSize, startBufferEvery) {
	    if (startBufferEvery === void 0) { startBufferEvery = null; }
	    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
	}
	exports.bufferCount = bufferCount;
	var BufferCountOperator = (function () {
	    function BufferCountOperator(bufferSize, startBufferEvery) {
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	    }
	    BufferCountOperator.prototype.call = function (subscriber) {
	        return new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery);
	    };
	    return BufferCountOperator;
	})();
	var BufferCountSubscriber = (function (_super) {
	    __extends(BufferCountSubscriber, _super);
	    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
	        _super.call(this, destination);
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	        this.buffers = [[]];
	        this.count = 0;
	    }
	    BufferCountSubscriber.prototype._next = function (value) {
	        var count = (this.count += 1);
	        var destination = this.destination;
	        var bufferSize = this.bufferSize;
	        var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
	        var buffers = this.buffers;
	        var len = buffers.length;
	        var remove = -1;
	        if (count % startBufferEvery === 0) {
	            buffers.push([]);
	        }
	        for (var i = 0; i < len; i++) {
	            var buffer = buffers[i];
	            buffer.push(value);
	            if (buffer.length === bufferSize) {
	                remove = i;
	                destination.next(buffer);
	            }
	        }
	        if (remove !== -1) {
	            buffers.splice(remove, 1);
	        }
	    };
	    BufferCountSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	    };
	    BufferCountSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        var buffers = this.buffers;
	        while (buffers.length > 0) {
	            var buffer = buffers.shift();
	            if (buffer.length > 0) {
	                destination.next(buffer);
	            }
	        }
	        destination.complete();
	    };
	    return BufferCountSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var bufferTime_1 = __webpack_require__(385);
	Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var asap_1 = __webpack_require__(364);
	/**
	 * buffers values from the source for a specific time period. Optionally allows new buffers to be set up at an interval.
	 * @param {number} the amount of time to fill each buffer for before emitting them and clearing them.
	 * @param {number} [bufferCreationInterval] the interval at which to start new buffers.
	 * @param {Scheduler} [scheduler] (optional, defaults to `asap` scheduler) The scheduler on which to schedule the
	 *  intervals that determine buffer boundaries.
	 * @returns {Observable<T[]>} an observable of arrays of buffered values.
	 */
	function bufferTime(bufferTimeSpan, bufferCreationInterval, scheduler) {
	    if (bufferCreationInterval === void 0) { bufferCreationInterval = null; }
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
	}
	exports.bufferTime = bufferTime;
	var BufferTimeOperator = (function () {
	    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.scheduler = scheduler;
	    }
	    BufferTimeOperator.prototype.call = function (subscriber) {
	        return new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler);
	    };
	    return BufferTimeOperator;
	})();
	var BufferTimeSubscriber = (function (_super) {
	    __extends(BufferTimeSubscriber, _super);
	    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
	        _super.call(this, destination);
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.scheduler = scheduler;
	        this.buffers = [];
	        var buffer = this.openBuffer();
	        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
	            var closeState = { subscriber: this, buffer: buffer };
	            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
	        }
	        else {
	            var timeSpanOnlyState = { subscriber: this, buffer: buffer, bufferTimeSpan: bufferTimeSpan };
	            this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
	        }
	    }
	    BufferTimeSubscriber.prototype._next = function (value) {
	        var buffers = this.buffers;
	        var len = buffers.length;
	        for (var i = 0; i < len; i++) {
	            buffers[i].push(value);
	        }
	    };
	    BufferTimeSubscriber.prototype._error = function (err) {
	        this.buffers.length = 0;
	        this.destination.error(err);
	    };
	    BufferTimeSubscriber.prototype._complete = function () {
	        var buffers = this.buffers;
	        while (buffers.length > 0) {
	            this.destination.next(buffers.shift());
	        }
	        this.destination.complete();
	    };
	    BufferTimeSubscriber.prototype.openBuffer = function () {
	        var buffer = [];
	        this.buffers.push(buffer);
	        return buffer;
	    };
	    BufferTimeSubscriber.prototype.closeBuffer = function (buffer) {
	        this.destination.next(buffer);
	        var buffers = this.buffers;
	        buffers.splice(buffers.indexOf(buffer), 1);
	    };
	    return BufferTimeSubscriber;
	})(Subscriber_1.Subscriber);
	function dispatchBufferTimeSpanOnly(state) {
	    var subscriber = state.subscriber;
	    var prevBuffer = state.buffer;
	    if (prevBuffer) {
	        subscriber.closeBuffer(prevBuffer);
	    }
	    state.buffer = subscriber.openBuffer();
	    if (!subscriber.isUnsubscribed) {
	        this.schedule(state, state.bufferTimeSpan);
	    }
	}
	function dispatchBufferCreation(state) {
	    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
	    var buffer = subscriber.openBuffer();
	    var action = this;
	    if (!subscriber.isUnsubscribed) {
	        action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, buffer: buffer }));
	        action.schedule(state, bufferCreationInterval);
	    }
	}
	function dispatchBufferClose(_a) {
	    var subscriber = _a.subscriber, buffer = _a.buffer;
	    subscriber.closeBuffer(buffer);
	}
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var bufferToggle_1 = __webpack_require__(387);
	Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Subscription_1 = __webpack_require__(104);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	/**
	 * buffers values from the source by opening the buffer via signals from an observable provided to `openings`, and closing
	 * and sending the buffers when an observable returned by the `closingSelector` emits.
	 * @param {Observable<O>} openings An observable of notifications to start new buffers
	 * @param {Function} an function, that takes the value emitted by the `openings` observable and returns an Observable, which,
	 *  when it emits, signals that the associated buffer should be emitted and cleared.
	 * @returns {Observable<T[]>} an observable of arrays of buffered values.
	 */
	function bufferToggle(openings, closingSelector) {
	    return this.lift(new BufferToggleOperator(openings, closingSelector));
	}
	exports.bufferToggle = bufferToggle;
	var BufferToggleOperator = (function () {
	    function BufferToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    BufferToggleOperator.prototype.call = function (subscriber) {
	        return new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector);
	    };
	    return BufferToggleOperator;
	})();
	var BufferToggleSubscriber = (function (_super) {
	    __extends(BufferToggleSubscriber, _super);
	    function BufferToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(this.openings._subscribe(new BufferToggleOpeningsSubscriber(this)));
	    }
	    BufferToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        var len = contexts.length;
	        for (var i = 0; i < len; i++) {
	            contexts[i].buffer.push(value);
	        }
	    };
	    BufferToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        this.destination.error(err);
	    };
	    BufferToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            this.destination.next(context.buffer);
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        this.destination.complete();
	    };
	    BufferToggleSubscriber.prototype.openBuffer = function (value) {
	        var closingSelector = this.closingSelector;
	        var contexts = this.contexts;
	        var closingNotifier = tryCatch_1.tryCatch(closingSelector)(value);
	        if (closingNotifier === errorObject_1.errorObject) {
	            this._error(closingNotifier.e);
	        }
	        else {
	            var context = {
	                buffer: [],
	                subscription: new Subscription_1.Subscription()
	            };
	            contexts.push(context);
	            var subscriber = new BufferToggleClosingsSubscriber(this, context);
	            var subscription = closingNotifier._subscribe(subscriber);
	            context.subscription.add(subscription);
	            this.add(subscription);
	        }
	    };
	    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
	        var contexts = this.contexts;
	        if (contexts === null) {
	            return;
	        }
	        var buffer = context.buffer, subscription = context.subscription;
	        this.destination.next(buffer);
	        contexts.splice(contexts.indexOf(context), 1);
	        this.remove(subscription);
	        subscription.unsubscribe();
	    };
	    return BufferToggleSubscriber;
	})(Subscriber_1.Subscriber);
	var BufferToggleOpeningsSubscriber = (function (_super) {
	    __extends(BufferToggleOpeningsSubscriber, _super);
	    function BufferToggleOpeningsSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	    }
	    BufferToggleOpeningsSubscriber.prototype._next = function (value) {
	        this.parent.openBuffer(value);
	    };
	    BufferToggleOpeningsSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    BufferToggleOpeningsSubscriber.prototype._complete = function () {
	        // noop
	    };
	    return BufferToggleOpeningsSubscriber;
	})(Subscriber_1.Subscriber);
	var BufferToggleClosingsSubscriber = (function (_super) {
	    __extends(BufferToggleClosingsSubscriber, _super);
	    function BufferToggleClosingsSubscriber(parent, context) {
	        _super.call(this, null);
	        this.parent = parent;
	        this.context = context;
	    }
	    BufferToggleClosingsSubscriber.prototype._next = function () {
	        this.parent.closeBuffer(this.context);
	    };
	    BufferToggleClosingsSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    BufferToggleClosingsSubscriber.prototype._complete = function () {
	        this.parent.closeBuffer(this.context);
	    };
	    return BufferToggleClosingsSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var bufferWhen_1 = __webpack_require__(389);
	Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	/**
	 * Opens a buffer immediately, then closes the buffer when the observable returned by calling `closingSelector` emits a value.
	 * It that immediately opens a new buffer and repeats the process
	 * @param {function} a function that takes no arguments and returns an Observable that signals buffer closure
	 * @returns {Observable<T[]>} an observable of arrays of buffered values.
	 */
	function bufferWhen(closingSelector) {
	    return this.lift(new BufferWhenOperator(closingSelector));
	}
	exports.bufferWhen = bufferWhen;
	var BufferWhenOperator = (function () {
	    function BufferWhenOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    BufferWhenOperator.prototype.call = function (subscriber) {
	        return new BufferWhenSubscriber(subscriber, this.closingSelector);
	    };
	    return BufferWhenOperator;
	})();
	var BufferWhenSubscriber = (function (_super) {
	    __extends(BufferWhenSubscriber, _super);
	    function BufferWhenSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.closingSelector = closingSelector;
	        this.openBuffer();
	    }
	    BufferWhenSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferWhenSubscriber.prototype._error = function (err) {
	        this.buffer = null;
	        this.destination.error(err);
	    };
	    BufferWhenSubscriber.prototype._complete = function () {
	        var buffer = this.buffer;
	        this.destination.next(buffer);
	        this.buffer = null;
	        this.destination.complete();
	    };
	    BufferWhenSubscriber.prototype.openBuffer = function () {
	        var prevClosingNotification = this.closingNotification;
	        if (prevClosingNotification) {
	            this.remove(prevClosingNotification);
	            prevClosingNotification.unsubscribe();
	        }
	        var buffer = this.buffer;
	        if (buffer) {
	            this.destination.next(buffer);
	        }
	        this.buffer = [];
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            var err = closingNotifier.e;
	            this.buffer = null;
	            this.destination.error(err);
	        }
	        else {
	            this.add(this.closingNotification = closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this)));
	        }
	    };
	    return BufferWhenSubscriber;
	})(Subscriber_1.Subscriber);
	var BufferClosingNotifierSubscriber = (function (_super) {
	    __extends(BufferClosingNotifierSubscriber, _super);
	    function BufferClosingNotifierSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	    }
	    BufferClosingNotifierSubscriber.prototype._next = function () {
	        this.parent.openBuffer();
	    };
	    BufferClosingNotifierSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    BufferClosingNotifierSubscriber.prototype._complete = function () {
	        this.parent.openBuffer();
	    };
	    return BufferClosingNotifierSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var catch_1 = __webpack_require__(391);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 */
	function _catch(selector) {
	    var catchOperator = new CatchOperator(selector);
	    var caught = this.lift(catchOperator);
	    catchOperator.caught = caught;
	    return caught;
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber) {
	        return new CatchSubscriber(subscriber, this.selector, this.caught);
	    };
	    return CatchOperator;
	})();
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.selector = selector;
	        this.caught = caught;
	        this.lastSubscription = this;
	        this.destination.add(this);
	    }
	    CatchSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    CatchSubscriber.prototype._error = function (err) {
	        var result = tryCatch_1.tryCatch(this.selector)(err, this.caught);
	        if (result === errorObject_1.errorObject) {
	            this.destination.error(errorObject_1.errorObject.e);
	        }
	        else {
	            this.lastSubscription.unsubscribe();
	            this.lastSubscription = result.subscribe(this.destination);
	        }
	    };
	    CatchSubscriber.prototype._complete = function () {
	        this.lastSubscription.unsubscribe();
	        this.destination.complete();
	    };
	    CatchSubscriber.prototype._unsubscribe = function () {
	        this.lastSubscription.unsubscribe();
	    };
	    return CatchSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=catch.js.map

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var combineAll_1 = __webpack_require__(393);
	Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	var combineLatest_support_1 = __webpack_require__(331);
	/**
	 * Takes an Observable of Observables, and collects all observables from it. Once the outer observable
	 * completes, it subscribes to all collected observables and "combines" their values, such that:
	 *  - every time an observable emits, the returned observable emits
	 *  - when the returned observable emits, it emits all of the most recent values by:
	 *    - if a `project` function is provided, it is called with each recent value from each observable in whatever order they arrived,
	 *      and the result of the `project` function is what is emitted by the returned observable
	 *    - if there is no `project` function, an array of all of the most recent values is emitted by the returned observable.
	 * @param {function} [project] an optional function to map the most recent values from each observable into a new result. Takes each of the
	 *   most recent values from each collected observable as arguments, in order.
	 * @returns {Observable} an observable of projected results or arrays of recent values.
	 */
	function combineAll(project) {
	    return this.lift(new combineLatest_support_1.CombineLatestOperator(project));
	}
	exports.combineAll = combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var combineLatest_1 = __webpack_require__(395);
	Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	var fromArray_1 = __webpack_require__(324);
	var combineLatest_support_1 = __webpack_require__(331);
	var isArray_1 = __webpack_require__(335);
	/**
	 * Combines the values from this observable with values from observables passed as arguments. This is done by subscribing
	 * to each observable, in order, and collecting an array of each of the most recent values any time any of the observables
	 * emits, then either taking that array and passing it as arguments to an option `project` function and emitting the return
	 * value of that, or just emitting the array of recent values directly if there is no `project` function.
	 * @param {...Observable} observables the observables to combine the source with
	 * @param {function} [project] an optional function to project the values from the combined recent values into a new value for emission.
	 * @returns {Observable} an observable of other projected values from the most recent values from each observable, or an array of each of
	 * the most recent values from each observable.
	 */
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return new fromArray_1.ArrayObservable(observables).lift(new combineLatest_support_1.CombineLatestOperator(project));
	}
	exports.combineLatest = combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var concat_1 = __webpack_require__(397);
	Observable_1.Observable.prototype.concat = concat_1.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	var isScheduler_1 = __webpack_require__(330);
	var fromArray_1 = __webpack_require__(324);
	var mergeAll_support_1 = __webpack_require__(338);
	/**
	 * Joins this observable with multiple other observables by subscribing to them one at a time, starting with the source,
	 * and merging their results into the returned observable. Will wait for each observable to complete before moving
	 * on to the next.
	 * @params {...Observable} the observables to concatenate
	 * @params {Scheduler} [scheduler] an optional scheduler to schedule each observable subscription on.
	 * @returns {Observable} All values of each passed observable merged into a single observable, in order, in serial fashion.
	 */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var args = observables;
	    args.unshift(this);
	    var scheduler = null;
	    if (isScheduler_1.isScheduler(args[args.length - 1])) {
	        scheduler = args.pop();
	    }
	    return new fromArray_1.ArrayObservable(args, scheduler).lift(new mergeAll_support_1.MergeAllOperator(1));
	}
	exports.concat = concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var concatAll_1 = __webpack_require__(399);
	Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var mergeAll_support_1 = __webpack_require__(338);
	/**
	 * Joins every Observable emitted by the source (an Observable of Observables), in a serial
	 * fashion. Subscribing to each one only when the previous one has completed, and merging
	 * all of their values into the returned observable.
	 *
	 * __Warning:__ If the source Observable emits Observables quickly and endlessly, and the
	 * Observables it emits generally complete slower than the source emits, you can run into
	 * memory issues as the incoming observables collect in an unbounded buffer.
	 *
	 * @returns {Observable} an observable of values merged from the incoming observables.
	 */
	function concatAll() {
	    return this.lift(new mergeAll_support_1.MergeAllOperator(1));
	}
	exports.concatAll = concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var concatMap_1 = __webpack_require__(401);
	Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	var mergeMap_support_1 = __webpack_require__(402);
	/**
	 * Maps values from the source observable into new Observables, then merges them in a serialized fashion,
	 * waiting for each one to complete before merging the next.
	 *
	 * __Warning:__ if incoming values arrive endlessly and faster than the observables they're being mapped
	 * to can complete, it will result in memory issues as created observables amass in an unbounded buffer
	 * waiting for their turn to be subscribed to.
	 *
	 * @param {function} project a function to map incoming values into Observables to be concatenated. accepts
	 * the `value` and the `index` as arguments.
	 * @param {function} [projectResult] an optional result selector that is applied to values before they're
	 * merged into the returned observable. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @returns {Observable} an observable of values merged from the projected Observables as they were subscribed to,
	 * one at a time. Optionally, these values may have been projected from a passed `projectResult` argument.
	 */
	function concatMap(project, projectResult) {
	    return this.lift(new mergeMap_support_1.MergeMapOperator(project, projectResult, 1));
	}
	exports.concatMap = concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var subscribeToResult_1 = __webpack_require__(333);
	var OuterSubscriber_1 = __webpack_require__(332);
	var MergeMapOperator = (function () {
	    function MergeMapOperator(project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer) {
	        return new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent);
	    };
	    return MergeMapOperator;
	})();
	exports.MergeMapOperator = MergeMapOperator;
	var MergeMapSubscriber = (function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            var index = this.index++;
	            var ish = tryCatch_1.tryCatch(this.project)(value, index);
	            var destination = this.destination;
	            if (ish === errorObject_1.errorObject) {
	                destination.error(ish.e);
	            }
	            else {
	                this.active++;
	                this._innerSub(ish, value, index);
	            }
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, destination = _a.destination, resultSelector = _a.resultSelector;
	        if (resultSelector) {
	            var result = tryCatch_1.tryCatch(resultSelector)(outerValue, innerValue, outerIndex, innerIndex);
	            if (result === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                destination.next(result);
	            }
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapSubscriber;
	})(OuterSubscriber_1.OuterSubscriber);
	exports.MergeMapSubscriber = MergeMapSubscriber;
	//# sourceMappingURL=mergeMap-support.js.map

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var concatMapTo_1 = __webpack_require__(404);
	Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	var mergeMapTo_support_1 = __webpack_require__(405);
	/**
	 * Maps values from the source to a specific observable, and merges them together in a serialized fashion.
	 *
	 * @param {Observable} observable the observable to map each source value to
	 * @param {function} [projectResult] an optional result selector that is applied to values before they're
	 * merged into the returned observable. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @returns {Observable} an observable of values merged together by joining the passed observable
	 * with itself, one after the other, for each value emitted from the source.
	 */
	function concatMapTo(observable, projectResult) {
	    return this.lift(new mergeMapTo_support_1.MergeMapToOperator(observable, projectResult, 1));
	}
	exports.concatMapTo = concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var OuterSubscriber_1 = __webpack_require__(332);
	var subscribeToResult_1 = __webpack_require__(333);
	var MergeMapToOperator = (function () {
	    function MergeMapToOperator(ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapToOperator.prototype.call = function (observer) {
	        return new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent);
	    };
	    return MergeMapToOperator;
	})();
	exports.MergeMapToOperator = MergeMapToOperator;
	var MergeMapToSubscriber = (function (_super) {
	    __extends(MergeMapToSubscriber, _super);
	    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapToSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            var resultSelector = this.resultSelector;
	            var index = this.index++;
	            var ish = this.ish;
	            var destination = this.destination;
	            this.active++;
	            this._innerSub(ish, destination, resultSelector, value, index);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapToSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            var result = tryCatch_1.tryCatch(resultSelector)(outerValue, innerValue, outerIndex, innerIndex);
	            if (result === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                destination.next(result);
	            }
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    MergeMapToSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapToSubscriber;
	})(OuterSubscriber_1.OuterSubscriber);
	exports.MergeMapToSubscriber = MergeMapToSubscriber;
	//# sourceMappingURL=mergeMapTo-support.js.map

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var count_1 = __webpack_require__(407);
	Observable_1.Observable.prototype.count = count_1.count;
	//# sourceMappingURL=count.js.map

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	/**
	 * Returns an observable of a single number that represents the number of items that either:
	 * Match a provided predicate function, _or_ if a predicate is not provided, the number
	 * represents the total count of all items in the source observable. The count is emitted
	 * by the returned observable when the source observable completes.
	 * @param {function} [predicate] a boolean function to select what values are to be counted.
	 * it is provided with arguments of:
	 *   - `value`: the value from the source observable
	 *   - `index`: the "index" of the value from the source observable
	 *   - `source`: the source observable instance itself.
	 * @returns {Observable} an observable of one number that represents the count as described
	 * above
	 */
	function count(predicate) {
	    return this.lift(new CountOperator(predicate, this));
	}
	exports.count = count;
	var CountOperator = (function () {
	    function CountOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    CountOperator.prototype.call = function (subscriber) {
	        return new CountSubscriber(subscriber, this.predicate, this.source);
	    };
	    return CountOperator;
	})();
	var CountSubscriber = (function (_super) {
	    __extends(CountSubscriber, _super);
	    function CountSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.count = 0;
	        this.index = 0;
	    }
	    CountSubscriber.prototype._next = function (value) {
	        var predicate = this.predicate;
	        var passed = true;
	        if (predicate) {
	            passed = tryCatch_1.tryCatch(predicate)(value, this.index++, this.source);
	            if (passed === errorObject_1.errorObject) {
	                this.destination.error(passed.e);
	                return;
	            }
	        }
	        if (passed) {
	            this.count += 1;
	        }
	    };
	    CountSubscriber.prototype._complete = function () {
	        this.destination.next(this.count);
	        this.destination.complete();
	    };
	    return CountSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=count.js.map

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var dematerialize_1 = __webpack_require__(409);
	Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	function dematerialize() {
	    return this.lift(new DeMaterializeOperator());
	}
	exports.dematerialize = dematerialize;
	var DeMaterializeOperator = (function () {
	    function DeMaterializeOperator() {
	    }
	    DeMaterializeOperator.prototype.call = function (subscriber) {
	        return new DeMaterializeSubscriber(subscriber);
	    };
	    return DeMaterializeOperator;
	})();
	var DeMaterializeSubscriber = (function (_super) {
	    __extends(DeMaterializeSubscriber, _super);
	    function DeMaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    DeMaterializeSubscriber.prototype._next = function (value) {
	        value.observe(this.destination);
	    };
	    return DeMaterializeSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var debounce_1 = __webpack_require__(411);
	Observable_1.Observable.prototype.debounce = debounce_1.debounce;
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var fromPromise_1 = __webpack_require__(109);
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var isPromise_1 = __webpack_require__(349);
	var errorObject_1 = __webpack_require__(327);
	function debounce(durationSelector) {
	    return this.lift(new DebounceOperator(durationSelector));
	}
	exports.debounce = debounce;
	var DebounceOperator = (function () {
	    function DebounceOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    DebounceOperator.prototype.call = function (observer) {
	        return new DebounceSubscriber(observer, this.durationSelector);
	    };
	    return DebounceOperator;
	})();
	var DebounceSubscriber = (function (_super) {
	    __extends(DebounceSubscriber, _super);
	    function DebounceSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	        this.debouncedSubscription = null;
	        this.lastValue = null;
	        this._index = 0;
	    }
	    Object.defineProperty(DebounceSubscriber.prototype, "index", {
	        get: function () {
	            return this._index;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DebounceSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        var currentIndex = ++this._index;
	        var debounce = tryCatch_1.tryCatch(this.durationSelector)(value);
	        if (debounce === errorObject_1.errorObject) {
	            destination.error(errorObject_1.errorObject.e);
	        }
	        else {
	            if (isPromise_1.isPromise(debounce)) {
	                debounce = fromPromise_1.PromiseObservable.create(debounce);
	            }
	            this.lastValue = value;
	            this.clearDebounce();
	            this.add(this.debouncedSubscription = debounce._subscribe(new DurationSelectorSubscriber(this, currentIndex)));
	        }
	    };
	    DebounceSubscriber.prototype._complete = function () {
	        this.debouncedNext();
	        this.destination.complete();
	    };
	    DebounceSubscriber.prototype.debouncedNext = function () {
	        this.clearDebounce();
	        if (this.lastValue != null) {
	            this.destination.next(this.lastValue);
	            this.lastValue = null;
	        }
	    };
	    DebounceSubscriber.prototype.clearDebounce = function () {
	        var debouncedSubscription = this.debouncedSubscription;
	        if (debouncedSubscription) {
	            debouncedSubscription.unsubscribe();
	            this.remove(debouncedSubscription);
	            this.debouncedSubscription = null;
	        }
	    };
	    return DebounceSubscriber;
	})(Subscriber_1.Subscriber);
	var DurationSelectorSubscriber = (function (_super) {
	    __extends(DurationSelectorSubscriber, _super);
	    function DurationSelectorSubscriber(parent, currentIndex) {
	        _super.call(this, null);
	        this.parent = parent;
	        this.currentIndex = currentIndex;
	    }
	    DurationSelectorSubscriber.prototype.debounceNext = function () {
	        var parent = this.parent;
	        if (this.currentIndex === parent.index) {
	            parent.debouncedNext();
	            if (!this.isUnsubscribed) {
	                this.unsubscribe();
	            }
	        }
	    };
	    DurationSelectorSubscriber.prototype._next = function (unused) {
	        this.debounceNext();
	    };
	    DurationSelectorSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    DurationSelectorSubscriber.prototype._complete = function () {
	        this.debounceNext();
	    };
	    return DurationSelectorSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var debounceTime_1 = __webpack_require__(413);
	Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var asap_1 = __webpack_require__(364);
	function debounceTime(dueTime, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
	}
	exports.debounceTime = debounceTime;
	var DebounceTimeOperator = (function () {
	    function DebounceTimeOperator(dueTime, scheduler) {
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	    }
	    DebounceTimeOperator.prototype.call = function (subscriber) {
	        return new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler);
	    };
	    return DebounceTimeOperator;
	})();
	var DebounceTimeSubscriber = (function (_super) {
	    __extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
	        _super.call(this, destination);
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	        this.debouncedSubscription = null;
	        this.lastValue = null;
	    }
	    DebounceTimeSubscriber.prototype._next = function (value) {
	        this.clearDebounce();
	        this.lastValue = value;
	        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
	    };
	    DebounceTimeSubscriber.prototype._complete = function () {
	        this.debouncedNext();
	        this.destination.complete();
	    };
	    DebounceTimeSubscriber.prototype.debouncedNext = function () {
	        this.clearDebounce();
	        if (this.lastValue != null) {
	            this.destination.next(this.lastValue);
	            this.lastValue = null;
	        }
	    };
	    DebounceTimeSubscriber.prototype.clearDebounce = function () {
	        var debouncedSubscription = this.debouncedSubscription;
	        if (debouncedSubscription !== null) {
	            this.remove(debouncedSubscription);
	            debouncedSubscription.unsubscribe();
	            this.debouncedSubscription = null;
	        }
	    };
	    return DebounceTimeSubscriber;
	})(Subscriber_1.Subscriber);
	function dispatchNext(subscriber) {
	    subscriber.debouncedNext();
	}
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var defaultIfEmpty_1 = __webpack_require__(415);
	Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	function defaultIfEmpty(defaultValue) {
	    if (defaultValue === void 0) { defaultValue = null; }
	    return this.lift(new DefaultIfEmptyOperator(defaultValue));
	}
	exports.defaultIfEmpty = defaultIfEmpty;
	var DefaultIfEmptyOperator = (function () {
	    function DefaultIfEmptyOperator(defaultValue) {
	        this.defaultValue = defaultValue;
	    }
	    DefaultIfEmptyOperator.prototype.call = function (subscriber) {
	        return new DefaultIfEmptySubscriber(subscriber, this.defaultValue);
	    };
	    return DefaultIfEmptyOperator;
	})();
	var DefaultIfEmptySubscriber = (function (_super) {
	    __extends(DefaultIfEmptySubscriber, _super);
	    function DefaultIfEmptySubscriber(destination, defaultValue) {
	        _super.call(this, destination);
	        this.defaultValue = defaultValue;
	        this.isEmpty = true;
	    }
	    DefaultIfEmptySubscriber.prototype._next = function (value) {
	        this.isEmpty = false;
	        this.destination.next(value);
	    };
	    DefaultIfEmptySubscriber.prototype._complete = function () {
	        if (this.isEmpty) {
	            this.destination.next(this.defaultValue);
	        }
	        this.destination.complete();
	    };
	    return DefaultIfEmptySubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var delay_1 = __webpack_require__(417);
	Observable_1.Observable.prototype.delay = delay_1.delay;
	//# sourceMappingURL=delay.js.map

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Notification_1 = __webpack_require__(354);
	var queue_1 = __webpack_require__(110);
	var isDate_1 = __webpack_require__(376);
	function delay(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = queue_1.queue; }
	    var absoluteDelay = isDate_1.isDate(delay);
	    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : delay;
	    return this.lift(new DelayOperator(delayFor, scheduler));
	}
	exports.delay = delay;
	var DelayOperator = (function () {
	    function DelayOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    DelayOperator.prototype.call = function (subscriber) {
	        return new DelaySubscriber(subscriber, this.delay, this.scheduler);
	    };
	    return DelayOperator;
	})();
	var DelaySubscriber = (function (_super) {
	    __extends(DelaySubscriber, _super);
	    function DelaySubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.queue = [];
	        this.active = false;
	        this.errored = false;
	    }
	    DelaySubscriber.dispatch = function (state) {
	        var source = state.source;
	        var queue = source.queue;
	        var scheduler = state.scheduler;
	        var destination = state.destination;
	        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
	            queue.shift().notification.observe(destination);
	        }
	        if (queue.length > 0) {
	            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
	            this.schedule(state, delay_1);
	        }
	        else {
	            source.active = false;
	        }
	    };
	    DelaySubscriber.prototype._schedule = function (scheduler) {
	        this.active = true;
	        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
	            source: this, destination: this.destination, scheduler: scheduler
	        }));
	    };
	    DelaySubscriber.prototype.scheduleNotification = function (notification) {
	        if (this.errored === true) {
	            return;
	        }
	        var scheduler = this.scheduler;
	        var message = new DelayMessage(scheduler.now() + this.delay, notification);
	        this.queue.push(message);
	        if (this.active === false) {
	            this._schedule(scheduler);
	        }
	    };
	    DelaySubscriber.prototype._next = function (value) {
	        this.scheduleNotification(Notification_1.Notification.createNext(value));
	    };
	    DelaySubscriber.prototype._error = function (err) {
	        this.errored = true;
	        this.queue = [];
	        this.destination.error(err);
	    };
	    DelaySubscriber.prototype._complete = function () {
	        this.scheduleNotification(Notification_1.Notification.createComplete());
	    };
	    return DelaySubscriber;
	})(Subscriber_1.Subscriber);
	var DelayMessage = (function () {
	    function DelayMessage(time, notification) {
	        this.time = time;
	        this.notification = notification;
	    }
	    return DelayMessage;
	})();
	//# sourceMappingURL=delay.js.map

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var distinctUntilChanged_1 = __webpack_require__(419);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	function distinctUntilChanged(compare) {
	    return this.lift(new DistinctUntilChangedOperator(compare));
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = (function () {
	    function DistinctUntilChangedOperator(compare) {
	        this.compare = compare;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber) {
	        return new DistinctUntilChangedSubscriber(subscriber, this.compare);
	    };
	    return DistinctUntilChangedOperator;
	})();
	var DistinctUntilChangedSubscriber = (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var result = false;
	        if (this.hasValue) {
	            result = tryCatch_1.tryCatch(this.compare)(this.value, value);
	            if (result === errorObject_1.errorObject) {
	                this.destination.error(errorObject_1.errorObject.e);
	                return;
	            }
	        }
	        else {
	            this.hasValue = true;
	        }
	        if (Boolean(result) === false) {
	            this.value = value;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var do_1 = __webpack_require__(421);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var noop_1 = __webpack_require__(101);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	function _do(nextOrObserver, error, complete) {
	    var next;
	    if (nextOrObserver && typeof nextOrObserver === 'object') {
	        next = nextOrObserver.next;
	        error = nextOrObserver.error;
	        complete = nextOrObserver.complete;
	    }
	    else {
	        next = nextOrObserver;
	    }
	    return this.lift(new DoOperator(next || noop_1.noop, error || noop_1.noop, complete || noop_1.noop));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(next, error, complete) {
	        this.next = next;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber) {
	        return new DoSubscriber(subscriber, this.next, this.error, this.complete);
	    };
	    return DoOperator;
	})();
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, next, error, complete) {
	        _super.call(this, destination);
	        this.__next = next;
	        this.__error = error;
	        this.__complete = complete;
	    }
	    DoSubscriber.prototype._next = function (x) {
	        var result = tryCatch_1.tryCatch(this.__next)(x);
	        if (result === errorObject_1.errorObject) {
	            this.destination.error(errorObject_1.errorObject.e);
	        }
	        else {
	            this.destination.next(x);
	        }
	    };
	    DoSubscriber.prototype._error = function (e) {
	        var result = tryCatch_1.tryCatch(this.__error)(e);
	        if (result === errorObject_1.errorObject) {
	            this.destination.error(errorObject_1.errorObject.e);
	        }
	        else {
	            this.destination.error(e);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var result = tryCatch_1.tryCatch(this.__complete)();
	        if (result === errorObject_1.errorObject) {
	            this.destination.error(errorObject_1.errorObject.e);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=do.js.map

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var expand_1 = __webpack_require__(423);
	Observable_1.Observable.prototype.expand = expand_1.expand;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	var expand_support_1 = __webpack_require__(424);
	function expand(project, concurrent, scheduler) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (scheduler === void 0) { scheduler = undefined; }
	    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
	    return this.lift(new expand_support_1.ExpandOperator(project, concurrent, scheduler));
	}
	exports.expand = expand;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var OuterSubscriber_1 = __webpack_require__(332);
	var subscribeToResult_1 = __webpack_require__(333);
	var ExpandOperator = (function () {
	    function ExpandOperator(project, concurrent, scheduler) {
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	    }
	    ExpandOperator.prototype.call = function (subscriber) {
	        return new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler);
	    };
	    return ExpandOperator;
	})();
	exports.ExpandOperator = ExpandOperator;
	var ExpandSubscriber = (function (_super) {
	    __extends(ExpandSubscriber, _super);
	    function ExpandSubscriber(destination, project, concurrent, scheduler) {
	        _super.call(this, destination);
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this.active = 0;
	        this.hasCompleted = false;
	        if (concurrent < Number.POSITIVE_INFINITY) {
	            this.buffer = [];
	        }
	    }
	    ExpandSubscriber.dispatch = function (_a) {
	        var subscriber = _a.subscriber, result = _a.result, value = _a.value, index = _a.index;
	        subscriber.subscribeToProjection(result, value, index);
	    };
	    ExpandSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (destination.isUnsubscribed) {
	            this._complete();
	            return;
	        }
	        var index = this.index++;
	        if (this.active < this.concurrent) {
	            destination.next(value);
	            var result = tryCatch_1.tryCatch(this.project)(value, index);
	            if (result === errorObject_1.errorObject) {
	                destination.error(result.e);
	            }
	            else if (!this.scheduler) {
	                this.subscribeToProjection(result, value, index);
	            }
	            else {
	                var state = { subscriber: this, result: result, value: value, index: index };
	                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
	            }
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
	        if (result._isScalar) {
	            this._next(result.value);
	        }
	        else {
	            this.active++;
	            this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
	        }
	    };
	    ExpandSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer && buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        this._next(innerValue);
	    };
	    return ExpandSubscriber;
	})(OuterSubscriber_1.OuterSubscriber);
	exports.ExpandSubscriber = ExpandSubscriber;
	//# sourceMappingURL=expand-support.js.map

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var filter_1 = __webpack_require__(426);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	/**
	 * Similar to the well-known `Array.prototype.filter` method, this operator filters values down to a set
	 * allowed by a `select` function
	 *
	 * @param {Function} select a function that is used to select the resulting values
	 *  if it returns `true`, the value is emitted, if `false` the value is not passed to the resulting observable
	 * @param {any} [thisArg] an optional argument to determine the value of `this` in the `select` function
	 * @returns {Observable} an observable of values allowed by the select function
	 */
	function filter(select, thisArg) {
	    return this.lift(new FilterOperator(select, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(select, thisArg) {
	        this.select = select;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber) {
	        return new FilterSubscriber(subscriber, this.select, this.thisArg);
	    };
	    return FilterOperator;
	})();
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, select, thisArg) {
	        _super.call(this, destination);
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.select = select;
	    }
	    FilterSubscriber.prototype._next = function (x) {
	        var result = tryCatch_1.tryCatch(this.select).call(this.thisArg || this, x, this.count++);
	        if (result === errorObject_1.errorObject) {
	            this.destination.error(errorObject_1.errorObject.e);
	        }
	        else if (Boolean(result)) {
	            this.destination.next(x);
	        }
	    };
	    return FilterSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=filter.js.map

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var finally_1 = __webpack_require__(428);
	Observable_1.Observable.prototype.finally = finally_1._finally;
	//# sourceMappingURL=finally.js.map

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Subscription_1 = __webpack_require__(104);
	function _finally(finallySelector) {
	    return this.lift(new FinallyOperator(finallySelector));
	}
	exports._finally = _finally;
	var FinallyOperator = (function () {
	    function FinallyOperator(finallySelector) {
	        this.finallySelector = finallySelector;
	    }
	    FinallyOperator.prototype.call = function (subscriber) {
	        return new FinallySubscriber(subscriber, this.finallySelector);
	    };
	    return FinallyOperator;
	})();
	var FinallySubscriber = (function (_super) {
	    __extends(FinallySubscriber, _super);
	    function FinallySubscriber(destination, finallySelector) {
	        _super.call(this, destination);
	        this.add(new Subscription_1.Subscription(finallySelector));
	    }
	    return FinallySubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=finally.js.map

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var first_1 = __webpack_require__(430);
	Observable_1.Observable.prototype.first = first_1.first;
	//# sourceMappingURL=first.js.map

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var EmptyError_1 = __webpack_require__(431);
	function first(predicate, resultSelector, defaultValue) {
	    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.first = first;
	var FirstOperator = (function () {
	    function FirstOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    FirstOperator.prototype.call = function (observer) {
	        return new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source);
	    };
	    return FirstOperator;
	})();
	var FirstSubscriber = (function (_super) {
	    __extends(FirstSubscriber, _super);
	    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.index = 0;
	        this.hasCompleted = false;
	    }
	    FirstSubscriber.prototype._next = function (value) {
	        var _a = this, destination = _a.destination, predicate = _a.predicate, resultSelector = _a.resultSelector;
	        var index = this.index++;
	        var passed = true;
	        if (predicate) {
	            passed = tryCatch_1.tryCatch(predicate)(value, index, this.source);
	            if (passed === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	                return;
	            }
	        }
	        if (passed) {
	            if (resultSelector) {
	                var result = tryCatch_1.tryCatch(resultSelector)(value, index);
	                if (result === errorObject_1.errorObject) {
	                    destination.error(errorObject_1.errorObject.e);
	                    return;
	                }
	                destination.next(result);
	            }
	            else {
	                destination.next(value);
	            }
	            destination.complete();
	            this.hasCompleted = true;
	        }
	    };
	    FirstSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
	            destination.next(this.defaultValue);
	            destination.complete();
	        }
	        else if (!this.hasCompleted) {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return FirstSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=first.js.map

/***/ },
/* 431 */
/***/ function(module, exports) {

	var EmptyError = (function () {
	    function EmptyError() {
	        this.name = 'EmptyError';
	        this.message = 'no elements in sequence';
	    }
	    return EmptyError;
	})();
	exports.EmptyError = EmptyError;
	//# sourceMappingURL=EmptyError.js.map

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var groupBy_1 = __webpack_require__(433);
	Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Observable_1 = __webpack_require__(99);
	var Subject_1 = __webpack_require__(98);
	var Map_1 = __webpack_require__(434);
	var FastMap_1 = __webpack_require__(436);
	var groupBy_support_1 = __webpack_require__(437);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	function groupBy(keySelector, elementSelector, durationSelector) {
	    return new GroupByObservable(this, keySelector, elementSelector, durationSelector);
	}
	exports.groupBy = groupBy;
	var GroupByObservable = (function (_super) {
	    __extends(GroupByObservable, _super);
	    function GroupByObservable(source, keySelector, elementSelector, durationSelector) {
	        _super.call(this);
	        this.source = source;
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	    }
	    GroupByObservable.prototype._subscribe = function (subscriber) {
	        var refCountSubscription = new groupBy_support_1.RefCountSubscription();
	        var groupBySubscriber = new GroupBySubscriber(subscriber, refCountSubscription, this.keySelector, this.elementSelector, this.durationSelector);
	        refCountSubscription.setPrimary(this.source.subscribe(groupBySubscriber));
	        return refCountSubscription;
	    };
	    return GroupByObservable;
	})(Observable_1.Observable);
	exports.GroupByObservable = GroupByObservable;
	var GroupBySubscriber = (function (_super) {
	    __extends(GroupBySubscriber, _super);
	    function GroupBySubscriber(destination, refCountSubscription, keySelector, elementSelector, durationSelector) {
	        _super.call(this);
	        this.refCountSubscription = refCountSubscription;
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	        this.groups = null;
	        this.destination = destination;
	        this.add(destination);
	    }
	    GroupBySubscriber.prototype._next = function (x) {
	        var key = tryCatch_1.tryCatch(this.keySelector)(x);
	        if (key === errorObject_1.errorObject) {
	            this.error(key.e);
	        }
	        else {
	            var groups = this.groups;
	            var elementSelector = this.elementSelector;
	            var durationSelector = this.durationSelector;
	            if (!groups) {
	                groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
	            }
	            var group = groups.get(key);
	            if (!group) {
	                groups.set(key, group = new Subject_1.Subject());
	                var groupedObservable = new groupBy_support_1.GroupedObservable(key, group, this.refCountSubscription);
	                if (durationSelector) {
	                    var duration = tryCatch_1.tryCatch(durationSelector)(new groupBy_support_1.GroupedObservable(key, group));
	                    if (duration === errorObject_1.errorObject) {
	                        this.error(duration.e);
	                    }
	                    else {
	                        this.add(duration._subscribe(new GroupDurationSubscriber(key, group, this)));
	                    }
	                }
	                this.destination.next(groupedObservable);
	            }
	            if (elementSelector) {
	                var value = tryCatch_1.tryCatch(elementSelector)(x);
	                if (value === errorObject_1.errorObject) {
	                    this.error(value.e);
	                }
	                else {
	                    group.next(value);
	                }
	            }
	            else {
	                group.next(x);
	            }
	        }
	    };
	    GroupBySubscriber.prototype._error = function (err) {
	        var _this = this;
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.error(err);
	                _this.removeGroup(key);
	            });
	        }
	        this.destination.error(err);
	    };
	    GroupBySubscriber.prototype._complete = function () {
	        var _this = this;
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.complete();
	                _this.removeGroup(group);
	            });
	        }
	        this.destination.complete();
	    };
	    GroupBySubscriber.prototype.removeGroup = function (key) {
	        this.groups.delete(key);
	    };
	    return GroupBySubscriber;
	})(Subscriber_1.Subscriber);
	var GroupDurationSubscriber = (function (_super) {
	    __extends(GroupDurationSubscriber, _super);
	    function GroupDurationSubscriber(key, group, parent) {
	        _super.call(this, null);
	        this.key = key;
	        this.group = group;
	        this.parent = parent;
	    }
	    GroupDurationSubscriber.prototype._next = function (value) {
	        this.group.complete();
	        this.parent.removeGroup(this.key);
	    };
	    GroupDurationSubscriber.prototype._error = function (err) {
	        this.group.error(err);
	        this.parent.removeGroup(this.key);
	    };
	    GroupDurationSubscriber.prototype._complete = function () {
	        this.group.complete();
	        this.parent.removeGroup(this.key);
	    };
	    return GroupDurationSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	var root_1 = __webpack_require__(107);
	var MapPolyfill_1 = __webpack_require__(435);
	exports.Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })();
	//# sourceMappingURL=Map.js.map

/***/ },
/* 435 */
/***/ function(module, exports) {

	var MapPolyfill = (function () {
	    function MapPolyfill() {
	        this.size = 0;
	        this._values = [];
	        this._keys = [];
	    }
	    MapPolyfill.prototype.get = function (key) {
	        var i = this._keys.indexOf(key);
	        return i === -1 ? undefined : this._values[i];
	    };
	    MapPolyfill.prototype.set = function (key, value) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            this._keys.push(key);
	            this._values.push(value);
	            this.size++;
	        }
	        else {
	            this._values[i] = value;
	        }
	        return this;
	    };
	    MapPolyfill.prototype.delete = function (key) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            return false;
	        }
	        this._values.splice(i, 1);
	        this._keys.splice(i, 1);
	        this.size--;
	        return true;
	    };
	    MapPolyfill.prototype.forEach = function (cb, thisArg) {
	        for (var i = 0; i < this.size; i++) {
	            cb.call(thisArg, this._values[i], this._keys[i]);
	        }
	    };
	    return MapPolyfill;
	})();
	exports.MapPolyfill = MapPolyfill;
	//# sourceMappingURL=MapPolyfill.js.map

/***/ },
/* 436 */
/***/ function(module, exports) {

	var FastMap = (function () {
	    function FastMap() {
	        this.values = {};
	    }
	    FastMap.prototype.delete = function (key) {
	        this.values[key] = null;
	        return true;
	    };
	    FastMap.prototype.set = function (key, value) {
	        this.values[key] = value;
	        return this;
	    };
	    FastMap.prototype.get = function (key) {
	        return this.values[key];
	    };
	    FastMap.prototype.forEach = function (cb, thisArg) {
	        var values = this.values;
	        for (var key in values) {
	            if (values.hasOwnProperty(key) && values[key] !== null) {
	                cb.call(thisArg, values[key], key);
	            }
	        }
	    };
	    FastMap.prototype.clear = function () {
	        this.values = {};
	    };
	    return FastMap;
	})();
	exports.FastMap = FastMap;
	//# sourceMappingURL=FastMap.js.map

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(104);
	var Observable_1 = __webpack_require__(99);
	var RefCountSubscription = (function (_super) {
	    __extends(RefCountSubscription, _super);
	    function RefCountSubscription() {
	        _super.call(this);
	        this.attemptedToUnsubscribePrimary = false;
	        this.count = 0;
	    }
	    RefCountSubscription.prototype.setPrimary = function (subscription) {
	        this.primary = subscription;
	    };
	    RefCountSubscription.prototype.unsubscribe = function () {
	        if (!this.isUnsubscribed && !this.attemptedToUnsubscribePrimary) {
	            this.attemptedToUnsubscribePrimary = true;
	            if (this.count === 0) {
	                _super.prototype.unsubscribe.call(this);
	                this.primary.unsubscribe();
	            }
	        }
	    };
	    return RefCountSubscription;
	})(Subscription_1.Subscription);
	exports.RefCountSubscription = RefCountSubscription;
	var GroupedObservable = (function (_super) {
	    __extends(GroupedObservable, _super);
	    function GroupedObservable(key, groupSubject, refCountSubscription) {
	        _super.call(this);
	        this.key = key;
	        this.groupSubject = groupSubject;
	        this.refCountSubscription = refCountSubscription;
	    }
	    GroupedObservable.prototype._subscribe = function (subscriber) {
	        var subscription = new Subscription_1.Subscription();
	        if (this.refCountSubscription && !this.refCountSubscription.isUnsubscribed) {
	            subscription.add(new InnerRefCountSubscription(this.refCountSubscription));
	        }
	        subscription.add(this.groupSubject.subscribe(subscriber));
	        return subscription;
	    };
	    return GroupedObservable;
	})(Observable_1.Observable);
	exports.GroupedObservable = GroupedObservable;
	var InnerRefCountSubscription = (function (_super) {
	    __extends(InnerRefCountSubscription, _super);
	    function InnerRefCountSubscription(parent) {
	        _super.call(this);
	        this.parent = parent;
	        parent.count++;
	    }
	    InnerRefCountSubscription.prototype.unsubscribe = function () {
	        if (!this.parent.isUnsubscribed && !this.isUnsubscribed) {
	            _super.prototype.unsubscribe.call(this);
	            this.parent.count--;
	            if (this.parent.count === 0 && this.parent.attemptedToUnsubscribePrimary) {
	                this.parent.unsubscribe();
	                this.parent.primary.unsubscribe();
	            }
	        }
	    };
	    return InnerRefCountSubscription;
	})(Subscription_1.Subscription);
	exports.InnerRefCountSubscription = InnerRefCountSubscription;
	//# sourceMappingURL=groupBy-support.js.map

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var ignoreElements_1 = __webpack_require__(439);
	Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var noop_1 = __webpack_require__(101);
	function ignoreElements() {
	    return this.lift(new IgnoreElementsOperator());
	}
	exports.ignoreElements = ignoreElements;
	;
	var IgnoreElementsOperator = (function () {
	    function IgnoreElementsOperator() {
	    }
	    IgnoreElementsOperator.prototype.call = function (subscriber) {
	        return new IgnoreElementsSubscriber(subscriber);
	    };
	    return IgnoreElementsOperator;
	})();
	var IgnoreElementsSubscriber = (function (_super) {
	    __extends(IgnoreElementsSubscriber, _super);
	    function IgnoreElementsSubscriber() {
	        _super.apply(this, arguments);
	    }
	    IgnoreElementsSubscriber.prototype._next = function (unused) {
	        noop_1.noop();
	    };
	    return IgnoreElementsSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var every_1 = __webpack_require__(441);
	Observable_1.Observable.prototype.every = every_1.every;
	//# sourceMappingURL=every.js.map

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ScalarObservable_1 = __webpack_require__(325);
	var fromArray_1 = __webpack_require__(324);
	var throw_1 = __webpack_require__(328);
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	function every(predicate, thisArg) {
	    var source = this;
	    var result;
	    if (source._isScalar) {
	        result = tryCatch_1.tryCatch(predicate).call(thisArg || this, source.value, 0, source);
	        if (result === errorObject_1.errorObject) {
	            return new throw_1.ErrorObservable(errorObject_1.errorObject.e, source.scheduler);
	        }
	        else {
	            return new ScalarObservable_1.ScalarObservable(result, source.scheduler);
	        }
	    }
	    if (source instanceof fromArray_1.ArrayObservable) {
	        var array = source.array;
	        var result_1 = tryCatch_1.tryCatch(function (array, predicate, thisArg) { return array.every(predicate, thisArg); })(array, predicate, thisArg);
	        if (result_1 === errorObject_1.errorObject) {
	            return new throw_1.ErrorObservable(errorObject_1.errorObject.e, source.scheduler);
	        }
	        else {
	            return new ScalarObservable_1.ScalarObservable(result_1, source.scheduler);
	        }
	    }
	    return source.lift(new EveryOperator(predicate, thisArg, source));
	}
	exports.every = every;
	var EveryOperator = (function () {
	    function EveryOperator(predicate, thisArg, source) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	    }
	    EveryOperator.prototype.call = function (observer) {
	        return new EverySubscriber(observer, this.predicate, this.thisArg, this.source);
	    };
	    return EveryOperator;
	})();
	var EverySubscriber = (function (_super) {
	    __extends(EverySubscriber, _super);
	    function EverySubscriber(destination, predicate, thisArg, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	        this.index = 0;
	    }
	    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
	        this.destination.next(everyValueMatch);
	        this.destination.complete();
	    };
	    EverySubscriber.prototype._next = function (value) {
	        var result = tryCatch_1.tryCatch(this.predicate).call(this.thisArg || this, value, this.index++, this.source);
	        if (result === errorObject_1.errorObject) {
	            this.destination.error(result.e);
	        }
	        else if (!result) {
	            this.notifyComplete(false);
	        }
	    };
	    EverySubscriber.prototype._complete = function () {
	        this.notifyComplete(true);
	    };
	    return EverySubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=every.js.map

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var last_1 = __webpack_require__(443);
	Observable_1.Observable.prototype.last = last_1.last;
	//# sourceMappingURL=last.js.map

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var EmptyError_1 = __webpack_require__(431);
	function last(predicate, resultSelector, defaultValue) {
	    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.last = last;
	var LastOperator = (function () {
	    function LastOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    LastOperator.prototype.call = function (observer) {
	        return new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source);
	    };
	    return LastOperator;
	})();
	var LastSubscriber = (function (_super) {
	    __extends(LastSubscriber, _super);
	    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.hasValue = false;
	        this.index = 0;
	        if (typeof defaultValue !== 'undefined') {
	            this.lastValue = defaultValue;
	            this.hasValue = true;
	        }
	    }
	    LastSubscriber.prototype._next = function (value) {
	        var _a = this, predicate = _a.predicate, resultSelector = _a.resultSelector, destination = _a.destination;
	        var index = this.index++;
	        if (predicate) {
	            var found = tryCatch_1.tryCatch(predicate)(value, index, this.source);
	            if (found === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	                return;
	            }
	            if (found) {
	                if (resultSelector) {
	                    var result = tryCatch_1.tryCatch(resultSelector)(value, index);
	                    if (result === errorObject_1.errorObject) {
	                        destination.error(errorObject_1.errorObject.e);
	                        return;
	                    }
	                    this.lastValue = result;
	                }
	                else {
	                    this.lastValue = value;
	                }
	                this.hasValue = true;
	            }
	        }
	        else {
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.hasValue) {
	            destination.next(this.lastValue);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return LastSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=last.js.map

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var map_1 = __webpack_require__(445);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	/**
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the returned observable
	 *
	 * @param {Function} project the function to create projection
	 * @param {any} [thisArg] an optional argument to define what `this` is in the project function
	 * @returns {Observable} a observable of projected values
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber) {
	        return new MapSubscriber(subscriber, this.project, this.thisArg);
	    };
	    return MapOperator;
	})();
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.thisArg = thisArg;
	        this.count = 0;
	    }
	    MapSubscriber.prototype._next = function (x) {
	        var result = tryCatch_1.tryCatch(this.project).call(this.thisArg || this, x, this.count++);
	        if (result === errorObject_1.errorObject) {
	            this.error(errorObject_1.errorObject.e);
	        }
	        else {
	            this.destination.next(result);
	        }
	    };
	    return MapSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=map.js.map

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var mapTo_1 = __webpack_require__(447);
	Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	/**
	 * Maps every value to the same value every time.
	 * @param {any} value the value to map each incoming value to
	 * @returns {Observable} an observable of the passed value that emits everytime the source does
	 */
	function mapTo(value) {
	    return this.lift(new MapToOperator(value));
	}
	exports.mapTo = mapTo;
	var MapToOperator = (function () {
	    function MapToOperator(value) {
	        this.value = value;
	    }
	    MapToOperator.prototype.call = function (subscriber) {
	        return new MapToSubscriber(subscriber, this.value);
	    };
	    return MapToOperator;
	})();
	var MapToSubscriber = (function (_super) {
	    __extends(MapToSubscriber, _super);
	    function MapToSubscriber(destination, value) {
	        _super.call(this, destination);
	        this.value = value;
	    }
	    MapToSubscriber.prototype._next = function (x) {
	        this.destination.next(this.value);
	    };
	    return MapToSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var materialize_1 = __webpack_require__(449);
	Observable_1.Observable.prototype.materialize = materialize_1.materialize;
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Notification_1 = __webpack_require__(354);
	function materialize() {
	    return this.lift(new MaterializeOperator());
	}
	exports.materialize = materialize;
	var MaterializeOperator = (function () {
	    function MaterializeOperator() {
	    }
	    MaterializeOperator.prototype.call = function (subscriber) {
	        return new MaterializeSubscriber(subscriber);
	    };
	    return MaterializeOperator;
	})();
	var MaterializeSubscriber = (function (_super) {
	    __extends(MaterializeSubscriber, _super);
	    function MaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    MaterializeSubscriber.prototype._next = function (value) {
	        this.destination.next(Notification_1.Notification.createNext(value));
	    };
	    MaterializeSubscriber.prototype._error = function (err) {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createError(err));
	        destination.complete();
	    };
	    MaterializeSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createComplete());
	        destination.complete();
	    };
	    return MaterializeSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var merge_1 = __webpack_require__(451);
	Observable_1.Observable.prototype.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	var merge_static_1 = __webpack_require__(340);
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return merge_static_1.merge.apply(this, observables);
	}
	exports.merge = merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var mergeAll_1 = __webpack_require__(453);
	Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	var mergeAll_support_1 = __webpack_require__(338);
	function mergeAll(concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new mergeAll_support_1.MergeAllOperator(concurrent));
	}
	exports.mergeAll = mergeAll;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var mergeMap_1 = __webpack_require__(455);
	Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
	Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	var mergeMap_support_1 = __webpack_require__(402);
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new mergeMap_support_1.MergeMapOperator(project, resultSelector, concurrent));
	}
	exports.mergeMap = mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var mergeMapTo_1 = __webpack_require__(457);
	Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	var mergeMapTo_support_1 = __webpack_require__(405);
	function mergeMapTo(observable, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new mergeMapTo_support_1.MergeMapToOperator(observable, resultSelector, concurrent));
	}
	exports.mergeMapTo = mergeMapTo;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var multicast_1 = __webpack_require__(459);
	Observable_1.Observable.prototype.multicast = multicast_1.multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	var ConnectableObservable_1 = __webpack_require__(460);
	function multicast(subjectOrSubjectFactory) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var Subscription_1 = __webpack_require__(104);
	var Subscriber_1 = __webpack_require__(100);
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this._getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype._getSubject = function () {
	        var subject = this.subject;
	        if (subject && !subject.isUnsubscribed) {
	            return subject;
	        }
	        return (this.subject = this.subjectFactory());
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var source = this.source;
	        var subscription = this.subscription;
	        if (subscription && !subscription.isUnsubscribed) {
	            return subscription;
	        }
	        subscription = source.subscribe(this._getSubject());
	        subscription.add(new ConnectableSubscription(this));
	        return (this.subscription = subscription);
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return new RefCountObservable(this);
	    };
	    return ConnectableObservable;
	})(Observable_1.Observable);
	exports.ConnectableObservable = ConnectableObservable;
	var ConnectableSubscription = (function (_super) {
	    __extends(ConnectableSubscription, _super);
	    function ConnectableSubscription(connectable) {
	        _super.call(this);
	        this.connectable = connectable;
	    }
	    ConnectableSubscription.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        connectable.subject = void 0;
	        connectable.subscription = void 0;
	        this.connectable = void 0;
	    };
	    return ConnectableSubscription;
	})(Subscription_1.Subscription);
	var RefCountObservable = (function (_super) {
	    __extends(RefCountObservable, _super);
	    function RefCountObservable(connectable, refCount) {
	        if (refCount === void 0) { refCount = 0; }
	        _super.call(this);
	        this.connectable = connectable;
	        this.refCount = refCount;
	    }
	    RefCountObservable.prototype._subscribe = function (subscriber) {
	        var connectable = this.connectable;
	        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
	        var subscription = connectable.subscribe(refCountSubscriber);
	        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
	            refCountSubscriber.connection = this.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountObservable;
	})(Observable_1.Observable);
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, refCountObservable) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.refCountObservable = refCountObservable;
	        this.connection = refCountObservable.connection;
	        destination.add(this);
	    }
	    RefCountSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    RefCountSubscriber.prototype._error = function (err) {
	        this._resetConnectable();
	        this.destination.error(err);
	    };
	    RefCountSubscriber.prototype._complete = function () {
	        this._resetConnectable();
	        this.destination.complete();
	    };
	    RefCountSubscriber.prototype._resetConnectable = function () {
	        var observable = this.refCountObservable;
	        var obsConnection = observable.connection;
	        var subConnection = this.connection;
	        if (subConnection && subConnection === obsConnection) {
	            observable.refCount = 0;
	            obsConnection.unsubscribe();
	            observable.connection = void 0;
	            this.unsubscribe();
	        }
	    };
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var observable = this.refCountObservable;
	        if (observable.refCount === 0) {
	            return;
	        }
	        if (--observable.refCount === 0) {
	            var obsConnection = observable.connection;
	            var subConnection = this.connection;
	            if (subConnection && subConnection === obsConnection) {
	                obsConnection.unsubscribe();
	                observable.connection = void 0;
	            }
	        }
	    };
	    return RefCountSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var observeOn_1 = __webpack_require__(462);
	Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	var observeOn_support_1 = __webpack_require__(353);
	function observeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return this.lift(new observeOn_support_1.ObserveOnOperator(scheduler, delay));
	}
	exports.observeOn = observeOn;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var partition_1 = __webpack_require__(464);
	Observable_1.Observable.prototype.partition = partition_1.partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	var not_1 = __webpack_require__(465);
	var filter_1 = __webpack_require__(426);
	function partition(predicate, thisArg) {
	    return [
	        filter_1.filter.call(this, predicate),
	        filter_1.filter.call(this, not_1.not(predicate, thisArg))
	    ];
	}
	exports.partition = partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 465 */
/***/ function(module, exports) {

	function not(pred, thisArg) {
	    function notPred() {
	        return !(notPred.pred.apply(notPred.thisArg, arguments));
	    }
	    notPred.pred = pred;
	    notPred.thisArg = thisArg;
	    return notPred;
	}
	exports.not = not;
	//# sourceMappingURL=not.js.map

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var publish_1 = __webpack_require__(467);
	Observable_1.Observable.prototype.publish = publish_1.publish;
	//# sourceMappingURL=publish.js.map

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	var Subject_1 = __webpack_require__(98);
	var multicast_1 = __webpack_require__(459);
	function publish() {
	    return multicast_1.multicast.call(this, new Subject_1.Subject());
	}
	exports.publish = publish;
	//# sourceMappingURL=publish.js.map

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var publishBehavior_1 = __webpack_require__(469);
	Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	var BehaviorSubject_1 = __webpack_require__(470);
	var multicast_1 = __webpack_require__(459);
	function publishBehavior(value) {
	    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
	}
	exports.publishBehavior = publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(98);
	var throwError_1 = __webpack_require__(102);
	var ObjectUnsubscribedError_1 = __webpack_require__(471);
	var BehaviorSubject = (function (_super) {
	    __extends(BehaviorSubject, _super);
	    function BehaviorSubject(_value) {
	        _super.call(this);
	        this._value = _value;
	        this._hasError = false;
	    }
	    BehaviorSubject.prototype.getValue = function () {
	        if (this._hasError) {
	            throwError_1.throwError(this._err);
	        }
	        else if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	        else {
	            return this._value;
	        }
	    };
	    Object.defineProperty(BehaviorSubject.prototype, "value", {
	        get: function () {
	            return this.getValue();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BehaviorSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (!subscription) {
	            return;
	        }
	        else if (!subscription.isUnsubscribed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    BehaviorSubject.prototype._next = function (value) {
	        _super.prototype._next.call(this, this._value = value);
	    };
	    BehaviorSubject.prototype._error = function (err) {
	        this._hasError = true;
	        _super.prototype._error.call(this, this._err = err);
	    };
	    return BehaviorSubject;
	})(Subject_1.Subject);
	exports.BehaviorSubject = BehaviorSubject;
	//# sourceMappingURL=BehaviorSubject.js.map

/***/ },
/* 471 */
/***/ function(module, exports) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * an error thrown when an action is invalid because the object
	 * has been unsubscribed
	 */
	var ObjectUnsubscribedError = (function (_super) {
	    __extends(ObjectUnsubscribedError, _super);
	    function ObjectUnsubscribedError() {
	        _super.call(this, 'object unsubscribed');
	        this.name = 'ObjectUnsubscribedError';
	    }
	    return ObjectUnsubscribedError;
	})(Error);
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var publishReplay_1 = __webpack_require__(473);
	Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	var ReplaySubject_1 = __webpack_require__(474);
	var multicast_1 = __webpack_require__(459);
	function publishReplay(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
	}
	exports.publishReplay = publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(98);
	var queue_1 = __webpack_require__(110);
	var ReplaySubject = (function (_super) {
	    __extends(ReplaySubject, _super);
	    function ReplaySubject(bufferSize, windowTime, scheduler) {
	        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	        _super.call(this);
	        this.events = [];
	        this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        this._windowTime = windowTime < 1 ? 1 : windowTime;
	        this.scheduler = scheduler;
	    }
	    ReplaySubject.prototype._next = function (value) {
	        var now = this._getNow();
	        this.events.push(new ReplayEvent(now, value));
	        this._trimBufferThenGetEvents(now);
	        _super.prototype._next.call(this, value);
	    };
	    ReplaySubject.prototype._subscribe = function (subscriber) {
	        var events = this._trimBufferThenGetEvents(this._getNow());
	        var index = -1;
	        var len = events.length;
	        while (!subscriber.isUnsubscribed && ++index < len) {
	            subscriber.next(events[index].value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    ReplaySubject.prototype._getNow = function () {
	        return (this.scheduler || queue_1.queue).now();
	    };
	    ReplaySubject.prototype._trimBufferThenGetEvents = function (now) {
	        var bufferSize = this.bufferSize;
	        var _windowTime = this._windowTime;
	        var events = this.events;
	        var eventsCount = events.length;
	        var spliceCount = 0;
	        // Trim events that fall out of the time window.
	        // Start at the front of the list. Break early once
	        // we encounter an event that falls within the window.
	        while (spliceCount < eventsCount) {
	            if ((now - events[spliceCount].time) < _windowTime) {
	                break;
	            }
	            spliceCount += 1;
	        }
	        if (eventsCount > bufferSize) {
	            spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
	        }
	        if (spliceCount > 0) {
	            events.splice(0, spliceCount);
	        }
	        return events;
	    };
	    return ReplaySubject;
	})(Subject_1.Subject);
	exports.ReplaySubject = ReplaySubject;
	var ReplayEvent = (function () {
	    function ReplayEvent(time, value) {
	        this.time = time;
	        this.value = value;
	    }
	    return ReplayEvent;
	})();
	//# sourceMappingURL=ReplaySubject.js.map

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var publishLast_1 = __webpack_require__(476);
	Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	var AsyncSubject_1 = __webpack_require__(343);
	var multicast_1 = __webpack_require__(459);
	function publishLast() {
	    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
	}
	exports.publishLast = publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var reduce_1 = __webpack_require__(478);
	Observable_1.Observable.prototype.reduce = reduce_1.reduce;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	var reduce_support_1 = __webpack_require__(479);
	function reduce(project, seed) {
	    return this.lift(new reduce_support_1.ReduceOperator(project, seed));
	}
	exports.reduce = reduce;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var ReduceOperator = (function () {
	    function ReduceOperator(project, seed) {
	        this.project = project;
	        this.seed = seed;
	    }
	    ReduceOperator.prototype.call = function (subscriber) {
	        return new ReduceSubscriber(subscriber, this.project, this.seed);
	    };
	    return ReduceOperator;
	})();
	exports.ReduceOperator = ReduceOperator;
	var ReduceSubscriber = (function (_super) {
	    __extends(ReduceSubscriber, _super);
	    function ReduceSubscriber(destination, project, seed) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.acc = seed;
	        this.project = project;
	        this.hasSeed = typeof seed !== 'undefined';
	    }
	    ReduceSubscriber.prototype._next = function (x) {
	        if (this.hasValue || (this.hasValue = this.hasSeed)) {
	            var result = tryCatch_1.tryCatch(this.project).call(this, this.acc, x);
	            if (result === errorObject_1.errorObject) {
	                this.destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                this.acc = result;
	            }
	        }
	        else {
	            this.acc = x;
	            this.hasValue = true;
	        }
	    };
	    ReduceSubscriber.prototype._complete = function () {
	        if (this.hasValue || this.hasSeed) {
	            this.destination.next(this.acc);
	        }
	        this.destination.complete();
	    };
	    return ReduceSubscriber;
	})(Subscriber_1.Subscriber);
	exports.ReduceSubscriber = ReduceSubscriber;
	//# sourceMappingURL=reduce-support.js.map

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var repeat_1 = __webpack_require__(481);
	Observable_1.Observable.prototype.repeat = repeat_1.repeat;
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var empty_1 = __webpack_require__(329);
	function repeat(count) {
	    if (count === void 0) { count = -1; }
	    if (count === 0) {
	        return new empty_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new RepeatOperator(count, this));
	    }
	}
	exports.repeat = repeat;
	var RepeatOperator = (function () {
	    function RepeatOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RepeatOperator.prototype.call = function (subscriber) {
	        return new FirstRepeatSubscriber(subscriber, this.count, this.source);
	    };
	    return RepeatOperator;
	})();
	var FirstRepeatSubscriber = (function (_super) {
	    __extends(FirstRepeatSubscriber, _super);
	    function FirstRepeatSubscriber(destination, count, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.count = count;
	        this.source = source;
	        destination.add(this);
	        this.lastSubscription = this;
	    }
	    FirstRepeatSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    FirstRepeatSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	    };
	    FirstRepeatSubscriber.prototype.complete = function () {
	        if (!this.isUnsubscribed) {
	            this.resubscribe(this.count);
	        }
	    };
	    FirstRepeatSubscriber.prototype.unsubscribe = function () {
	        var lastSubscription = this.lastSubscription;
	        if (lastSubscription === this) {
	            _super.prototype.unsubscribe.call(this);
	        }
	        else {
	            lastSubscription.unsubscribe();
	        }
	    };
	    FirstRepeatSubscriber.prototype.resubscribe = function (count) {
	        var _a = this, destination = _a.destination, lastSubscription = _a.lastSubscription;
	        destination.remove(lastSubscription);
	        lastSubscription.unsubscribe();
	        if (count - 1 === 0) {
	            destination.complete();
	        }
	        else {
	            var nextSubscriber = new MoreRepeatSubscriber(this, count - 1);
	            this.lastSubscription = this.source.subscribe(nextSubscriber);
	            destination.add(this.lastSubscription);
	        }
	    };
	    return FirstRepeatSubscriber;
	})(Subscriber_1.Subscriber);
	var MoreRepeatSubscriber = (function (_super) {
	    __extends(MoreRepeatSubscriber, _super);
	    function MoreRepeatSubscriber(parent, count) {
	        _super.call(this);
	        this.parent = parent;
	        this.count = count;
	    }
	    MoreRepeatSubscriber.prototype._next = function (value) {
	        this.parent.destination.next(value);
	    };
	    MoreRepeatSubscriber.prototype._error = function (err) {
	        this.parent.destination.error(err);
	    };
	    MoreRepeatSubscriber.prototype._complete = function () {
	        var count = this.count;
	        this.parent.resubscribe(count < 0 ? -1 : count);
	    };
	    return MoreRepeatSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var retry_1 = __webpack_require__(483);
	Observable_1.Observable.prototype.retry = retry_1.retry;
	//# sourceMappingURL=retry.js.map

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	function retry(count) {
	    if (count === void 0) { count = 0; }
	    return this.lift(new RetryOperator(count, this));
	}
	exports.retry = retry;
	var RetryOperator = (function () {
	    function RetryOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RetryOperator.prototype.call = function (subscriber) {
	        return new FirstRetrySubscriber(subscriber, this.count, this.source);
	    };
	    return RetryOperator;
	})();
	var FirstRetrySubscriber = (function (_super) {
	    __extends(FirstRetrySubscriber, _super);
	    function FirstRetrySubscriber(destination, count, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.count = count;
	        this.source = source;
	        destination.add(this);
	        this.lastSubscription = this;
	    }
	    FirstRetrySubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    FirstRetrySubscriber.prototype.error = function (error) {
	        if (!this.isUnsubscribed) {
	            this.unsubscribe();
	            this.resubscribe();
	        }
	    };
	    FirstRetrySubscriber.prototype._complete = function () {
	        this.unsubscribe();
	        this.destination.complete();
	    };
	    FirstRetrySubscriber.prototype.resubscribe = function (retried) {
	        if (retried === void 0) { retried = 0; }
	        var _a = this, lastSubscription = _a.lastSubscription, destination = _a.destination;
	        destination.remove(lastSubscription);
	        lastSubscription.unsubscribe();
	        var nextSubscriber = new RetryMoreSubscriber(this, this.count, retried + 1);
	        this.lastSubscription = this.source.subscribe(nextSubscriber);
	        destination.add(this.lastSubscription);
	    };
	    return FirstRetrySubscriber;
	})(Subscriber_1.Subscriber);
	var RetryMoreSubscriber = (function (_super) {
	    __extends(RetryMoreSubscriber, _super);
	    function RetryMoreSubscriber(parent, count, retried) {
	        if (retried === void 0) { retried = 0; }
	        _super.call(this, null);
	        this.parent = parent;
	        this.count = count;
	        this.retried = retried;
	    }
	    RetryMoreSubscriber.prototype._next = function (value) {
	        this.parent.destination.next(value);
	    };
	    RetryMoreSubscriber.prototype._error = function (err) {
	        var parent = this.parent;
	        var retried = this.retried;
	        var count = this.count;
	        if (count && retried === count) {
	            parent.destination.error(err);
	        }
	        else {
	            parent.resubscribe(retried);
	        }
	    };
	    RetryMoreSubscriber.prototype._complete = function () {
	        this.parent.destination.complete();
	    };
	    return RetryMoreSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=retry.js.map

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var retryWhen_1 = __webpack_require__(485);
	Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Subject_1 = __webpack_require__(98);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	function retryWhen(notifier) {
	    return this.lift(new RetryWhenOperator(notifier, this));
	}
	exports.retryWhen = retryWhen;
	var RetryWhenOperator = (function () {
	    function RetryWhenOperator(notifier, source) {
	        this.notifier = notifier;
	        this.source = source;
	    }
	    RetryWhenOperator.prototype.call = function (subscriber) {
	        return new FirstRetryWhenSubscriber(subscriber, this.notifier, this.source);
	    };
	    return RetryWhenOperator;
	})();
	var FirstRetryWhenSubscriber = (function (_super) {
	    __extends(FirstRetryWhenSubscriber, _super);
	    function FirstRetryWhenSubscriber(destination, notifier, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.notifier = notifier;
	        this.source = source;
	        destination.add(this);
	        this.lastSubscription = this;
	    }
	    FirstRetryWhenSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    FirstRetryWhenSubscriber.prototype.error = function (err) {
	        var destination = this.destination;
	        if (!this.isUnsubscribed) {
	            _super.prototype.unsubscribe.call(this);
	            if (!this.retryNotifications) {
	                this.errors = new Subject_1.Subject();
	                var notifications = tryCatch_1.tryCatch(this.notifier).call(this, this.errors);
	                if (notifications === errorObject_1.errorObject) {
	                    destination.error(errorObject_1.errorObject.e);
	                }
	                else {
	                    this.retryNotifications = notifications;
	                    var notificationSubscriber = new RetryNotificationSubscriber(this);
	                    this.notificationSubscription = notifications.subscribe(notificationSubscriber);
	                    destination.add(this.notificationSubscription);
	                }
	            }
	            this.errors.next(err);
	        }
	    };
	    FirstRetryWhenSubscriber.prototype.destinationError = function (err) {
	        this.tearDown();
	        this.destination.error(err);
	    };
	    FirstRetryWhenSubscriber.prototype._complete = function () {
	        this.destinationComplete();
	    };
	    FirstRetryWhenSubscriber.prototype.destinationComplete = function () {
	        this.tearDown();
	        this.destination.complete();
	    };
	    FirstRetryWhenSubscriber.prototype.unsubscribe = function () {
	        var lastSubscription = this.lastSubscription;
	        if (lastSubscription === this) {
	            _super.prototype.unsubscribe.call(this);
	        }
	        else {
	            this.tearDown();
	        }
	    };
	    FirstRetryWhenSubscriber.prototype.tearDown = function () {
	        _super.prototype.unsubscribe.call(this);
	        this.lastSubscription.unsubscribe();
	        var notificationSubscription = this.notificationSubscription;
	        if (notificationSubscription) {
	            notificationSubscription.unsubscribe();
	        }
	    };
	    FirstRetryWhenSubscriber.prototype.resubscribe = function () {
	        var _a = this, destination = _a.destination, lastSubscription = _a.lastSubscription;
	        destination.remove(lastSubscription);
	        lastSubscription.unsubscribe();
	        var nextSubscriber = new MoreRetryWhenSubscriber(this);
	        this.lastSubscription = this.source.subscribe(nextSubscriber);
	        destination.add(this.lastSubscription);
	    };
	    return FirstRetryWhenSubscriber;
	})(Subscriber_1.Subscriber);
	var MoreRetryWhenSubscriber = (function (_super) {
	    __extends(MoreRetryWhenSubscriber, _super);
	    function MoreRetryWhenSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	    }
	    MoreRetryWhenSubscriber.prototype._next = function (value) {
	        this.parent.destination.next(value);
	    };
	    MoreRetryWhenSubscriber.prototype._error = function (err) {
	        this.parent.errors.next(err);
	    };
	    MoreRetryWhenSubscriber.prototype._complete = function () {
	        this.parent.destinationComplete();
	    };
	    return MoreRetryWhenSubscriber;
	})(Subscriber_1.Subscriber);
	var RetryNotificationSubscriber = (function (_super) {
	    __extends(RetryNotificationSubscriber, _super);
	    function RetryNotificationSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	    }
	    RetryNotificationSubscriber.prototype._next = function (value) {
	        this.parent.resubscribe();
	    };
	    RetryNotificationSubscriber.prototype._error = function (err) {
	        this.parent.destinationError(err);
	    };
	    RetryNotificationSubscriber.prototype._complete = function () {
	        this.parent.destinationComplete();
	    };
	    return RetryNotificationSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var sample_1 = __webpack_require__(487);
	Observable_1.Observable.prototype.sample = sample_1.sample;
	//# sourceMappingURL=sample.js.map

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	function sample(notifier) {
	    return this.lift(new SampleOperator(notifier));
	}
	exports.sample = sample;
	var SampleOperator = (function () {
	    function SampleOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SampleOperator.prototype.call = function (subscriber) {
	        return new SampleSubscriber(subscriber, this.notifier);
	    };
	    return SampleOperator;
	})();
	var SampleSubscriber = (function (_super) {
	    __extends(SampleSubscriber, _super);
	    function SampleSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.hasValue = false;
	        this.add(notifier._subscribe(new SampleNotificationSubscriber(this)));
	    }
	    SampleSubscriber.prototype._next = function (value) {
	        this.lastValue = value;
	        this.hasValue = true;
	    };
	    SampleSubscriber.prototype.notifyNext = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.lastValue);
	        }
	    };
	    return SampleSubscriber;
	})(Subscriber_1.Subscriber);
	var SampleNotificationSubscriber = (function (_super) {
	    __extends(SampleNotificationSubscriber, _super);
	    function SampleNotificationSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	    }
	    SampleNotificationSubscriber.prototype._next = function () {
	        this.parent.notifyNext();
	    };
	    SampleNotificationSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    SampleNotificationSubscriber.prototype._complete = function () {
	        this.parent.notifyNext();
	    };
	    return SampleNotificationSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=sample.js.map

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var sampleTime_1 = __webpack_require__(489);
	Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var asap_1 = __webpack_require__(364);
	function sampleTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new SampleTimeOperator(delay, scheduler));
	}
	exports.sampleTime = sampleTime;
	var SampleTimeOperator = (function () {
	    function SampleTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    SampleTimeOperator.prototype.call = function (subscriber) {
	        return new SampleTimeSubscriber(subscriber, this.delay, this.scheduler);
	    };
	    return SampleTimeOperator;
	})();
	var SampleTimeSubscriber = (function (_super) {
	    __extends(SampleTimeSubscriber, _super);
	    function SampleTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.hasValue = false;
	        this.add(scheduler.schedule(dispatchNotification, delay, { subscriber: this, delay: delay }));
	    }
	    SampleTimeSubscriber.prototype._next = function (value) {
	        this.lastValue = value;
	        this.hasValue = true;
	    };
	    SampleTimeSubscriber.prototype.notifyNext = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.lastValue);
	        }
	    };
	    return SampleTimeSubscriber;
	})(Subscriber_1.Subscriber);
	function dispatchNotification(state) {
	    var subscriber = state.subscriber, delay = state.delay;
	    subscriber.notifyNext();
	    this.schedule(state, delay);
	}
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var scan_1 = __webpack_require__(491);
	Observable_1.Observable.prototype.scan = scan_1.scan;
	//# sourceMappingURL=scan.js.map

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	function scan(accumulator, seed) {
	    return this.lift(new ScanOperator(accumulator, seed));
	}
	exports.scan = scan;
	var ScanOperator = (function () {
	    function ScanOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ScanOperator.prototype.call = function (subscriber) {
	        return new ScanSubscriber(subscriber, this.accumulator, this.seed);
	    };
	    return ScanOperator;
	})();
	var ScanSubscriber = (function (_super) {
	    __extends(ScanSubscriber, _super);
	    function ScanSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.accumulatorSet = false;
	        this.seed = seed;
	        this.accumulator = accumulator;
	        this.accumulatorSet = typeof seed !== 'undefined';
	    }
	    Object.defineProperty(ScanSubscriber.prototype, "seed", {
	        get: function () {
	            return this._seed;
	        },
	        set: function (value) {
	            this.accumulatorSet = true;
	            this._seed = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScanSubscriber.prototype._next = function (value) {
	        if (!this.accumulatorSet) {
	            this.seed = value;
	            this.destination.next(value);
	        }
	        else {
	            var result = tryCatch_1.tryCatch(this.accumulator).call(this, this.seed, value);
	            if (result === errorObject_1.errorObject) {
	                this.destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                this.seed = result;
	                this.destination.next(this.seed);
	            }
	        }
	    };
	    return ScanSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=scan.js.map

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var share_1 = __webpack_require__(493);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	var multicast_1 = __webpack_require__(459);
	var Subject_1 = __webpack_require__(98);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var single_1 = __webpack_require__(495);
	Observable_1.Observable.prototype.single = single_1.single;
	//# sourceMappingURL=single.js.map

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var EmptyError_1 = __webpack_require__(431);
	function single(predicate) {
	    return this.lift(new SingleOperator(predicate, this));
	}
	exports.single = single;
	var SingleOperator = (function () {
	    function SingleOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    SingleOperator.prototype.call = function (subscriber) {
	        return new SingleSubscriber(subscriber, this.predicate, this.source);
	    };
	    return SingleOperator;
	})();
	var SingleSubscriber = (function (_super) {
	    __extends(SingleSubscriber, _super);
	    function SingleSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.seenValue = false;
	        this.index = 0;
	    }
	    SingleSubscriber.prototype.applySingleValue = function (value) {
	        if (this.seenValue) {
	            this.destination.error('Sequence contains more than one element');
	        }
	        else {
	            this.seenValue = true;
	            this.singleValue = value;
	        }
	    };
	    SingleSubscriber.prototype._next = function (value) {
	        var predicate = this.predicate;
	        var currentIndex = this.index++;
	        if (predicate) {
	            var result = tryCatch_1.tryCatch(predicate)(value, currentIndex, this.source);
	            if (result === errorObject_1.errorObject) {
	                this.destination.error(result.e);
	            }
	            else if (result) {
	                this.applySingleValue(value);
	            }
	        }
	        else {
	            this.applySingleValue(value);
	        }
	    };
	    SingleSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.index > 0) {
	            destination.next(this.seenValue ? this.singleValue : undefined);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return SingleSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=single.js.map

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var skip_1 = __webpack_require__(497);
	Observable_1.Observable.prototype.skip = skip_1.skip;
	//# sourceMappingURL=skip.js.map

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	function skip(total) {
	    return this.lift(new SkipOperator(total));
	}
	exports.skip = skip;
	var SkipOperator = (function () {
	    function SkipOperator(total) {
	        this.total = total;
	    }
	    SkipOperator.prototype.call = function (subscriber) {
	        return new SkipSubscriber(subscriber, this.total);
	    };
	    return SkipOperator;
	})();
	var SkipSubscriber = (function (_super) {
	    __extends(SkipSubscriber, _super);
	    function SkipSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    SkipSubscriber.prototype._next = function (x) {
	        if (++this.count > this.total) {
	            this.destination.next(x);
	        }
	    };
	    return SkipSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=skip.js.map

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var skipUntil_1 = __webpack_require__(499);
	Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	function skipUntil(notifier) {
	    return this.lift(new SkipUntilOperator(notifier));
	}
	exports.skipUntil = skipUntil;
	var SkipUntilOperator = (function () {
	    function SkipUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SkipUntilOperator.prototype.call = function (subscriber) {
	        return new SkipUntilSubscriber(subscriber, this.notifier);
	    };
	    return SkipUntilOperator;
	})();
	var SkipUntilSubscriber = (function (_super) {
	    __extends(SkipUntilSubscriber, _super);
	    function SkipUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.notificationSubscriber = null;
	        this.notificationSubscriber = new NotificationSubscriber(this);
	        this.add(this.notifier.subscribe(this.notificationSubscriber));
	    }
	    SkipUntilSubscriber.prototype._next = function (value) {
	        if (this.notificationSubscriber.hasValue) {
	            this.destination.next(value);
	        }
	    };
	    SkipUntilSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	    };
	    SkipUntilSubscriber.prototype._complete = function () {
	        if (this.notificationSubscriber.hasCompleted) {
	            this.destination.complete();
	        }
	        this.notificationSubscriber.unsubscribe();
	    };
	    SkipUntilSubscriber.prototype.unsubscribe = function () {
	        if (this._isUnsubscribed) {
	            return;
	        }
	        else if (this._subscription) {
	            this._subscription.unsubscribe();
	            this._isUnsubscribed = true;
	        }
	        else {
	            _super.prototype.unsubscribe.call(this);
	        }
	    };
	    return SkipUntilSubscriber;
	})(Subscriber_1.Subscriber);
	var NotificationSubscriber = (function (_super) {
	    __extends(NotificationSubscriber, _super);
	    function NotificationSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	        this.hasValue = false;
	        this.hasCompleted = false;
	    }
	    NotificationSubscriber.prototype._next = function (unused) {
	        this.hasValue = true;
	    };
	    NotificationSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	        this.hasValue = true;
	    };
	    NotificationSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	    };
	    return NotificationSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var skipWhile_1 = __webpack_require__(501);
	Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	function skipWhile(predicate) {
	    return this.lift(new SkipWhileOperator(predicate));
	}
	exports.skipWhile = skipWhile;
	var SkipWhileOperator = (function () {
	    function SkipWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    SkipWhileOperator.prototype.call = function (subscriber) {
	        return new SkipWhileSubscriber(subscriber, this.predicate);
	    };
	    return SkipWhileOperator;
	})();
	var SkipWhileSubscriber = (function (_super) {
	    __extends(SkipWhileSubscriber, _super);
	    function SkipWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.skipping = true;
	        this.index = 0;
	    }
	    SkipWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (this.skipping === true) {
	            var index = this.index++;
	            var result = tryCatch_1.tryCatch(this.predicate)(value, index);
	            if (result === errorObject_1.errorObject) {
	                destination.error(result.e);
	            }
	            else {
	                this.skipping = Boolean(result);
	            }
	        }
	        if (this.skipping === false) {
	            destination.next(value);
	        }
	    };
	    return SkipWhileSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var startWith_1 = __webpack_require__(503);
	Observable_1.Observable.prototype.startWith = startWith_1.startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	var fromArray_1 = __webpack_require__(324);
	var ScalarObservable_1 = __webpack_require__(325);
	var empty_1 = __webpack_require__(329);
	var concat_static_1 = __webpack_require__(337);
	var isScheduler_1 = __webpack_require__(330);
	function startWith() {
	    var array = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        array[_i - 0] = arguments[_i];
	    }
	    var scheduler = array[array.length - 1];
	    if (isScheduler_1.isScheduler(scheduler)) {
	        array.pop();
	    }
	    else {
	        scheduler = void 0;
	    }
	    var len = array.length;
	    if (len === 1) {
	        return concat_static_1.concat(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
	    }
	    else if (len > 1) {
	        return concat_static_1.concat(new fromArray_1.ArrayObservable(array, scheduler), this);
	    }
	    else {
	        return concat_static_1.concat(new empty_1.EmptyObservable(scheduler), this);
	    }
	}
	exports.startWith = startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var subscribeOn_1 = __webpack_require__(505);
	Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	var SubscribeOnObservable_1 = __webpack_require__(506);
	function subscribeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
	}
	exports.subscribeOn = subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(99);
	var asap_1 = __webpack_require__(364);
	var isNumeric_1 = __webpack_require__(363);
	var SubscribeOnObservable = (function (_super) {
	    __extends(SubscribeOnObservable, _super);
	    function SubscribeOnObservable(source, delayTime, scheduler) {
	        if (delayTime === void 0) { delayTime = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        _super.call(this);
	        this.source = source;
	        this.delayTime = delayTime;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
	            this.delayTime = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = asap_1.asap;
	        }
	    }
	    SubscribeOnObservable.create = function (source, delay, scheduler) {
	        if (delay === void 0) { delay = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        return new SubscribeOnObservable(source, delay, scheduler);
	    };
	    SubscribeOnObservable.dispatch = function (_a) {
	        var source = _a.source, subscriber = _a.subscriber;
	        return source.subscribe(subscriber);
	    };
	    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
	        var delay = this.delayTime;
	        var source = this.source;
	        var scheduler = this.scheduler;
	        subscriber.add(scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
	            source: source, subscriber: subscriber
	        }));
	    };
	    return SubscribeOnObservable;
	})(Observable_1.Observable);
	exports.SubscribeOnObservable = SubscribeOnObservable;
	//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var switch_1 = __webpack_require__(508);
	Observable_1.Observable.prototype.switch = switch_1._switch;
	//# sourceMappingURL=switch.js.map

/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(332);
	var subscribeToResult_1 = __webpack_require__(333);
	function _switch() {
	    return this.lift(new SwitchOperator());
	}
	exports._switch = _switch;
	var SwitchOperator = (function () {
	    function SwitchOperator() {
	    }
	    SwitchOperator.prototype.call = function (subscriber) {
	        return new SwitchSubscriber(subscriber);
	    };
	    return SwitchOperator;
	})();
	var SwitchSubscriber = (function (_super) {
	    __extends(SwitchSubscriber, _super);
	    function SwitchSubscriber(destination) {
	        _super.call(this, destination);
	        this.active = 0;
	        this.hasCompleted = false;
	    }
	    SwitchSubscriber.prototype._next = function (value) {
	        this.unsubscribeInner();
	        this.active++;
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
	    };
	    SwitchSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    SwitchSubscriber.prototype.unsubscribeInner = function () {
	        this.active = this.active > 0 ? this.active - 1 : 0;
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	            this.remove(innerSubscription);
	        }
	    };
	    SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue) {
	        this.destination.next(innerValue);
	    };
	    SwitchSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    SwitchSubscriber.prototype.notifyComplete = function () {
	        this.unsubscribeInner();
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    return SwitchSubscriber;
	})(OuterSubscriber_1.OuterSubscriber);
	//# sourceMappingURL=switch.js.map

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var switchMap_1 = __webpack_require__(510);
	Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var OuterSubscriber_1 = __webpack_require__(332);
	var subscribeToResult_1 = __webpack_require__(333);
	function switchMap(project, resultSelector) {
	    return this.lift(new SwitchMapOperator(project, resultSelector));
	}
	exports.switchMap = switchMap;
	var SwitchMapOperator = (function () {
	    function SwitchMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapOperator.prototype.call = function (subscriber) {
	        return new SwitchMapSubscriber(subscriber, this.project, this.resultSelector);
	    };
	    return SwitchMapOperator;
	})();
	var SwitchMapSubscriber = (function (_super) {
	    __extends(SwitchMapSubscriber, _super);
	    function SwitchMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.hasCompleted = false;
	        this.index = 0;
	    }
	    SwitchMapSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        var destination = this.destination;
	        var result = tryCatch_1.tryCatch(this.project)(value, index);
	        if (result === errorObject_1.errorObject) {
	            destination.error(result.e);
	        }
	        else {
	            var innerSubscription = this.innerSubscription;
	            if (innerSubscription) {
	                innerSubscription.unsubscribe();
	            }
	            this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
	        }
	    };
	    SwitchMapSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        this.hasCompleted = true;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            this.destination.complete();
	        }
	    };
	    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        var prevSubscription = this.innerSubscription;
	        if (prevSubscription) {
	            prevSubscription.unsubscribe();
	        }
	        this.innerSubscription = null;
	        if (this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    SwitchMapSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            var result = tryCatch_1.tryCatch(resultSelector)(outerValue, innerValue, outerIndex, innerIndex);
	            if (result === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                destination.next(result);
	            }
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    return SwitchMapSubscriber;
	})(OuterSubscriber_1.OuterSubscriber);
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var switchMapTo_1 = __webpack_require__(512);
	Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var OuterSubscriber_1 = __webpack_require__(332);
	var subscribeToResult_1 = __webpack_require__(333);
	function switchMapTo(observable, projectResult) {
	    return this.lift(new SwitchMapToOperator(observable, projectResult));
	}
	exports.switchMapTo = switchMapTo;
	var SwitchMapToOperator = (function () {
	    function SwitchMapToOperator(observable, resultSelector) {
	        this.observable = observable;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapToOperator.prototype.call = function (subscriber) {
	        return new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector);
	    };
	    return SwitchMapToOperator;
	})();
	var SwitchMapToSubscriber = (function (_super) {
	    __extends(SwitchMapToSubscriber, _super);
	    function SwitchMapToSubscriber(destination, inner, resultSelector) {
	        _super.call(this, destination);
	        this.inner = inner;
	        this.resultSelector = resultSelector;
	        this.hasCompleted = false;
	        this.index = 0;
	    }
	    SwitchMapToSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, index));
	    };
	    SwitchMapToSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        this.hasCompleted = true;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            this.destination.complete();
	        }
	    };
	    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        var prevSubscription = this.innerSubscription;
	        if (prevSubscription) {
	            prevSubscription.unsubscribe();
	        }
	        this.innerSubscription = null;
	        if (this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    SwitchMapToSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            var result = tryCatch_1.tryCatch(resultSelector)(outerValue, innerValue, outerIndex, innerIndex);
	            if (result === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                destination.next(result);
	            }
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    return SwitchMapToSubscriber;
	})(OuterSubscriber_1.OuterSubscriber);
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var take_1 = __webpack_require__(514);
	Observable_1.Observable.prototype.take = take_1.take;
	//# sourceMappingURL=take.js.map

/***/ },
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var ArgumentOutOfRangeError_1 = __webpack_require__(515);
	var empty_1 = __webpack_require__(329);
	function take(total) {
	    if (total === 0) {
	        return new empty_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeOperator(total));
	    }
	}
	exports.take = take;
	var TakeOperator = (function () {
	    function TakeOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeOperator.prototype.call = function (subscriber) {
	        return new TakeSubscriber(subscriber, this.total);
	    };
	    return TakeOperator;
	})();
	var TakeSubscriber = (function (_super) {
	    __extends(TakeSubscriber, _super);
	    function TakeSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    TakeSubscriber.prototype._next = function (value) {
	        var total = this.total;
	        if (++this.count <= total) {
	            this.destination.next(value);
	            if (this.count === total) {
	                this.destination.complete();
	            }
	        }
	    };
	    return TakeSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=take.js.map

/***/ },
/* 515 */
/***/ function(module, exports) {

	var ArgumentOutOfRangeError = (function () {
	    function ArgumentOutOfRangeError() {
	        this.name = 'ArgumentOutOfRangeError';
	        this.message = 'argument out of range';
	    }
	    return ArgumentOutOfRangeError;
	})();
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
	//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var takeUntil_1 = __webpack_require__(517);
	Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var noop_1 = __webpack_require__(101);
	function takeUntil(notifier) {
	    return this.lift(new TakeUntilOperator(notifier));
	}
	exports.takeUntil = takeUntil;
	var TakeUntilOperator = (function () {
	    function TakeUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    TakeUntilOperator.prototype.call = function (subscriber) {
	        return new TakeUntilSubscriber(subscriber, this.notifier);
	    };
	    return TakeUntilOperator;
	})();
	var TakeUntilSubscriber = (function (_super) {
	    __extends(TakeUntilSubscriber, _super);
	    function TakeUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.notificationSubscriber = null;
	        this.notificationSubscriber = new TakeUntilInnerSubscriber(destination);
	        this.add(notifier.subscribe(this.notificationSubscriber));
	    }
	    TakeUntilSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.notificationSubscriber.unsubscribe();
	    };
	    return TakeUntilSubscriber;
	})(Subscriber_1.Subscriber);
	var TakeUntilInnerSubscriber = (function (_super) {
	    __extends(TakeUntilInnerSubscriber, _super);
	    function TakeUntilInnerSubscriber(destination) {
	        _super.call(this, null);
	        this.destination = destination;
	    }
	    TakeUntilInnerSubscriber.prototype._next = function (unused) {
	        this.destination.complete();
	    };
	    TakeUntilInnerSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	    };
	    TakeUntilInnerSubscriber.prototype._complete = function () {
	        noop_1.noop();
	    };
	    return TakeUntilInnerSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var takeWhile_1 = __webpack_require__(519);
	Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	function takeWhile(predicate) {
	    return this.lift(new TakeWhileOperator(predicate));
	}
	exports.takeWhile = takeWhile;
	var TakeWhileOperator = (function () {
	    function TakeWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    TakeWhileOperator.prototype.call = function (subscriber) {
	        return new TakeWhileSubscriber(subscriber, this.predicate);
	    };
	    return TakeWhileOperator;
	})();
	var TakeWhileSubscriber = (function (_super) {
	    __extends(TakeWhileSubscriber, _super);
	    function TakeWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.index = 0;
	    }
	    TakeWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        var result = tryCatch_1.tryCatch(this.predicate)(value, this.index++);
	        if (result == errorObject_1.errorObject) {
	            destination.error(result.e);
	        }
	        else if (Boolean(result)) {
	            destination.next(value);
	        }
	        else {
	            destination.complete();
	        }
	    };
	    return TakeWhileSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var throttle_1 = __webpack_require__(521);
	Observable_1.Observable.prototype.throttle = throttle_1.throttle;
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 521 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var fromPromise_1 = __webpack_require__(109);
	var Subscriber_1 = __webpack_require__(100);
	var tryCatch_1 = __webpack_require__(326);
	var isPromise_1 = __webpack_require__(349);
	var errorObject_1 = __webpack_require__(327);
	function throttle(durationSelector) {
	    return this.lift(new ThrottleOperator(durationSelector));
	}
	exports.throttle = throttle;
	var ThrottleOperator = (function () {
	    function ThrottleOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    ThrottleOperator.prototype.call = function (subscriber) {
	        return new ThrottleSubscriber(subscriber, this.durationSelector);
	    };
	    return ThrottleOperator;
	})();
	var ThrottleSubscriber = (function (_super) {
	    __extends(ThrottleSubscriber, _super);
	    function ThrottleSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	    }
	    ThrottleSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            var destination = this.destination;
	            var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
	            if (duration === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	                return;
	            }
	            if (isPromise_1.isPromise(duration)) {
	                duration = fromPromise_1.PromiseObservable.create(duration);
	            }
	            this.add(this.throttled = duration._subscribe(new ThrottleDurationSelectorSubscriber(this)));
	            destination.next(value);
	        }
	    };
	    ThrottleSubscriber.prototype._error = function (err) {
	        this.clearThrottle();
	        _super.prototype._error.call(this, err);
	    };
	    ThrottleSubscriber.prototype._complete = function () {
	        this.clearThrottle();
	        _super.prototype._complete.call(this);
	    };
	    ThrottleSubscriber.prototype.clearThrottle = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            throttled.unsubscribe();
	            this.remove(throttled);
	            this.throttled = null;
	        }
	    };
	    return ThrottleSubscriber;
	})(Subscriber_1.Subscriber);
	var ThrottleDurationSelectorSubscriber = (function (_super) {
	    __extends(ThrottleDurationSelectorSubscriber, _super);
	    function ThrottleDurationSelectorSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	    }
	    ThrottleDurationSelectorSubscriber.prototype._next = function (unused) {
	        this.parent.clearThrottle();
	    };
	    ThrottleDurationSelectorSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    ThrottleDurationSelectorSubscriber.prototype._complete = function () {
	        this.parent.clearThrottle();
	    };
	    return ThrottleDurationSelectorSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var throttleTime_1 = __webpack_require__(523);
	Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var asap_1 = __webpack_require__(364);
	function throttleTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new ThrottleTimeOperator(delay, scheduler));
	}
	exports.throttleTime = throttleTime;
	var ThrottleTimeOperator = (function () {
	    function ThrottleTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeOperator.prototype.call = function (subscriber) {
	        return new ThrottleTimeSubscriber(subscriber, this.delay, this.scheduler);
	    };
	    return ThrottleTimeOperator;
	})();
	var ThrottleTimeSubscriber = (function (_super) {
	    __extends(ThrottleTimeSubscriber, _super);
	    function ThrottleTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, { subscriber: this }));
	            this.destination.next(value);
	        }
	    };
	    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            throttled.unsubscribe();
	            this.remove(throttled);
	            this.throttled = null;
	        }
	    };
	    return ThrottleTimeSubscriber;
	})(Subscriber_1.Subscriber);
	function dispatchNext(_a) {
	    var subscriber = _a.subscriber;
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 524 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var timeout_1 = __webpack_require__(525);
	Observable_1.Observable.prototype.timeout = timeout_1.timeout;
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 525 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var queue_1 = __webpack_require__(110);
	var isDate_1 = __webpack_require__(376);
	function timeout(due, errorToSend, scheduler) {
	    if (errorToSend === void 0) { errorToSend = null; }
	    if (scheduler === void 0) { scheduler = queue_1.queue; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : due;
	    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
	}
	exports.timeout = timeout;
	var TimeoutOperator = (function () {
	    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	    }
	    TimeoutOperator.prototype.call = function (subscriber) {
	        return new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler);
	    };
	    return TimeoutOperator;
	})();
	var TimeoutSubscriber = (function (_super) {
	    __extends(TimeoutSubscriber, _super);
	    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
	        _super.call(this, destination);
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.notifyTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, { subscriber: this, index: currentIndex });
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype.notifyTimeout = function () {
	        this.error(this.errorToSend || new Error('timeout'));
	    };
	    return TimeoutSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var timeoutWith_1 = __webpack_require__(527);
	Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 527 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queue_1 = __webpack_require__(110);
	var isDate_1 = __webpack_require__(376);
	var OuterSubscriber_1 = __webpack_require__(332);
	var subscribeToResult_1 = __webpack_require__(333);
	function timeoutWith(due, withObservable, scheduler) {
	    if (scheduler === void 0) { scheduler = queue_1.queue; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : due;
	    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
	}
	exports.timeoutWith = timeoutWith;
	var TimeoutWithOperator = (function () {
	    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	    }
	    TimeoutWithOperator.prototype.call = function (subscriber) {
	        return new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler);
	    };
	    return TimeoutWithOperator;
	})();
	var TimeoutWithSubscriber = (function (_super) {
	    __extends(TimeoutWithSubscriber, _super);
	    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	        this.timeoutSubscription = undefined;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        destination.add(this);
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutWithSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.handleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        var timeoutState = { subscriber: this, index: currentIndex };
	        this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutWithSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype.handleTimeout = function () {
	        if (!this.isUnsubscribed) {
	            var withObservable = this.withObservable;
	            this.unsubscribe();
	            this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
	        }
	    };
	    return TimeoutWithSubscriber;
	})(OuterSubscriber_1.OuterSubscriber);
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 528 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var toArray_1 = __webpack_require__(529);
	Observable_1.Observable.prototype.toArray = toArray_1.toArray;
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 529 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	function toArray() {
	    return this.lift(new ToArrayOperator());
	}
	exports.toArray = toArray;
	var ToArrayOperator = (function () {
	    function ToArrayOperator() {
	    }
	    ToArrayOperator.prototype.call = function (subscriber) {
	        return new ToArraySubscriber(subscriber);
	    };
	    return ToArrayOperator;
	})();
	var ToArraySubscriber = (function (_super) {
	    __extends(ToArraySubscriber, _super);
	    function ToArraySubscriber(destination) {
	        _super.call(this, destination);
	        this.array = [];
	    }
	    ToArraySubscriber.prototype._next = function (x) {
	        this.array.push(x);
	    };
	    ToArraySubscriber.prototype._complete = function () {
	        this.destination.next(this.array);
	        this.destination.complete();
	    };
	    return ToArraySubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var toPromise_1 = __webpack_require__(114);
	Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 531 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var window_1 = __webpack_require__(532);
	Observable_1.Observable.prototype.window = window_1.window;
	//# sourceMappingURL=window.js.map

/***/ },
/* 532 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Subject_1 = __webpack_require__(98);
	function window(closingNotifier) {
	    return this.lift(new WindowOperator(closingNotifier));
	}
	exports.window = window;
	var WindowOperator = (function () {
	    function WindowOperator(closingNotifier) {
	        this.closingNotifier = closingNotifier;
	    }
	    WindowOperator.prototype.call = function (subscriber) {
	        return new WindowSubscriber(subscriber, this.closingNotifier);
	    };
	    return WindowOperator;
	})();
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, closingNotifier) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.closingNotifier = closingNotifier;
	        this.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this)));
	        this.openWindow();
	    }
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	    };
	    WindowSubscriber.prototype.openWindow = function () {
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var destination = this.destination;
	        var newWindow = this.window = new Subject_1.Subject();
	        destination.add(newWindow);
	        destination.next(newWindow);
	    };
	    return WindowSubscriber;
	})(Subscriber_1.Subscriber);
	var WindowClosingNotifierSubscriber = (function (_super) {
	    __extends(WindowClosingNotifierSubscriber, _super);
	    function WindowClosingNotifierSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	    }
	    WindowClosingNotifierSubscriber.prototype._next = function () {
	        this.parent.openWindow();
	    };
	    WindowClosingNotifierSubscriber.prototype._error = function (err) {
	        this.parent._error(err);
	    };
	    WindowClosingNotifierSubscriber.prototype._complete = function () {
	        this.parent._complete();
	    };
	    return WindowClosingNotifierSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=window.js.map

/***/ },
/* 533 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var windowCount_1 = __webpack_require__(534);
	Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Subject_1 = __webpack_require__(98);
	function windowCount(windowSize, startWindowEvery) {
	    if (startWindowEvery === void 0) { startWindowEvery = 0; }
	    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
	}
	exports.windowCount = windowCount;
	var WindowCountOperator = (function () {
	    function WindowCountOperator(windowSize, startWindowEvery) {
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	    }
	    WindowCountOperator.prototype.call = function (subscriber) {
	        return new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery);
	    };
	    return WindowCountOperator;
	})();
	var WindowCountSubscriber = (function (_super) {
	    __extends(WindowCountSubscriber, _super);
	    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	        this.windows = [new Subject_1.Subject()];
	        this.count = 0;
	        var firstWindow = this.windows[0];
	        destination.add(firstWindow);
	        destination.next(firstWindow);
	    }
	    WindowCountSubscriber.prototype._next = function (value) {
	        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
	        var destination = this.destination;
	        var windowSize = this.windowSize;
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            windows[i].next(value);
	        }
	        var c = this.count - windowSize + 1;
	        if (c >= 0 && c % startWindowEvery === 0) {
	            windows.shift().complete();
	        }
	        if (++this.count % startWindowEvery === 0) {
	            var window_1 = new Subject_1.Subject();
	            windows.push(window_1);
	            destination.add(window_1);
	            destination.next(window_1);
	        }
	    };
	    WindowCountSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowCountSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().complete();
	        }
	        this.destination.complete();
	    };
	    return WindowCountSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var windowTime_1 = __webpack_require__(536);
	Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Subject_1 = __webpack_require__(98);
	var asap_1 = __webpack_require__(364);
	function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
	    if (windowCreationInterval === void 0) { windowCreationInterval = null; }
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
	}
	exports.windowTime = windowTime;
	var WindowTimeOperator = (function () {
	    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	    }
	    WindowTimeOperator.prototype.call = function (subscriber) {
	        return new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler);
	    };
	    return WindowTimeOperator;
	})();
	var WindowTimeSubscriber = (function (_super) {
	    __extends(WindowTimeSubscriber, _super);
	    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	        this.windows = [];
	        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
	            var window_1 = this.openWindow();
	            var closeState = { subscriber: this, window: window_1, context: null };
	            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
	        }
	        else {
	            var window_2 = this.openWindow();
	            var timeSpanOnlyState = { subscriber: this, window: window_2, windowTimeSpan: windowTimeSpan };
	            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
	        }
	    }
	    WindowTimeSubscriber.prototype._next = function (value) {
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            windows[i].next(value);
	        }
	    };
	    WindowTimeSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowTimeSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().complete();
	        }
	        this.destination.complete();
	    };
	    WindowTimeSubscriber.prototype.openWindow = function () {
	        var window = new Subject_1.Subject();
	        this.windows.push(window);
	        var destination = this.destination;
	        destination.add(window);
	        destination.next(window);
	        return window;
	    };
	    WindowTimeSubscriber.prototype.closeWindow = function (window) {
	        window.complete();
	        var windows = this.windows;
	        windows.splice(windows.indexOf(window), 1);
	    };
	    return WindowTimeSubscriber;
	})(Subscriber_1.Subscriber);
	function dispatchWindowTimeSpanOnly(state) {
	    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
	    if (window) {
	        window.complete();
	    }
	    state.window = subscriber.openWindow();
	    this.schedule(state, windowTimeSpan);
	}
	function dispatchWindowCreation(state) {
	    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
	    var window = subscriber.openWindow();
	    var action = this;
	    var context = { action: action, subscription: null };
	    var timeSpanState = { subscriber: subscriber, window: window, context: context };
	    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
	    action.add(context.subscription);
	    action.schedule(state, windowCreationInterval);
	}
	function dispatchWindowClose(_a) {
	    var subscriber = _a.subscriber, window = _a.window, context = _a.context;
	    if (context && context.action && context.subscription) {
	        context.action.remove(context.subscription);
	    }
	    subscriber.closeWindow(window);
	}
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var windowToggle_1 = __webpack_require__(538);
	Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Subject_1 = __webpack_require__(98);
	var Subscription_1 = __webpack_require__(104);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	function windowToggle(openings, closingSelector) {
	    return this.lift(new WindowToggleOperator(openings, closingSelector));
	}
	exports.windowToggle = windowToggle;
	var WindowToggleOperator = (function () {
	    function WindowToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    WindowToggleOperator.prototype.call = function (subscriber) {
	        return new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector);
	    };
	    return WindowToggleOperator;
	})();
	var WindowToggleSubscriber = (function (_super) {
	    __extends(WindowToggleSubscriber, _super);
	    function WindowToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(this.openings._subscribe(new WindowToggleOpeningsSubscriber(this)));
	    }
	    WindowToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        var len = contexts.length;
	        for (var i = 0; i < len; i++) {
	            contexts[i].window.next(value);
	        }
	    };
	    WindowToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            contexts.shift().window.error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            context.window.complete();
	            context.subscription.unsubscribe();
	        }
	        this.destination.complete();
	    };
	    WindowToggleSubscriber.prototype.openWindow = function (value) {
	        var closingSelector = this.closingSelector;
	        var closingNotifier = tryCatch_1.tryCatch(closingSelector)(value);
	        if (closingNotifier === errorObject_1.errorObject) {
	            this.error(closingNotifier.e);
	        }
	        else {
	            var destination = this.destination;
	            var window_1 = new Subject_1.Subject();
	            var subscription = new Subscription_1.Subscription();
	            var context = { window: window_1, subscription: subscription };
	            this.contexts.push(context);
	            var subscriber = new WindowClosingNotifierSubscriber(this, context);
	            var closingSubscription = closingNotifier._subscribe(subscriber);
	            subscription.add(closingSubscription);
	            destination.add(subscription);
	            destination.add(window_1);
	            destination.next(window_1);
	        }
	    };
	    WindowToggleSubscriber.prototype.closeWindow = function (context) {
	        var window = context.window, subscription = context.subscription;
	        var contexts = this.contexts;
	        var destination = this.destination;
	        contexts.splice(contexts.indexOf(context), 1);
	        window.complete();
	        destination.remove(subscription);
	        destination.remove(window);
	        subscription.unsubscribe();
	    };
	    return WindowToggleSubscriber;
	})(Subscriber_1.Subscriber);
	var WindowClosingNotifierSubscriber = (function (_super) {
	    __extends(WindowClosingNotifierSubscriber, _super);
	    function WindowClosingNotifierSubscriber(parent, windowContext) {
	        _super.call(this, null);
	        this.parent = parent;
	        this.windowContext = windowContext;
	    }
	    WindowClosingNotifierSubscriber.prototype._next = function () {
	        this.parent.closeWindow(this.windowContext);
	    };
	    WindowClosingNotifierSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    WindowClosingNotifierSubscriber.prototype._complete = function () {
	        this.parent.closeWindow(this.windowContext);
	    };
	    return WindowClosingNotifierSubscriber;
	})(Subscriber_1.Subscriber);
	var WindowToggleOpeningsSubscriber = (function (_super) {
	    __extends(WindowToggleOpeningsSubscriber, _super);
	    function WindowToggleOpeningsSubscriber(parent) {
	        _super.call(this);
	        this.parent = parent;
	    }
	    WindowToggleOpeningsSubscriber.prototype._next = function (value) {
	        this.parent.openWindow(value);
	    };
	    WindowToggleOpeningsSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    WindowToggleOpeningsSubscriber.prototype._complete = function () {
	        // noop
	    };
	    return WindowToggleOpeningsSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var windowWhen_1 = __webpack_require__(540);
	Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 540 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(100);
	var Subject_1 = __webpack_require__(98);
	var Subscription_1 = __webpack_require__(104);
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	function windowWhen(closingSelector) {
	    return this.lift(new WindowOperator(closingSelector));
	}
	exports.windowWhen = windowWhen;
	var WindowOperator = (function () {
	    function WindowOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    WindowOperator.prototype.call = function (subscriber) {
	        return new WindowSubscriber(subscriber, this.closingSelector);
	    };
	    return WindowOperator;
	})();
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.closingSelector = closingSelector;
	        this.openWindow();
	    }
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	        this._unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	        this._unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype.unsubscribe = function () {
	        _super.prototype.unsubscribe.call(this);
	        this._unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype._unsubscribeClosingNotification = function () {
	        var closingNotification = this.closingNotification;
	        if (closingNotification) {
	            closingNotification.unsubscribe();
	        }
	    };
	    WindowSubscriber.prototype.openWindow = function () {
	        var prevClosingNotification = this.closingNotification;
	        if (prevClosingNotification) {
	            this.remove(prevClosingNotification);
	            prevClosingNotification.unsubscribe();
	        }
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var window = this.window = new Subject_1.Subject();
	        this.destination.next(window);
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            var err = closingNotifier.e;
	            this.destination.error(err);
	            this.window.error(err);
	        }
	        else {
	            var closingNotification = this.closingNotification = new Subscription_1.Subscription();
	            closingNotification.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this)));
	            this.add(closingNotification);
	            this.add(window);
	        }
	    };
	    return WindowSubscriber;
	})(Subscriber_1.Subscriber);
	var WindowClosingNotifierSubscriber = (function (_super) {
	    __extends(WindowClosingNotifierSubscriber, _super);
	    function WindowClosingNotifierSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	    }
	    WindowClosingNotifierSubscriber.prototype._next = function () {
	        this.parent.openWindow();
	    };
	    WindowClosingNotifierSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    WindowClosingNotifierSubscriber.prototype._complete = function () {
	        this.parent.openWindow();
	    };
	    return WindowClosingNotifierSubscriber;
	})(Subscriber_1.Subscriber);
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 541 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var withLatestFrom_1 = __webpack_require__(542);
	Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 542 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(326);
	var errorObject_1 = __webpack_require__(327);
	var OuterSubscriber_1 = __webpack_require__(332);
	var subscribeToResult_1 = __webpack_require__(333);
	/**
	 * @param {Observable} observables the observables to get the latest values from.
	 * @param {Function} [project] optional projection function for merging values together. Receives all values in order
	 *  of observables passed. (e.g. `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not passed, arrays
	 *  will be returned.
	 * @description merges each value from an observable with the latest values from the other passed observables.
	 * All observables must emit at least one value before the resulting observable will emit
	 *
	 * #### example
	 * ```
	 * A.withLatestFrom(B, C)
	 *
	 *  A:     ----a-----------------b---------------c-----------|
	 *  B:     ---d----------------e--------------f---------|
	 *  C:     --x----------------y-------------z-------------|
	 * result: ---([a,d,x])---------([b,e,y])--------([c,f,z])---|
	 * ```
	 */
	function withLatestFrom() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var project;
	    if (typeof args[args.length - 1] === 'function') {
	        project = args.pop();
	    }
	    var observables = args;
	    return this.lift(new WithLatestFromOperator(observables, project));
	}
	exports.withLatestFrom = withLatestFrom;
	var WithLatestFromOperator = (function () {
	    function WithLatestFromOperator(observables, project) {
	        this.observables = observables;
	        this.project = project;
	    }
	    WithLatestFromOperator.prototype.call = function (subscriber) {
	        return new WithLatestFromSubscriber(subscriber, this.observables, this.project);
	    };
	    return WithLatestFromOperator;
	})();
	var WithLatestFromSubscriber = (function (_super) {
	    __extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(destination, observables, project) {
	        _super.call(this, destination);
	        this.observables = observables;
	        this.project = project;
	        this.toRespond = [];
	        var len = observables.length;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            this.toRespond.push(i);
	        }
	        for (var i = 0; i < len; i++) {
	            var observable = observables[i];
	            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	        }
	    }
	    WithLatestFromSubscriber.prototype.notifyNext = function (observable, value, observableIndex, index) {
	        this.values[observableIndex] = value;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(observableIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    WithLatestFromSubscriber.prototype._next = function (value) {
	        if (this.toRespond.length === 0) {
	            var values = this.values;
	            var destination = this.destination;
	            var project = this.project;
	            var args = [value].concat(values);
	            if (project) {
	                var result = tryCatch_1.tryCatch(this.project).apply(this, args);
	                if (result === errorObject_1.errorObject) {
	                    destination.error(result.e);
	                }
	                else {
	                    destination.next(result);
	                }
	            }
	            else {
	                destination.next(args);
	            }
	        }
	    };
	    return WithLatestFromSubscriber;
	})(OuterSubscriber_1.OuterSubscriber);
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 543 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var zip_1 = __webpack_require__(544);
	Observable_1.Observable.prototype.zip = zip_1.zipProto;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 544 */
/***/ function(module, exports, __webpack_require__) {

	var zip_static_1 = __webpack_require__(378);
	function zipProto() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return zip_static_1.zip.apply(this, observables);
	}
	exports.zipProto = zipProto;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	var Observable_1 = __webpack_require__(99);
	var zipAll_1 = __webpack_require__(546);
	Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__) {

	var zip_support_1 = __webpack_require__(379);
	function zipAll(project) {
	    return this.lift(new zip_support_1.ZipOperator(project));
	}
	exports.zipAll = zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ }
]);
//# sourceMappingURL=boot.js.map