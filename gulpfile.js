// Generated on 2016-07-13 using generator-angular 0.15.1
'use strict';

var gulp = require('gulp');
var jshint = require('jshint');

gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});

// Default task
gulp.task('default', ['clean', 'browser-sync'], function() {

});
