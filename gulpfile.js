const gulp = require('gulp');
const zip = require('gulp-zip');

// Define a new gulp task named bundle.
function bundle() {
  return (
    gulp
      // Include all files in the task except those with "!" at the beginning.
      .src([
        '**/*',
        '!node_modules/**',
        '!src/**',
        '!gulpfile.js',
        '!webpack.config.js',
        '!package.json',
        '!package-lock.json',
        '!.gitignore',
        '!postcss.config.js',
        '!tailwind.config.js',
        '!bundled/**',
        '!eslintrc.js',
      ])
      // Zip all included files.
      .pipe(zip('majestic-gutenberg.zip'))
      // Output them to the bundled directory.
      .pipe(gulp.dest('bundled'))
  );
}

// Export the bundle task.
exports.bundle = bundle;
