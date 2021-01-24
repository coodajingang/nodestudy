
export abstract class AbstractSpider {
    url:string | string[];

    constructor(url) {
        this.url = url;
        console.log("Abstract spider constructor!");
    }

    /**
     * 开始执行爬虫
     */
    start() {
        console.log("准备初始化worker环境 ");

        const res = this.dospider();

        // 关闭资源等等。。。
        console.log("end...");
    }

    abstract dospider();
}