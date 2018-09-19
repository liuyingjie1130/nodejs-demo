#!/user/bin/node
var pid=process.argv[2];
var sig=process.argv[3];
if(process.argv.length!==4||isNaN(Number(pid))){
  console.error('参数错误！');
    process.exit(1);
}
else{
  process.kill(pid,sig);
}
