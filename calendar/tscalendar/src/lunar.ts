import { DateTime, Jd, Week} from "./jd";
import { int2 } from "./math";
import { J2000, Gan, Zhi,ShX,Rmc, Jqmc ,XiZ, Scd, TimeK, Jqjl, Gzny, Ymc, Yxmc, pi2} from "./constants";
import { SSQ } from "./ssq";
import { dt_T } from "./dt";
import { XL } from "./xl";

export interface Location {
    lon?: number;
    lat?: number;
    country?: string;
    province?: string;
    city?: string;
}

export interface DayInfo {
  d0?: number;
  di?: number;
  dn?: number;
  y?: number;
  m?: number;
  week0?: number;
  week?: number;
  weeki?: number;
  weekN?: number;
  d?: number;
  Ldi?: number;
  Ldc?: string;
  cur_dz?: number;
  cur_xz?: number;
  cur_lq?: number;
  cur_mz?: number;
  cur_xs?: number;
  Lmc?: number;
  Ldn?: number;
  Lleap?: string;
  Lmc2?: string | number;
  Ljq?: string;
  dtpq?: string;
  yxmc?: string;
  yxjd?: string;
  yxsj?: string;
  jqmc?: string;
  jqjd?: string;
  jqsj?: string;
  Lyear?: number;
  Lyear0?: number;
  Lyear2?: string;
  Lyear3?: string;
  Lyear4?: number;
  Lmonth?: number;
  Lmonth0?: number;
  Lmonth2?: string;
  Lmonth3?: number;
  Lmonth4?: number;
  Lday2?: string;
  XiZ?: string;
  A?: string;
  B?: string;
  C?: string;
  Fjia?: number;
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

    constructor() {
        
    }

    getDays() {
      return this.days;
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
        let ssq = new SSQ();
        ssq.calcY(Bd0);
        for (i = 0, j = 0;i < Bdn;i++) {
          ob = {} as DayInfo;
          this.days[i] = ob;
          ob.d0 = Bd0 + i;
          ob.di = i;
          ob.y = By;
          ob.m = Bm;
          ob.dn = Bdn;
          ob.week0 = this.w0;
          ob.week = (this.w0 + i) % 7;
          ob.weeki = int2((this.w0 + i) / 7);
          ob.weekN = int2((this.w0 + Bdn - 1) / 7) + 1;
          let jdD0 = new Jd({jd: ob.d0 + J2000});
          ob.d = jdD0.getDD().day;
          // 若ZQ没有初始化或为上次数据 ， 则重新进行初始化 
          //if (!SSQ.ZQ.length || ob.d0 < SSQ.ZQ[0] || ob.d0 >= SSQ.ZQ[24]) SSQ.calcY(ob.d0); 
          let ZQ = ssq.getZQ();
          if (!ZQ || ob.d0 < ZQ[0] || ob.d0 >= ZQ[24]) ssq.calcY(ob.d0);
          let HS = ssq.getHS();
          var mk = int2((ob.d0 - HS[0]) / 30);
          if (mk < 13 && HS[mk + 1] <= ob.d0) mk++;
          ob.Ldi = ob.d0 - HS[mk]; // Ldi 是农历日期的index
          ob.Ldc = Rmc[ob.Ldi]; // Ldc 是农历日期
          ob.cur_dz = ob.d0 - ZQ[0];
          ob.cur_xz = ob.d0 - ZQ[12];
          ob.cur_lq = ob.d0 - ZQ[15];
          ob.cur_mz = ob.d0 - ZQ[11];
          ob.cur_xs = ob.d0 - ZQ[13];
          let ym = ssq.getYm();
          let dx = ssq.getDx();
          let leap = ssq.getLeap();
          if (ob.d0 == HS[mk] || ob.d0 == Bd0) {
            ob.Lmc = ym[mk];
            ob.Ldn = dx[mk];
            ob.Lleap = (leap && leap == mk) ? '闰' : '';
            ob.Lmc2 = mk < 13 ? ym[mk + 1] : "未知";
          } else {
            ob2 = this.days[i - 1];
            ob.Lmc = ob2.Lmc, ob.Ldn = ob2.Ldn;
            ob.Lleap = ob2.Lleap, ob.Lmc2 = ob2.Lmc2;
          } 
          let qk = int2((ob.d0 - ZQ[0] - 7) / 15.2184);
          if (qk < 23 && ob.d0 >= ZQ[qk + 1]) qk++;
          if (ob.d0 == ZQ[qk]) ob.Ljq = Jqmc[qk];
          else ob.Ljq = '';
          ob.dtpq = this.Dtlpq(qk, By, Bm);
          ob.yxmc = ob.yxjd = ob.yxsj = '';
          ob.jqmc = ob.jqjd = ob.jqsj = '';
          D = ZQ[3] + (ob.d0 < ZQ[3] ? -365 : 0) + 365.25 * 16 - 35;
          ob.Lyear = Math.floor(D / 365.2422 + 0.5);
          D = HS[2];
          let ymStr = ssq.getYmStr();
          for (j = 0;j < 14;j++) {
            if (ymStr[j] != '正' || leap == j && j) continue;
            D = HS[j];
            if (ob.d0 < D) {
              D -= 365;
              break;
            }
          } 
          D = D + 5810;
          ob.Lyear0 = Math.floor(D / 365.2422 + 0.5);
          D = ob.Lyear + 12000;
          ob.Lyear2 = Gan[D % 10] + Zhi[D % 12];
          D = ob.Lyear0 + 12000;
          ob.Lyear3 = Gan[D % 10] + Zhi[D % 12];
          ob.Lyear4 = ob.Lyear0 + 1984 + 2698;
          mk = int2((ob.d0 - ZQ[0]) / 30.43685);
          if (mk < 12 && ob.d0 >= ZQ[2 * mk + 1]) mk++;
          D = mk + int2((ZQ[12] + 390) / 365.2422) * 12 + 900000;
          ob.Lmonth = D % 12;
          ob.Lmonth2 = Gan[D % 10] + Zhi[D % 12];
          D = ob.d0 - 6 + 9000000;
          ob.Lday2 = Gan[D % 10] + Zhi[D % 12];
          mk = int2((ob.d0 - ZQ[0] - 15) / 30.43685);
          if (mk < 11 && ob.d0 >= ZQ[2 * mk + 2]) mk++;
          ob.XiZ = XiZ[(mk + 12) % 12] + '座';
          //oba.getHuiLi(ob.d0, ob);
          ob.A = ob.B = ob.C = '';
          ob.Fjia = 0;
          //oba.getDayName(ob, ob);
          //obb.getDayName(ob, ob);
        } 
        var d, xn, jd2 = Bd0 + dt_T(Bd0) - 8 / 24;
        w = XL.MS_aLon(jd2 / 36525, 10, 3);
        w = int2((w - 0.78) / Math.PI * 2) * Math.PI / 2;
        do {
          d = this.so_accurate(w);
          D = int2(d + 0.5);
          xn = int2(w / pi2 * 4 + 4000000.01) % 4;
          w += pi2 / 4;
          if (D >= Bd0 + Bdn) break;
          if (D < Bd0) continue;
          ob = this.days[D - Bd0];
          ob.yxmc = Yxmc[xn];
          ob.yxjd = '' + d;
          ob.yxsj = this.timeStr(d);
        } while (D + 5 < Bd0 + Bdn);
        w = XL.S_aLon(jd2 / 36525, 3);
        w = int2((w - 0.13) / pi2 * 24) * pi2 / 24;
        do {
          d = this.qi_accurate(w);
          D = int2(d + 0.5);
          xn = int2(w / pi2 * 24 + 24000006.01) % 24;
          w += pi2 / 24;
          if (D >= Bd0 + Bdn) break;
          if (D < Bd0) continue;
          ob = this.days[D - Bd0];
          ob.jqmc = Jqmc[xn];
          ob.jqjd = "" + d;
          ob.jqsj = this.timeStr(d);
        } 
        while (D + 12 < Bd0 + Bdn);
      }

      private Dtlpq(pjqn: number, By: number, Bm: number) {
        let y = By, m = Bm;
        let s = '';
        if (y < 1582 || y > 1644 || (y == 1644 && m == 12)) return s;
        let yearshi = 365.2425;
        let qiying = 55.0600;
        let qice = yearshi / 24;
        let pqrgz = ((y - 1281) * yearshi + qiying + pjqn * qice) % 60;
        let pqrtg = Gan[(10 + int2(pqrgz) % 10) % 10];
        let pqrdz = Zhi[(12 + int2(pqrgz) % 12) % 12];
        s = s + pqrtg + pqrdz + "日 ";
        let pqrhh = (pqrgz - int2(pqrgz)) * 24;
        let pqrsc = Zhi[(12 + ((pqrhh + 1) / 2)) % 12];
        let pqrsd = Scd[pqrhh % 2];
        let pqrmm = (pqrhh - int2(pqrhh)) * 60;
        let pqrsk = TimeK[(pqrmm / 14.4)];
        s = s + pqrsc + pqrsd + ' ' + pqrsk + '刻' + ' ' + Jqmc[pjqn] + '<br/>' + Ymc[(((pjqn + 1) / 2) + 12) % 12] + '月' + Jqjl[pjqn % 2];
        return s;
      }

      private qi_accurate(W: number) {
        let t = XL.S_aLon_t(W) * 36525;
        return t - dt_T(t) + 8 / 24;
      } 

      private so_accurate(W: number) {
        let t = XL.MS_aLon_t(W) * 36525;
        return t - dt_T(t) + 8 / 24;
      }

      private timeStr(jd: number) {
        let h, m, s;
        jd += 0.5;
        jd = (jd - int2(jd));
        s = int2(jd * 86400 + 0.5);
        h = int2(s / 3600);
        s -= h * 3600;
        m = int2(s / 60);
        s -= m * 60;
        h = "0" + h;
        m = "0" + m;
        s = "0" + s;
        return h.substr(h.length - 2, 2) + ':' + m.substr(m.length - 2, 2) + ':' + s.substr(s.length - 2, 2);
      }
}