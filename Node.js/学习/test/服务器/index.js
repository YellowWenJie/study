let http = require("http")

server = http.createServer();

server.on('request',function (request,response) { 
  console.log(request);
  response.end('helloworld')
 })

 server.listen(3000,function () { 
   console.log("请求成功");
  })