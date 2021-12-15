const db = require('./db/db')
const express = require('express');

const server = express();

server.get("/",(request,response,next)=>{

})

server.listen(3000,()=>{
  console.log("服务器启动成功");
})