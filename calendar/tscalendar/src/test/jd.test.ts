import { Week , DateTime , Jd} from "../jd";

test("jd test", ()=> {
  let dt:DateTime = {year: 2000, month: 1, day: 1, hour: 12, minute: 0, second:0 };
  let jd = new Jd(dt);
  console.log(jd.getTimeStr())
  expect(jd.getJD()).toBe(2451545);
})