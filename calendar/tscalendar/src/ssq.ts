import { int2 } from "./math";
import { XL } from "./xl";
import { dt_T } from "./dt";
import { Ymc } from "./constants";

const suoS = "EqoFscDcrFpmEsF2DfFideFelFpFfFfFiaipqti1ksttikptikqckstekqttgkqttgkqteksttikptikq2fjstgjqttjkqttgkqt"
    + "ekstfkptikq2tijstgjiFkirFsAeACoFsiDaDiADc1AFbBfgdfikijFifegF1FhaikgFag1E2btaieeibggiffdeigFfqDfaiBkF"
    + "1kEaikhkigeidhhdiegcFfakF1ggkidbiaedksaFffckekidhhdhdikcikiakicjF1deedFhFccgicdekgiFbiaikcfi1kbFibef"
    + "gEgFdcFkFeFkdcfkF1kfkcickEiFkDacFiEfbiaejcFfffkhkdgkaiei1ehigikhdFikfckF1dhhdikcfgjikhfjicjicgiehdik"
    + "cikggcifgiejF1jkieFhegikggcikFegiegkfjebhigikggcikdgkaFkijcfkcikfkcifikiggkaeeigefkcdfcfkhkdgkegieid"
    + "hijcFfakhfgeidieidiegikhfkfckfcjbdehdikggikgkfkicjicjF1dbidikFiggcifgiejkiegkigcdiegfggcikdbgfgefjF1"
    + "kfegikggcikdgFkeeijcfkcikfkekcikdgkabhkFikaffcfkhkdgkegbiaekfkiakicjhfgqdq2fkiakgkfkhfkfcjiekgFebicg"
    + "gbedF1jikejbbbiakgbgkacgiejkijjgigfiakggfggcibFifjefjF1kfekdgjcibFeFkijcfkfhkfkeaieigekgbhkfikidfcje"
    + "aibgekgdkiffiffkiakF1jhbakgdki1dj1ikfkicjicjieeFkgdkicggkighdF1jfgkgfgbdkicggfggkidFkiekgijkeigfiski"
    + "ggfaidheigF1jekijcikickiggkidhhdbgcfkFikikhkigeidieFikggikhkffaffijhidhhakgdkhkijF1kiakF1kfheakgdkif"
    + "iggkigicjiejkieedikgdfcggkigieeiejfgkgkigbgikicggkiaideeijkefjeijikhkiggkiaidheigcikaikffikijgkiahi1"
    + "hhdikgjfifaakekighie1hiaikggikhkffakicjhiahaikggikhkijF1kfejfeFhidikggiffiggkigicjiekgieeigikggiffig"
    + "gkidheigkgfjkeigiegikifiggkidhedeijcfkFikikhkiggkidhh1ehigcikaffkhkiggkidhh1hhigikekfiFkFikcidhh1hit"
    + "cikggikhkfkicjicghiediaikggikhkijbjfejfeFhaikggifikiggkigiejkikgkgieeigikggiffiggkigieeigekijcijikgg"
    + "ifikiggkideedeijkefkfckikhkiggkidhh1ehijcikaffkhkiggkidhh1hhigikhkikFikfckcidhh1hiaikgjikhfjicjicgie"
    + "hdikcikggifikigiejfejkieFhegikggifikiggfghigkfjeijkhigikggifikiggkigieeijcijcikfksikifikiggkidehdeij"
    + "cfdckikhkiggkhghh1ehijikifffffkhsFngErD1pAfBoDd1BlEtFqA2AqoEpDqElAEsEeB2BmADlDkqBtC1FnEpDqnEmFsFsAFn"
    + "llBbFmDsDiCtDmAB2BmtCgpEplCpAEiBiEoFqFtEqsDcCnFtADnFlEgdkEgmEtEsCtDmADqFtAFrAtEcCqAE1BoFqC1F1DrFtBmF"
    + "tAC2ACnFaoCgADcADcCcFfoFtDlAFgmFqBq2bpEoAEmkqnEeCtAE1bAEqgDfFfCrgEcBrACfAAABqAAB1AAClEnFeCtCgAADqDoB"
    + "mtAAACbFiAAADsEtBqAB2FsDqpFqEmFsCeDtFlCeDtoEpClEqAAFrAFoCgFmFsFqEnAEcCqFeCtFtEnAEeFtAAEkFnErAABbFkAD"
    + "nAAeCtFeAfBoAEpFtAABtFqAApDcCGJ";
const qiS = "FrcFs22AFsckF2tsDtFqEtF1posFdFgiFseFtmelpsEfhkF2anmelpFlF1ikrotcnEqEq2FfqmcDsrFor22FgFrcgDscFs22FgEe"
    + "FtE2sfFs22sCoEsaF2tsD1FpeE2eFsssEciFsFnmelpFcFhkF2tcnEqEpFgkrotcnEqrEtFermcDsrE222FgBmcmr22DaEfnaF22"
    + "2sD1FpeForeF2tssEfiFpEoeFssD1iFstEqFppDgFstcnEqEpFg11FscnEqrAoAF2ClAEsDmDtCtBaDlAFbAEpAAAAAD2FgBiBqo"
    + "BbnBaBoAAAAAAAEgDqAdBqAFrBaBoACdAAf1AACgAAAeBbCamDgEifAE2AABa1C1BgFdiAAACoCeE1ADiEifDaAEqAAFe1AcFbcA"
    + "AAAAF1iFaAAACpACmFmAAAAAAAACrDaAAADG0";

function jieya(s: string): string {
    let o = "0000000000", o2 = o + o;
    s = s.replace(/J/g, '00');
    s = s.replace(/I/g, '000');
    s = s.replace(/H/g, '0000');
    s = s.replace(/G/g, '00000');
    s = s.replace(/t/g, '02');
    s = s.replace(/s/g, '002');
    s = s.replace(/r/g, '0002');
    s = s.replace(/q/g, '00002');
    s = s.replace(/p/g, '000002');
    s = s.replace(/o/g, '0000002');
    s = s.replace(/n/g, '00000002');
    s = s.replace(/m/g, '000000002');
    s = s.replace(/l/g, '0000000002');
    s = s.replace(/k/g, '01');
    s = s.replace(/j/g, '0101');
    s = s.replace(/i/g, '001');
    s = s.replace(/h/g, '001001');
    s = s.replace(/g/g, '0001');
    s = s.replace(/f/g, '00001');
    s = s.replace(/e/g, '000001');
    s = s.replace(/d/g, '0000001');
    s = s.replace(/c/g, '00000001');
    s = s.replace(/b/g, '000000001');
    s = s.replace(/a/g, '0000000001');
    s = s.replace(/A/g, o2 + o2 + o2);
    s = s.replace(/B/g, o2 + o2 + o);
    s = s.replace(/C/g, o2 + o2);
    s = s.replace(/D/g, o2 + o);
    s = s.replace(/E/g, o2);
    s = s.replace(/F/g, o);
    return s;
}

const suoKB = new Array(1457698.231017, 29.53067166, 1546082.512234, 29.53085106, 1640640.735300, 29.53060000, 1642472.151543, 29.53085439, 1683430.509300, 29.53086148, 1752148.041079, 29.53085097, 1807665.420323, 29.53059851, 1883618.114100, 29.53060000, 1907360.704700, 29.53060000, 1936596.224900, 29.53060000, 1939135.675300, 29.53060000, 1947168.00);
const qiKB = new Array(1640650.479938, 15.21842500, 1642476.703182, 15.21874996, 1683430.515601, 15.218750011, 1752157.640664, 15.218749978, 1807675.003759, 15.218620279, 1883627.765182, 15.218612292, 1907369.128100, 15.218449176, 1936603.140413, 15.218425000, 1939145.524180, 15.218466998, 1947180.798300, 15.218524844, 1964362.041824, 15.218533526, 1987372.340971, 15.218513908, 1999653.819126, 15.218530782, 2007445.469786, 15.218535181, 2021324.917146, 15.218526248, 2047257.232342, 15.218519654, 2070282.898213, 15.218425000, 2073204.872850, 15.218515221, 2080144.500926, 15.218530782, 2086703.688963, 15.218523776, 2110033.182763, 15.218425000, 2111190.300888, 15.218425000, 2113731.271005, 15.218515671, 2120670.840263, 15.218425000, 2123973.309063, 15.218425000, 2125068.997336, 15.218477932, 2136026.312633, 15.218472436, 2156099.495538, 15.218425000, 2159021.324663, 15.218425000, 2162308.575254, 15.218461742, 2178485.706538, 15.218425000, 2178759.662849, 15.218445786, 2185334.020800, 15.218425000, 2187525.481425, 15.218425000, 2188621.191481, 15.218437494, 2322147.76);

const J2000 = 2451545;
const SB_JIEYA = jieya(suoS);
const QB_JIEYA = jieya(qiS);


export class SSQ {
    SB = "";
    QB = "";
    leap = 0;
    ym = new Array<number>();
    ymStr = new Array<string>();
    ZQ = new Array<number>();
    HS = new Array<number>();
    dx = new Array<number>();
    Yn = new Array<number>();
    pe1: number = 0;
    pe2: number = 0;

    constructor() {
        this.SB = SB_JIEYA;
        this.QB = QB_JIEYA;
    }
    getLeap() {
        return this.leap;
    }
    getYm() {
        return this.ym;
    }
    getYmStr() {
        return this.ymStr;
    }
    getZQ() {
        return this.ZQ;
    }
    getHS() {
        return this.HS;
    }
    getDx() {
        return this.dx;
    }
    getYn() {
        return this.Yn;
    }
    getPe1() {
        return this.pe1;
    }
    getPe2() {
        return this.pe2;
    }
    calc(jd: number, qs: string): number {
        jd += 2451545;
        let i = 0, D = 0, n = "";
        let B = suoKB, pc = 14;
        if (qs == '气') B = qiKB, pc = 7;
        let f1 = B[0] - pc, f2 = B[B.length - 1] - pc, f3 = 2436935;
        if (jd < f1 || jd >= f3) {
            if (qs == '气') {
                return Math.floor(this.qi_high(Math.floor((jd + pc - 2451259) / 365.2422 * 24) * Math.PI / 12) + 0.5);
            } else return Math.floor(this.so_high(Math.floor((jd + pc - 2451551) / 29.5306) * Math.PI * 2) + 0.5);
        }
        if (jd >= f1 && jd < f2) {
            for (i = 0; i < B.length; i += 2) if (jd + pc < B[i + 2]) break;
            D = B[i] + B[i + 1] * Math.floor((jd + pc - B[i]) / B[i + 1]);
            D = Math.floor(D + 0.5);
            if (D == 1683460) D++;
            return D - 2451545;
        }
        if (jd >= f2 && jd < f3) {
            if (qs == '气') {
                D = Math.floor(this.qi_low(Math.floor((jd + pc - 2451259) / 365.2422 * 24) * Math.PI / 12) + 0.5);
                n = this.QB.substr(Math.floor((jd - f2) / 365.2422 * 24), 1);
            } else {
                D = Math.floor(this.so_low(Math.floor((jd + pc - 2451551) / 29.5306) * Math.PI * 2) + 0.5);
                n = this.SB.substr(Math.floor((jd - f2) / 29.5306), 1);
            }
            if (n == "1") return D + 1;
            if (n == "2") return D - 1;
            return D;
        }
        throw new Error("Error SSQ.calc");
    }

    calcY(jd: number) {
        let A = this.ZQ, B = this.HS;
        let i, k, W, w;
        W = int2((jd - 355 + 183) / 365.2422) * 365.2422 + 355;
        if (this.calc(W, '气') > jd) W -= 365.2422;
        for (i = 0; i < 25; i++) A[i] = this.calc(W + 15.2184 * i, '气');
        this.pe1 = this.calc(W - 15.2, '气');
        this.pe2 = this.calc(W - 30.4, '气');
        w = this.calc(A[0], '朔');
        if (w > A[0]) w -= 29.53;
        for (i = 0; i < 15; i++) B[i] = this.calc(w + 29.5306 * i, '朔');
        this.leap = 0;
        for (i = 0; i < 14; i++) {
            this.dx[i] = this.HS[i + 1] - this.HS[i];
            this.ym[i] = i;
        }
        let YY = int2((this.ZQ[0] + 10 + 180) / 365.2422) + 2000;
        if (YY >= -721 && YY <= -104) {
            let ns = new Array(), yy;
            for (i = 0; i < 3; i++) {
                yy = YY + i - 1;
                if (yy >= -721) ns[i] = this.calc(1457698 - J2000 + int2(0.342 + (yy + 721) * 12.368422) * 29.5306, '朔'), ns[i + 3] = '十三', ns[i + 6] = 2;
                if (yy >= -479) ns[i] = this.calc(1546083 - J2000 + int2(0.500 + (yy + 479) * 12.368422) * 29.5306, '朔'), ns[i + 3] = '十三', ns[i + 6] = 2;
                if (yy >= -220) ns[i] = this.calc(1640641 - J2000 + int2(0.866 + (yy + 220) * 12.369000) * 29.5306, '朔'), ns[i + 3] = '后九', ns[i + 6] = 11;
            }
            let nn, f1;
            for (i = 0; i < 14; i++) {
                for (nn = 2; nn >= 0; nn--) if (this.HS[i] >= ns[nn]) break;
                f1 = int2((this.HS[i] - ns[nn] + 15) / 29.5306);
                if (f1 < 12) {
                    this.ym[i] = (f1 + ns[nn + 6]) % 12;
                    this.ymStr[i] = Ymc[(f1 + ns[nn + 6]) % 12];
                }
                else this.ym[i] = ns[nn + 3];
            }
            return;
        }
        if (B[13] <= A[24]) {
            for (i = 1; B[i + 1] > A[2 * i] && i < 13; i++);
            this.leap = i;
            for (; i < 14; i++)this.ym[i]--;
        }
        for (i = 0; i < 14; i++) {
            let Dm = this.HS[i] + J2000, v2 = this.ym[i];
            let mc = Ymc[v2 % 12];
            if (Dm >= 1724360 && Dm <= 1729794) mc = Ymc[(v2 + 1) % 12];
            else if (Dm >= 1807724 && Dm <= 1808699) mc = Ymc[(v2 + 1) % 12];
            else if (Dm >= 1999349 && Dm <= 1999467) mc = Ymc[(v2 + 2) % 12];
            else if (Dm >= 1973067 && Dm <= 1977052) {
                if (v2 % 12 == 0) mc = "正";
                if (v2 == 2) mc = '一';
            } if (Dm == 1729794 || Dm == 1808699) mc = '拾贰';
            this.ymStr[i] = mc;
        }
    }
    so_low(W: number) {
        let v = 7771.37714500204;
        let t = (W + 1.08472) / v, L;
        t -= (-0.0000331 * t * t + 0.10976 * Math.cos(0.785 + 8328.6914 * t) + 0.02224 * Math.cos(0.187 + 7214.0629 * t) - 0.03342 * Math.cos(4.669 + 628.3076 * t)) / v + (32 * (t + 1.8) * (t + 1.8) - 20) / 86400 / 36525;
        return t * 36525 + 8 / 24;
    }
    qi_low(W: number) {
        let t, L, v = 628.3319653318;
        t = (W - 4.895062166) / v;
        t -= (53 * t * t + 334116 * Math.cos(4.67 + 628.307585 * t) + 2061 * Math.cos(2.678 + 628.3076 * t) * t) / v / 10000000;
        L = 48950621.66 + 6283319653.318 * t + 53 * t * t + 334166 * Math.cos(4.669257 + 628.307585 * t) + 3489 * Math.cos(4.6261 + 1256.61517 * t) + 2060.6 * Math.cos(2.67823 + 628.307585 * t) * t - 994 - 834 * Math.sin(2.1824 - 33.75705 * t);
        t -= (L / 10000000 - W) / 628.332 + (32 * (t + 1.8) * (t + 1.8) - 20) / 86400 / 36525;
        return t * 36525 + 8 / 24;
    }
    qi_high(W: number) {
        let t = XL.S_aLon_t2(W) * 36525;
        t = t - dt_T(t) + 8 / 24;
        let v = ((t + 0.5) % 1) * 86400;
        if (v < 1200 || v > 86400 - 1200) t = XL.S_aLon_t(W) * 36525 - dt_T(t) + 8 / 24;
        return t;
    }
    so_high(W: number) {
        let t = XL.MS_aLon_t2(W) * 36525;
        t = t - dt_T(t) + 8 / 24;
        let v = ((t + 0.5) % 1) * 86400;
        if (v < 1800 || v > 86400 - 1800) t = XL.MS_aLon_t(W) * 36525 - dt_T(t) + 8 / 24;
        return t;
    }
}