import exp = require("constants");

const dog = require("./Dog");

export class Person {
    name: string;
    hh : any;
    constructor(iname: string) {
        this.name = iname;
        this.hh = new dog.Dog("hha dog", 5);
    }

    say() {
        console.log(`Hello ${this.name}`);
        this.hh.say();
    }
}
export class Animal{

}

export  const NO = 18;

export  function first(age:number) {
    return age;
}