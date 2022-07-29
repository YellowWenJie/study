/*
 * @Author: 黄文杰
 * @description: 子进程
 * @Date: 2022-07-29 15:11:14
 * @LastEditTime: 2022-07-29 15:21:01
 */

function getSum() {
  let sum = 0

  for (let i = 0; i < 10000; i++) {
    sum += i
  }

  return sum
}

process.on('message', data => {
  console.log('子进程 id', process.pid)
  console.log('子进程接收到的信息', data)

  const sum = getSum()

  // 发送消息给主进程
  process.send(sum)
})
