// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask
const gulp = require('gulp')
const minify = require('gulp-minify');
 
gulp.task('compress', function(done) {
  gulp.src(['dist/js/*.js', 'dist/js/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
    .on ('end', done);
});