
async function async1() {
    console.log("async1 start!")
    try {
        const res = await async2();
        console.log(res);
    } catch (e) {
        console.log("Error when call async2: " + e);
    }

    console.log("async1 end!");
}

async function async2() {
    console.log("async2 do...");
    throw "333";
    //return "222";
}

setTimeout(()=> {
    console.log("timeout.");
},0);

console.log("start!")
async1();

new Promise((resolve) => {
    console.log("promise1");
    resolve();
}).then(() => {
    console.log("promise2");
})
console.log("end!");
// start!
// async1 start!
// async2 do...
// promise1
// end!
// Error when call async2: 333
// async1 end!
// promise2
// timeout.