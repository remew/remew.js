'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');

const browserSync = require('browser-sync');
const reload = browserSync.reload;

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

