R = 'rollup-plugin'

node = require "#{R}-node-resolve"
babel = require "#{R}-babel"
aliasify = require "./#{R}-alias"
commonjs = require "./#{R}-commonjs"
coffeescript = require "#{R}-coffee-script"

top = "#{__dirname}/.."
lib = "#{top}/lib"

module.exports =
    entry: "#{lib}/index.js"
    plugins: [
        coffeescript()
        babel
            exclude: "#{top}/node_modules/**"
        aliasify
            constants: "#{lib}/constants.js"
            components: "../Component/dist/index.min.js"
            util: "#{lib}/util.js"
            settings: "#{lib}/settings.js"
            lodash: "#{lib}/submodules/lodash.js"
        node
            jsnext: true
            main: true
            extensions: ['.js', '.json', '.coffee', '.jsx']
        commonjs
            exclude: ['node_modules/lodash-es/**']
            extensions: ['.js', '.jsx', '.coffee']
    ]
