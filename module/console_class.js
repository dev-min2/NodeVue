
const fs = require('fs');
const { Console } = require('console');

const output = fs.createWriteStream('./stdout.log');
const errOutput = fs.createWriteStream('./stderr.log');

const logger = new Console( {stdout: output, stderr : errOutput} );
const count = 10;
logger.log('count : %d', count);
logger.error('하하하');

