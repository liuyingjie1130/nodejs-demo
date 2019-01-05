#!/usr/bin/node

const fs=require('fs');
var file=process.argv[2] || __filename;
var fid=fs.readFileSync(file).toString('utf8');
var src=fs.createReadStream(file).pipe(process.stdout);

src.on('error',(err)=>{
  console.error(err.message);
  process.exit(1);
})

src.on('open',()=>{
  console.log('open')
  this.pipe(process.stdout);
})

//全局异常处理
//process.on('uncaughtException',(err)=>{
//  console.error(err.message);
//  process.exit(100);
//})
