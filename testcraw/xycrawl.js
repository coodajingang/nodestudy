const puppeteer = require('puppeteer');
const proxypool = require('./testmongodb2.js');
const { URL, URLSearchParams } = require('url');

(async ()=> {

    // var data = await proxypool.getproxy();

    // console.log(data.length);
    // var index = Math.floor(Math.random() * data.length);
    // console.log(index);
    // var proxy  = data[index];
    // console.log("Select proxy: ", proxy);
    // console.log(proxy.url);

    const browser = await puppeteer.launch({
        headless : false,
        devtools: false,
        //args: ['--proxy-server=' + proxy.url]
    });

    const page = await browser.newPage();

    page.on('request', request => {
        // console.log("Intercept " + request.resourceType + " " + request.url);
        let currentUrl = new URL(request.url());
        if (request.resourceType() === 'image' 
          && currentUrl.hostname === 'geenew.geetest.com' && currentUrl.pathname.includes('gee_static/')) {
          console.log("GeetestImageUrl=" + request.url);
        } 
    });

    var url = "http://gd.gsxt.gov.cn/index.html";

    try {
        let response = await page.goto(url, {
            waitUntil: 'domcontentloaded'
        });

        response = await page.goto(url , {
            waitUntil: 'domcontentloaded'
        });
    } catch (err) {
        console.log('Get page failed .', err);
    }

    await page.waitForSelector("#keyword", {visible: true})


    const KEYWORD_SELECTOR  = '#keyword';
    const BUTTON_SELECTOR = '#btn_query';

    await page.type(KEYWORD_SELECTOR, '供应链', {delay: 500});
    await page.click(BUTTON_SELECTOR, {delay: 20});


    // 等待查询结果出现 #advs > div > div:nth-child(2) > a:nth-child(1)
    await page.waitForSelector("#advs", {visible: true});

    var divs = await page.$('#advs');

    //console.log(divs);

    // xpath  //*[@id="advs"]/div/div[2]/a[1]
    // #advs > div > div:nth-child(2) > a:nth-child(6)
    
    var res = await divs.$$('.search_list_item');
    //var aas = await divs.$$eval('.search_list_item', res => {
    console.log("==获取当前页的查询结果 ============", res.length);

    for (a in res) {
        c = res[a];
        console.log("==点击连接==");
        // 点击每一页  ， 获取之
        await c.click({delay: 30});

        function getNewPageWhenLoaded() {
            return new Promise((x) => browser.once('targetcreated', async (target) => {
                const newPage = await target.page();
                const newPagePromise = new Promise(() => newPage.once('domcontentloaded', () => x(newPage)));
                const isPageLoaded = await newPage.evaluate(() => document.readyState);
                return isPageLoaded.match('complete|interactive') ? x(newPage) : newPagePromise;
            }));
        };

        // 等待直到 营业执照信息显示 
        var p1 = await  getNewPageWhenLoaded();
        await p1.waitForSelector("#content1", {visible: true});

        var c1 = await p1.content();

        console.log("page len:", c1.length);

        // 点击打印按钮  
        var btn1 = await p1.$('#btn_print');

        await btn1.hover();

        //await p1.click('#btn_print', {delay: 30});
        btn1.click({delay: 40});
        
        console.log("click print btn ， then will clict printinfo")
        // 等待提示框出现  
        await p1.waitFor(2000);
        //await p1.waitForSelector('#print_info', {visible: true});
        await p1.click('#pop-captcha-print', {delay: 30});

        var p2= await  getNewPageWhenLoaded();
        await p2.waitForSelector('.overview', {visible: true});
        var content = await p2.content();
        console.log(content);
        
        // 关闭page  
        await p2.waitFor(3000);
        await p2.close();
        // 暂时先只处理第一条
        //break;
    }
    //}); 

    // 获取下一页  
    var pagediv = await page.$('.pagination');

    var pages = await pagediv.$$eval('a', res => {
        console.log("===pages");
        for (a in res) {
            p = res[a];
            if (p.innerHTML == '下一页') {
                console.log("got xiayiye :" , p);
            }
        }
    });


})();
