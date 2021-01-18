import React from "react";
import CheckItem from "./CheckItem";
import styles from "../scss/CheckList.module.scss";


export default ({ opens, allChecked, onAllToggle, onItemToggle }) => (
  <div className={styles['checkBoxListArea']}>{/* 체크리스트 영역 */}
    <div className={styles['allCheckArea']}>{/* 전체 선택*/}
      <CheckItem checked={allChecked} onToggle={onAllToggle} text={"모두 동의합니다."} />
    </div>
    <div className={styles['checkBoxItem']}>{/* 체크박스 선택*/}
      {opens.map((open) => (
        <CheckItem
          key={open.id}
          checked={open.checked}
          text={open.text}
          show={open.show}
          subText={open.subText}
          onToggle={() => onItemToggle(open.id)}
        />
      ))}
    </div>
  </div>
);
