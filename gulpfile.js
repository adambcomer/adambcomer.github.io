'use strict';

const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const sitemap = require('gulp-sitemap');
const htmlmin = require('gulp-htmlmin');

sass.compiler = require('sass');

function html() {
  return src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true, minifyJS: true, minifyURLs: true, processScripts: ['application/ld+json'] }))
    .pipe(dest('build'))
}

function sitemap_build() {
  return src(['src/**/*.html', 'src/**/*.pdf'], { read: false })
    .pipe(sitemap({ siteUrl: 'https://adambcomer.com' }))
    .pipe(dest('build'))
}

function css() {
  return src('src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('build/css'))
}

function copy() {
  return src(['src/**/*.pdf', 'src/**/*.ico', 'src/**/*.xml', 'src/**/*.txt', 'src/**/CNAME'])
    .pipe(dest('build'))
}

function copyImages() {
  return src(['src/images/**'])
    .pipe(dest('build/images'))
}

exports.css = css;
exports.html = html;
exports.copy = copy;
exports.copyImages = copyImages;
exports.sitemap_build = sitemap_build;

exports.default = function () {
  parallel([css, sitemap_build, copy, html, copyImages])()

  watch('src/**/*.scss', css);
  watch(['src/**/*.html', 'src/**/*.pdf'], sitemap_build);
  watch(['src/**/*.pdf', 'src/**/*.ico', 'src/**/*.xml', 'src/**/*.txt', 'src/**/CNAME'], copy);
  watch(['src/images/**'], copyImages);
  watch('src/**/*.html', html)
};