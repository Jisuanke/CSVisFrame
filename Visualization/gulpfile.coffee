fs = require 'fs'
less = require 'gulp-less'
path = require 'path'
gulp = require 'gulp'
source = require 'vinyl-source-stream'
uglify = require 'gulp-uglify'
symlink = require 'gulp-symlink'
babelify = require 'babelify'
coffeeify = require 'coffeeify'
coffeelint = require 'gulp-coffeelint'
browserify = require 'browserify'
vueify = require 'vueify'
watchify = require 'watchify'

log = (content) -> ->
    console.log content

gulp.task 'style', ->
    gulp.src './lib/stylesheets/*.less'
        .pipe less()
        .pipe gulp.dest './build/css'

# Builds JavaScript for demo
gulp.task 'build', ->
    browserify
        cache: {}
        packageCache: {}
        entries: [ './demo/src/index.coffee' ]
        extensions: [ '.coffee', '.js' ]
        transform: [ coffeeify, babelify ]
    .transform vueify
    .bundle()
    .on 'error', (error) ->
        console.error error
    .pipe source 'index.js'
    .pipe gulp.dest './demo/build/js'
    .on 'end', log 'Bundled index.js'
# watchify for demo
gulp.task 'watch', ->
    bundle = (name, bundler) ->
        bundler
            .bundle()
            .on 'error', console.log
            .pipe source name
            .pipe gulp.dest './demo/build/js/'
            .on 'end', -> console.log name, 'bundled'
        bundler

    createBundler = (name, entries) ->
        bundler = watchify browserify {
            cache: {}
            packageCache: {}
            entries: ['./demo/src/index.coffee']
            extensions: [ '.coffee', '.js' ]
            transform: [coffeeify, babelify]
        }
        bundler =
            bundler
                .transform vueify
                .on 'update', ->
                    bundle name, bundler
        bundle name, bundler
    createBundler 'index.js', ['./demo/src/index.coffee']

gulp.task 'default', ['style', 'build' ]
