fs = require 'fs'
config = require './rollup-config'
{ rollup } = require 'rollup'

rollup(config).then (bundle) ->
    bundle.write
        format: 'umd'
        moduleName: 'CSVisFrame'
        dest: './build/CSVisFrame.js'
        indent: '\t'
        intro: 'var __DEV__ = true, global = window;'

.then ->
    console.log 'Success.'

.catch (err) ->
    console.warn err
    if err?.codeFrame
        console.log err.codeFrame
