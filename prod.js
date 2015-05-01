'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run the asset pipeline for development. This processes necessary files and copies them to the
 * dest/ folder, but does not perform any minification.
 */
gulp.task('prod', function(cb) {
  // run the following gulp tasks in order
  runSequence(
    'clean',
    'setenv:dev',
    ['js:prod', 'js:bowerFiles', 'styles', 'html', 'images'],
    cb);
});
