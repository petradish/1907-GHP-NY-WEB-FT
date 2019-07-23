console.log(`hello i'm running with node version ????`);

// include a.js, include b.js, so that i have access to num1 and num2
const {num1, foo} = require('./a');
const stuffFromFileB = require('./b');

// include external library that i installed
const chalk = require('chalk');

console.log('the sum of 2 numbers is: ', num1 + stuffFromFileB);

console.log(chalk.green('foo: ', foo));


// module.exports - what to expose to other files that might `require` it

// require - a function to 'import' what was exported (via `module.exports`) in another file
