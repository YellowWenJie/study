const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
  let url = req.url;
  let content = '<h1>404</>';
  if (url == '/' || url == '/index.html') {
    content = '<h1>首页</h1>'
  }else if(url == '/about.html'){
    content = '<h1>关于</h1>'
  }
  res.setHeader('Content-Type','text/html;charset=utf-8')
  res.end(content)
});

server.listen(3000,function () {
  console.log('服务器启动成功');
})