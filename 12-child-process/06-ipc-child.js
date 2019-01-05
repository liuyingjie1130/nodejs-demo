#!/usr/bin/node

console.log('child pid:',process.pid);

process.send('Child process is start!:' +  process.pid);

process.on('message',function(msg){
    console.log('message from father:',msg);
})




