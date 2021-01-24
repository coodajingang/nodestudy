const util = require("util")
const fs = require("fs");
const { rejects } = require("assert");
const { resolve } = require("path");

// 使用util.promisify 可以将一个普通函数转换为promise返回 ；
let read = util.promisify(fs.readFile);

// then函数可以有俩个参数，resolve 和rejecte
// 注意当多个then连接时，应该只处理resolve的情况，在最后进行catch处理reject情况，否则，在then的reject返回后，会造成后续then继续进行resolve 
read("./study_promise.js2")
  .then(data => console.log(data.toString()), err => console.log(err))
  .then(data => console.log("second then!" + data))
  .catch(err => console.log("Catch exception " + err))
  .then(data => console.log("Third then: " + data));

 function main( num) {
  return  new Promise((resolve, rejects) =>{
      setTimeout(()=>{
        resolve(num);
      }, 1000);
  });
}

async function executor() {
  let x = await main(10);
  return x;
}

console.log(executor());