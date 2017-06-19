// 'use strict';

// module.exports = function () {
//     $.gulp.task('change:url', function () {
//         return $.gulp.src('./build/assets/css/foundation.css')
//             .pipe($.gp.urlAdjuster({
//                 replace: ['/fonts', '/build/assets/fonts/fontAwesome'],
//             }))
//             .pipe($.gulp.dest('./build/assets/css/foundation.css'));
//     });
// };
'use strict';

module.exports = function () {
    $.gulp.task('change:url', function () {
        var urlAdjuster = require('gulp-css-url-adjuster');
        return $.gulp.src('./node_modules/font-awesome/css/font-awesome.min.css').
        pipe(urlAdjuster({
                replace: ['../fonts', '/build/assets/fonts/fontAwesome'],
            }))
            .pipe($.gulp.dest('./node_modules/font-awesome/css/font-awesome-modify.min.css'));
    });
};