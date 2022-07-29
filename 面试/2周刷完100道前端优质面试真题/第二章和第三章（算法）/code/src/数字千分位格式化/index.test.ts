/*
 * @Author: 黄文杰
 * @Date: 2022-07-28 11:56:59
 * @LastEditTime: 2022-07-28 12:03:27
 */
import { format1, format2 } from './index'

describe('转化为数组', () => {
  it('正常情况', () => {
    const arg = 123456789
    expect(format1(arg)).toBe('123,456,789')
  })

  it('传入个位数', () => {
    const arg: number = 1
    expect(format1(arg)).toBe('1')
  })
})

describe('分析字符串', () => {
  it('正常情况', () => {
    const arg = 123456789
    expect(format2(arg)).toBe('123,456,789')
  })

  it('传入个位数', () => {
    const arg: number = 1
    expect(format2(arg)).toBe('1')
  })
})
