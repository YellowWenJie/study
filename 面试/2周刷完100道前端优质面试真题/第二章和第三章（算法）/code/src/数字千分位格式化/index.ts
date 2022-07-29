/*
 * @Author: 黄文杰
 * @Date: 2022-07-28 10:48:04
 * @LastEditTime: 2022-07-28 12:08:27
 */
/**
 * @description: 转化为数组
 * @param {number} n
 * @return {*}
 */
export function format1(n: number): string {
  if (n < 1000) return n.toString()
  n = Math.floor(n) // 只考虑整数
  const s = n.toString()
  const arr = s.split('').reverse()
  return arr.reduce((prev, val, index) => {
    if (index % 3 === 0) {
      if (prev) {
        return val + ',' + prev
      } else {
        return val
      }
    } else {
      return val + prev
    }
  }, '')
}

/**
 * @description: 字符串分析
 * @param {number} n
 * @return {*}
 */
export function format2(n: number): string {
  if (n < 1000) return n.toString()

  n = Math.floor(n)

  let res = ''

  const s = n.toString()
  const length = s.length

  for (let i = length - 1; i >= 0; i--) {
    const j = length - i
    if (j % 3 === 0) {
      if (i === 0) {
        res = s[i] + res
      } else {
        res = ',' + s[i] + res
      }
    } else {
      res = s[i] + res
    }
  }

  return res
}
