import { defaultToString } from '../util';
import LinkedList from '../链表/linkedList';
import { ValuePair } from './Dictionary';

// 散列表
class HashTable {
  constructor (toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  loseloseHashCode (key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }

  hashCode (key) {
    return this.loseloseHashCode(key)
  }

  djb2HashCode(key) {
    const tableKey = this.toStrFn(key); // {1}
    let hash = 5381; // {2}
    for (let i = 0; i < tableKey.length; i++) { // {3}
      hash = (hash * 33) + tableKey.charCodeAt(i); // {4}
    }
    return hash % 1013; // {5}
  }

  put (key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }

  get (key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  remove(key) {
    const hash = this.hashCode(key); // {1}
    const valuePair = this.table[hash]; // {2}
    if (valuePair != null) {
      delete this.table[hash]; // {3}
      return true;
    }
    return false;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table)
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`
    }
    return objString
  }
}

// 分离链表
class HashTableSeparateChaining {
  constructor (toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.tabble = {}
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new LinkedList()
      }
      this.table[position].push(new ValuePair(key, value))
      return true
    }
    return false
  }

  get (key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position]; // {1}
    if (linkedList != null && !linkedList.isEmpty()) { // {2}
      let current = linkedList.getHead(); // {3}
      while (current != null) { // {4}
        if (current.element.key === key) { // {5}
          return current.element.value; // {6}
        }
        current = current.next; // {7}
      }
    }
    return undefined
  }

  remove (key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) { // {1}
          linkedList.remove(current.element); // {2}
          if (linkedList.isEmpty()) { // {3}
            delete this.table[position]; // {4}
          }
          return true; // {5}
        }
        current = current.next; // {6}
      }
    }
    return false; // {7}
  }

}