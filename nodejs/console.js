// node v10.3.0

// global console

console.log('global console');

// new console
const logger = require('console');

logger.log('------');
logger.log('count: %d', 90);

// console.assert(value[, ...message])
logger.assert(true, 'yes');

// logger.assert(false, 'no'); 
// throw new assert.AssertionError({
//   ^
// AssertionError: no

// logger.clear(); // ???
// console.count();