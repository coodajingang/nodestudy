"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestEnum;
(function (TestEnum) {
    TestEnum[TestEnum["ON"] = 0] = "ON";
    TestEnum[TestEnum["OFF"] = 1] = "OFF";
})(TestEnum || (TestEnum = {}));
console.log(TestEnum.OFF);
console.log(TestEnum.ON === 0);
console.log(TestEnum.ON === "0");
console.log(TestEnum.ON == "0");
console.log(typeof TestEnum["0"]);
console.log(TestEnum[Number("3")]);
console.log(TestEnum[Number("3a")]);
