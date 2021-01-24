"use strict";
class Person {
    // 构造函数 
    constructor() {
        this.name = "sunwukong"; //普通变量
        this.firstName = "test1"; // 只读变量
    }
    sayHello() {
        console.log('heloo function');
    }
    static sayHello2() {
        console.log("static hello function!");
    }
}
Person.age = 18; // 静态变量
Person.xxname = "12334"; // 静态只读变量 
const per = new Person();
console.log(per);
console.log(per.name, Person.age);
per.sayHello();
per.name = '1sdfa';
//per.firstName = "asdfa"; 
Person.sayHello2();
