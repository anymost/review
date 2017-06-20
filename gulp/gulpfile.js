var gulp = require('gulp');

gulp.task('default', function () {
	gulp.src('./server.js')
	.pipe(minify())
	.pipe(gulp.dest('./bundle.js'));
});
