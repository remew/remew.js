'use strict';

let gulp = require('gulp');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let del = require('del');

gulp.task('default', ['build']);

gulp.task('clean', () => {
	return del('build/*');
});

gulp.task('browserify', ['clean'], () => {
	return browserify({
		entries: [
			'src/remew.js',
		],
	})
	.bundle()
	.pipe(source('remew.js'))
	.pipe(gulp.dest('build/'));
});

gulp.task('build', ['browserify'], () => {
	gulp.src('build/remew.js')
	.pipe(uglify())
	.pipe(rename('remew.min.js'))
	.pipe(gulp.dest('build/'));
});

