var gulp = require("gulp");
var sass = require("gulp-sass");


gulp.task("scss", function () {
    gulp.src("scss/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(gulp.dest("static/css"))
});

// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
});

gulp.task("default", ["watch"]);