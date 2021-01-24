
type config = {
    name:string,
    url?:string
}
const regs : {[name:string]: config} = {};

const config1 = {name: "n1", url: "u1"};
const config2 = {name: "n2", url: "u1"};
const config3 = {name: "n3", url: "u1"};

regs[config1.name] = config1;
regs[config2.name] = config2;
regs[config3.name] = config3;

console.log(regs);

Object.keys(regs).forEach(key => {
    console.log(key)
    console.log(regs[key]);
})

console.log(Object.keys(regs).keys());
