var gulp = require('gulp');

var coffee = require('gulp-coffee');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
  clientCoffee: ['assets/coffee/*.coffee'],
    css: ['assets/less/*.less']
};

gulp.task('less', function () {
  return gulp.src(paths.css)
    .pipe(less())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('client-coffee', function() {
  return gulp.src(paths.clientCoffee)
    .pipe(coffee({bare: true}))
    // .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('server-coffee', function() {
  return gulp.src(['**/*.coffee', '!assets/**'])
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['client-coffee']);
  gulp.watch(['**/*.coffee', '!assets/**'], ['server-coffee']);
  gulp.watch(paths.css, ['less']);
});

gulp.task('default', ['client-coffee', 'server-coffee', 'less', 'watch']);
