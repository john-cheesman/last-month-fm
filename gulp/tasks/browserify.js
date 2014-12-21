var browserify   = require('browserify');
var gulp         = require('gulp');
var source       = require('vinyl-source-stream');
var config       = require('../config').browserify;

gulp.task('browserify', function() {
  var browserifyThis = function(bundleConfig) {

    var bundler = browserify({
      // Specify the entry point of your app
      entries: bundleConfig.entries,
      // Add file extentions to make optional in your requires
      extensions: config.extensions,
      // Enable source maps!
      debug: config.debug
    });

    var bundle = function() {
      return bundler
        .bundle()
        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specifiy the
        // desired output filename here.
        .pipe(source(bundleConfig.outputName))
        // Specify the output destination
        .pipe(gulp.dest(bundleConfig.dest));
    };

    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  config.bundleConfigs.forEach(browserifyThis);
});
