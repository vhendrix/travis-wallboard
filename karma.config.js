// Karma configuration
// Generated on Fri Apr 24 2015 22:18:23 GMT+0200 (CEST)

module.exports = function (config) {
  config.set(
    {

      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',

      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: [ 'jasmine' ],

      // list of files / patterns to load in the browser
      files: [
        './js/Libraries/Jquery/*.js',
        './js/Libraries/Angular/*.js',
        './js/Libraries/Angular/Plugins/*.js',
        './js/Objects/objects.js',
        './js/app.js',
        './js/services.js',
        './js/resources.js',
        './js/Controllers/controllers.js',
        './js/Controllers/RepoController.js',
        './js/Controllers/ProjectController.js',
        './js/Controllers/SettingsController.js',
        './js/Controllers/MenuController.js',
        './js/Controllers/TestController.js',
        './js/filters.js',
        './js/directives.js',
        './js/*.js',
        './Tests/**/*Spec.js'
      ],

      // list of files to exclude
      exclude: [
        './js/Libraries/Angular/*.min.js',
        './js/Libraries/Angular/Plugins/*.min.js'
      ],

      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {},

      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: [ 'verbose-summary' ],

      // web server port
      port: 9876,

      // enable / disable colors in the output (reporters and logs)
      colors: true,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,

      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,

      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: [ 'Chrome' ],

      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false
    }
  );
};
