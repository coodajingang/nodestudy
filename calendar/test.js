
const J2000 = 2451545;

function int2(v) {
  return Math.floor(v);
}

class Julian {
  #year = 2000
  #month = 1
  #day = 1
  #hour = 12
  #minute = 0
  #second = 0
  #julianDay = 2451545;

  constructor(year, month, day, hour, minute, second) {
    this.#year = year;
    this.#month = month;
    this.#day = day;
    this.#hour = hour;
    this.#minute = minute;
    this.#second = second;
    let d = day + ((this.#second / 60 + this.#minute) / 60 + this.#hour) / 24;
    var n = 0, G = 0;
    if (year * 372 + month * 31 + int2(d) >= 588829) G = 1;
    if (month <= 2) {month += 12, year--;}
    if (G) {n = int2(year / 100), n = 2 - n + int2(n / 4);}
    this.#julianDay = int2(365.25 * (year + 4716)) + int2(30.6001 * (month + 1)) + d + n - 1524.5;
  }

  static of(jd) {
    var D = int2(jd + 0.5), F = jd + 0.5 - D, c;
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
    return new Julian(year, month, day, hour, minute, second);
  }

  get timeStr() {
    var Y = "     " + this.year, M = "0" + this.month, D = "0" + this.day;
    var h = this.hour, m = this.minute, s = int2(this.second + .5);
    if (s >= 60) s -= 60, m++;
    if (m >= 60) m -= 60, h++;
    h = "0" + h;
    m = "0" + m;
    s = "0" + s;
    Y = Y.substr(Y.length - 5, 5);
    M = M.substr(M.length - 2, 2);
    D = D.substr(D.length - 2, 2);
    h = h.substr(h.length - 2, 2);
    m = m.substr(m.length - 2, 2);
    s = s.substr(s.length - 2, 2);
    return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
  }

  get week() {
    return int2(this.julianDay + 1.5 + 7000000) % 7;
  }

  get year() {
    return this.year;
  }
  get month() {
    return this.month;
  }
  get day() {
    return this.day;
  }
  get hour() {
    return this.hour;
  }
  get minute() {
    return this.minute;
  }
  get second() {
    return this.second;
  }
  get julianDay() {
    return this.julianDay;
  }
}

const jd = new Julian(2000, 1,1,12,0,0,);
console.log(jd.year, jd.month, jd.day, jd.hour, jd.minute, jd.second, jd.julianDay, jd.week)
console.log(jd.timeStr)