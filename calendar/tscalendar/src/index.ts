import {sum} from "./app";

function index() {
    console.log("This is index function");
    let a = sum(1, 3);
    console.log(a);
} 

console.log("index.ts")
index();
console.log("index.ts end!")