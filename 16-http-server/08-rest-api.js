#!/usr/bin/node 

const http=require('http'),
      log=console.log,
      qs=require('querystring'),
      url=require('url');

 
var items=['chi','spleep'];
http.createServer((req,res)=>{

  console.log(req.method);
  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'POST':
      add(req,res);
      break;
    case 'DELETE':
      remove(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    defult:
     res.end('error!')
  }
}).listen(8080);

function select(req,res){
  var msg= JSON.stringify(items);
  res.statusCode=200;
  res.setHeader('Content-Type','application/json');

  res.setHeader('Content-length',Buffer.byteLength(msg));
  res.end(msg);

  }
function add(req,res){
  var data='';
  req.on('data',(chunk)=>{
    data+=chunk;
  })
  req.on('end',()=>{
    var item=qs.parse(data).item;
    if(item!=='') items.push(item);
  })
  res.end('ok!');
}
function update(req,res){
  res.end(req.method);
}
function remove (req,res){
  if( req.url==='/'){
    items=[];
  }else{
    var id=qs.parse(url.parse(req.url).query).id;
    log('ID:',id);
    if(id>=0&&id<items.length){
      items.splice(id,1);
      res.end('ok')
    }else{res.end('error!')}
  }
  res.end('ok!');
}
