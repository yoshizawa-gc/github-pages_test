var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

// スプライト
var gulp = require('gulp'),
spritesmith = require('gulp.spritesmith');
gulp.task('sprite', function () {
  var spriteData = gulp.src('*.png') // スプライトにする画像(png)
  .pipe(spritesmith({
    imgName: 'sprite.png', // 生成するスプライト画像の名前
    cssName: 'sprite.css', // 生成するsassの名前
    imgPath: '/assets/img/sprite_.png', // sassに記載されるスプライト画像のパス
    cssFormat: 'css', // 生成するCSSのフォーマット
    cssVarMap: function (sprite) {
      sprite.name = 'sprite_' + sprite.name; // sassで使用する変数名
    }
  }));
  spriteData.img.pipe(gulp.dest('_output')); // 生成するスプライト画像の保存場所
  spriteData.css.pipe(gulp.dest('_output')); // 生成するsassの保存場所
});
