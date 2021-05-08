
// 天干
export const TIANGAN = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
// 地支
export const DIZHI = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
export const WUXING = ["", "木","火","土","金","水"]
// 支藏干
export  const ZHICANGGAN = {
  "子" : ["癸"],
  "丑" : ["癸","己","辛"],
  "寅" : ["丙","甲","戊"],
  "卯" : ["乙"],
  "辰" : ["乙","戊","癸"],
  "巳" : ["戊","丙","庚"],
  "午" : ["丁","己",""],
  "未" : ["乙","己","丁"],
  "申" : ["戊","庚","壬"],
  "酉" : ["辛"],
  "戌" : ["辛","戊","丁"],
  "亥" : ["壬","甲"],
}
// 同性 异性
export const SHISHEN = ["比肩","偏印","七杀","偏财","食神","劫财","正印","正官","正财","伤官"]
/**
 * 1. 天干信息， 输入一个天干，获取其相关的信息： 阴阳、五行、方位、生克、冲、合、刑
 * 2. 输入2个天干， 输出其关系 
 * 3. 地支信息， 输入一个地支，获取相关的信息： 阴阳，五行，方位，藏干，冲合刑克害
 * 4. 输入2个地支，输出其关系 
 * 5. 输入3个地支，输出其关系 
 * 十二声旺库 
 * 输入日主和一个天干分析其关系 
 */

const ganNo = (g) => {
  return TIANGAN.indexOf(g) + 1;
}
const zhiNo = (z) => {
  return DIZHI.indexOf(z) + 1;
}
const gan2WuXing = (gNo) => {
  if ((gNo % 2 ) == 1) gNo += 1;
  return gNo /2 ;
}
export const calcShen = (gd, g) => {
  //console.log("suan shi shen :",gd, g);
  if (!gd || gd == '') return '';
  if (!g || g == '') return '';
  let dNo = ganNo(gd);
  let gNo = ganNo(g);
  let dYY = dNo % 2; // 0-阴 1-阳
  let gYY = gNo % 2; 
  let dWX = gan2WuXing(dNo);
  let gWX = gan2WuXing(gNo);
  let id = (dWX - gWX + 5) % 5;
  if (dYY != gYY) id += 5;
  return SHISHEN[id];
}

export const calcCangGanShen = (gd, z) => {
  if (!gd || gd == '') return [];
  if (!z || z == '') return [];
  let zList = ZHICANGGAN[z];
  let res = [];
  for (let g of zList) {
    res.push([g,calcShen(gd, g)]);
  }
  return res;
}