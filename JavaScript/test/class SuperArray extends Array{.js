class SuperArray extends Array {
  shuffle() {
    // 洗牌算法
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
  }
}

const a = new SuperArray(1, 2, 3, 4, 5);
console.log(a instanceof Array); // true
console.log(a instanceof SuperArray); // true
console.log(a); // SuperArray(5) [ 1, 2, 3, 4, 5 ]
a.shuffle();
console.log(a); // SuperArray(5) [ 5, 4, 2, 3, 1 ]
const a2 = a.shuffle(x => !!(x % 2)); // SuperArray(5) [ 1, 3, 5, 4, 2 ]
