(() =>{
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
/*
类装饰器，是装饰在类的构造函数上，可以为类实例增加东西；
*/
    @Greeting
    @Path("/baidu")
    class HelloService {
        name: string;
        constructor(inname: string) {
            this.name = inname;
            console.log("3.Hello Service Constructor!");
        }
        sayHello() {
            console.log(this.name);
        }
    }

    let h = new HelloService("I am helloService!");
    h.sayHello();
    console.log(h);
    // console.log(h.$Meta);
})();

// 使用类的装饰器扩展类的属性和方法 
(()=>{
    function greeting(target: any) {
        console.log("In decorator ");
        return class extends target {
            gg: string | undefined = "gg=19";
            say() {
                console.log(this.gg, this.name)
            }
        }
    }

    @greeting
    class Person{
        name:string;
        constructor(iname: string) {
            this.name = iname;
        }
        say() {
            console.log(this.name);
        }
    }
    let p = new Person("xiaoli");
    p.say();
})();