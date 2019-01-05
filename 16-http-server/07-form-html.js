#!/usr/bin/node

const http=require('http'),
      url=require('url'),
      qs=require('querystring');

var itmes=[];
http.createServer((req,res)=>{
  if(req.url==='/'&&req.method==='GET'){
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log(req.headers);
    console.log('');

    var data=qs.parse(req.url).query;
    if((typeof data.item)!=='undefind'){
    items.push(data.item);
    }
    

    showPage(req,res);
  }else if(req.url==='/'&&req.method==='POST'){
    //parse data
    var data='';
    req.on('data',(chunk)=>{
      data+=chunk;
    })
    req.on('end',()=>{
      var list=qs.parse(data);
      if(list.item!=='') items.push(list.item);
    });
    showPage(req,res);
  }else{
    res.statusCode=404;
    res.end('error!')
  }
}).listen(8080);
function showPage(req,res){
var html= res.readFileSync('todo-list-template.js').toString('utf-8');

var content=items.map(function(item){
  return '<li>'+item+'</li>';
}).join('\n');
html=html.replace('%',content);
res.end(html);
}
