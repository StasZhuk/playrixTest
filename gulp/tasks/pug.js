'use strict';

module.exports = function() {
  var YOUR_LOCALS = './content.json';
  $.gulp.task('pug', function() {
    return $.gulp.src(['./source/template/**/*.pug', '!./source/template/**/_*.pug'])
      .pipe($.gp.pug({ 
        // locals: JSON.parse($.fs.readFile(YOUR_LOCALS, 'utf-8')),
        locals: YOUR_LOCALS,
        pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
