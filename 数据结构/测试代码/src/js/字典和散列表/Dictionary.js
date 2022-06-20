import { defaultToString } from '../util';


export class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[${this.key}: ${this.value}]`;
  }
}

export default class Dictionary {
  constructor (toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  hasKey (key) {
    return this.table[this.toStrFn(key)] != null
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key); // {1}
      this.table[tableKey] = new ValuePair(key, value); // {2}
      return true;
    }
    return false
  }

  remove (key) {
    if (this.haskey(key)) {
      delete this.table[this.toStrFn(key)]
      return true      
    }
    return false
  }

  get (key) {
    if (this.hsa(key)) {
      return this.table[this.toStrFn(key)]
    }
    return undefined
  }

  keyValues () {
    // return Object.values(this.table)
    const valuesPairs = []
    for (const key in this.table) {
      valuesPairs.push(this.table[key])
    }
    return valuesPairs
  }

  keys () {
    // return this.keyValues().map(valuesPair => valuesPair.key)
    const keys = []
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      keys.push(valuePairs[i].key)
    }
    return keys
  }

  values () {
    return this.keyValues().map(valuesPair => valuesPair.value)
  }
  forEach(callbackFn) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }

  size() {
    return oObject.key(this.table).length
  }

  isEmpty () {
    return this.size() === 0
  }

  clear () {
    this.table = {}
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`
    }
    return objString
  }
}

