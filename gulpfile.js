// Generated on 2016-07-13 using generator-angular 0.15.1
'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    changed = require('gulp-changed'),
    browserSync = require('browser-sync');

gulp.task('default', ['less', 'watch', 'browserSync'], function() {
    gulp.watch('{app/styles/**/*.less}').on('change', browserSync.reload);
});

