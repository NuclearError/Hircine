// Gulp
var gulp = require('gulp');

// Gulp plugins
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');

// GULP TASKS //

// Compile and minify SCSS to CSS
gulp.task('compileCSS', function() {
    return sass('scss/styles.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

// Watch files for changes
gulp.task('watchFiles', function() {
  gulp.watch('scss/*.scss', ['compileCSS']);
});

// Gulp Tasks
gulp.task('default', ['compileCSS', 'watchFiles']);
