/*
 * @Author: 黄文杰
 * @Date: 2022-07-27 17:38:54
 * @LastEditTime: 2022-07-27 20:03:22
 */
/**
 * @description: 对称数(回文)(使用数组反转、比较)
 * @return {*}
 */
export function findPalindromeNumbers1(max: number): number[] {
  const res: number[] = []
  if (max <= 0) return res

  for (let i = 0; i <= max; i++) {
    // 转化为字符串，转化为数组，再反转，比较
    const s = i.toString()
    if (s === s.split('').reverse().join('')) {
      res.push(i)
    }
  }

  return res
}
/**
 * @description: 字符串头尾比较
 * @param {number} max
 * @return {*}
 */
export function findPalindromeNumbers2(max: number): number[] {
  const res: number[] = []
  if (max <= 0) return res

  for (let i = 0; i <= max; i++) {
    const s = i.toString()
    const length = s.length
    // 字符串头尾比较
    let flag = true
    let startIndex = 0 // 字符串开始
    let endIndex = length - 1 // 字符串结束

    while (startIndex < endIndex) {
      if (s[startIndex] !== s[endIndex]) {
        flag = false
        break
      } else {
        // 继续比较
        startIndex++
        endIndex--
      }
    }

    if (flag) res.push(i)
  }
  return res
}

/**
 * @description: 生成翻转数
 * @param {number} max
 * @return {*}
 */
export function findPalindromeNumbers3(max: number): number[] {
  const res: number[] = []
  if (max <= 0) return res

  for (let i = 0; i <= max; i++) {
    let n = i
    let rev = 0 // 存储翻转数

    // 生成翻转数
    while (n > 0) {
      rev = rev * 10 + (n % 10)
      n = Math.floor(n / 10)
    }

    if (i === rev) res.push(i)
  }
  return res
}
console.time('1')
findPalindromeNumbers1(100 * 10000)
console.timeEnd('1')

console.time('2')
findPalindromeNumbers2(100 * 10000)
console.timeEnd('2')

console.time('3')
findPalindromeNumbers3(100 * 10000)
console.timeEnd('3')
