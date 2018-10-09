#!/usr/bin/nonde
const stdin=process.stdin,
      stdout=process.stdout,
      trans=require('stream').Transform;
stdin.setEncoding('utf8');
var tf=new trans();
tf._transform=function(chunk,encode,cb){
  this.push(chunk.toString('utf8').toUpperCase());
  cb;
}
stdin.pipe(tf).pipe(stdout);
