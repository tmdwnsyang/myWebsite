// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask
const gulp = require('gulp')
const minify = require('gulp-minify');
 
gulp.task('compress', function(done) {
  gulp.src(['docs/js/*.js', 'docs/js/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('docs'))
    .on ('end', done);
});