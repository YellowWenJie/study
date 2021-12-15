//写
const fs = require("fs");
//创建写入流
// fs.createWriteStream(文件路径，【可选的配置操作】)
let cws = fs.createWriteStream("hello.txt",{flag:'w',encoding:"utf-8"})
console.log(cws);

//监听文件打开事件
cws.on('open',function () { 
  console.log("文件打开");
 })
//监听文件写入事件
cws.on('ready',function () { 
  console.log("文件写入");
 })
//监听文件关闭事件
cws.on('close',function () { 
  console.log("文件关闭");
 })

 cws.write("heloWorld1!\n",(err)=>{
   if(err) console.log(err);
   console.log("内容流入完成");
 })
 

 cws.end(()=>{
   console.log("文件写入关闭");
 })