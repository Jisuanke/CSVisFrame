_ = require 'lodash'
fs = require 'fs'

# Bump versions
npm = require '../package.json'


version = npm.version.split('.').map (digit) -> parseInt digit
version[version.length - 1] += 1

npm.version = version.join '.'

fs.writeFileSync "#{__dirname}/../package.json", JSON.stringify npm, null, 2
