'use strict';

var gulp = require('gulp');
var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var open = require('open');

gulp.task('serve', ['html:watch', 'styles:watch', 'js:watch', 'images:watch'], function () {
  var port = 9000, 
      app;

  app = connect().use(serveStatic('dist'));
  http.createServer(app).listen(port, function () {
    open('http://localhost:' + port);
  });
});

