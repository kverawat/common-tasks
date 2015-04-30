'use strict';

var gulp = require('gulp');
var size = require('gulp-size');

gulp.task('libs', ['angular2'], function () {

  var lib_paths = [
	'node_modules/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js',
	'node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.src.js',
	'node_modules/systemjs/lib/extension-register.js',
	'node_modules/angular2/node_modules/zone.js/zone.js',
	'node_modules/angular2/node_modules/zone.js/long-stack-trace-zone.js'
  ];
  
  return gulp.src(lib_paths)
    .pipe(size({showFiles: true, gzip: true}))
    .pipe(gulp.dest('dist/lib'));
});
