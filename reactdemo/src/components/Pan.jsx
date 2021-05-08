import styles from "./pan.module.css";
import {useEffect, useMemo, useState} from 'react';
// import {TIANGAN, DIZHI} from "./Consts";
import { calcShen,TIANGAN, DIZHI,calcCangGanShen } from "./Basic";

const Pan = (props) => {
  const [gy, setGy] = useState("");
  const [gm, setGm] = useState("");
  const [gd, setGd] = useState("");
  const [gh, setGh] = useState("");
  const [zy, setZy] = useState("");
  const [zm, setZm] = useState("");
  const [zd, setZd] = useState("");
  const [zh, setZh] = useState("");
  const [showGan, setShowGan] = useState(false);
  const [showZhi, setShowZhi] = useState(false);
  const [ganX, setGanX] = useState(0);
  const [ganY, setGanY] = useState(0);
  const [zhiX, setZhiX] = useState(0);
  const [zhiY, setZhiY] = useState(0);
  const [ganTarget, setGanTarget] = useState("");
  const [zhiTarget, setZhiTarget] = useState(""); 
  const shenY = useMemo(()=>{return gd == '' ? '' : calcShen(gd, gy)} , [gd, gy]);
  const shenM = useMemo(()=>{return gd == '' ? '' : calcShen(gd, gm)} , [gd, gm]);
  const shenH = useMemo(()=>{return gd == '' ? '' : calcShen(gd, gh)} , [gd, gh]);
  const cangGanShenY = useMemo(() => {return calcCangGanShen(gd, zy)}, [gd, zy]);
  const cangGanShenM = useMemo(() => {return calcCangGanShen(gd, zm)}, [gd, zm]);
  const cangGanShenD = useMemo(() => {return calcCangGanShen(gd, zd)}, [gd, zd]);
  const cangGanShenH = useMemo(() => {return calcCangGanShen(gd, zh)}, [gd, zh]);

  const selectGan = (e) => {
    setGanTarget(e.target.id)
    setGanX(e.target.clientX);
    setGanY(e.target.clientY)
    setShowGan(true);
  }
  const ganCallback = (val, target) => {
    setShowGan(false);
    if (target == '1') setGy(val);
    if (target == '2') setGm(val);
    if (target == '3') setGd(val);
    if (target == '4') setGh(val);
  }
  const selectZhi = (e) => {
    setZhiTarget(e.target.id)
    setZhiX(e.target.clientX);
    setZhiY(e.target.clientY)
    setShowZhi(true);
  }
  const zhiCallback = (val, target) => {
    setShowZhi(false);
    if (target == '10') setZy(val);
    if (target == '20') setZm(val);
    if (target == '30') setZd(val);
    if (target == '40') setZh(val);
  }
  return (
    <div className={styles.pan}>
      <div className={styles.header}>
        <div className={`${styles.item} ${styles.shen}`}>{shenY}</div>
        <div className={`${styles.item} ${styles.shen}`}>{shenM}</div>
        <div className={`${styles.item} ${styles.shen} ${styles.riZhu}`}>日</div>
        <div className={`${styles.item} ${styles.shen}`}>{shenH}</div>
      </div>
      <div className={styles.gan}>
        <div tabIndex='0' id='1' onClick={selectGan} className={`${styles.item} ${styles.ganItem}`}>{gy}</div>
        <div tabIndex='0' id='2' onClick={selectGan} className={`${styles.item} ${styles.ganItem}`}>{gm}</div>
        <div tabIndex='0' id='3' onClick={selectGan} className={`${styles.item} ${styles.ganItem}`}>{gd}</div>
        <div tabIndex='0' id='4' onClick={selectGan} className={`${styles.item} ${styles.ganItem}`}>{gh}</div>
      </div>
      <div className={styles.zhi}>
        <div tabIndex='0' id='10' onClick={selectZhi} className={`${styles.item} ${styles.zhiItem}`}>{zy}</div>
        <div tabIndex='0' id='20' onClick={selectZhi} className={`${styles.item} ${styles.zhiItem}`}>{zm}</div>
        <div tabIndex='0' id='30' onClick={selectZhi} className={`${styles.item} ${styles.zhiItem}`}>{zd}</div>
        <div tabIndex='0' id='40' onClick={selectZhi} className={`${styles.item} ${styles.zhiItem}`}>{zh}</div>
      </div>
      <div className={styles.cang}>
        <div className={`${styles.item} `}>
          <CangGan data={cangGanShenY}/>
        </div>
        <div className={`${styles.item} `}><CangGan data={cangGanShenM}/></div>
        <div className={`${styles.item} `}><CangGan data={cangGanShenD}/></div>
        <div className={`${styles.item} `}><CangGan data={cangGanShenH}/></div>
      </div>
      <GanPan left={ganX} top={ganY} callback={ganCallback} display={showGan ? 'block': 'none'} target={ganTarget} data={TIANGAN} />
      <ZhiPan left={zhiX} top={zhiY} callback={zhiCallback} display={showZhi ? 'block': 'none'} target={zhiTarget} data={DIZHI} />
    </div>
  )
}

const GanPan = (props) => {
  const selectItem = (e)=> {
    let value = e.target.innerText
    props.callback(value, props.target);
  }
  return (
    <div className={styles.ganPan} style={{display:props.display, left:props.left, top:props.top}}>
      <div className={styles.ganPanContent}>
        {props.data.map(item => <div onClick={selectItem} key={item} className={styles.ganPanItem}>{item}</div>)}
      </div>
    </div>
  )
}
const ZhiPan = (props) => {
  const selectItem = (e)=> {
    let value = e.target.innerText
    props.callback(value, props.target);
  }
  return (
    <div className={styles.zhiPan} style={{display:props.display, left:props.left, top:props.top}}>
      <div className={styles.zhiPanContent}>
        {props.data.map(item => <div onClick={selectItem} key={item} className={styles.zhiPanItem}>{item}</div>)}
      </div>
    </div>
  )
}

const CangGan = (props) => {
  //const data = [["子", "食神"],["子", "伤官"],["子", "正财"]]
  return (
    <div className={styles.cangganpan}>
      {props.data.map(item => <div className={styles.canggan} key={item[0]}>
        <div className={styles.canggangan}>{item[0]}</div>
        <div className={styles.cangganshen}>{item[1]}</div>
      </div>)}
    </div>
  )
}

export default Pan;