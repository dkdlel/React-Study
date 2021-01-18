// allCheck와 visited 충돌
// import React, { useState, useCallback, useEffect, useMemo } from 'react';
// import CheckBox from './CheckBox';
// import './CheckBoxList.scss'
// import cn from 'classnames'
// import SVG from './checked.svg'
// import CheckBoxAll from './CheckBoxAll';

// export default ({ opens, onToggle, onCheck }) => {

//     const [allCheck, setAllCheck] = useState(false);
//     const onAllToggle = useCallback((isCheck) => {
//         isCheck ? setAllCheck(true) : setAllCheck(false);
//     }, [allCheck])

//     const isAllCheck = useCallback(() => {
//         let cnt = 0;
//         opens.forEach(open =>
//             open.checked === true && cnt++,
//         );
//         if (cnt === opens.length) onAllToggle(true);
//         else onAllToggle(false);
//     }, [opens])

//     useEffect(() => onCheck(allCheck), [allCheck]);
//     useEffect(isAllCheck, [opens]);

//     return (
//         <>
//             < CheckBoxAll allCheck={allCheck} onClick={onAllToggle} />
//             <div className='CheckBoxListArea'>
//                 {opens.map(open => (
//                     <CheckBox open={open} key={open.id} onToggle={onToggle} />
//                 ))}
//             </div>
//         </>
//     )
// }

import React, { useCallback, useEffect, useState } from 'react';
import './CheckBoxList.scss';
import CheckBox from './CheckBox';
import CheckBoxAll from './CheckBoxAll';

export default ({ opens, onToggle, allClick }) => {

    const [allCheck, setAllCheck] = useState(false);

    const isAllCheck = useCallback(() => {
        let cnt = 0;
        opens.forEach(open =>
            open.checked === true && cnt++,
        );
        if (cnt === opens.length) setAllCheck(true);
        else setAllCheck(false);
    }, [opens])

    useEffect(isAllCheck, [opens]);
    return (
        // 전체영역
        <div className="checkBoxListArea">
            <div className="allCheckArea">
                <div className="allCheckName">전체선택</div>
                <CheckBoxAll allCheck={allCheck} allClick={allClick} />
            </div>
            {/* 체크박스 한개한개 */}
            <div className="checkBoxItem">
                {opens.map(open =>
                    <CheckBox open={open} key={open.id} onToggle={onToggle} />
                )}
            </div>
        </div >
    )
}