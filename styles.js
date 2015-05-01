'use strict';

var gulp = require('gulp');
var size = require('gulp-size');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

/**
 * Copy app.css to dist/ without any minification
 */
gulp.task('styles:dev', ['styles:scss'], function() {
  gulp.src('app/styles/app.css')
    .pipe(gulp.dest('dist/css/'));
});

/**
 * Miniy app.css (which was created in the styles:scss task). Copy the result to dist/.
 */
gulp.task('styles:prod', ['styles:scss'], function() {
  gulp.src('app/styles/app.css')
    .pipe(size({
      showFiles: true,
      title: 'size of initial css'
    }))
    .pipe(minifyCss({processImport: false}))
    .pipe(size({
      showFiles: true,
      title: 'size of css after minify'
    }))
    .pipe(gulp.dest('dist/css/'));
});

/**
 * Compile app.scss into a CSS file. This is a synchronous task (using the "return a stream"
 * paradigm) so that it will finish before "styles:dev" or "styles:prod" attempt to copy the
 * generated CSS.
 */
gulp.task('styles:scss', function() {
  return gulp.src('app/styles/app.scss')
    .pipe(size({
      showFiles: true,
      title: 'initial scss files'
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(sass({
      errLogToConsole: true,
      includePaths: ['bower_components/foundation/scss/']
    }))
    .pipe(sourcemaps.write())
    .pipe(size({
      showFiles: true,
      title: 'compiled css files with sourcemaps'
    }))
    .pipe(gulp.dest('app/styles/'));
});

/**
 * Watch for changes to our SCSS files. If a SCSS file changes, run the 'styles:css' task again
 * (which will in turn run the 'styles:scss' task as well).
 */
gulp.task('styles:watch', function() {
  console.log('implement me');
});
