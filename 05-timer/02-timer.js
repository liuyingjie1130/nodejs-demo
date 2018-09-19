#!/user/bin/node
var count=0;
var timeId=setInterval(()=>{
  console.log('hey!I will loop forever');
  count++;
  if(count==10){
    clearInterval(timeId);
  }

},1000);

//global.setTimeout(()=>{
  //clearInterval(timeId);
//},3000);
