#!/usr/bin/node

var cp=require('child_process');
console.log('father pid:',process.pid);
cp.fork('node',['02-child.js']);

global.setTimeout(function(){
    console.log('I am father,bye!');
    process.exit(100);
},6000);


