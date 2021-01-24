import {SpiderRegistry} from "./decorator/decorators";
import {scanSpiders} from "./decorator/loadModules";

const Koa = require("koa");
const Router = require("koa-router");
const loadModule = require("./decorator/loadModules");

const app = new Koa();
const router = new Router();

scanSpiders("m");

router.get("/", (ctx, next)=>{
    ctx.body = "Hello index";
});

router.get("/spider/regs", (ctx, next) => {
    let ss = SpiderRegistry["TestSpider1"];
    console.log(ss)
    console.log(ss.constr);
    let spider = new ss.constr();
    spider.start();
    ctx.body = JSON.stringify(SpiderRegistry);
})

router.get("/spider/:path", async (ctx, next)=>{
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
        const spider = await loadModule.loadModule(scriptName);
        Promise.resolve(spider)
            .then(s => s.start())
            .catch(e => {
                console.log("Spider run error!" + e);
            });
        ctx.body = "Start spider success!";
    } catch (err) {
        console.log("Load Spider Module Error!" + err);
        ctx.body = "Load spider module error! " + err;
    }
});

router.get("/query", (ctx, next)=>{
    console.log(ctx.params);
    console.log(ctx.query);
    console.log(ctx.querystring);
    ctx.body = ctx.query
});



app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () =>{
    console.log("Server started listening on 3000!");
});