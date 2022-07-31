/*
 * @Author: 黄文杰
 * @Date: 2022-07-30 20:55:17
 * @LastEditTime: 2022-07-30 20:57:17
 */
const set = new Set()

onconnect = event => {
  const port = event.port[0]

  set.add(port)

  // 接收信息
  port.onconnect = e => {
    // 广播消息
    set.forEach(p => {
      p.postMessage(d.data)
    })
  }

  // 发送信息
  port.postMessage('work.js done')
}
