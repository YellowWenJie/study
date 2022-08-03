/*
 * @Author: 黄文杰
 * @Date: 2022-08-01 20:06:09
 * @LastEditTime: 2022-08-01 20:19:54
 */
export function getType(x: any): string {
  const originType = Object.prototype.toString.call(x)
  const spaceIndex = originType.indexOf(' ')
  const type = originType.slice(spaceIndex + 1, -1)
  return type.toLowerCase()
}

console.log(getType(NaN))
