/*
 * @Author: 黄文杰
 * @Date: 2022-07-26 13:10:20
 * @LastEditTime: 2022-07-26 14:51:09
 */
import { findTowNumbers1, findTowNumbers2 } from './index'

describe('俩数之和为n(双层 for 循环)', () => {
  it('正常情况', () => {
    const arr = [1, 2, 4, 7, 11, 15]
    const res = findTowNumbers1(arr, 15)
    expect(res).toEqual([4, 11])
  })

  it('空数组', () => {
    const res = findTowNumbers1([], 100)
    expect(res).toEqual([])
  })

  it('找不到结果', () => {
    const arr = [1, 2, 4, 7, 11, 15]
    const n = 100
    const res = findTowNumbers1(arr, n)
    expect(res).toEqual([])
  })
})

describe('俩数之和为n(双指针)', () => {
  it('正常情况', () => {
    const arr = [1, 2, 4, 7, 11, 15]
    const res = findTowNumbers2(arr, 15)
    expect(res).toEqual([4, 11])
  })

  it('空数组', () => {
    const res = findTowNumbers2([], 100)
    expect(res).toEqual([])
  })

  it('找不到结果', () => {
    const arr = [1, 2, 4, 7, 11, 15]
    const n = 100
    const res = findTowNumbers2(arr, n)
    expect(res).toEqual([])
  })
})
