var gulp = require("gulp"),
    gutil = require("gulp-util"),
    watchify = require("watchify"),
    browserify = require("browserify"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    minifyCSS = require("gulp-minify-css"),
    uglify = require("gulp-uglify"),
    transform = require("vinyl-transform"),
    jshint = require("gulp-jshint"),
    stylish = require("jshint-stylish"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    source = require('vinyl-source-stream'),
    eslint = require('gulp-eslint');


path = "./html/app/",
    jsMwPath = path,
    jsMwGlob = path + '/**/*.+(jsx|js)',
    jsPath = path + "ts",
    jsDestPath = "./public/" + "js",
    jsLibPath = jsPath + "/libs",
    jsLibGlob = jsLibPath + "/*.js",
    cssPath = "./public/" + "css",
    scssPath = path + "scss",
    scssGlob = scssPath + "/*.scss",
    jsLibList = [ jsLibPath + "/jquery-min.js",
        jsLibPath + "/bootstrap-min.js",
        jsLibPath + "/lodash-min.js"
    ];

function scssSucess () {
    gutil.log("SCSS has been compiled");
}

gulp.task("scss-build", function() {
    return gulp.src(scssGlob)
        .pipe(sass({ errLogToConsole: true, onSuccess: scssSucess }))
        .pipe(minifyCSS())
        .pipe(rename(function(path) {
            path.basename += ".caz";
        }))
        .pipe(gulp.dest(cssPath));

});

gulp.task("js-lib-build", function() {
    return gulp.src(jsLibGlob)
        .pipe(concat("libs.js"))
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += ".caz";
        }))
        .pipe(gulp.dest(jsDestPath));
});

gulp.task("mw-js-build", function() {
    return browserify(jsMwPath + '/entry.js')
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('app.js'))
        .pipe(rename(function(path) {
            path.basename += ".caz";
        }))
        .pipe(gulp.dest(jsDestPath));
});

gulp.task("mw-watch", function() {
    gulp.watch([ scssGlob ], [ "scss-build" ]);
    gulp.watch([ jsMwGlob ], [ "mw-js-build" ]);
    gulp.watch([ jsLibGlob ], [ "js-lib-build" ]);
});

gulp.task("mw-build", [ "scss-build", "mw-js-build", "js-lib-build"]);