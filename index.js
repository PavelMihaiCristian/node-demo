const _ = require('underscore');
//the following are the steps that the require takes to find the module
//core module
//file or folder
//node_modules

const value = _.contains([1,2,3],2);
console.log(value);