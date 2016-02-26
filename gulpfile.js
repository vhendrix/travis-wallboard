'use strict';
let gulp = require('gulp');
let runSequence = require('run-sequence');
const typescript = require('gulp-typescript');
const del = require('del');
let clientCopyTask = require('./tasks/client_copy');
let clientBuildTask = require('./tasks/client_build');
let clientTestTask = require('./tasks/client_test');
let liveReloadTask = require('./tasks/livereload');
let serverStartTask = require('./tasks/server_start');
let serverCopyTask = require('./tasks/server_copy');
let librariesCopyTask = require('./tasks/libraries_copy');
let mocksCopyTask = require('./tasks/mocks_copy');
let generalCopyTask = require('./tasks/general_copy');
let cleanTask = require('./tasks/clean');
let protractorTask = require('./tasks/protractor');

const tscConfig = require('./tsconfig.json');

gulp.task('server-start', serverStartTask());
gulp.task('server-copy-dist', serverCopyTask());

gulp.task('general-copy-dist', generalCopyTask());

gulp.task('livereload', liveReloadTask());

gulp.task('client-copy', clientCopyTask(false, liveReloadTask.notifyChanged));
gulp.task('client-copy-dist', clientCopyTask(true));
gulp.task('libraries-copy', librariesCopyTask(false, liveReloadTask.notifyChanged));
gulp.task('libraries-copy-dist', librariesCopyTask(true));
gulp.task('mocks-copy', mocksCopyTask(false, liveReloadTask.notifyChanged));
gulp.task('mocks-copy-dist', mocksCopyTask(true));
gulp.task('client-build', clientBuildTask(false, liveReloadTask.notifyChanged));
gulp.task('client-build-dist', clientBuildTask(true));
gulp.task('client-test', clientTestTask(true));
gulp.task('client-test-dev', clientTestTask(false));

gulp.task('clean', cleanTask());

gulp.task('serve', function(done) {
  runSequence(
    'clean',
    ['client-build', 'client-copy','libraries-copy', 'mocks-copy', 'livereload'],
    'server-start',
    done
  )
});

gulp.task('test', function(done) {
  runSequence(
    'client-test',
    done
  )
});

gulp.task('test-dev', function(done) {
  runSequence(
    'client-test-dev',
    done
  )
});


// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('server/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
      .src('client/**/*.ts')
      .pipe(typescript(tscConfig.compilerOptions))
      .pipe(gulp.dest('server/app'));
});


gulp.task('build', ['compile']);
gulp.task('default', ['build']);

gulp.task('test-e2e', protractorTask());

gulp.task('dist', function(done) {
  runSequence(
    'clean',
    ['client-build-dist', 'client-copy-dist', 'server-copy-dist', 'general-copy-dist'],
    done
  );
});
