/* eslint-disable no-unused-vars */
const rawDir = {
		html: './app/**/*.pug',
		htmlPartial: './app/pug-templates/**/*.pug',
		nothtmlPartial: '!./app/pug-templates/**/*.pug', //not this
		styleFile: './app/assets/scss/styles.scss',
		styles: './app/assets/scss/**/*.scss',
		scripts: './app/assets/js/**/*.js',
		img: './app/assets/img/*'
	},
	serveDir = {
		html: './dist',
		styles: './dist/public/css/',
		scripts: './dist/public/js/',
		img: './dist/public/img/'
	};

exports.rawDir = rawDir;
exports.serveDir = serveDir;
