var gulp   = require('gulp');
var gutil  = require('gulp-util');
var coffee = require('gulp-coffee');

gulp.task('log', function(){
  gutil.log('gulp-util test');
});

var coffeeSources = ['components/coffee/tagline.coffee'];

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({ bare: true })
      .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});