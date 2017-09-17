'use strict';

// Include Gulp & tools we'll use
var gulp = require('gulp');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

// Watch files for changes & reload
gulp.task('serve', function() {
  browserSync({
    port: 5000,
    notify: false,
    logPrefix: 'APP',
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    },
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: {
      baseDir: [''],
      middleware: [historyApiFallback()]
    }
  });

  gulp.watch('*.html', browserSync.reload);
});
