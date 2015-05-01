'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var size = require('gulp-size');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

/**
 * Include sourcemaps, no minification
 * TODO: use filters instead of gulp.src exclusions format
 */
gulp.task('js:dev', function() {
  return gulp.src(['app/**/*.js', '!**/*_test.js', '!**/*_mocks.js'])
	.pipe(sourcemaps.init())
	.pipe(concat('app.js'))
    .pipe(sourcemaps.write())
	.pipe(size({
	  showFiles: true,
	  title: 'js:dev after concat and sourcemaps:'
	}))
	.pipe(gulp.dest('dist/'));
});

/**
 * Do minification, no sourcemaps.
 */
gulp.task('js:prod', function() {
  return gulp.src(['app/**/*.js', '!**/*_test.js', '!**/*_mocks.js'])
	.pipe(concat('app.js'))
	.pipe(size({
	  showFiles: true,
	  title: 'js:prod after concat:'
	}))
	.pipe(ngAnnotate())
	.pipe(size({
	  showFiles: true,
	  title: 'js:prod after annotate:'
	}))
	.pipe(uglify())
	.pipe(size({
	  showFiles: true,
	  title: 'js:prod after uglify:'
	}))
	.pipe(gulp.dest('dist/'));
});

/**
 * TODO figure out best way to include modernizr.
 */
gulp.task('js:modernizr', function() {
  gulp.src('bower_components/foundation/js/vendor/modernizr.js')
	.pipe(gulp.dest('dist/'));
});

/**
 * Gather all js files that we're including with bower, concatenate them, and put them in our dist/
 * directory.
 *
 * Note: no need to do minification. Instead, use overrides in package.json.
 */
gulp.task('js:bowerFiles', function() {
  gulp.src(mainBowerFiles())
	.pipe(size({
	  showFiles: true,
	  title: 'bowerFiles before concat:'
	}))
	.pipe(concat('bowerFiles.js'))
	.pipe(gulp.dest('dist/'))
	.pipe(size({
	  showFiles: true,
	  title: 'bowerFiles after concat:'
	}));
});

gulp.task('js:watch', function() {
  gulp.watch('app/**/*.js', ['js:dev']);
});
