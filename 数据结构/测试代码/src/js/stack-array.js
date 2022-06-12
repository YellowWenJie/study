class Stack {
  constructor (...arg) {
    this.items = [...arg]
  }

  push (element) {
    this.items.push(element)
  }

  pop () {
    return this.items.pop()
  }

  peek () {
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length === 0
  }

  clear () {
    this.items = []
  }
}

const stack = new Stack(1, 2, 3, 4)
stack.clear()
console.log(stack.isEmpty())
