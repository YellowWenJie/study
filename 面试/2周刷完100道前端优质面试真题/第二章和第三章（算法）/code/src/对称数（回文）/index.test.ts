/*
 * @Author: 黄文杰
 * @Date: 2022-07-27 18:09:19
 * @LastEditTime: 2022-07-27 19:59:58
 */
import {
  findPalindromeNumbers3,
  findPalindromeNumbers2,
  findPalindromeNumbers1,
} from './index'

describe('使用数组反转、比较', () => {
  it('正常情况', () => {
    const numbers = findPalindromeNumbers1(200)
    expect(numbers.length).toBe(29)
  })
  it('max 小于等于 0', () => {
    const numbers = findPalindromeNumbers1(-1)
    expect(numbers).toEqual([])
  })
})

describe('字符串头尾比较', () => {
  it('正常情况', () => {
    const numbers = findPalindromeNumbers2(200)
    expect(numbers.length).toBe(29)
  })
  it('max 小于等于 0', () => {
    const numbers = findPalindromeNumbers2(-1)
    expect(numbers).toEqual([])
  })
})

describe('生成翻转数', () => {
  it('正常情况', () => {
    const numbers = findPalindromeNumbers3(200)
    expect(numbers.length).toBe(29)
  })
  it('max 小于等于 0', () => {
    const numbers = findPalindromeNumbers3(-1)
    expect(numbers).toEqual([])
  })
})
