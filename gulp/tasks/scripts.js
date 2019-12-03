const { src, task, dest, series } = require('gulp'),
	{ rawDir, serveDir } = require('../variables__directory.js'),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream'),
	webpackConfig = require('../../webpack.config.js'),
	eslint = require('gulp-eslint'),
	log = require('fancy-log');

function lintScripts() {
	return src(rawDir.scripts)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}

function compileScripts() {
	return src(rawDir.scripts)
		.pipe(
			webpackStream(webpackConfig, webpack, (err, stats) => {
				if (err) {
					log(err.toString());
				}
				log(stats.toString());
			})
		)
		.pipe(dest(serveDir.scripts));
}

task('scriptTask', series(lintScripts, compileScripts));
