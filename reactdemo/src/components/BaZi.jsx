import styles from "./divevent.module.css";
import {useEffect, useState} from 'react';

const BaZi = (props) => {
  //const [dis, setDis] = useState(props.display + "");

  const selectItem = (e) =>{
    console.log("select data: ", e.target.innerText);
    //setDis("none");
    props.callback(e.target.innerText)
  }

  useEffect(()=>{
    window.addEventListener('keyup', (ev)=>{
      console.log("keyup listener", props.display);
      if (ev.code == 'Escape') {
        console.log("close panel");
        props.callback();
      }
    })
    return ()=>{
      window.removeEventListener('keyup', ()=> console.log('remove listener keyup'))
    }
  }, [])

  const items = ["甲","乙","丙","丁"]
  return (
    <div style={{display: props.display}}>
      <p>{props.display}</p>
      <div className={styles.selectBox}>
        {items.map(item => <div tabIndex="0" className={styles.item} key={item.toString()} onClick={selectItem}>{item}</div>)}
      </div>
  </div>
  )
}



export default BaZi;