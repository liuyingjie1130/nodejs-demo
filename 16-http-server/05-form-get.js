#!/usr/bin/node

const http=require('http'),
      url=require('url'),
      qs=require('querystring');

var items=[];
http.createServer((req,res)=>{
  if(url.parse(req.url).pathname==='/'&&req.method==='GET'){
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log(req.headers);
    console.log('');

    var data=qs.parse(url.parse(req.url).query);
    if(typeof data.item!=='undefind'){
    items.push(data.item);
    }
    

    var html=''
 +'<!DOCTYPE html>'
 +'<html lang="en">'
 +'<head>'
 +'<meta charset="utf-8">'
 +'<title>hello</title>'
  +'</head>'
 +'<body>'
 +'<h1>todolist</h1>'
 +'<ul>'
  items.map(function(item){
      return '<li>'+item+'</li>';
        
  }).join('\n')
+'</ul>'
+'<form method="GET" action="/">'
   +'<input type="text" name="item">'
     +'<input type="submit" value="Add Item">'
 +'</form>'

     +'</body>'
    +'</html>';

    res.end(html);
  }else{
    res.statusCode=404;
    res.end('error!')
  }
}).listen(8080);
