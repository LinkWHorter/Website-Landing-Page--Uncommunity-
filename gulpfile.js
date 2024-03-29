const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./app"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/main.scss")
        .pipe(sass({includePaths: ['./scss/**']}))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve'])
