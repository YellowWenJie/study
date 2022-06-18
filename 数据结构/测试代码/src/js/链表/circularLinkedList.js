// 循环链表

import { Node } from '../models/linked-list-models'; // {1}
import { defaultEquals } from '../util';
import LinkedList from './linkedList';

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert (element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head
      if (index === 0) {
        if (current == null) {
          this.head = node
          node.next = this.head
        } else {
          node.next = current
          this.head = node
          current = this.getElementAt(this.size() -1)
          current.next = this.head
        }
      } else {
        const previous = this.getElementAt(index - 1)
        previous.next = node
        node.next = previous.next
      }
      this.count++
      return true
    }
    return false
  }

  removeAt (index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {
          return undefined
        } else {
          const removed = this.head
          current = this.getElementAt(this.size() -1)
        }
      }
    }
  }
}

const circularLinkedList = new CircularLinkedList()
circularLinkedList.push('#')
circularLinkedList.insert('$', 1)
circularLinkedList.insert('%', 2)

console.log(circularLinkedList)