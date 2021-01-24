require("refect-metadata");
// 使用方法 
(()=>{
    function desc(param: string) {
        console.log("desc envaluation!");
        return function (target: any, key: string, descriptor: {[propName: string]}) {
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
            descriptor.value = function (...args: Array<any>) {
                args = args.map(it => String(it));
                console.log(args);
                console.log("Say before!")
                method.apply(this, args);
                console.log("Say After!")
            }
        }
    }

    class Person{
        name:string;
        constructor(iname: string) {
            this.name = iname;
        }
        @desc("I'm DESC!")
        say(things : string) {
            console.log(this.name + " === " + things);
        }
    }
    //let p = new Person("xiaoli");
    //p.say("Something else!");
})();