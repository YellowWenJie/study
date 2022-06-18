import { Node } from './models/linked-list-models.js'; // {1}
import { defaultEquals } from './util.js';

export default class LinkedList {
  constructor (equalsFn = defaultEquals) {
    this.count = 0 // {2}
    this.head = undefined // {3}
    this.equalsFn = equalsFn // {4}
  }

  push (element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      // 拿到尾部
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  removeAt (index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        let previous
        for(let i = 0; i < index; i++) {
          previous = current
          current  = current.next
        }
        previous.next = previous.next
      }
      this.count--
      return current.element
    }
    return undefined
  }

  getEkementAt (index) {
    if (index >= 0 && index < this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }
}
const linkedList = new LinkedList()
