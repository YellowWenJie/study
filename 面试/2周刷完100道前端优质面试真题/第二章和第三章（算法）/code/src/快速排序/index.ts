/*
 * @Author: 黄文杰
 * @Date: 2022-07-27 16:24:33
 * @LastEditTime: 2022-07-27 16:46:37
 */

/**
 * @description: 快速排序 splice
 * @return {*}
 */

export function quickSort1(arr: number[]): number[] {
  const length = arr.length
  if (length === 0) return arr

  const midIndex = Math.floor(length / 2)
  const midValue = arr.splice(midIndex, 1)[0]

  const left: number[] = []
  const right: number[] = []

  // 这里不能直接用 length，而是用 arr.length。因为 arr 已经被 splice 给修改
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    if (n < midValue) {
      // 小于 midValue，则放在 left
      left.push(n)
    } else {
      // 大于于 midValue，则放在 right
      right.push(n)
    }
  }

  return quickSort1(left).concat([midValue], quickSort1(right))
}

/**
 * @description: 快速排序 slice
 * @return {*}
 */

export function quickSort2(arr: number[]): number[] {
  const length = arr.length
  if (length === 0) return arr

  const midIndex = Math.floor(length / 2)
  const midValue = arr.slice(midIndex, midIndex + 1)[0]

  const left: number[] = []
  const right: number[] = []
  // 这里不能直接用 length，而是用 arr.length。因为 arr 已经被 splice 给修改
  for (let i = 0; i < length; i++) {
    if (i !== midIndex) {
      const n = arr[i]
      if (n < midValue) {
        // 小于 midValue，则放在 left
        left.push(n)
      } else {
        // 大于于 midValue，则放在 right
        right.push(n)
      }
    }
  }

  return quickSort1(left).concat([midValue], quickSort1(right))
}
