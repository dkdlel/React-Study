import React, { useState } from "react";
import AddressModal from "./components/AddressModal";
import styles from "./App.module.scss";
import { GrFormSearch } from 'react-icons/gr';
import AddrItem from './components/AddrItem';
import { getAddr } from './API/juso'

function App() {

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  }

  const handleOpen = async () => {
    setOpen(true);
    const res = await getAddr(search);
    console.log(res);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["title"]}>
          지번, 도로명, 건물명을<br />
          입력하세요
        </div>
        <div className={styles['input']}>
          <input placeholder="예) 배민동12-3또는 배민아파트" className={styles['addr-input']} type="text" value={search} onChange={onChangeSearch}></input>
          <div className={styles['search']} onClick={handleOpen}>
            <GrFormSearch />
          </div>
        </div>
        <div className={styles['box']}>
          <div className={styles['location']}>
            현 위치로 주소 설정
          </div>
        </div>
        <div className={styles['list']}>
          <div className={styles['title']}>
            최근 주소
            </div>
          {/* 여기 리스트 출력 */}
          <AddrItem />
        </div>
      </div>

      <AddressModal
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
