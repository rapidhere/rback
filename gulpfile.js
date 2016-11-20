const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const run = require('gulp-run');

const distDir = 'dist';

gulp.task('run', ['build'], electronStart);
gulp.task('build', ['build-html', 'build-typescript']);
gulp.task('build-typescript', buildTypescript);
gulp.task('build-html', buildHtml);
gulp.task('clean', clean);

// gulp.task('watch', () => {
//   gulp.watch(['src/**/*'], ['restart-s']);
// });

// tasks
function buildHtml() {
  gulp.src('src/**/*.html')
    .pipe(htmlmin()) // TODO: define htmlmin properties
    .pipe(gulp.dest(distDir));
}

function buildTypescript() {
  return tsProject
    .src()
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest(distDir));
}

function clean() {
  del(distDir);
}

function electronStart() {
  return run('electron .').exec();
}
