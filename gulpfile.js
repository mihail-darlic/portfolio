const { src, dest, parallel, watch } = require('gulp');
const del = require('del');
const browserSync = require("browser-sync");
const sass = require('gulp-sass');
const twig = require('gulp-twig');

const path = {
   src: {
      html: './src/index.html',
      css: './src/scss/style.scss',
      js: './src/js/script.js',
      img: './src/img/**/*.{jpg,png,svg}',
      fonts: './src/fonts/**/*.{woff, woff2, ttf}'
   },
   dist: {
      html: './dist',
      css: './dist/css',
      js: './dist/js',
      img: './dist/img',
      fonts: './dist/fonts'
   },
   watch: {
      html: ['./src/index.html', './src/partials/**/*.html'],
      css: "./src/scss/**/*.scss",
      js: './src/js/script.js',
      img: './src/img/**/*.{jpg,png,svg}',
      fonts: './src/fonts/**/*.{woff, woff2, ttf}'
   },
   clean: './dist/**/*'
}

function html() {
   return src(path.src.html)
      .pipe(twig())
      .pipe(dest(path.dist.html))
      .pipe(browserSync.reload({stream: true}))
}

function css() {
   return src(path.src.css)
      .pipe(sass())
      .pipe(dest(path.dist.css))
      .pipe(browserSync.stream())
}

function js() {
   return src(path.src.js)
      .pipe(dest(path.dist.js))
      .pipe(browserSync.reload({stream: true}))
}

function img() {
   return src(path.src.img)
      .pipe(dest(path.dist.img))
      .pipe(browserSync.reload({stream: true}))
}

function fonts() {
   return src(path.src.fonts)
      .pipe(dest(path.dist.fonts))
      .pipe(browserSync.reload({stream: true}))
}

function clean() {
   return del(path.clean);
}

function watching() {
   browserSync.init({
      server: {
         baseDir: "./dist"
      },
      notify: false
   });

   watch(path.watch.html, html);
   watch(path.watch.css, css);
   watch(path.watch.js, js);
   watch(path.watch.img, img);
   watch(path.watch.fonts, fonts);
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.clean = clean;
exports.watching = watching;

exports.default = parallel(clean, html, css, js, img, fonts, watching);