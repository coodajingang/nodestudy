import * as webpack from "webpack";
import numberToIdentifer = webpack.Template.numberToIdentifer;

enum TestEnum {
    ON,
    OFF
}

console.log(TestEnum.OFF);
console.log(TestEnum.ON === 0);
console.log(TestEnum.ON === "0");
console.log(TestEnum.ON == "0");
console.log(typeof TestEnum["0"]);
console.log(TestEnum[Number("3")]);
console.log(TestEnum[Number("3a")]);

