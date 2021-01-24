class Animal{
    // 成员默认是public权限，#开头表示privatte
    #name:string;
    private age: number = 10;
    constructor(name:string){
        this.#name = name
    }
}

let h = new Animal('mmm');