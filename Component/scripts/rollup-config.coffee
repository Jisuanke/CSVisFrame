node = require 'rollup-plugin-node-resolve'
alias = require './rollup-plugin-alias'
commonjs = require './rollup-plugin-commonjs'
coffeescript = require 'rollup-plugin-coffee-script'

root = "#{__dirname}/.."

module.exports =
	entry: "#{root}/lib/index.js"
	plugins: [
		coffeescript()
		commonjs
			include: ["#{root}/node_modules/**", "#{root}/lib/**" ]
			exclude: ["#{root}/node_modules/lodash-es/**"]
			extensions: [ '.js', '.coffee' ]
		node     jsnext: true, main: true
	]
