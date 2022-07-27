/*
 * @Author: 黄文杰
 * @Date: 2022-07-25 18:41:43
 * @LastEditTime: 2022-07-25 19:50:52
 */
import { MyQueueList } from './index'

describe('链表实现队列', () => {
  it('add 和 length', () => {
    const q = new MyQueueList()
    expect(q.length).toBe(0)
    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.length).toBe(3)
  })

  it('delete', () => {
    const q = new MyQueueList()
    expect(q.delete()).toBeNull()
    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.delete()).toBe(100)
    expect(q.delete()).toBe(200)
    expect(q.delete()).toBe(300)
    expect(q.delete()).toBeNull()
  })
})
