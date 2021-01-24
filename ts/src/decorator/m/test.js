"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = exports.NO = exports.Animal = exports.Person = void 0;
const dog = require("./Dog");
class Person {
    constructor(iname) {
        this.name = iname;
        this.hh = new dog.Dog("hha dog", 5);
    }
    say() {
        console.log(`Hello ${this.name}`);
        this.hh.say();
    }
}
exports.Person = Person;
class Animal {
}
exports.Animal = Animal;
exports.NO = 18;
function first(age) {
    return age;
}
exports.first = first;
