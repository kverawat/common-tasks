'use strict'

var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'));
});

/**
 * Whenever an html file in the app/ folder changes, copy the new html file to the dist/ folder
 */
gulp.task('html:watch', function() {
  watch('app/**/*.html')
	.pipe(gulp.dest('dist/'));
});
