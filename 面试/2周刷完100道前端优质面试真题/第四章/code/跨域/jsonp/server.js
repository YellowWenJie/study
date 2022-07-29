/*
 * @Author: 黄文杰
 * @Date: 2022-07-28 23:18:22
 * @LastEditTime: 2022-07-28 23:55:33
 */
const http = require('http')
const app = http.createServer((req,res) => {
  try {
    const callback = req.url.split('=')[1]
    res.statusCode = 200
    res.end(`${callback}({"data":"hello world"})`)
  } catch (error) {
    console.error(error.message)
  }
})
app.listen('5001',()=>{
  console.log('http://127.0.0.01:5001')
})