import {AbstractSpider} from "./spider";

const path = require("path");
const fs = require("fs");

export async function scanSpiders(dirName: string) {
    const filePath = path.resolve(__dirname, dirName);
    console.log("Scan spider dir :" + filePath);
    let files = await fs.readdirSync(filePath);

    for (let f of files) {
        try {
            require(path.resolve(__dirname, dirName, f));
        } catch (err) {
            console.log("Error scan file :" + f);
        }
    }
}

export async function loadModule<T extends AbstractSpider>(filename: string): Promise<T> {
    const filePath = path.resolve(__dirname, "m", filename + ".js");
    console.log(filePath);

    const exist  = await fs.existsSync(filePath);
    if (!exist) {
        console.log(`${filePath} not exist!`);
        throw `${filename} not exist!`;
    }

    try {
        const require1 = require(filePath);
        let result: any;
        Object.keys(require1).forEach((key:string) => {
            console.log(key);
            const obj = require1[key];
            console.log(obj);
            result = obj;
            return result;
        })
        if (result) {
            return new result();
        }
    } catch (error) {
        throw "错误发生";
    }
}

