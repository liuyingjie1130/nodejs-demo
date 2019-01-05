#!/usr/bin/node
var cp=require('child_process');

console.log('i am father,pid:',process.pid);

var cmd=cp.fork('06-ipc-child.js');
global.setTimeout(function(){ cmd.send('I am father,pid:' + process.pid);
},3000)

cmd.on('message',function(msg){
    console.log('child-msg:',msg);
})
//
//
//
//const cp = require('child_process');

//console.log('I am father process. PID:', process.pid);

//var child = cp.fork('./06-ipc-child.js');

//child.on('message', (msg) => {
//console.log('msg from child:', msg);

//});

//setTimeout(() => {
// child.send('I am father process. PID: ' + process.pid);

//}, 2000);





