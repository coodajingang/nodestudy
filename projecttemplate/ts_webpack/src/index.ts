import {sum} from "./app";

if (process.env.NODE_ENV !== 'production') {
    console.log("In development mode!");
} else {
    console.log("In production model")
}
const abc = "1234";

console.log(abc);

let x = sum(123, 456);

console.log(x);

console.log("hahaha");