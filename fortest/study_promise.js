var p = new Promise(function(resolve, reject) {
    console.log("in promise...")
    if (Math.random() > .8) {
        resolve("step1");
    } else {
        reject("error");
    }
});

p.then(function(data){
    console.log("in then ", data);
}).catch (function(data) {
    console.log("in cache ", data);
})

