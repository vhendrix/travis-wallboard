'use strict';

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
        return JSON.parse($.cookie(name));
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
        console.debug(value);
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
}
