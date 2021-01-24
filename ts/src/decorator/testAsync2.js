
async function async1() {
    console.log("async1 start!")

    async2()
        .then(res => console.log(res))
        .catch(res => console.log("Errror when call 2: " + res));


    console.log("async1 end!");
}
async function async2() {
    console.log("async2 do...");
    //throw "333";
    return "222";
}
console.log("start!")
async1();

// start!
// async1 start!
// async2 do...
// async1 end!
// 222