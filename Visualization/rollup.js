require('coffee-script/register');
require('./scripts/create-algorithms.coffee');

if (process.argv[2] === 'production') {
    require('./scripts/rollup-production.coffee');
} else {
    require('./scripts/rollup-development.coffee');
}
