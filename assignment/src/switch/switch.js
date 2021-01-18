import React, { useCallback, useState } from 'react';
import './switch.scss';
import cn from 'classnames'

const Switch = () => {

    const [clicked, setClicked] = useState(false);

    const onClick = useCallback(() => {
        setClicked(!clicked);
    })

    return (
        <>
            <div className={cn('switchBox', { clicked })} onClick={onClick}>
                <div className='lineButton'></div>
                <div className='circleButton'></div>
            </div>
        </>
    )
}


export default Switch;