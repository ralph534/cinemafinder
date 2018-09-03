var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


gulp.task('browserify', function(){
     return browserify('../src/index.js')
          .transform('reactify');
           bundle()
          .pipe(source('src/index.js'))
          .pipe(gulp.dest('dist/js'))
          .pipe(browserSync.stream())
})


gulp.task('html', function(){
  return gulp.src('public/index.html')
          .pipe(gulp.dest('dist'))
          .pipe(browserSync.stream())
});

gulp.task('sass', function(){
  return gulp.src('src/sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream())
});

gulp.task('js', function(){
  return gulp.src('src/js/vendors/*.*')
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream())
});

gulp.task('serve',['sass'], function(){

    browserSync.init({
      server: "./src/js"
   });

})


gulp.task('default',['browserify', 'html', 'sass', 'js'], function(){
    return gulp.watch('src/**/*.*', ['browserify', 'html', 'sass', 'serve', 'js']);
           gulp.watch("public/*.html").on('change', browserSync.reload);
})
