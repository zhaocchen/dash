const gulp = require('gulp');

gulp.task("webpack", () => {
	const webpack = require("webpack-stream"),
		config = require("./webpack.config.js")
	gulp.src("./js/*.js")
		.pipe(webpack(config))
		.pipe(gulp.dest("../main/js"));
});
gulp.task("less", () => {
	const less = require("gulp-less");
	gulp.src("./less/*.less")
		.pipe(less())
		.pipe(gulp.dest("../main/css"));
});
gulp.task("default", ["webpack", "less"]);