#!/usr/bin/node

const trans=require('stream').Transform,
      util    =require('util'),
      stdin=process.stdin,
      stdout=process.stdout;
stdin.setEncoding('utf8');

function mytrans(){
  trans.call(this);
}
mytrans.prototype._transform=function(chunk,encode,cb){
  this.push('\033[1;32m]'+chunk.slice(0,chunk.length-1)+'\033[1;37m]');
cb;
}

util.inherits(mytrans,trans);

var tf=new mytrans();
stdin.pipe(tf).pipe(stdout);
