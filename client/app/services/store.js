'use strict';

import {Injectable} from 'angular2/core';
import {RepoSettings}    from '../components/Settings/reposettings.model';
@Injectable()

export class Store {
    useLocalStorage = false;

    constructor() {
        this.useLocalStorage = this.hasLocalStorage();
    }

    /**
     * Gets a cookie for the given name.
     *
     * @param name
     * @returns {*}
     */
    getCookie(name) {
        let value = $.cookie(name);
        if(typeof value === 'undefined') {
            return null;
        }
        return JSON.parse();
    }

    /**
     * Sets a cookie to the given name.
     *
     * @param name
     * @param value
     * @param days
     */
    setCookie(name, value, days) {
        if (typeof(value) !== "string") {
            value = JSON.stringify(value);
        }
        $.cookie(name, value, {expires: days, path: '/'});

    }

    setToLocalStorage(name, value) {
        if (typeof(value) !== "string") {
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(name, value);
    }

    getFromLocalStorage(name) {
        let data = window.localStorage.getItem(name);


        try {
            return JSON.parse(data);
        }
        catch (e) {
            return data;
        }
    }

    getValue(name) {
        if (this.hasLocalStorage()) {
            return this.getFromLocalStorage(name);
        } else {
            return this.getCookie(name);
        }
    }

    setValue(name, value) {
        if (this.hasLocalStorage()) {
            return this.setToLocalStorage(name, value);
        } else {
            return this.setCookie(name, value, 700);
        }
    }

    hasLocalStorage() {
        return typeof(Storage) !== "undefined";
    }

    /**
     * Get all settings for repositories.
     *
     * @returns {RepoSettings}
     */
    getRepoSettings() {
        let users =  this.getValue('users');
        let repos = [];
        if (typeof users !== 'undefined' && users !== null) {
            repos = users.map((settings) => {
                let ret = new RepoSettings(settings.name, settings.token, settings.refreshRate);
                return ret;
            });
        }

        return repos;
    }
}
