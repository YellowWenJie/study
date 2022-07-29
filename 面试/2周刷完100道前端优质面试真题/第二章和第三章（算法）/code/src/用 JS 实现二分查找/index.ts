/*
 * @Author: 黄文杰
 * @Date: 2022-07-25 21:19:05
 * @LastEditTime: 2022-07-26 13:37:10
 */

/**
 * @description: 二分查找（循环）
 * @return {*}
 */
export function binarySearch1(arr: number[], target: number): number {
  const length = arr.length

  if (length === 0) return -1

  let startIndex = 0 // 开始位置
  let endIndex = length - 1 // 结束位置

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]

    if (target < midValue) {
      // 目标值较小，则继续再左侧查找
      endIndex = midIndex - 1
    } else if (target > midValue) {
      // 目标值较大，则继续再右侧查找
      startIndex = midIndex + 1
    } else {
      // 相等，返回
      return midIndex
    }
  }
  return -1
}

/**
 * @description: 二分查找（递归）
 * @param {number} arr
 * @param {number} target
 * @param {number} targetIndex
 * @param {number} endIndex
 * @return {*}
 */
export function binarySearch2(
  arr: number[],
  target: number,
  startIndex?: number,
  endIndex?: number
): number {
  const length = arr.length

  if (length === 0) return -1

  // 开始和结束的范围
  if (startIndex === undefined) {
    startIndex = 0
  }
  if (endIndex === undefined) {
    endIndex = length - 1
  }

  // 如果 start 和 end 相遇，则返回
  if (startIndex > endIndex) return -1

  // 中间位置
  const midIndex = Math.floor((startIndex! + endIndex!) / 2)
  const midValue = arr[midIndex]

  if (target < midValue) {
    // 目标值较小，则继续再左侧查找
    return binarySearch2(arr, target, startIndex, midIndex - 1)
  } else if (target > midValue) {
    // 目标值较大，则继续再右侧查找
    return binarySearch2(arr, target, midIndex + 1, endIndex)
  } else {
    // 相等，返回
    return midIndex
  }
}
