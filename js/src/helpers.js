class Helper {

    constructor() {
        this.useLocalStorage = null;
    }

    /**
     * Checks if the given object is empty or not.
     *
     * @param obj
     * @returns {boolean}
     */
    isEmpty(obj) {
        return (typeof obj === 'undefined') || obj === null || obj === "" || obj === 0;
    }

    /**
     * Merge the attributes of two obj  ects.
     *
     * @param obj1
     * @param obj2
     * @returns {{}}
     */
    mergeObjects(obj1, obj2) {
        var obj3 = {};
        for (var attrname1 in obj1) {
            obj3[attrname1] = obj1[attrname1];
        }
        for (var attrname2 in obj2) {
            obj3[attrname2] = obj2[attrname2];
        }
        return obj3;
    }

    /**
     * Gets a cookie for the given name.
     *
     * @param name
     * @returns {*}
     */
    getCookie(name) {
        JSON.parse($.cookie(name));
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

    getPersistentValue(name) {
        if (this.hasLocalStorage()) {
            return this.getFromLocalStorage(name);
        } else {
            return this.getCookie(name);
        }
    }

    setPersistentValue(name, value) {
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
