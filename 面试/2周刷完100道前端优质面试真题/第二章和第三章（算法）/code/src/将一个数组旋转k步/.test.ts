/*
 * @Author: 黄文杰
 * @Date: 2022-07-24 01:31:25
 * @LastEditTime: 2022-07-25 10:40:34
 */

import { rorare, rorare2 } from './index'

describe('数组旋转', () => {
  it('正常情况', () => {
    const res = rorare([1, 2, 3, 4, 5, 6, 7], 3)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]) // 断言
  })

  it('数组为空', () => {
    const res = rorare([], 3)
    expect(res).toEqual([]) // 断言
  })
  it('k 是负值', () => {
    const res = rorare([1, 2, 3, 4, 5, 6, 7], -3)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7]) // 断言
  })
  it('k 不是数组', () => {
    // @ts-ignore
    const res = rorare(1, -3)
    expect(res).toEqual(1) // 断言
  })
  it('k 是 0', () => {
    const res = rorare([1, 2, 3, 4, 5, 6, 7], 0)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7]) // 断言
  })
})
