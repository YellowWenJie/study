// 有序链表
import { defaultEquals } from '../util';
import DoublyLinkedList from './doublyLinkedList';
import LinkedList from './linkedList';

const Cmpare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

function defaultCompare (a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Cmpare.LESS_THAN : Cmpare.BIGGER_THAN
}

class SortedLinkedList extends LinkedList {
  constructor (equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.defaultCompare = compareFn
  }

  insert (element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0)
    }
    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }

  getIndexNextSortedElement (element) {
    let current = this.head
    let i = 0
    for (; i < this.size(); i++) {
      const comp = this.compareFn(element, current.element)
      if (comp === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }
    return i
  }
}

class StackLinkedList {
  constructor () {
    this.items = new DoublyLinkedList()
  }

  push (element) {
    this.items.push(element)
  }

  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.removeAt(this.size() - 1)
  }

  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.getElementAt(this.size() - 1).element
  }

  isEmpty () {
    return this.items.isEmpty()
  }

  size () {
    return this.items.size()
  }

  clear () {
    this.items.clear()
  }

  toString () {
    return this.items.toString()
  }
}