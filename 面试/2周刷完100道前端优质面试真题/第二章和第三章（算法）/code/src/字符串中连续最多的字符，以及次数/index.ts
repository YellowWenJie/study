/*
 * @Author: 黄文杰
 * @Date: 2022-07-27 09:01:25
 * @LastEditTime: 2022-07-27 16:03:18
 */

interface IRes {
  char: string
  length: number
}

/**
 * @description: 嵌套循环，时间复杂度其实为 O(n)
 * @param {string} str
 * @return {*}
 */
export function findContinousChar1(str: string): IRes {
  const res: IRes = { char: '', length: 0 }

  const length = str.length

  if (length === 0) return res

  let tempLength = 0

  for (let i = 0; i < length; i++) {
    tempLength = 0

    for (let j = i; j < length; j++) {
      if (str[i] === str[j]) {
        tempLength++
      }

      if (str[i] !== str[j] || j === length - 1) {
        // 不相等，或者已经到了最后一个元素，要去判断最大值
        if (tempLength > res.length) {
          res.char = str[i]
          res.length = tempLength
        }

        if (i < length - 1) {
          i = j - 1 // 跳步
        }

        break
      }
    }
  }

  return res
}

/**
 * @description: 双指针
 * @param {string} str
 * @return {*}
 */
export function findContinousChar2(str: string): IRes {
  const res: IRes = { char: '', length: 0 }

  const length = str.length

  if (length === 0) return res

  let tempLength = 0

  let i = 0
  let j = 0
  for (; i < length; i++) {
    if (str[i] === str[j]) {
      tempLength++
    }

    if (str[i] !== str[j] || i === length - 1) {
      // 不相等，或者 i 到了字符串的末尾
      if (tempLength > res.length) {
        res.char = str[j]
        res.length = tempLength
      }

      tempLength = 0

      if (i < length - 1) {
        j = i // 让 j "追上" i
        i-- // 细节
      }
    }
  }

  return res
}

// let str = ''
// for (let i = 0; i < 100 * 10000; i++) {
//   str += i.toString()
// }

// console.time('1')
// findContinousChar1(str)
// console.timeEnd('1')

// console.time('2')
// findContinousChar2(str)
// console.timeEnd('2')
