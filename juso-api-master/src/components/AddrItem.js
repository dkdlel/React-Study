import React from 'react';
import styles from './AddrItem.module.scss';

const AddrItem =(props)=>{
    return(
        <div className={styles['item']}>
            <div className={styles['addr1']}> 
                부산광역시 사하구 하단동 동아대학교 승학캠퍼스
            </div>
            <div className={styles['sub']}>
                <div className={styles['addr-box']}>
                    도로명
                </div>
                <div className={styles['addr2']}>
                        S14 인바이즈
                </div>
            </div>
        </div>
    )
}
export default AddrItem;