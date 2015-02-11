var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var gutil = require('gulp-util');
var browserify = require('gulp-browserify');

var paths = {
    scripts: 'private/coffee/*.coffee',
};

gulp.task('clean-scripts', function () {
  return gulp.src([ 'public/javascripts/*.js' ], {read: false})
    .pipe(clean());
});

gulp.task('scripts', [ 'clean-scripts' ], function() {
    return gulp.src(paths.scripts, { read: false })
        .pipe(browserify({
            transform: ['coffee-reactify'],
            extensions: ['.coffee']
        }))
        // .pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = ".js";
        }))
        .pipe(gulp.dest('public/javascripts'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('private/coffee/**/*', ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', [
    'watch',
    'scripts'
]);
