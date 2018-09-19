#!/user/bin/node
//console.log('first');
//global.setTimeout(()=>{
 // console.log('second');
//},1000);
//console.log('third');


function Bomb(){
  this.message="Bomb!";
}
Bomb.prototype.explode=function(){
  console.log(this.message);
}
var b= new Bomb;
var timerId=setTimeout(b.explode.bind(b),1000);
//global.clearTimeout(timerId);
