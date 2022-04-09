const express = require('express');

app = express();

//挂载路由
app.get('/', (req, res) => {
  res.send('HelloWorld')
})

app.listen(80, () => {
  console.log("localhost:80");
})