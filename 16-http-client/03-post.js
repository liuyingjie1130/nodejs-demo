#!/usr/bin/node

const http=require('http');
const url=require('url');

var address=process.argv[2] || 'http://local:8080';
var options={
    hostname:url.parse(address).hostname,
    port:url.parse(address).port,
    path:url.parse(address).pathname,
    method:'POST',
    headers:{
        'User-Agent':'03-post.js'
    }
};
const req=http.request(options,(res)=>{
    //  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    res.on('data',(chunk)=>{
        console.log(`响应主体: ${chunk}`);
    })
    // console.log(res.headers);

    res.on('end',()=>{
        console.log('nodata')
    });

});

req.write('hello');
req.end();


