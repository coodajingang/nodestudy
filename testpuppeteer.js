const puppeteer = require('puppeteer')

puppeteer.launch({headless:false,devtools: true}).then(async browser => {
    var page = await browser.newPage()

    page.on("framenavigated", msg => {
        console.log("Event Framenavigated !")
    });

    page.on("domcontentloaded", msg => {
        console.log("Event domcontentloaded !")
    });
    
    await page.goto("http://www.baidu.com")

    var submit = await page.$('#su')

    await page.type("#kw","河南煤炭",{delay:200})
    var www = page.waitForNavigation()

    await submit.click()
    
    await www

    // #\31 等待函数 ， 避免使用 waitFor(milliseconds) 不精确 
    await page.waitForSelector("h3 > a", {visible: true})
    // const [response] = await Promise.all([
    //     await page.waitForNavigation({waitUntil:'networkidle0'}),
    //     await submit.click()
    //   ]);
    
    //console.log(response)
    //await page.waitFor(2000);

    var content = await page.content()

    console.log(await page.title())
    console.log(page.url()) 

    // # #\32 > h3 > a  #\31 > h3 > a  #\33 > h3 > a
    // //*[@id="container"]

    console.log(await page.$$eval('* > div > h3 > a' , cca => cca.length))
    console.log(await page.$$eval('#content_left > div > h3 > a' , cca => cca.length))
    console.log(await page.$$eval('* > h3 > a' , cca => cca.length))
    console.log(await page.$$eval('h3 > a' , cca => cca.length))

    // 获取所有的连接 名称和连接 
    var size = await page.$$eval("h3 > a", cca => {
        for (a in cca) {
            c = cca[a]
            console.log(c.getAttribute('href'))
            console.log(c.innerHTML)
            // console.log(c)
            // console.log(type(c))
        }
    } )

    var el = await page.$('#content_left')
    s1 = await page.evaluate(feles, el)

    function feles(els) {
        return els.length
    }
    
    console.log(s1)
}).catch(any => {
    console.log(any)
})