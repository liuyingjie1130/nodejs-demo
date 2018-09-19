#!/user/bin/node
const msg=['name','email','qq','mobile'];
var i=0,
    me={};

console.log(msg[0]+':');
process.stdin.on('data',(data)=>{
 me[msg[i]]=data.slice(0,data.length-1).toString();
if(i<3)
{ console.log(msg[++i]+':');}
else{
  console.log(me);
  process.exit();

}

})
