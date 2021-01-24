"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal2 = void 0;
const spcies_1 = require("./spcies");
class Animal2 {
    constructor(name, age, spice) {
        this.name = name;
        this.age = age;
        this.spice = spice;
    }
    say() {
        console.log(`I am ${this.name}, I'm ${this.age}, i belong to ${this.spice}`);
    }
}
exports.Animal2 = Animal2;
class Dog extends Animal2 {
    run() {
        this.say();
        console.log("I can run fast!");
    }
}
const dog = new Dog("huahua", 4, spcies_1.Spcies.GOU);
dog.run();
console.log(typeof dog); // object
console.log(dog instanceof Animal2); // true
console.log(dog instanceof Dog); // true
// console.log(dog instanceof Run);  // Error Run 是接口不是类
