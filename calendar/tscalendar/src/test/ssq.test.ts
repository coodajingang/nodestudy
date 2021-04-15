import {SSQ} from "../ssq";
import { Jd } from "../jd";


test("print sq qb", ()=> {
    let jd = new Jd({year: 2020, month: 1, day: 1 })
    let ssq = new SSQ();
    ssq.calcY(jd.getJD());

    console.log("leap===============");
    console.log(ssq.leap);
    console.log("ymStr===============");
    console.log(ssq.ymStr);
    console.log("ym===============");
    console.log(ssq.getYm());
    console.log("ZQ===============");
    console.log(ssq.ZQ)
    console.log("HS===============");
    console.log(ssq.getHS());
    console.log("Dx===============");
    console.log(ssq.getDx());
    console.log("Yn===============");
    console.log(ssq.getYn());
    console.log("Pe1===============");
    console.log(ssq.getPe1());
    console.log("Pe2===============");
    console.log(ssq.getPe2())
    
})