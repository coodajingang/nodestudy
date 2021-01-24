import {Spcies} from "./spcies";

interface Run {
    run();
}

export abstract class Animal2 {
    name: string;
    age: number;
    spice: Spcies.UNKNOWN;

    constructor(name:string, age:number, spice) {
        this.name = name;
        this.age = age;
        this.spice = spice;
    }

    say() {
        console.log(`I am ${this.name}, I'm ${this.age}, i belong to ${this.spice}`)
    }
}

class Dog extends Animal2 implements Run {

    run() {
        this.say();
        console.log("I can run fast!");
    }

}

const dog = new Dog("huahua", 4, Spcies.GOU);
dog.run();

console.log(typeof dog); // object
console.log(dog instanceof Animal2); // true
console.log(dog instanceof Dog); // true
// console.log(dog instanceof Run);  // Error Run 是接口不是类