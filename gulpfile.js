var gulp = require('gulp');

var less = require('gulp-less');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
    css: ['assets/less/*.less']
};

gulp.task('less', function () {
  return gulp.src(paths.css)
    .pipe(less())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('public/stylesheets'));
});


gulp.task('watch', function() {
  gulp.watch(paths.css, ['less']);
});

gulp.task('default', ['less', 'watch']);
