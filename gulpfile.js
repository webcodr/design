var gulp = require('gulp');
require('coffee-script/register');
require('require-dir')('./gulp');

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
