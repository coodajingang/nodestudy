import { DateTime, Jd, Week} from "./jd";
import { int2 } from "./math";
import { J2000, Gan, Zhi,ShX } from "./constants";

export interface Location {
    lon?: number;
    lat?: number;
    country?: string;
    province?: string;
    city?: string;
}

export interface DayInfo {

}

export function year2Ayear(c: string): number {
    let y = String(c).replace(/[^0-9Bb\*-]/g, '');
    let q = y.substr(0, 1);
    let x = 0;
    if (q == 'B' || q == 'b' || q == '*') {
        x = 1 - Number(y.substr(1, y.length));
        if (x > 0) {
            //alert('通用纪法的公元前纪法从B.C.1年开始。并且没有公元0年');
            throw new Error("通用纪法的公元前纪法从B.C.1年开始。并且没有公元0年");
        }
    } else {
        x = Number(y);
        x -= 0;
    }
    if (x < -4712) throw new Error("超过B.C. 4713不准"); //alert('超过B.C. 4713不准');
    if (x > 9999) throw new Error('超过9999年的农历计算很不准。'); //alert('超过9999年的农历计算很不准。');
    return x;
}

export function Ayear2year(y: number): string {
    y -= 0;
    if (y <= 0) return 'B' + (-y + 1);
    return '' + y;
}

export class Lunar {
    days: DayInfo[] =[];
    nianHao: string = "";
    shuXiang: string = "";
    // 当前的日期
    currentDt: DateTime = {};
    // 选择的日期
    selectDt: DateTime = {};
    location: Location ={};
    w0: number = 0;
    y: number = 0;
    m = 0;
    d0 = 0;
    dn = 0;
    Ly = "";
    ShX = "";

    constructor(dt: DateTime, loc: Location) {
        
    }


    yueLiCalc(By: number, Bm: number) {
        let i, j, k, c, Bd0, Bdn;
        // 当月1日jd对象
        let jd1 = new Jd({year: By, month: Bm, day: 1, hour: 12, minute: 0, second: 0.1});
        Bd0 = int2(jd1.getJD()) - J2000;
        let tempM = Bm + 1;
        let tempY = By;
        if (tempM > 12) tempY++, tempM = 1;
        let jdn = new Jd({year: tempY, month: tempM, day: 1, hour: 12, minute: 0, second: 0.1})
        Bdn = int2(jdn.getJD()) - J2000 - Bd0;
        this.w0 = (Bd0 + J2000 + 1 + 7000000) % 7;
        this.y = By;
        this.m = Bm;
        this.d0 = Bd0;
        this.dn = Bdn;
        c = By - 1984 + 12000; // 1984是甲子年 
        this.Ly = Gan[c % 10] + Zhi[c % 12];
        this.ShX = ShX[c % 12];
        //this.nianHao = obb.getNH(By);
        let D, w, ob, ob2;
        for (i = 0, j = 0;i < Bdn;i++) {
          ob = this.lun[i];
          ob.d0 = Bd0 + i;
          ob.di = i;
          ob.y = By;
          ob.m = Bm;
          ob.dn = Bdn;
          ob.week0 = this.w0;
          ob.week = (this.w0 + i) % 7;
          ob.weeki = int2((this.w0 + i) / 7);
          ob.weekN = int2((this.w0 + Bdn - 1) / 7) + 1;
          JD.setFromJD(ob.d0 + J2000);
          ob.d = JD.D;
          if (!SSQ.ZQ.length || ob.d0 < SSQ.ZQ[0] || ob.d0 >= SSQ.ZQ[24]) SSQ.calcY(ob.d0);
          var mk = int2((ob.d0 - SSQ.HS[0]) / 30);
          if (mk < 13 && SSQ.HS[mk + 1] <= ob.d0) mk++;
          ob.Ldi = ob.d0 - SSQ.HS[mk];
          ob.Ldc = obb.rmc[ob.Ldi];
          ob.cur_dz = ob.d0 - SSQ.ZQ[0];
          ob.cur_xz = ob.d0 - SSQ.ZQ[12];
          ob.cur_lq = ob.d0 - SSQ.ZQ[15];
          ob.cur_mz = ob.d0 - SSQ.ZQ[11];
          ob.cur_xs = ob.d0 - SSQ.ZQ[13];
          if (ob.d0 == SSQ.HS[mk] || ob.d0 == Bd0) {
            ob.Lmc = SSQ.ym[mk];
            ob.Ldn = SSQ.dx[mk];
            ob.Lleap = (SSQ.leap && SSQ.leap == mk) ? '闰' : '';
            ob.Lmc2 = mk < 13 ? SSQ.ym[mk + 1] : "未知";
          } else {
            ob2 = this.lun[i - 1];
            ob.Lmc = ob2.Lmc, ob.Ldn = ob2.Ldn;
            ob.Lleap = ob2.Lleap, ob.Lmc2 = ob2.Lmc2;
          } 
          var qk = int2((ob.d0 - SSQ.ZQ[0] - 7) / 15.2184);
          if (qk < 23 && ob.d0 >= SSQ.ZQ[qk + 1]) qk++;
          if (ob.d0 == SSQ.ZQ[qk]) ob.Ljq = obb.jqmc[qk];
          else ob.Ljq = '';
          ob.dtpq = Dtlpq(qk);
          ob.yxmc = ob.yxjd = ob.yxsj = '';
          ob.jqmc = ob.jqjd = ob.jqsj = '';
          D = SSQ.ZQ[3] + (ob.d0 < SSQ.ZQ[3] ? -365 : 0) + 365.25 * 16 - 35;
          ob.Lyear = Math.floor(D / 365.2422 + 0.5);
          D = SSQ.HS[2];
          for (j = 0;j < 14;j++) {
            if (SSQ.ym[j] != '正' || SSQ.leap == j && j) continue;
            D = SSQ.HS[j];
            if (ob.d0 < D) {
              D -= 365;
              break;
            }
          } 
          D = D + 5810;
          ob.Lyear0 = Math.floor(D / 365.2422 + 0.5);
          D = ob.Lyear + 12000;
          ob.Lyear2 = obb.Gan[D % 10] + obb.Zhi[D % 12];
          D = ob.Lyear0 + 12000;
          ob.Lyear3 = obb.Gan[D % 10] + obb.Zhi[D % 12];
          ob.Lyear4 = ob.Lyear0 + 1984 + 2698;
          mk = int2((ob.d0 - SSQ.ZQ[0]) / 30.43685);
          if (mk < 12 && ob.d0 >= SSQ.ZQ[2 * mk + 1]) mk++;
          D = mk + int2((SSQ.ZQ[12] + 390) / 365.2422) * 12 + 900000;
          ob.Lmonth = D % 12;
          ob.Lmonth2 = obb.Gan[D % 10] + obb.Zhi[D % 12];
          D = ob.d0 - 6 + 9000000;
          ob.Lday2 = obb.Gan[D % 10] + obb.Zhi[D % 12];
          mk = int2((ob.d0 - SSQ.ZQ[0] - 15) / 30.43685);
          if (mk < 11 && ob.d0 >= SSQ.ZQ[2 * mk + 2]) mk++;
          ob.XiZ = obb.XiZ[(mk + 12) % 12] + '座';
          oba.getHuiLi(ob.d0, ob);
          ob.A = ob.B = ob.C = '';
          ob.Fjia = 0;
          oba.getDayName(ob, ob);
          obb.getDayName(ob, ob);
        } 
        var d, xn, jd2 = Bd0 + dt_T(Bd0) - 8 / 24;
        w = XL.MS_aLon(jd2 / 36525, 10, 3);
        w = int2((w - 0.78) / Math.PI * 2) * Math.PI / 2;
        do {
          d = obb.so_accurate(w);
          D = int2(d + 0.5);
          xn = int2(w / pi2 * 4 + 4000000.01) % 4;
          w += pi2 / 4;
          if (D >= Bd0 + Bdn) break;
          if (D < Bd0) continue;
          ob = this.lun[D - Bd0];
          ob.yxmc = obb.yxmc[xn];
          ob.yxjd = d;
          ob.yxsj = JD.timeStr(d);
        } while (D + 5 < Bd0 + Bdn);
        w = XL.S_aLon(jd2 / 36525, 3);
        w = int2((w - 0.13) / pi2 * 24) * pi2 / 24;
        do {
          d = obb.qi_accurate(w);
          D = int2(d + 0.5);
          xn = int2(w / pi2 * 24 + 24000006.01) % 24;
          w += pi2 / 24;
          if (D >= Bd0 + Bdn) break;
          if (D < Bd0) continue;
          ob = this.lun[D - Bd0];
          ob.jqmc = obb.jqmc[xn];
          ob.jqjd = d;
          ob.jqsj = JD.timeStr(d);
        } while (D + 12 < Bd0 + Bdn);
      }

}