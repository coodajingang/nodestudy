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
require("refect-metadata");
// 使用方法 
(() => {
    function desc(param) {
        console.log("desc envaluation!");
        return function (target, key, descriptor) {
            console.log(target, key, descriptor);
            console.log("Target constructor: ", target.constructor);
            console.log("Method: ", key);
            console.log("MethodBody :", target[key].toString());
            const methodBody = target[key].toString();
            let parameters = methodBody.substring(methodBody.indexOf("(") + 1, methodBody.indexOf(")"))
                .split(",").map(item => item.trim()).filter(item => item);
            console.log("Parameters: ", parameters);
            //let tyeps = Reflect.getMetadata('design:paramtypes', target, key);
            //console.log("Types: ", tyeps);
            let method = descriptor.value;
            descriptor.value = function (...args) {
                args = args.map(it => String(it));
                console.log(args);
                console.log("Say before!");
                method.apply(this, args);
                console.log("Say After!");
            };
        };
    }
    class Person {
        constructor(iname) {
            this.name = iname;
        }
        say(things) {
            console.log(this.name + " === " + things);
        }
    }
    __decorate([
        desc("I'm DESC!"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "say", null);
    //let p = new Person("xiaoli");
    //p.say("Something else!");
})();
