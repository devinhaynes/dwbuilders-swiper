const { series, parallel, src, dest, watch } = require('gulp');
const imagemin = require('gulp-imagemin');
const minifyJS = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

async function copyHtml() {
    src('src/*.html')
        .pipe(dest('prod'));
}

async function imgMin() {
    src('src/photos/*')
        .pipe(imagemin())
        .pipe(dest('prod/photos'));
}

async function jsMin() {
    src('src/*.js')       
        .pipe(concat('main.js'))
        .pipe(minifyJS())
        .pipe(dest('prod'));
}

async function cssMin() {
    src('src/*.css')
        .pipe(cleanCSS())
        .pipe(dest('prod'));
}

function watchFiles() {
    watch('src/*.js', jsMin);
    watch('src/*.css', cssMin);
    watch('src/*.html', copyHtml);
    watch('src/photos', imgMin);
}

exports.default = parallel(copyHtml, imgMin, jsMin, cssMin);
exports.watch = series(watchFiles);