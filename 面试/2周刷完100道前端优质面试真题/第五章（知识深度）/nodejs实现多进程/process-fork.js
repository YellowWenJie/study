/*
 * @Author: 黄文杰
 * @Date: 2022-07-29 15:01:11
 * @LastEditTime: 2022-07-29 15:20:34
 */

const http = require('http')
const fork = require('child_process').fork

const server = http.createServer((req, res) => {
  if (req.url === '/get-sum') {
    console.log('主进程 id', process.pid)

    // 开启子进程
    const computeProcess = fork('./compute.js')
    computeProcess.send('开始计算')

    computeProcess.on('message', data => {
      console.log('主进程接收到的信息:', data)
      res.end('sum is ' + data)
    })

    computeProcess.on('close', () => {
      console.log('子进程因保存而退出')
      computeProcess.kill()
      res.end('error')
    })
  }
})

server.listen(3000, () => {
  console.log('listening on http://localhost:3000')
})
