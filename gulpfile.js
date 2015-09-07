var gulp = require('gulp'),
    connect = require('gulp-connect'),
    build = require('./semantic/tasks/build'),
    watch = require('./semantic/tasks/watch');

gulp.task('webserver', function () {
    connect.server();
});

gulp.task('build ui', build);
gulp.task('watch ui', watch);

gulp.task('default', ['webserver', 'watch ui']);

