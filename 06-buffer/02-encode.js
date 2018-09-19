#!/user/bin/node

const name=process.argv[2];
const pwd=process.argv[3];
var str=name+':'+pwd;

var buf=new Buffer(str,'utf8');
console.log("base64:",buf.toString('base64'));
