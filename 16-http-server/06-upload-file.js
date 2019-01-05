#!/usr/bin/node

const http=require('http'),
      log=console.log,
      fs=require('fs');

http.createServer((req,res)=>{
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log(req.headers);
    console.log('');
    if(req.url='/'&&req.method==='GET'){
      show(req,res,uploadpage);
      return;
    }
  if(req.url==='/'&&req.method==='POST'){
    var data='';
    req.setEncoding('binary');
    req.on('data',(chunk)=>{
      data+=chunk;
    })
    req.on('end',()=>{
     // log(data);
     // log(data.split('\r\n'));
      var das=data.split('\r\n');
      //log(das[1]);
     // log(das[4]);
      var filedata=das[4];
      var filename=das[1].split(';')[2].split('=')[1];
      log('filename:',filename);
      log('filedata:',filedata);

     fs.writeFileSync(filename,filedata,'binary');
  })
    show(req,res,backpage);
  }else{
    res.statusCode=404;
    show(req,res,errpage);
  }
}).listen(8080);


function show(req,res,page){
  res.statusCode=(page==='errPage'?404:200);
  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length',Buffer.byteLength(page));
}


const uploadpage=''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title>upload file</title>'
  + '</head>'
  + '<body>'
  + '<h1> upload file</h1>'
    + '<form action="/upload" method="POST" enctype="multipart/form-data">'
      + '<input type="file" name="filename">'
      + '<input type="submit" value="load">'
    + '</form>'
  + ''
  + '</body>'
  + '</html>';

  const errpage=''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title>error</title>'
  + '</head>'
  + '<body>'
  + '<h1>something wrong</h1>'
  + '<a href="/">continue err</a>'
  + '</body>'
  + '</html>';

  const backpage=''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title>back</title>'
  + '</head>'
  + '<body>'
  + '<h1>ok!</h1>'
  + '<a href="/">continue to upload file</a>'
  + '</body>'
  + '</html>';
