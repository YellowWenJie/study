/*
 * @Author: 黄文杰
 * @Date: 2022-08-01 20:40:07
 * @LastEditTime: 2022-08-01 20:47:41
 */
export function customNew<T>(constructor: Function, ...args: any[]): T {
  const obj = Object.create(constructor.prototype)
  constructor.apply(obj, args)
  return obj
}

class Person {
  name: string
  age: number
  constructor(name: string) {
    this.name = name
    this.age = 21
  }

  getName(): string {
    return this.name
  }
}
const f = customNew<Person>(Person, '黄文杰')
console.log(f)
