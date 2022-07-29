/*
 * @Author: 黄文杰
 * @Date: 2022-07-27 10:00:33
 * @LastEditTime: 2022-07-27 15:52:00
 */
import { findContinousChar1, findContinousChar2 } from './index'

describe('字符串中连续最多的字符，以及次数', () => {
  it('正常情况', () => {
    const str = '11bbaaadddFFFFFRRRRR@@@@@@@@'
    const res = findContinousChar1(str)
    expect(res).toEqual({ char: '@', length: 8 })
  })

  it('空字符串', () => {
    const str = ''
    const res = findContinousChar1(str)
    expect(res).toEqual({ char: '', length: 0 })
  })
  it('无连续字符', () => {
    const str = 'abc'
    const res = findContinousChar1(str)
    expect(res).toEqual({ char: 'a', length: 1 })
  })
  it('全部都是连续字符', () => {
    const str = 'aaaaaaaaaa'
    const res = findContinousChar1(str)
    expect(res).toEqual({ char: 'a', length: 10 })
  })
})

describe('字符串中连续最多的字符，以及次数', () => {
  it('正常情况', () => {
    const str = '11bbaaadddFFFFFRRRRR@@@@@@@@'
    const res = findContinousChar2(str)
    expect(res).toEqual({ char: '@', length: 8 })
  })

  it('空字符串', () => {
    const str = ''
    const res = findContinousChar2(str)
    expect(res).toEqual({ char: '', length: 0 })
  })
  it('无连续字符', () => {
    const str = 'abc'
    const res = findContinousChar2(str)
    expect(res).toEqual({ char: 'a', length: 1 })
  })
  it('全部都是连续字符', () => {
    const str = 'aaaaaaaaaa'
    const res = findContinousChar2(str)
    expect(res).toEqual({ char: 'a', length: 10 })
  })
})
