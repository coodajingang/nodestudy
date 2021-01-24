function Greeting(target: any) {
    console.log("1.Ingreeting evaluation");
    console.log(target);
    console.log("x.end greeting evaluation");
}
function Path(path:string) {
    console.log("1.Path evaluation");
    return function(target: any) {
        console.log("2.Target prototype decorator!");
        !target.prototype.$Meta && (target.prototype.$Meta = {});
        target.prototype.$Meta.baseUrl = path;
    }
}

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

@Greeting
@Path("/baidu")
export class HelloService {
    name: string;
    constructor(inname: string) {
        this.name = inname;
        console.log("3.Hello Service Constructor!");
    }
    @desc("I'm DESC!")
    sayHello() {
        console.log(this.name);
    }
}