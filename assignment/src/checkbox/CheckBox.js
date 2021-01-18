// allCheck와 visited 충돌
// import React, { useState, useCallback } from 'react';
// import './CheckBox.scss';
// import cn from 'classnames'
// import SVG from './checked.svg'

// export default ({ open, onToggle }) => {

//     const { id, checked } = open;

//     return (
//         <>
//             < div className={cn('boxArea', { checked })} onClick={() => onToggle(id)}>
//                 {checked && <img src={SVG} />}
//             </div>
//         </>
//     )
// }

import React from 'react';
import './CheckBox.scss';
import cn from 'classnames'
import SVG from './checked.svg'
import NSVG from './notchecked.svg'


export default ({ open, onToggle }) => {

    const { id, checked } = open;

    return (
        < div className={cn('boxArea', { checked })} onClick={() => onToggle(id)}>
            {checked && <img src={NSVG} />}
        </div>
    )
}