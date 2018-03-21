'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch("./*/*").on('change', browserSync.reload);
});
