class Set {
  constructor () {
    this.items = {}
  }

  has (element) {
    // return element in items
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add (element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  delete (element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  clear () {
    this.items = {}
  }

  size () {
    return Object.keys(this.items).length
  }

  sizeLegacy () {
    let count = 0
    for( let key in this.items ) {
      if (this.items.hasOwnProperty(key)) {
        count++
      }
    }
    return count
  }

  values () {
    return Object.values(this.items)
  }

  valuesLegacy () {
    let values = []
    for( let key in this.items ) {
      if (this.items.hasOwnProperty(key)) {
        values.push(this.items[key])
      }
    }
    return values
  }

  // 并集
  union (otherSet) {
    // const unionSet = new Set()
    // this.values().forEach( value => unionSet.add(value))
    // otherSet.values().forEach( value => unionSet.add(value))
    // return unionSet

    const unionSet = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; i++){
      unionSet.add(values[i])
    }
    values = otherSet.values()
    for (let i = 0; i < values.length; i++){
      unionSet.add(values[i]);
    }

    return unionSet
  }

  // 交集
  intersection (otherSet) {
    // const intersectionSet = new Set()
    // const values = this.values()
    // for (let i = 0; i < values.length; i++){
    //   if (otherSet.has(values[i])) {
    //     intersectionSet.add(values[i])
    //   }
    // }
    // return intersectionSet
    const intersectionSet = new Set() // {1}
    const values = this.values() // {2}
    const otherValues = otherSet.values() // {3}
    let biggerSet = values // {4}
    let smallerSet = otherValues // {5}
    if (otherValues.length - values.length > 0) { // {6}
      biggerSet = otherValues
      smallerSet = values
    }
    smallerSet.forEach(value => { // {7}
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
    }

    // 差集
    difference(otherSet) {
      const differenceSet = new Set(); // {1}
      this.values().forEach(value => { // {2}
        if (!otherSet.has(value)) { // {3}
          differenceSet.add(value); // {4}
        }
      });
      return differenceSet;
    }

    // 子集
    isSubsetOf(otherSet) {
      if (this.size() > otherSet.size()) { // {1}
        return false;
      }
      let isSubset = true; // {2}
      this.values().every(value => { // {3}
        if (!otherSet.has(value)) { // {4}
          isSubset = false; // {5}
          return false;
        }
        return true; // {6}
      });
      return isSubset; // {7}
    }

}

const set = new Set()
set.add(1)
set.add(2)
set.add(3)
const set2 = new Set()
set2.add(5)
set2.add(4)
set2.add(3)
console.log(set.intersection(set2).values())