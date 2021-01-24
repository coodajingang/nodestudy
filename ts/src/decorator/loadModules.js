"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadModule = exports.scanSpiders = void 0;
const path = require("path");
const fs = require("fs");
function scanSpiders(dirName) {
    return __awaiter(this, void 0, void 0, function* () {
        const filePath = path.resolve(__dirname, dirName);
        console.log("Scan spider dir :" + filePath);
        let files = yield fs.readdirSync(filePath);
        for (let f of files) {
            try {
                require(path.resolve(__dirname, dirName, f));
            }
            catch (err) {
                console.log("Error scan file :" + f);
            }
        }
    });
}
exports.scanSpiders = scanSpiders;
function loadModule(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        const filePath = path.resolve(__dirname, "m", filename + ".js");
        console.log(filePath);
        const exist = yield fs.existsSync(filePath);
        if (!exist) {
            console.log(`${filePath} not exist!`);
            throw `${filename} not exist!`;
        }
        try {
            const require1 = require(filePath);
            let result;
            Object.keys(require1).forEach((key) => {
                console.log(key);
                const obj = require1[key];
                console.log(obj);
                result = obj;
                return result;
            });
            if (result) {
                return new result();
            }
        }
        catch (error) {
            throw "错误发生";
        }
    });
}
exports.loadModule = loadModule;
