const puppeteer = require('puppeteer');

(async ()=> {
    const browser = await puppeteer.launch({
        headless : false,
        devtools: false,
        //args: ['--proxy-server=' + proxy.url]
    });

    const page = await browser.newPage();

    var url = "https://www.baidu.com";

    // 1. goto 
    await page.goto(url, {
        waitUntil: 'domcontentloaded'
    });

    // 2. 等待输入内容出现  
    await page.waitForSelector('#kw', {visible: true});

    // 3. 输入关键字 
    await page.type('#kw', "河南", {delay: 500});

    // 4. 点击搜索  
    await page.click('#su', {delay: 20});

    // 等待  
    await page.waitForSelector("#content_left", {visible: true});

    // 5. 定位连接  和 下一页 
    var cleft = await page.$('#content_left')
    var aas = await cleft.$$('h3 > a'); 
    console.log(aas.length);

    /**
    // 6. 点击连接  
    for (a in aas) {
        // 循环处理每一个页面， 模拟点击事件， 点击后浏览器会打开tab来显示页面； 通过browser 来获取新产生的页面 ；
        // 使用 browser事件来产生之 ； 
        // 使用事件获取新page的方式， 建议使用browser获取新页面的方式 。 
        var aa = aas[a];
        console.log("click on :" , aa.toString());
        browser.once('targetcreated', async target => {
            console.log("=====targetcreated event emit!=======")
            console.log(target.type());
            console.log(target.url());
            var p1 = await target.page(); 
            console.log(await p1.title());
            console.log(await p1.url());
            var c1 = await p1.content();
            console.log("内容长度：", c1.length);
    
            await p1.waitFor(2000);
            console.log("===关闭页面==")
            await p1.close();

        });

        await aa.click({delay:20});
        await page.waitFor(4000);

    } */

    console.log("开始进行页面链接点击");

    // 6. 点击连接 
    for (a in aas) {
        // 循环处理每一个页面， 模拟点击事件， 点击后浏览器会打开tab来显示页面； 通过browser 来获取新产生的页面 ；
        var aa = aas[a];
        console.log("click on :" , aa.toString());

        var curentps = await browser.pages();
        console.log("当前页面长度：", curentps.length);

        await aa.click({delay:20});


        function checknewpages() {
            let pros =  new Promise((x) => async (x) => {
                var cps = await browser.pages();
                return x(cps.length > curentps.length);
            });
            pros.then();
        }

        function getNewPageWhenLoaded() {
            return new Promise((x) => browser.once('targetcreated', async (target) => {
                const newPage = await target.page();
                const newPagePromise = new Promise(() => newPage.once('domcontentloaded', () => x(newPage)));
                const isPageLoaded = await newPage.evaluate(() => document.readyState);
                return isPageLoaded.match('complete|interactive') ? x(newPage) : newPagePromise;
            }));
        }
        // 7. 等待连接加载完成 
        //await page.waitFor(3000);
        //await page.waitForFunction(getNewPageWhenLoaded, {polling: 300});

        var p1 = await  getNewPageWhenLoaded();

        //var ps = await browser.pages();
        //console.log("=== all pages===", ps.length);
        
        // 最后一个page 
        //var p1 = ps[ps.length - 1 ];
        console.log(await p1.title());
        console.log(await p1.url());

        // 8. 滑动页面 

        var c1 = await p1.content();
        console.log("内容长度：", c1.length);

        // 9. 关闭页面 
        console.log("wait for 2000, then close");
        await p1.waitFor(2000);
        await p1.close();

    }

    // 10. 点击下一个页面 


})();
