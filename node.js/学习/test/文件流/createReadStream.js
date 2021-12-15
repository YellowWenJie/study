//读
const fs = require("fs");

//创建读取流
// fs.createReadStream(文件路径，【可选的配置操作】)
let crs = fs.createReadStream("aa.mp4",{flag:'r'})
// fs.createWriteStream(文件路径，【可选的配置操作】)
let cws = fs.createWriteStream("a.mp4",{flag:'w',encoding:"utf-8"})


//监听文件打开事件
crs.on('open',function () { 
  console.log("文件打开");
 })
 //每一批数据流入完成
 crs.on('data',function(e){
   console.log(e);
   console.log("单批尺寸大小"+e.length);

   cws.write(e,(err)=>{
    if(err) console.log(err);
    console.log("内容流入完成");
  })
 })
 //监听文件关闭事件
crs.on('close',function () { 
  console.log("文件关闭");
  cws.end()
 })
