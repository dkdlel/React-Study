// allCheck와 visited 충돌
// import React from 'react';
// import './CheckBoxAll.scss'
// import cn from 'classnames'
// import SVG from './checked.svg'

// export default ({ allCheck, onClick }) => {

//     return (
//         <>
//             전체선택
//             <div className={cn('boxArea', { allCheck })} onClick={() => { onClick(!allCheck); }}>
//                 {allCheck && <img src={SVG} />}
//             </div>
//         </>
//     )
// }

import React from 'react';
import './CheckBoxAll.scss';
import cn from 'classnames';
import SVG from './checked.svg'
import NSVG from './notchecked.svg'

export default ({ allCheck, allClick }) => {

    return (
        <div className={cn('AllCheckboxArea', { allCheck })} onClick={() => allClick(!allCheck)}>
            {allCheck && <img src={NSVG} />}
        </div>
    )
}