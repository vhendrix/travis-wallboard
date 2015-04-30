var TW = TW || {};

TW.helpers = {
  /**
   * Checks if the given object is empty or not.
   *
   * @param obj
   * @returns {boolean}
   */
  isEmpty: function isEmpty(obj) {
    return (typeof obj === 'undefined') || obj === null ||obj === "" || obj === 0;
  },
  /**
   * Merge the attributes of two objects.
   *
   * @param obj1
   * @param obj2
   * @returns {{}}
   */
  mergeObjects: function mergeObjects(obj1, obj2) {
    var obj3 = {};
    for (var attrname1 in obj1) {
      obj3[ attrname1 ] = obj1[ attrname1 ];
    }
    for (var attrname2 in obj2) {
      obj3[ attrname2 ] = obj2[ attrname2 ];
    }
    return obj3;
  },
  /**
   * Gets a cookie for the given name.
   *
   * @param name
   * @returns {*}
   */
  getCookie: function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[ i ];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }

      if ( c.indexOf(nameEQ) === 0 ) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  },
  /**
   * Sets a cookie to the given name.
   *
   * @param name
   * @param value
   * @param days
   */
  setCookie: function setCookie(name, value, days) {
    var expires;

    if ( days ) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    }
    else {
      expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
};
