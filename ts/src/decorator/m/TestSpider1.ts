import {AbstractSpider} from "../spider";
import {spider} from "../decorators";

@spider({name: "TestSpider1"})
export class TestSpider1 extends AbstractSpider {

    constructor() {
        super("www.baidu.com");
        console.log("Testspider1 construcotr!");
    }

    dospider() {
        console.log("TestSpider1 do spider..." + this.url);
    }

}