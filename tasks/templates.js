'use strict';

// To Modularize HTML Using Template Engines and Gulp
// https://mozilla.github.io/nunjucks/
// http://zellwk.com/blog/nunjucks-with-gulp/

var gulp     = require('gulp');
var config   = require('../gulp.config.js');
var $        = require('gulp-load-plugins')();

gulp.task('templates', function () {
  return gulp.src(config.source.templates + '/pages/**/*.+(njk|nunjucks)')
    .pipe($.data(function() { return require('../' + config.source.templates + '/config.json') }))
    .pipe($.nunjucksRender({ path: config.source.templates }))
    .pipe($.prettify({ indent_size: 2 }))
    .pipe($.size({ title: 'Build templates', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dist.templates));
});
