import { MyQueue } from './../俩个栈实现一个队列/index'
/*
 * @Author: 黄文杰
 * @Date: 2022-07-25 18:41:34
 * @LastEditTime: 2022-07-25 21:33:02
 */

interface IListNode {
  value: number
  next: IListNode | null
}

export class MyQueueList {
  private head: IListNode | null = null
  private tail: IListNode | null = null
  private len = 0

  add(n: number) {
    const newNode: IListNode = {
      value: n,
      next: null,
    }

    // 处理 head
    if (this.head === null) {
      this.head = newNode
    }

    // 处理 tail
    const tailNode = this.tail
    if (tailNode) {
      tailNode.next = newNode
    }
    this.tail = newNode

    this.len++
  }

  delete(): number | null {
    const headNode = this.head
    if (headNode === null) return null
    if (this.len <= 0) return null

    // 取值
    const value = headNode.value

    // 处理 head
    this.head = headNode.next

    // 记录长度
    this.len--

    return value
  }

  get length(): number {
    return this.len
  }
}

// 性能测试
const q1 = new MyQueueList()
console.time('queue')
for (let i = 0; i < 10 * 10000; i++) {
  q1.add(i)
}
for (let i = 0; i < 10 * 10000; i++) {
  q1.delete()
}
console.timeEnd('queue') // 17.8681640625 ms

const q2 = []
console.time('queue1')
for (let i = 0; i < 10 * 10000; i++) {
  q2.push(i)
}
for (let i = 0; i < 10 * 10000; i++) {
  q2.shift()
}
console.timeEnd('queue1') // 703.5927734375 ms
