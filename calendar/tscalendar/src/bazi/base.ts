import {TianGanNm, DiZhiNm,YinYangNm,WuXingNm } from './baseTypes';

// 
function tianGanNo(str: string): number {
  return TianGanNm.indexOf(str);
}
function diZhiNo(str: string): number {
  return DiZhiNm.indexOf(str);
}

function tianGanStr(num : number) : string {
  return TianGanNm[num]
}
function diZhiStr(num : number) : string {
  return DiZhiNm[num]
}

function tianGanYinYang(str : string): number {
  return tianGanNo(str) % 2 
}

function diZhiYinYang(str : string): number {
  return diZhiNo(str) % 2 
}

function tianGanWuXing(str : string): number {
  let no = tianGanNo(str);
  if (tianGanNo(str) % 2 == 0) {
    no += 1;
  }
  return no / 2;
}

function diZhiWuXing(str : string): number {
  let no = diZhiNo(str);
  if ([1, 12].indexOf(no) > -1) return 5;
  if ([9, 10].indexOf(no) > -1) return 4;
  if ([2,5,8,11].indexOf(no) > -1) return 3;
  if ([6,7].indexOf(no) > -1) return 2;
  if ([3,4].indexOf(no) > -1) return 1;
  return 0;
}

