//required stuff
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var liveReload = require('browser-sync');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');


//minify js
gulp.task('scripts', function(){
    return gulp.src('app/controllers/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/dist'));
});

//minify css
gulp.task('css', function(){
    return gulp.src('app/css/*.css')
        .pipe(concatCss('scripts.min.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('app/dist'));
});

//create css
gulp.task('less', function(){
    return gulp.src('app/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('app/dist'));
});

//reload
gulp.task('reload-when-done', ['scripts', 'css', 'less'], function(){
    liveReload.reload();
});

//set watchers to reload
gulp.task('watch', function(){
    liveReload({
        server: {
            baseDir:'app/'
        }
    });
    gulp.watch('app/controllers/*.js', ['reload-when-done']); //js change
    gulp.watch('app/css/*.css', ['reload-when-done']); //css change
    gulp.watch('app/less/*.less', ['reload-when-done']); //less change
    gulp.watch('app/partials/*.html', ['reload-when-done']); //html change
});

//default
gulp.task('default', ['scripts', 'less', 'css', 'watch'], function(){});