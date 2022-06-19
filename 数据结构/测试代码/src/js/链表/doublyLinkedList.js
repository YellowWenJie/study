import { Node } from '../models/linked-list-models'; // {1}
import { defaultEquals } from '../util';
import LinkedList from './linkedList';

class DoublyNode extends Node {
  constructor (element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

export default class DoublyLinkedList extends LinkedList {
  constructor (equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }

  insert (element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = node
        current.prev = node
        node.next = current
        node.prev = previous
      }
      this.count++
      return true
    } 
    return false
  }

  removeAt (index) {
    if (index < this.count && index >= 0) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
        if (this.head === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count -1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getElementAt(index)
        const previous = curent.prev
        previous.next = current.next
        current.next.prev = previous
      }
      this.count--
      return current.element
    }
    return undefined
  }
}

const doublyNode = new DoublyLinkedList()
doublyNode.insert('0', 0)
doublyNode.insert('1', 1)
doublyNode.insert('2', 2)


console.log(doublyNode)
