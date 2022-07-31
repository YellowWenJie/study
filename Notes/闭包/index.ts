/*
 * @Author: 黄文杰
 * @Date: 2022-07-31 21:05:34
 * @LastEditTime: 2022-07-31 21:53:43
 */
class Person {
  arr: number[]
  id?: number
  constructor(arr: number[], id?: number) {
    this.arr = arr
    this.id = id
  }

  filter(callback: Function) {
    return () => {
      console.log(this.id)
      return (a: any) => {
        console.log(a)
        return callback(this.arr)
      }
    }
  }
}

function inBetween(a: number, b: number) {
  return function (x: number[]) {
    console.log(x.filter(f => f > a && f < b))
  }
}

const person = new Person([1, 2, 3, 4, 5, 6], 1)

person.filter((r: any) => {
  console.log(r)
})()(2)

const fun_n = person.filter((r: any) => {
  console.log(r)
})()

fun_n(3)
