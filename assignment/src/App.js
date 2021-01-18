import React, { useState, useCallback, useEffect } from 'react';
import Switch from './switch/switch';
import CheckBox from './checkbox/CheckBox';
import Radio from './radio/Radio';
import RadioList from './radio/RadioList';
import CheckBoxList from './checkbox/CheckBoxList';
import CheckBoxAll from './checkbox/CheckBoxAll';
import CheckList from './Cheolcheckbox/CheckList';


const App = () => {

  const [opens, setOpens] = useState([
    {
      id: 0,
      checked: false
    },
    {
      id: 1,
      checked: false
    },
    {
      id: 2,
      checked: false
    },
    {
      id: 3,
      checked: false
    }
  ]);

  /* radio */
  // const [current, setCurrent] = useState(0);

  // const onClick = useCallback((id, current) => {
  //   // map : 새로운 배열을 생성, foreach : 배열을 생성하지 않고 값을 변경
  //   // 하지만 새로운 배열을 생성하여 map을 대입하는걸 자주 사용
  //   const newOpens = opens.map(open =>
  //     open.id === current ? { ...open, checked: false } : open,
  //   )
  //   setCurrent(id);
  //   setOpens(
  //     newOpens.map(open =>
  //       open.id === id ? { ...open, checked: true } : open,
  //     ),
  //   );
  // })

  /* allCheck와 visited 충돌 */
  // const onToggle = (id) => {
  //   setOpens(
  //     opens.map(open =>
  //       open.id === id ? { ...open, checked: !open.checked } : open,
  //     )
  //   )
  // }

  // const onCheck = useCallback((isChecked) => {
  //   setOpens(
  //     opens.map(open => {
  //       return { ...open, checked: isChecked };
  //     })
  //   )
  // })

  /* checkbox */
  // const onToggle = useCallback((id) => { // 체크박스 하나하나 토글
  //   setOpens(
  //     opens.map(open =>
  //       open.id === id ? { ...open, checked: !open.checked } : open,
  //     )
  //   )
  // }, [opens])

  // const allClick = useCallback((allCheck) => { // 전체선택 체크 여부
  //   setOpens(
  //     opens.map(open =>
  //       allCheck ? { ...open, checked: true } : { ...open, checked: false },
  //     )
  //   )
  // }, [opens])

  /* Cheolcheckbox */
  const [allChecked, setAllChecked] = useState(false);

  const onAllToggle = useCallback(() => {
    const newOpens = opens.map(open => {
      return { ...open, checked: !allChecked };
    })
    setOpens(newOpens);
  }, [allChecked]);

  useEffect(() => {
    const result = opens.reduce((prev, cur) => prev && cur.checked, true);
    setAllChecked(result);
  }, [opens]);

  const onItemToggle = useCallback((id) => {
    const newOpens = opens.map(open =>
      open.id === id ? { ...open, checked: !open.checked } : open,
    );
    setOpens(newOpens);
  })

  return (
    <>
      {/* <Switch /> */}
      {/* < RadioList opens={opens} current={current} onClick={onClick} /> */}
      {/* < CheckBoxList opens={opens} onToggle={onToggle} allClick={allClick} /> */}
      <CheckList opens={opens} allChecked={allChecked} onAllToggle={onAllToggle} onItemToggle={onItemToggle} />
    </>
  )
}

export default App;
