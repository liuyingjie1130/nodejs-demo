#!/usr/bin/node

const fs=require('fs');
var file=process.argv[2] || __filename;
var fid=fs.readFileSync(file).toString('utf8');
try{
  console.log(fid);
}catch{
  console.error('sorry!');
  process.exit(1000);
}

