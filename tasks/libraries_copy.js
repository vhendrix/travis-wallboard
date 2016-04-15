'use strict';
let gulp = require('gulp');
let config = require('./config').libraries;

module.exports = function() {
  return function() {
    return gulp.src(config.source)
      .pipe(gulp.dest(config.destination));
  }
};
