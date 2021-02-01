

const lodash = require('lodash');

const str = "abcdef";

// const result = str.indexOf("cd") > -1;

const result = lodash.includes('abcdef', 'cd');

console.log(result);

const mathUtil = require('./math.js');

console.log(mathUtil.pow(2, 3));

module.exports = {
    sayHello: function() {
        return "Hello!"
    }
}