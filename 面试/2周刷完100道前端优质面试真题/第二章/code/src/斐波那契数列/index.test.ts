/*
 * @Author: 黄文杰
 * @Date: 2022-07-26 20:55:52
 * @LastEditTime: 2022-07-26 21:06:46
 */
import { fibonacci, fibonacci2 } from './index'

describe('斐波那契数列', () => {
  it('0 和 1', () => {
    expect(fibonacci2(0)).toBe(0)
    expect(fibonacci2(1)).toBe(1)
  })

  it('正常情况', () => {
    expect(fibonacci2(2)).toBe(1)
    expect(fibonacci2(3)).toBe(2)
    expect(fibonacci2(6)).toBe(8)
  })

  it('n 小于 0', () => {
    expect(fibonacci2(-1)).toBe(0)
  })
})
