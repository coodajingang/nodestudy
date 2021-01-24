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
const decorators_1 = require("./decorator/decorators");
const loadModules_1 = require("./decorator/loadModules");
const Koa = require("koa");
const Router = require("koa-router");
const loadModule = require("./decorator/loadModules");
const app = new Koa();
const router = new Router();
loadModules_1.scanSpiders("m");
router.get("/", (ctx, next) => {
    ctx.body = "Hello index";
});
router.get("/spider/regs", (ctx, next) => {
    let ss = decorators_1.SpiderRegistry["TestSpider1"];
    console.log(ss);
    console.log(ss.constr);
    let spider = new ss.constr();
    spider.start();
    ctx.body = JSON.stringify(decorators_1.SpiderRegistry);
});
router.get("/spider/:path", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const scriptName = ctx.params["path"];
    if (!scriptName) {
        console.log("empty path name :" + scriptName);
        ctx.body = "empty path name!";
        return;
    }
    console.log(`Start script with path = ${scriptName}`);
    /*
    const res = await loadModule.loadModule(scriptName);

    if (res instanceof AbstractSpider) {
        res.start();
    } else {
        console.log("错误：" + res);
    }
*/
    try {
        const spider = yield loadModule.loadModule(scriptName);
        Promise.resolve(spider)
            .then(s => s.start())
            .catch(e => {
            console.log("Spider run error!" + e);
        });
        ctx.body = "Start spider success!";
    }
    catch (err) {
        console.log("Load Spider Module Error!" + err);
        ctx.body = "Load spider module error! " + err;
    }
}));
router.get("/query", (ctx, next) => {
    console.log(ctx.params);
    console.log(ctx.query);
    console.log(ctx.querystring);
    ctx.body = ctx.query;
});
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000, () => {
    console.log("Server started listening on 3000!");
});
