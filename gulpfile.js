'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    source: './source',
    task: require('./gulp/paths/tasks.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
  },
  gulp: require('gulp'),
  del: require('del'),
  buffer: require('vinyl-buffer'),
  imagemin: require('gulp-imagemin'),
  merge: require('merge-stream'),
  csso: require('gulp-csso'),
  browserSync: require('browser-sync').create(),
  smartgrid: require('smart-grid'),
  gcmq: require('gulp-group-css-media-queries'),
  webpack: require('webpack'),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'webpack',
    'copy:image',
    'copy:font',
    'css:foundation',
    'sprite:svg',
    'sprite:png'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
