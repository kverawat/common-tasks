'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var traceur = require('gulp-traceur');

gulp.task('js:dev', function () {
  return gulp.src('app/**/*.js')
    .pipe(rename({extname: ''})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
    .pipe(plumber())
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true,
      memberVariables: true
    }))
    .pipe(rename({extname: '.js'})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
    .pipe(gulp.dest('dist'));
});

gulp.task('js:prod', function() {
  console.log('js:prod implement me');
});

gulp.task('js:modernizr', function() {
  console.log('js:modernizr implement me');
});

gulp.task('js:bowerFiles', function() {
  console.log('js:bowerFiles implement me');
});

// doc: whenever any javascript file changes, run the js task
gulp.task('js:watch', function() {
	gulp.watch('app/**/*.js', ['js:dev']);
});
