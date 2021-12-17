"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this);
    }
}
const dog = new Dog("小黑", 20);
const dog1 = new Dog("小红", 19);
const dog2 = new Dog("小中", 60);
console.log(dog);
console.log(dog1);
console.log(dog2);
dog.bark();
dog1.bark();
dog2.bark();
