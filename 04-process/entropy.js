#!/user/bin/node
var argv=process.argv;
var sum=0;
for(var i=2;i<argv.length;i++){
    if(argv[i]<0||argv[i]>1){
      console.log("请输入大于0小于1的数");
      process.exit();
   }
    if(typeof Number(argv[i])!=='number'){
      console.log(typeof argv[i]);
      console.log("请输入数字!");
    }
    sum+=argv[i];
}
if(sum!=1){
  console.log("概率和不为1！")
}
