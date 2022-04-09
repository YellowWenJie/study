const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{ 
  const str = `您请求的URL地址是${req.url},请求的method属性是${req.method}`;
  res.setHeader('Content-Type','text/html;charset=utf-8')
  res.end(str);
 })

 server.listen(3000,function () { 
   console.log("localhost:3000");
  })