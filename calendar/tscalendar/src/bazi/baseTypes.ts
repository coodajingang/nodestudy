export const enum TianGan {
  JIA = 1,
  YI = 2,
  BING = 3,
  DING, WU, JI, REN , GUI
}

export const TianGanNm = ["","甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];

export const enum DiZhi {
  ZI = 1, CHOU , YIN, MAO, CHEN, SI, WU, WEI, SHEN, YOU, XU, HAI
}

export const DiZhiNm = ["","子","丑","寅","卯","辰","巳","午","未","申","酉", "戌", "亥"];

export const enum YinYang {
  YANG = 1, YIN = 2
}

export const YinYangNm = ["","阳", "阴"];

export const WuXingNm = ["", "木","火","土","金","水"];

// 关系类型
export const enum RelType {
  SHENG = "生",
  KE = "克",
  XING = "刑",
  CHONG = "冲",
  HE = "合",
  HUI = "会",
  SANXING = "三刑",
  ZIXING = "自刑",
  CHENGSHENG = "长生",
  DIWANG = "帝旺",
  SI = "死",
  MU = "墓",
  JUE = "绝",
  CANGGAN = "藏干",
}

export const enum ObjType {
  YINYANG = "阴阳",
  WUXING = "五行", TIANGAN = "天干", DIZHI = "地支"
}

// 关系主体
export const enum RelObj {
  YINYANG = "阴阳",
  WUXING = "五行",
  TAINGAN = "天干",
  DIZHI = "地支",
}

// 主体个数
export const enum RelObjNum {
  SELF = 0,
  ONE = 1, 
  TWO = 2,
  THREE = 3
}

export interface RelationShip {
  objA : ObjInfo,
  
}

export interface ObjInfo {
  name: string,
  id: number,
  type: ObjType,
}