const fs = require('fs');
const path = require('path');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  let url = req.url;
  // const fpath = path.join(__dirname, url);//请求http://localhost:3000/public/index.html
  let fpath = null;
  if (url == '/') {
    fpath = path.join(__dirname, '/public/index.html');
  } else {
    fpath = path.join(__dirname, '/public', url);
  }
  fs.readFile(fpath, 'utf8', (err, data) => {
    if (err) {
      return res.end('404')
    } else {
      return res.end(data)
    }
  })

});

server.listen(3000, function () {
  console.log('服务器启动成功');
});