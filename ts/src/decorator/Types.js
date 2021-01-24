"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiderStatus = exports.SpiderType = void 0;
var SpiderType;
(function (SpiderType) {
    SpiderType[SpiderType["ONCE"] = 0] = "ONCE";
    SpiderType[SpiderType["CRON"] = 1] = "CRON";
})(SpiderType = exports.SpiderType || (exports.SpiderType = {}));
var SpiderStatus;
(function (SpiderStatus) {
    SpiderStatus[SpiderStatus["READY"] = 0] = "READY";
    SpiderStatus[SpiderStatus["RUNNING"] = 1] = "RUNNING";
    SpiderStatus[SpiderStatus["STOPED"] = 2] = "STOPED";
    SpiderStatus[SpiderStatus["PAUSE"] = 3] = "PAUSE";
    SpiderStatus[SpiderStatus["RESUME"] = 4] = "RESUME";
    SpiderStatus[SpiderStatus["ERROR"] = 5] = "ERROR";
})(SpiderStatus = exports.SpiderStatus || (exports.SpiderStatus = {}));
