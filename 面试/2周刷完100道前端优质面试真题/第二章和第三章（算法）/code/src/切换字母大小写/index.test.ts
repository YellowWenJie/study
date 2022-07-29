/*
 * @Author: 黄文杰
 * @Date: 2022-07-28 12:27:48
 * @LastEditTime: 2022-07-28 12:39:04
 */
import { switchLetterCase2, switchLetterCase } from './index'
describe('正则表达式', () => {
  it('正常', () => {
    const arg = 'AdeRF5sadQQQ'
    expect(switchLetterCase(arg)).toBe('aDErf5SADqqq')
  })

  it('空字符串', () => {
    const arg = ''
    expect(switchLetterCase(arg)).toBe('')
  })

  it('非字母', () => {
    const arg = '1你好'
    expect(switchLetterCase(arg)).toBe('1你好')
  })
})

describe('正则表达式', () => {
  it('正常', () => {
    const arg = 'AdeRF5sadQQQ'
    expect(switchLetterCase2(arg)).toBe('aDErf5SADqqq')
  })

  it('空字符串', () => {
    const arg = ''
    expect(switchLetterCase2(arg)).toBe('')
  })

  it('非字母', () => {
    const arg = '1你好'
    expect(switchLetterCase2(arg)).toBe('1你好')
  })
})
