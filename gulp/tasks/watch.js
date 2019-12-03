const { watch, task, series, parallel } = require('gulp'),
	browserSync = require('browser-sync').create(),
	{ compilePug, compileSass } = require('./markup.js'),
	{ rawDir } = require('../variables__directory.js'),
	del = require('del');

function cleanUp() {
	return del(['./dist/public']);
}

function reload(done) {
	browserSync.reload();
	done();
}

task('build', series(parallel('scriptTask', 'markupTask'), 'imgTask'));

task(
	'serve',
	series('build', function watchParty() {
		browserSync.init({
			open: false,
			injectChanges: true,
			server: './dist'
		});

		watch(rawDir.styles, compileSass);
		watch(rawDir.scripts, series('scriptTask', reload));
		watch([rawDir.html, rawDir.htmlPartial]).on(
			'change',
			series(compilePug, reload)
		);
		watch(rawDir.img).on('change', series('imgTask', reload));
	})
);

task('default', series(cleanUp, 'serve'));
