console.log("start")

setTimeout(() => {
    console.log("timeout.")
},0);

Promise.resolve("resolvvv")
    .then(res => console.log(res));

console.log("end");

// start
// end
// resolvvv
// timeout.