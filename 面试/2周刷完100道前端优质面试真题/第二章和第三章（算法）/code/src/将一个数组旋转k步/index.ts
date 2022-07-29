/*
 * @Author: 黄文杰
 * @Date: 2022-07-24 00:32:13
 * @LastEditTime: 2022-07-25 11:27:45
 */

/**
 * 输入一个数组 [1,2,3,4,5,6,7]
 * k = 3 ，即选择 3 步
 * 输出 [5,6,7,1,2,3,4]
 */

/**
 * @description: 旋转数组 k 步 - 使用 pop() 和 unshift()
 * @param {number[]} arr
 * @param {number} k
 * @return {number[] | Error}
 * @Complexity 时间复杂度 O(n^2),空间复杂度 O(1)
 */
export function rorare(arr: number[], k: number): number[] | Error {
  const lenght = arr.length
  if (!k || lenght === 0 || k < 0 || !(arr instanceof Array)) return arr

  const step = Math.abs(k % lenght)

  for (let i = 0; i < step; i++) {
    const n = arr.pop()
    if (n != null) {
      arr.unshift(n) // 数组是一个有序结构，unshift 操作非常慢！！！
    }
  }

  return arr
}

/**
 * @description: 旋转数组 k 步 - concat
 * @param {number[]} arr
 * @param {number} k
 * @return {number[] | Error}
 *  @Complexity 时间复杂度 O(1),空间复杂度 O(n)
 */
export function rorare2(arr: number[], k: number): number[] | Error {
  const lenght = arr.length
  if (!k || lenght === 0) return arr

  const step = Math.abs(k % lenght)

  const part1 = arr.slice(-step)
  const part2 = arr.slice(0, length - step)
  const part3 = part1.concat(part2)

  return part3
}

// // 性能测试
// const arr = []
// for (let i = 0; i < 10 * 10000; i++) {
//   arr.push(i)
// }
// console.time('方法一')
// rorare(arr, 9 * 10000) // 1268.1630859375 ms O(n^2)
// console.timeEnd('方法一')

// console.time('方法二')
// rorare2(arr, 9 * 10000) // 4.2998046875 ms O(1)
// console.timeEnd('方法二')
