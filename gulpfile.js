const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const del = require('del');

gulp.task('build', compile);
gulp.task('clean', clean);

// gulp.task('watch', () => {
//   gulp.watch(['src/**/*'], ['restart-s']);
// });

// tasks

function compile() {
  return tsProject
    .src()
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('dist'));
}

function clean() {
  del('dist');
}
