var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config').sass;

gulp.task('sass', function () {
    return sass(config.src, config.settings)
        .pipe(autoprefixer(config.support))
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));
});
