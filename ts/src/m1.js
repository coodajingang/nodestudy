"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.h1 = void 0;
const spcies_1 = require("./calss/spcies");
const animal_1 = require("./calss/animal");
exports.h1 = "helloo1o1o";
class House extends animal_1.Animal2 {
}
const house = new House("qianlima", 18, spcies_1.Spcies.MA);
house.say();
