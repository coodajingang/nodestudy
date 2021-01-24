
class Person{
    name: string = "sunwukong"; //普通变量
    static age : number = 18; // 静态变量
    readonly firstName: string = "test1"; // 只读变量
    static readonly xxname : string = "12334"; // 静态只读变量 

    // 构造函数 
    constructor() {

    }


    sayHello() {
        console.log('heloo function');
    }
    static sayHello2() {
        console.log("static hello function!");
    }
}

const per = new Person();
console.log(per);
console.log(per.name, Person.age);
per.sayHello();
per.name = '1sdfa';
//per.firstName = "asdfa"; 
Person.sayHello2();