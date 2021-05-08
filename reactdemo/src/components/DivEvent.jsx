import styles from "./divevent.module.css";
import {useState} from 'react';
import BaZi from "./BaZi"


const DivEvent = (props) => {
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);

  const clickMe = (e)=>{
    console.log("click toggle panel");
    setShow(!show);
  }
  const selectItem = (e) => {
    setData(e.target.innerText)
    setShow(!show)
  }

  const callback = (value) => {
    console.log("Get value: ", value)
    setShow(false)
    if (value) {
    setData(value)
    }
  }
  
  return (
    <div >
      <div className={styles.box} onClick={clickMe}>{data}</div>
      <BaZi display={show ? "block": "none"} callback={callback}/>
    </div>
  )
}

export default DivEvent;