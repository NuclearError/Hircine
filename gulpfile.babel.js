// Gulp
import gulp from 'gulp';
import sass from 'gulp-ruby-sass';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';

// GULP TASKS //

// Compile and minify SCSS to CSS
gulp.task('compileCSS', () => {
  sass('scss/styles.scss', { style: 'compressed' })
    .pipe(autoprefixer())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'));
});

// Watch files for changes
gulp.task('watchFiles', () => {
  gulp.watch('scss/*.scss', ['compileCSS']);
});

// Gulp Tasks
gulp.task('default', ['compileCSS', 'watchFiles']);
