/*
 * @Author: 黄文杰
 * @Date: 2022-07-25 12:37:19
 * @LastEditTime: 2022-07-25 13:19:06
 */

import { MyQueue } from './index'

describe('俩个栈实现一个队列', () => {
  it('add 和 length', () => {
    const q = new MyQueue()
    expect(q.length).toBe(0)

    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.length).toBe(3)
  })

  it('delete', () => {
    const q = new MyQueue()
    expect(q.delete()).toBeNull()
    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.delete()).toBe(100)
    expect(q.length).toBe(2)
    expect(q.delete()).toBe(200)
    expect(q.length).toBe(1)
  })
})
