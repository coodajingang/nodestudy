import {AbstractSpider} from "../spider";
import {spider} from "../decorators";

@spider({name: "TestSpider2"})
export  class TestSpider2 extends AbstractSpider{
    constructor() {
        super("github.com");
        console.log("TestSpider2 constructor!");
    }
    dospider() {
        console.log("Do spider with " + this.url);
    }

}