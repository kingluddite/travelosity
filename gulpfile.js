var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('You just ran a Gulp task');
});

gulp.task('html', function() {
    console.log("HTML stuff here");
});

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css').pipe(postcss([cssvars, autoprefixer])).pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });

});
