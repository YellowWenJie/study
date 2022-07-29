/*
 * @Author: 黄文杰
 * @Date: 2022-07-26 21:32:58
 * @LastEditTime: 2022-07-27 08:39:56
 */
/**
 * @description: 移动 0 到数组的末尾（嵌套循环）
 * @param {number} arr
 * @return {*}
 */
export function moveZero1(arr: number[]): void {
  const length = arr.length
  if (length === 0) return

  let zeroLength = 0

  for (let i = 0; i < length - zeroLength; i++) {
    if (arr[i] === 0) {
      arr.push(0)
      arr.splice(i, 1)
      i--
      zeroLength++
    }
  }
}

/**
 * @description: 双指针
 * @param {number} arr
 * @return {*}
 */
export function moveZero2(arr: number[]): void {
  const length = arr.length

  if (length === 0) return

  let i
  let j = -1

  for (i = 0; i < length; i++) {
    if (arr[i] === 0) {
      // 第一个 0
      if (j < 0) {
        j = i
      }
    }

    if (arr[i] !== 0 && j >= 0) {
      // 交换
      const n = arr[i]
      arr[i] = arr[j]
      arr[j] = n

      j++
    }
  }
}
