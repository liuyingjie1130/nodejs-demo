#!/usr/bin/node

var cp=require('child_process');
console.log('I am father process:',process.pid);
cp.spawn('node',['02-child.js'],{detached:true,stdio:['ignore',1,2]});


//cmd.stdout.pipe(process.stdout);

global.setTimeout(function(){
    console.log('I am father,goodbye!');
    process.exit(100);
},6000);




