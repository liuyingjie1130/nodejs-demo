#!/usr/bin/node

var cp=require('child_process');

console.log(cp.execFileSync('cat',['01-exec-file.js']).toString('utf-8'));




