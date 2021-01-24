"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spider = exports.SpiderRegistry = void 0;
/**
 * 注解@spider ， 方便爬虫被扫描时完成自注册
 *
 */
exports.SpiderRegistry = {};
function spider(config) {
    return function (target) {
        config["constr"] = target;
        exports.SpiderRegistry[config.name] = config;
    };
}
exports.spider = spider;
