#!/usr/bin/node
console.log(process.pid);

var timer=global.setInterval(function(){
    console.log('time:',Date.now());
},1500)

global.setTimeout(function(){
    global.clearInterval(timer);
},15000);
