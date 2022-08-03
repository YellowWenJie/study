/*
 * @Author: 黄文杰
 * @Date: 2022-08-01 19:51:03
 * @LastEditTime: 2022-08-01 19:58:09
 */
export function flattenDeep1(arr: any[]): any[] {
  const res: any[] = []

  arr.forEach(arr => {
    if (Array.isArray(arr)) {
      const flatItem = flattenDeep1(arr)
      flatItem.forEach(n => res.push(n))
    } else {
      res.push(arr)
    }
  })
  return res
}

export function flattenDeep2(arr: any[]): any[] {
  let res: any[] = []

  arr.forEach(arr => {
    if (Array.isArray(arr)) {
      const flatItem = flattenDeep1(arr)
      res = res.concat(flatItem)
    } else {
      res = res.concat(arr)
    }
  })
  return res
}
