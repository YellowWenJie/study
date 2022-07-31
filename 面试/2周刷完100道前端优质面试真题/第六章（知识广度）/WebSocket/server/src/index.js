/*
 * @Author: 黄文杰
 * @Date: 2022-07-30 18:44:23
 * @LastEditTime: 2022-07-30 18:51:23
 */
const { WebSocketServer } = require('ws')

const wsServer = new WebSocketServer({ port: 3000 })

const list = new Set()

wsServer.on('connection', curWs => {
  console.log('connected')

  // 这里不能一直被 add。实际使用中，这里应该有一些缓存的机制，长期用不到的 ws 要清除
  list.add(curWs)

  curWs.on('message', msg => {
    console.log('received message', msg.toString())

    // 传递给其他客户端
    list.forEach(ws => {
      if (ws === curWs) return
      ws.send(msg.toString())
    })
  })
})
