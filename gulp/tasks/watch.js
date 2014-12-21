var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
    gulp.watch(config.sass.src, ['sass']);
    gulp.watch(['./src/js/**/*.js', '.src/js/**/*.hbs'], ['browserify']);
});
