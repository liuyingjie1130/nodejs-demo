/*var pi=require('./02-export-var.js');
console.log("pi:",pi);
*/

var circle = require('./02-export-function.js');

console.log('\narea:\t\t', circle(20).area());
console.log('circumference:\t', circle(20).circumference());




/*
var circle = require('./02-export-object');
console.log('\ndiameter:\t', circle.diameter(10));
console.log('circumference:\t', circle.circumference(10));
console.log('area:\t\t', circle.area(10));

*/

