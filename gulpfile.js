'use strict';

let gulp = require('gulp');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let del = require('del');

let browserSync = require('browser-sync');
let reload = browserSync.reload;

gulp.task('default', ['build']);

gulp.task('serve', ['build'], () => {
	browserSync({
		port: 8000,
		notify: true,
		server: {
		}
	});
	gulp.watch(['lib/**/*.js'], ['build', reload]);
	gulp.watch(['index.html'], reload);
});

gulp.task('watch', ['build'], () => {
	gulp.watch(['lib/**/*.js'], 'build');
});

gulp.task('clean', () => {
	return del('build/*');
});

gulp.task('browserify', ['clean'], () => {
	return browserify({
		entries: [
			'lib/remew.js',
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

