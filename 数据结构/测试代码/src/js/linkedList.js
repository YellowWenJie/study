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
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
}