#!/user/bin/node

var buf1=new Buffer(256);
buf1[0]=0;
const log=console.log;
log('buffer length:',buf1.length);
log('buffer content:',buf1);

for(var i=0;i<buf1.length;i++){
  buf1[i]=i;
}
log(buf1);

var buf2=buf1.slice(246,256);
log(buf2);

buf2.fill(0);
log(buf2);
log('buf2 length:',buf2.length);

var arr=[1,2,3,4,5,6,7,8];
var buf3=new Buffer(arr);
log(buf3);
log('buf3 length:',buf3.length);

var buf4=new Buffer('hello world','utf-8');
log(buf4);
log('buf4 lenght:',buf4.length);

buf4.copy(buf3);
log(buf3);
log('buf3 length:',buf3.length);

















