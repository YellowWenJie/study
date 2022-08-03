/*
 * @Author: 黄文杰
 * @Date: 2022-08-02 14:59:39
 * @LastEditTime: 2022-08-02 15:15:27
 */
function curry(fn: Function): Function {
  const fnArgslength = fn.length

  let args: any[] = []

  function calc(this: any, ...newArgs: any[]): any {
    args = [...args, ...newArgs]

    if (args.length < fnArgslength) {
      return calc
    } else {
      return fn.apply(this, args.slice(0, fnArgslength))
    }
  }

  return calc
}

function add(a: number, b: number, c: number): number {
  return a + b + c
}

const curryAdd = curry(add)
const res = curryAdd(10)(20)(30)
console.log(res)
