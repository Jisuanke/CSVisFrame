_ = require 'lodash'
fs = require 'fs'

algo = "#{__dirname}/../lib/Algorithm"
files = fs.readdirSync algo

content = _ files
    .filter (file) -> file.endsWith '.coffee'
    .map    (file) -> file.replace /\.coffee$/, ''
    .reject (file) -> file is 'Algorithm'
    .map    (name) -> "export { default as #{name} } from './#{name}';"
    .join   '\n'

fs.writeFileSync "#{algo}/index.js", content
