'use strict';

import gulp from 'gulp';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 11',
    'ff >= 30',
    'chrome >= 21',
    'safari >= 7',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  return gulp.src('src/**/*.scss')
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe($.cssnano())
    .pipe(gulp.dest('dist'));
});

gulp.task('pug', () =>
  gulp.src('_pug/index.pug')
    .pipe($.pug({
       pretty: '\t'
    }))
    .pipe(gulp.dest('example/'))
);

gulp.task('serve', ['pug', 'styles'], () => {
  browserSync({
    notify: false,
    server: ['example', 'dist'],
    port: 3000
  });

  gulp.watch('src/**/*.scss', ['styles', reload]);
  gulp.watch('_pug/**/*.pug', ['pug', reload]);
});

gulp.task('clean', () =>
  del(['dist/*', 'example/dirtycss-grid.css'], {dot: true})
);
