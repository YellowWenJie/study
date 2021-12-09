const express = require('express');

const app = express();

app.get('/user', (req, res) => {
  res.send({ 'name': '黄文杰', 'sex': '男', 'age': '20' })
})

app.post('/user', (req, res) => {
  res.send({ 'name': '彭于晏', 'sex': '男', 'age': '20' })
})

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query)
})

app.get('/test/:id', (req, res) => {
  console.log(req.params);
  res.send(req.params)
})

app.listen(3000, () => {
  console.log("localhost:3000");
})