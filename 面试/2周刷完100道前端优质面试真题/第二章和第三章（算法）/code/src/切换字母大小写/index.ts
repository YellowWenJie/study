/*
 * @Author: 黄文杰
 * @Date: 2022-07-28 12:08:48
 * @LastEditTime: 2022-07-28 12:39:44
 */
/**
 * @description: 正则表达式
 * @return {*}
 */
export function switchLetterCase(s: string): string {
  let res = ''

  const length = s.length
  if (length === 0) return res

  const res1 = /[a-z]/
  const res2 = /[A-Z]/

  for (let i = 0; i < length; i++) {
    const c = s[i]
    if (res1.test(c)) {
      res += c.toUpperCase()
    } else if (res2.test(c)) {
      res += c.toLowerCase()
    } else {
      res += c
    }
  }

  return res
}

/**
 * @description: ASCII 编码
 * @param {string} s
 * @return {*}
 */
export function switchLetterCase2(s: string): string {
  let res = ''

  const length = s.length
  if (length === 0) return res

  for (let i = 0; i < length; i++) {
    const c = s[i]
    const code = c.charCodeAt(0)

    if (code >= 65 && code <= 90) {
      res += c.toLowerCase()
    } else if (code >= 97 && code <= 122) {
      res += c.toUpperCase()
    } else {
      res += c
    }
  }

  return res
}
