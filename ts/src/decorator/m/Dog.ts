
export class Dog {
    greeting: string
    age: number

    constructor(iname:string, iage: number) {
        this.greeting = iname;
        this.age = iage;
    }

    say() {
        console.log(`I am dog ${this.greeting} and ${this.age}`);
    }
}