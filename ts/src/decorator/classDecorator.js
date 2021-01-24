"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(() => {
    function Greeting(target) {
        console.log("1.Ingreeting evaluation");
        console.log(target);
        console.log("x.end greeting evaluation");
    }
    function Path(path) {
        console.log("1.Path evaluation");
        return function (target) {
            console.log("2.Target prototype decorator!");
            !target.prototype.$Meta && (target.prototype.$Meta = {});
            target.prototype.$Meta.baseUrl = path;
        };
    }
    /*
    类装饰器，是装饰在类的构造函数上，可以为类实例增加东西；
    */
    let HelloService = class HelloService {
        constructor(inname) {
            this.name = inname;
            console.log("3.Hello Service Constructor!");
        }
        sayHello() {
            console.log(this.name);
        }
    };
    HelloService = __decorate([
        Greeting,
        Path("/baidu"),
        __metadata("design:paramtypes", [String])
    ], HelloService);
    let h = new HelloService("I am helloService!");
    h.sayHello();
    console.log(h);
    // console.log(h.$Meta);
})();
// 使用类的装饰器扩展类的属性和方法 
(() => {
    function greeting(target) {
        console.log("In decorator ");
        return class extends target {
            constructor() {
                super(...arguments);
                this.gg = "gg=19";
            }
            say() {
                console.log(this.gg, this.name);
            }
        };
    }
    let Person = class Person {
        constructor(iname) {
            this.name = iname;
        }
        say() {
            console.log(this.name);
        }
    };
    Person = __decorate([
        greeting,
        __metadata("design:paramtypes", [String])
    ], Person);
    let p = new Person("xiaoli");
    p.say();
})();
