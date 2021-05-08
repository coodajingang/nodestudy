import styles from "./layout.module.css"
import {IconBooks, IconSearch, IconSettings, IconPlus} from './../icon/IconNotes';
import { useState } from "react";


const Layout = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [showFloatPan, setShowFloatPan] = useState(false);
  
  const [floatPanWidth, setFloatPanWidth] = useState(360);

  const toggleFloatPan = (e) => {
    let index = e.currentTarget.getAttribute('data-index');
    if (index == currentIndex) {
      setCurrentIndex(0);
      setShowFloatPan(false);
    } else {
      setCurrentIndex(index);
      setShowFloatPan(true)
    }
  }


  return (
      <div className={styles.layout}>
        <div className={styles.sider} >
           <div className={styles['sider-fix-pan']}>
              <div className={`${styles['pan-item']} ${currentIndex == 1 ? styles['pan-item-active'] : 'null'}`} data-index={1} onClick={toggleFloatPan}>
                <IconBooks width={21} heigh={21} fill={'#8585885'} />
              </div>
              <div className={`${styles['pan-item']} ${currentIndex == 2 ? styles['pan-item-active'] : 'null'}`} data-index={2} onClick={toggleFloatPan}>
                <IconSearch width={21} heigh={21} fill={'#8585885'} />
              </div>
              <div className={`${styles['pan-item']} ${currentIndex == 3 ? styles['pan-item-active'] : 'null'}`} data-index={3} onClick={toggleFloatPan}>
                <IconSettings width={21} heigh={21} fill={'#8585885'} />
              </div>
           </div>
        </div>
        <div className={styles['sider-float-pan']} style={{display: showFloatPan ? 'block': 'none'}}>
            {currentIndex == 1 &&  <Books />}
            {currentIndex == 2 &&  <Search />}
            {currentIndex == 3 &&  <Setting />}
        </div>
        <div className={styles.main}>
          Main
        </div>
      </div>
  )
}


const Books = () => {
  const [showBooks, setShowBooks] = useState(false);
  const toggleBooks = (e) => {
    setShowBooks(!showBooks);
  }
  return (
    <div className={styles['books-pan']}>
      <div className={styles['bpan-head']} onClick={toggleBooks}>mac book <i></i></div>
      <div className={styles['bpan-body']} style={{display: showBooks? 'none': 'block'}}>
        <div className={styles['bpan-body-wrap']}>
          <div className={styles['bpan-body-left']}>
            <div className={styles['bpan-body-section']}>
                <div className={styles['bpan-body-section-item']}>usear</div>
                <div className={styles['bpan-body-section-item']}>usear</div>
                <div className={styles['bpan-body-section-item']}>usear</div>
                <div className={styles['bpan-body-section-item']}>usear</div>
            </div>
            <div className={styles['bpan-body-section-btn']}>
              <IconPlus width={16} height={16} fill={'#fff'}/>  Add Section
            </div>
          </div>
          <div className={styles['bpan-body-right']}>
            <div className={styles['bpan-body-section']}>
                <div className={styles['bpan-body-section-item']}>page1</div>
                <div className={styles['bpan-body-section-item']}>page2</div>
                <div className={styles['bpan-body-section-item']}>page3</div>
                <div className={styles['bpan-body-section-item']}>page4</div>
            </div>
            <div className={styles['bpan-body-section-btn']}>
              <IconPlus width={16} height={16} fill={'#fff'}/>  Add Page
            </div>
          </div>
        </div>

      </div>
      <div className={styles['bpan-books']} style={{display: showBooks? 'block': 'none'}}>
        <div className={styles['bpan-body-left']}>
          <div className={styles['bpan-body-section']}>
              <div className={styles['bpan-body-section-item']}>notebook1</div>
              <div className={styles['bpan-body-section-item']}>notebook2</div>
              <div className={styles['bpan-body-section-item']}>notebook3</div>
              <div className={styles['bpan-body-section-item']}>notebook4</div>
          </div>
          <div className={styles['bpan-body-section-btn']}>
            <IconPlus width={16} height={16} fill={'#fff'}/>  Add Book
          </div>
        </div>
      </div>
    </div>
  )
}
const Search = () => {
  return (
    <div>Search</div>
  )
}
const Setting = () => {
  return (
    <div>Setting</div>
  )
}

export default Layout;