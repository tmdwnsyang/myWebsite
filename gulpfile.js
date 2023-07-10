
const gulp = require('gulp')
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('docs/css/styles.css')
  .pipe(cleanCSS({compatibility:'ie8'}))
  .pipe(gulp.dest('docs/css'));
})

 
gulp.task('compress', function(done) {
  gulp.src(['docs/js/*.js', 'docs/js/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('docs'))
    .on ('end', done);
});