"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSpider1 = void 0;
const spider_1 = require("../spider");
const decorators_1 = require("../decorators");
let TestSpider1 = class TestSpider1 extends spider_1.AbstractSpider {
    constructor() {
        super("www.baidu.com");
        console.log("Testspider1 construcotr!");
    }
    dospider() {
        console.log("TestSpider1 do spider..." + this.url);
    }
};
TestSpider1 = __decorate([
    decorators_1.spider({ name: "TestSpider1" }),
    __metadata("design:paramtypes", [])
], TestSpider1);
exports.TestSpider1 = TestSpider1;
