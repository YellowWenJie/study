// // function Point (x, y) {
// //   this.x = x
// //   this.y = y
// // }
// // Point.prototype.toString = function () {
// //   return this.x + ',' + this.y
// // }
// // const point = new Point(1, 2)
// // console.log(point.toString())
// // const x = '1'
// // let obj = {
// //   a: '@',
// //   b: function () {
// //     console.log(this)
// //     return () => {
// //       console.log(this.a)
// //     }
// //   },
// //   c: () => {
// //     this.a = 1
// //     console.log(this)
   
// //   }
// // }

// // obj.b()()

// class Person {
//   constructor(){
//     this.a = '1'
//   }
//   getValue () {
//     return this.a
//   }

//   againGetValue () {
//     return ( function () {
//       console.log(this)
//     })()
//   }

//   onceAgainGetValue () {
//     return ( () => {
//       console.log(this)
//     })()
//   }
// }

// const a = new Person()
// a.againGetValue()


// this.a = '1'

// const b = function () {
//   console.log(this.a)
//   return () => {
//     console.log(this.a)
//   }
// }
// const c = () => {
//   console.log(this.a)
// }
// function d () {
//   console.log(this.a)
// }
// b()()

// const obj = {
//   a: 10,
//   b: function () {
//     console.log(this.a)
//     return () => {
//       console.log(this.a)
//     }
//   },
//   c: () => {
//     console.log(this.a)
//   }
// }


class Person {
  constructor (...args) {
    this.args = args
  }

  * [Symbol.iterator]() { 
    for (let arg of this.args) {
      yield arg
    }
  }
}

for (let i of new Person(1,2,3,4,5)) {
  console.log(i) // 1 2 3 4 5
}