import React from 'react';
import './Radio.scss'
import cn from 'classnames'


const Radio = ({ open, current, onClick }) => {

    const { id, checked } = open;
    const currentId = current;
    return (
        <>
            <div className={cn('radioArea', { checked })} onClick={() => onClick(id, currentId)}>
                <div className='radioButton' />
            </div>
        </>
    )
}


export default Radio;