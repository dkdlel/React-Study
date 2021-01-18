import React from 'react';
// import styles from './CSSModule.module.css';
import styles from './CSSModule.module.scss';
/* 9.3 CSS Module */
const CSSModule = () => {
    return(
        // 클래스 이름 두개이상 적용 =====> '가 아닌 `사용해야함
        <div className={`${styles.wrapper} ${styles.inverted}`}>
        {/* <div className={styles.wrapper}> */}
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    )
}

export default CSSModule;