/*
 * @Author: 黄文杰
 * @Date: 2022-07-26 22:52:18
 * @LastEditTime: 2022-07-26 23:22:20
 */

import { moveZero1, moveZero2 } from './index'

describe('将数组中的 0 移动到末尾', () => {
  it('正常情况', () => {
    const arr = [1, 0, 3, 4, 5, 0, 0, 0, 0, 2, 3, 0]
    moveZero1(arr)
    expect(arr).toEqual([1, 3, 4, 5, 2, 3, 0, 0, 0, 0, 0, 0])
  })

  it('没有 0', () => {
    const arr = [1, 2, 4, 5]
    moveZero1(arr)
    expect(arr).toEqual([1, 2, 4, 5])
  })

  it('全是 0', () => {
    const arr = [0, 0, 0, 0, 0, 0, 0]
    moveZero1(arr)
    expect(arr).toEqual([0, 0, 0, 0, 0, 0, 0])
  })
})

describe('双指针', () => {
  it('正常情况', () => {
    const arr = [1, 0, 3, 4, 5, 0, 0, 0, 0, 2, 3, 0]
    moveZero2(arr)
    expect(arr).toEqual([1, 3, 4, 5, 2, 3, 0, 0, 0, 0, 0, 0])
  })

  it('没有 0', () => {
    const arr = [1, 2, 4, 5]
    moveZero2(arr)
    expect(arr).toEqual([1, 2, 4, 5])
  })

  it('全是 0', () => {
    const arr = [0, 0, 0, 0, 0, 0, 0]
    moveZero2(arr)
    expect(arr).toEqual([0, 0, 0, 0, 0, 0, 0])
  })
})
