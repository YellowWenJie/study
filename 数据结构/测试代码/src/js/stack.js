// const items = Symbol('stackItems')
// const items = new WeakMap()
class Stack {
  constructor () {
    this.count = 0
    this.items = {}
  }

  push (element) {
    this.items[this.count] = element
    this.count++
  }

  size () {
    return this.count
  }

  isEmpty () {
    return this.count === 0
  }

  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  clear () {
    this.count = 0
    this.items = {}
    while (!this.isEmpty()) {
      this.pop()
    }
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}
// 转二进制
function decimalToBinary (decNumber) {
  const remStack = new Stack()
  let number = decNumber
  let rem
  let binaryString = ''

  while (number > 1) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}
// 转换 2 ~ 36 位进制
function baseConverter (decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber
  let rem
  let binaryString = ''

  if (!(base >= 2 && base <= 36)) {
    return ''
  }

  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
  }
  return binaryString
}
baseConverter(233, 16)
decimalToBinary(233)
// const data = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// console.log(data[11])
// for (const i of data) {
//   console.log(i)
// }
