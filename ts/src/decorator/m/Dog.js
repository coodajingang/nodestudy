"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(iname, iage) {
        this.greeting = iname;
        this.age = iage;
    }
    say() {
        console.log(`I am dog ${this.greeting} and ${this.age}`);
    }
}
exports.Dog = Dog;
