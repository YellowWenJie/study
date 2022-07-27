/*
 * @Author: 黄文杰
 * @Date: 2022-07-25 11:55:12
 * @LastEditTime: 2022-07-25 12:29:35
 */
import { matchBrackets } from './index'

describe('括号匹配', () => {
  it('正常情况', () => {
    const str = '{a[b(c)d]e}'
    expect(matchBrackets(str)).toBe(true)
  })

  it('不匹配', () => {
    const str = '{a(b(c)d]e}'
    expect(matchBrackets(str)).toBe(false)
  })

  it('顺序不一致', () => {
    const str = '[a(b{c}d)e]f'
    expect(matchBrackets(str)).toBe(true)
  })

  it('重复括号', () => {
    const str = '({{[a[b]]}})'
    expect(matchBrackets(str)).toBe(true)
  })
})
