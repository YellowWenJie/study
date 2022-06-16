// 队列
// eslint-disable-next-line no-unused-vars
class Queue {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  isEmpty () {
    return this.size() === 0
  }

  enqueue (element) {
    this.items[this.count] = element
    this.count++
  }

  dequeue () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  size () {
    return this.count - this.lowestCount
  }

  clear () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

// 双端队列
// eslint-disable-next-line no-unused-vars
class Dequeue {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  isEmpty () {
    return this.size() === 0
  }

  addBack (element) {
    this.items[this.count] = element
    this.count++
  }

  removeFront () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  removeBack () {
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
    return this.items[this.lowestCount]
  }

  size () {
    return this.count - this.lowestCount
  }

  clear () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }

  addFront (element) {
    if (this.isEmpty()) {
      this.addBack(element)
      return
    }
    if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
      return
    }
    for (let i = this.count; i > 0; i--) {
      this.items[i] = this.items[i - 1]
    }
    this.count++
    this.lowestCount = 0
    this.items[0] = element
  }
}

// 循环队列 -- 击鼓传花
// eslint-disable-next-line no-unused-vars
function hotPotato (elementsList, num) {
  const queue = new Queue() // {1}
  const eliminatedList = []

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]) // {2}
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()) // {3}
    }
    eliminatedList.push(queue.dequeue()) // {4}
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue() // {5}
  }
}

// 回文
// eslint-disable-next-line no-unused-vars
function palindromeChecker (aString) {
  if (aString === undefined || aString === null ||
    (aString !== null && aString.length === 0)) { // {1}
    return false
  }
  const dequeue = new Dequeue() // {2}
  const lowerString = aString.toLocaleLowerCase().split(' ').join('') // {3}
  let isEqual = true
  let firstChar, lastChar

  for (let i = 0; i < lowerString.length; i++) { // {4}
    dequeue.addBack(lowerString.charAt(i))
  }

  while (dequeue.size() > 1 && isEqual) { // {5}
    firstChar = dequeue.removeFront() // {6}
    lastChar = dequeue.removeBack() // {7}
    if (firstChar !== lastChar) {
      isEqual = false // {8}
    }
  }

  return isEqual
}
