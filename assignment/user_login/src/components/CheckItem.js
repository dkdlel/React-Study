import React from "react";
import classname from 'classnames/bind';
import styles from "../scss/CheckItem.module.scss";
import Notchecked from "../svg/Notchecked";
// import NSVG from "../svg/notchecked.svg";

const cn = classname.bind(styles);

export default ({ checked, text, show, subText, onToggle }) => {
  return (
    <div className={styles['selectCheckbox']}>
      <div className={cn("boxArea", { checked })} onClick={onToggle}>
        {/* {<img className={styles['svg']} src={NSVG} alt="" />} */}
        <Notchecked className={styles['svg']} />
      </div>
      {text}
      <div className={styles['showText']} > {show}</div>
      <div className={styles['subText']}> {subText}</div>
    </div >
  );
};
