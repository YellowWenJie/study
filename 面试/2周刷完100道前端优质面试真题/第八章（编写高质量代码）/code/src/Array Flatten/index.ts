/*
 * @Author: 黄文杰
 * @Date: 2022-08-01 19:32:46
 * @LastEditTime: 2022-08-01 19:51:05
 */
/**
 * @description: 数组扁平化，使用 push
 * @param {any} arr
 * @return {*}
 */
export function flatten1(arr: any[]): any[] {
  let res: any[] = []

  arr.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(n => res.push(n))
    } else {
      res.push(item)
    }
  })

  return res
}

/**
 * @description: concat()
 * @param {any} arr
 * @return {*}
 */
export function flatten2(arr: any[]): any[] {
  let res: any[] = []
  arr.forEach(item => {
    res = res.concat(item)
  })

  return res
}
