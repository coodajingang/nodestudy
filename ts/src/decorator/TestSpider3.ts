import {AbstractSpider} from "./spider";
import {spider} from "./decorators";

@spider({name: "TestSpider3"})
export  class TestSpider3 extends AbstractSpider{
    constructor() {
        super("https://sss.github.com");
        console.log("TestSpider3 constructor!");
    }
    dospider() {
        console.log("Do spider3 with " + this.url);
    }

}