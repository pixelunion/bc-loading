var gulp = require('gulp');
var rollup = require('gulp-rollup')
var babel = require('rollup-plugin-babel');
var commonjs = require('rollup-plugin-commonjs');

gulp.task('default', ['bundle']);

gulp.task('bundle', function() {
  gulp.src('./src/js/**.js')
    .pipe(rollup({
      entry: './src/js/loading.js',
      plugins: [
        babel({
          babelrc: false,
          exclude: 'node_modules/**/*',
          presets: ['es2015-rollup']
        }),
        commonjs()
      ]
    }))
    .pipe(gulp.dest('./dist/js/'));
});
