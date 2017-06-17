'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
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
  gp: require('gulp-load-plugins')(),
  cleanCSS: require('gulp-clean-css')
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
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
