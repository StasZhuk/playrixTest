'use strict';

module.exports = function () {
    $.gulp.task('smartgrid', function () {
        /* It's principal settings in smart grid project */
        var settings = {
            outputStyle: 'sass',
            /* less || scss || sass || styl */
            columns: 12,
            /* number of grid columns */
            offset: "30px",
            /* gutter width px || % */
            container: {
                maxWidth: '1170px',
                /* max-width оn very large screen */
                fields: '15px' /* side fields */
            },
            breakPoints: {
                lg: {
                    'width': '1170px',
                    /* -> @media (max-width: 1100px) */
                    'fields': '15px' /* side fields */
                },
                md: {
                    'width': '992px',
                    'fields': '15px'
                },
                sm: {
                    'width': '760px',
                    'fields': '15px'
                },
                xs: {
                    'width': '480px',
                    'fields': '10px'
                }
                /* 
                We can create any quantity of break points.

                some_name: {
                    some_width: 'Npx',
                    some_offset: 'N(px|%)'
                }
                */
            }
        };

        $.smartgrid('./source/style/layout', settings);
    });


};