const { src, series, task, dest } = require('gulp'),
	{ rawDir, serveDir } = require('../variables__directory.js'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');

function compressImages(cb) {
	src(rawDir.img)
		.pipe(
			imagemin({
				progressive: true,
				use: [pngquant()]
			})
		)
		.pipe(dest(serveDir.img));
	cb();
}

task('imgTask', series(compressImages));
