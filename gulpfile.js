var gulp = require('gulp');
var coffee = require('gulp-coffee');
var react = require('gulp-react');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var gutil = require('gulp-util');
var amdOptimize = require("amd-optimize");

var paths = {
    scripts: 'private/coffee/**/*.coffee',
};

gulp.task('clean-scripts', function () {
  return gulp.src([ 'public/javascripts/*.js' ], {read: false})
    .pipe(clean());
});

gulp.task('scripts', [ 'clean-scripts' ], function() {
    return gulp.src(paths.scripts)
        .pipe(coffee({bare:true, header: false}).on('error', gutil.log))
        .pipe(react())
        .pipe(amdOptimize("core", {
          paths : {
            'jquery': 'public/components/jquery/dist/jquery',
            'underscore': 'public/components/underscore-amd/underscore',
            'backbone': 'public/components/backbone-amd/backbone',
            'react': 'public/components/react/react-with-addons'
          },
          baseURL: "/javascripts"
        }))
        .pipe(concat('app.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', [
    'watch',
    'scripts'
]);
