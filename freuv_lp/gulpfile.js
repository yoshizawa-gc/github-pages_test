var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var browser = require('browser-sync');
var ssi = require('browsersync-ssi');
var concat = require('gulp-concat');
var image = require('gulp-image');
var spritesmith = require('gulp.spritesmith');
// var path = require('path');
// var foreach = require('gulp-foreach');
var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();


// 画像最適化のタスク
gulp.task('image', function () {
  gulp.src(['assets/_img/**/*.+(png|jpg|jpeg|gif|svg|webp)', '!assets/_img/sprite/**'])
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      advpng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true
    }))
    .pipe(gulp.dest('assets/img'));
});

// スプライト /assets/_img/sprite/任意/にカレント移動してから「gulp sprite」コマンドを走らせる
var gulp = require('gulp'),
spritesmith = require('gulp.spritesmith');
gulp.task('sprite', function () {
  var spriteData = gulp.src('assets/_img/sprite/**/*.png') // スプライトにする画像(png)
  .pipe(spritesmith({
    imgName: 'sprite.png', // 生成するスプライト画像の名前
    cssName: '/_output/sprite.css', // 生成するsassの名前
    imgPath: '/_output/sprite.png', // sassに記載されるスプライト画像のパス
    cssFormat: 'css', // 生成するCSSのフォーマット
    cssVarMap: function (sprite) {
      sprite.name = 'sprite_' + sprite.name; // sassで使用する変数名
    }
  }));
  spriteData.img.pipe(gulp.dest('assets/img')); // 生成するスプライト画像の保存場所
  spriteData.css.pipe(gulp.dest('assets/sass')); // 生成するsassの保存場所
});

// オートリロードのタスク & ssiインクルード有効化
gulp.task('server', function() {
  browser.init({
    server: {
      notify: false,
      baseDir: './',
      directory: false,
      middleware: [
        ssi({
          baseDir: __dirname + '',
          ext: '.html'
        })
      ]
    },
    // open: false
  });
});

// Compassのタスク
gulp.task('compass',function(){
  gulp.src(['assets/sass/*.scss'])
  .pipe(plumber())
  .pipe(browser.reload({stream:true}))
  .pipe(compass({
    config_file: 'config.rb',
    comments : false,
    css: 'assets/css',
    sass: 'assets/sass'
  }));
});

// CSSのタスク
gulp.task('css', function() {
  return gulp.src('assets/css/style.css')
  .pipe(csso())
  .pipe(gulp.dest('assets/css'))
  .pipe(cachebust.resources())
  .pipe(browser.reload({stream:true}))
});

// Javascriptのタスク 圧縮
// gulp.task('js', function() {
//   gulp.src(['assets/js/*.js'])
//   .pipe(plumber())
//   .pipe(uglify())
//   .pipe(concat('scripts.js'))
//   .pipe(gulp.dest('assets/js/min'))
//   .pipe(browser.reload({stream:true}))
// });

// Javascriptのタスク 非圧縮
gulp.task('js', function() {
  return gulp.src(['assets/js/*.js'])
  .pipe(cachebust.resources())
  .pipe(browser.reload({stream:true}))
});

// HTMLのタスク
gulp.task('html', function() {
  return gulp.src(['**/*.html', '!wp/**'])
  .pipe(cachebust.resources())
  .pipe(browser.reload({stream:true}))
});

gulp.task('default',['server'], function() {
  gulp.watch('assets/_img/**/*.+(png|jpg|jpeg|gif|svg|webp)',['image']);
  gulp.watch('assets/sass/*.scss',['compass']);
  gulp.watch('assets/css/*.css',['css']);
  gulp.watch('assets/js/*.js',['js']);
  gulp.watch('**/*.html',['html']);
});
