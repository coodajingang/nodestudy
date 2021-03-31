import { int2 } from "./math";

export enum Week {
    SUN ,//= "日",
    MON ,//= "一",
    TUE ,//= "二",
    WED ,//= "三",
    THU ,//= "四",
    FRI ,//= "五",
    SAT ,//= "六",
}
export interface DateTime {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    jd?: number;
    week?: Week;
}

export class Jd {
    dt: DateTime;
    constructor(dt: DateTime) {
        this.dt = dt;
    }

    getJD(): number {
        if (this.dt.jd) return this.dt.jd;
        this.date2Jd();
        if (this.dt.jd) return this.dt.jd;
        throw new Error("When calc jd erorr!");
    }
    getDD(): DateTime {
        if (this.dt.year && this.dt.month && this.dt.day) return this.dt;
        this.jd2Date();
        return this.dt;
    }
    getWeek(): Week {
        if (this.dt.week) return this.dt.week;
        this.calculateWeek();
        if (this.dt.week) return this.dt.week;
        throw new Error("When calc week error!");
    }
    getTimeStr(): string {
        if (!this.dt.year || !this.dt.month || !this.dt.day) {
            this.jd2Date();
        }
        let h = this.dt.hour? this.dt.hour: 12, m = this.dt.minute? this.dt.minute: 0, s = int2(this.dt.second ? this.dt.second : 0 + .5);
        if (s >= 60) s -= 60, m++;
        if (m >= 60) m -= 60, h++;
        return this.leftPadding(this.dt.year, "     ", 5) + "-" 
            + this.leftPadding(this.dt.month, "0", 2) + "-" 
            + this.leftPadding(this.dt.day, "0", 2) + " " 
            + this.leftPadding(h, "0", 2) + ":" 
            + this.leftPadding(m, "0", 2) + ":" 
            + this.leftPadding(s, "0", 2);
    }

    private date2Jd() {
        if (!this.dt.year || !this.dt.month || !this.dt.day) {
            throw new Error("When convert date to jd,the year month day must input!");
        }
        if (!this.dt.hour) this.dt.hour = 12;
        if (!this.dt.minute) this.dt.minute = 0;
        if (!this.dt.second) this.dt.second = 0;
        let year = this.dt.year;
        let month = this.dt.month;
        let d = this.dt.day + ((this.dt.second / 60 + this.dt.minute) / 60 + this.dt.hour) / 24;
        let n = 0, G = 0;
        if (year * 372 + month * 31 + int2(d) >= 588829) G = 1;
        if (month <= 2) {month += 12, year--;}
        if (G) {n = int2(year / 100), n = 2 - n + int2(n / 4);}
        this.dt.jd = int2(365.25 * (year + 4716)) + int2(30.6001 * (month + 1)) + d + n - 1524.5;
    }
    private jd2Date() {
        if (!this.dt.jd) {
            throw new Error("When convert jd to date, the jd must not empty!")
        }
        let D = int2(this.dt.jd + 0.5), F = this.dt.jd + 0.5 - D, c = 0;
        if (D >= 2299161) c = int2((D - 1867216.25) / 36524.25), D += 1 + c - int2(c / 4);
        D += 1524;
        let year = int2((D - 122.1) / 365.25);
        D -= int2(365.25 * year);
        let month = int2(D / 30.601);
        D -= int2(30.601 * month);
        let day = D;
        if (month > 13) month -= 13, year-= 4715;
        else month -= 1, year -= 4716;
        F *= 24;
        let hour = int2(F);
        F -= hour;
        F *= 60;
        let minute = int2(F);
        F -= minute;
        F *= 60;
        let second = F;
        this.dt.year = year;
        this.dt.month = month;
        this.dt.day = day;
        this.dt.hour = hour;
        this.dt.minute = minute;
        this.dt.second = second;
    }

    private calculateWeek() {
        if (!this.dt.jd) {
            this.date2Jd();
        }
        if (!this.dt.jd) {
            throw new Error("When calculate week,the jd must not empty!");
        }
        this.dt.week = int2(this.dt.jd + 1.5 + 7000000) % 7;
    }
    private right(str: string, len: number): string {
        if (!str || str.length == 0 || str.length <= len) return str;
        return str.slice(str.length - len);
    }
    private leftPadding(str: string| number| undefined, pad: string, len: number): string {
        return this.right(pad + str, len);
    }
}