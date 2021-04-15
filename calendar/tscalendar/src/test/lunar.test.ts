import { Lunar } from "../lunar";

test("print sq qb", ()=> {
    let lunar = new Lunar();

    lunar.yueLiCalc(2021, 4);

    let days = lunar.getDays();

    days.forEach(day => {
        console.log("day: " , day)
    })
}
);