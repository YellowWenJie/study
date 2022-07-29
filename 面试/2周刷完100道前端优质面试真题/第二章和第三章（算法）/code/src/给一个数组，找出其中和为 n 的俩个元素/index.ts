/*
 * @Author: 黄文杰
 * @Date: 2022-07-26 13:10:12
 * @LastEditTime: 2022-07-26 16:20:54
 */

/**
 * @description: 寻找数组内和为 n 的俩个数（双层 for 循环）
 * @param {number} arr
 * @param {number} n
 * @return {*}
 */
export function findTowNumbers1(arr: number[], n: number): number[] {
  const res: number[] = []

  const length = arr.length
  if (length === 0) return res

  for (let i = 0; i < length - 1; i++) {
    const n1 = arr[i]
    let flag = false

    for (let j = i + 1; j < length; j++) {
      const n2 = arr[j]

      if (n1 + n2 === n) {
        res.push(n1)
        res.push(n2)
        flag = true
        break
      }
    }
    if (flag) break
  }

  return res
}

/**
 * @description: 寻找数组内和为 n 的俩个数 (双指针)
 * @param {number} arr
 * @param {number} n
 * @return {*}
 */
export function findTowNumbers2(arr: number[], n: number): number[] {
  const res: number[] = []

  const length = arr.length
  if (length === 0) return res

  let i = 0 // 头
  let j = length - 1 // 尾

  while (i < j) {
    const n1 = arr[i]
    const n2 = arr[j]
    const sum = n1 + n2

    if (n > sum) {
      i++
    } else if (n < sum) {
      j--
    } else {
      res.push(n1)
      res.push(n2)
      break
    }
  }
  return res
}
