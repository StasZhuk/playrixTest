'use strict';

module.exports = function() {
    const webpack = require('webpack');
    
    $.gulp.task('webpack', function() {
        return $.gulp.src($.path.source + '/js/pages/index.js')
            .pipe($.gp.webpack({
                entry: {
                    index: $.path.source + '/js/pages/index.js',
                },
                output: {
                    filename: '[name].js'
                },
                plugins: [
                    new webpack.ProvidePlugin({
                        $: 'jquery',
                        jQuery: 'jquery'
                    })
                ]
            }))
            .pipe($.gulp.dest($.config.root + '/assets/js'))
    })
};