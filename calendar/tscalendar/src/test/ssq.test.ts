import {SSQ} from "../ssq";
import { Jd } from "../jd";


test("print sq qb", ()=> {
    let jd = new Jd({year: 2020, month: 1, day: 1 })
    let ssq = new SSQ();
    ssq.calcY(jd.getJD());

    console.log(ssq.leap);
    console.log(ssq.ymStr);
    console.log(ssq.ZQ)
    
})