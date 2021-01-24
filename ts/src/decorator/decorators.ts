import {SpiderConfig} from "./Types";

/**
 * 注解@spider ， 方便爬虫被扫描时完成自注册
 *
 */
export const SpiderRegistry: {[name:string]: SpiderConfig} = {}
export function spider(config: SpiderConfig) {
    return function (target) {
        config["constr"] = target;
        SpiderRegistry[config.name] = config;
    };
}
