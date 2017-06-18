'use strict';

module.exports = function() {
  $.gulp.task('webpack', function() {
    return $.gulp.src($.path.source + '/js/pages/index.js')
        .pipe($.gp.webpack({
            entry: {
                index: $.path.source + '/js/pages/index.js',
                about: $.path.source + '/js/pages/about.js',
                portfolio: $.path.source + '/js/pages/portfolio.js',
                blog: $.path.source + '/js/pages/blog.js'
            },
            output: {
                filename: '[name].js'
            }
        }))
        .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};