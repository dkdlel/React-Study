import React from 'react';
import Radio from './Radio';


const RadioList = ({ opens, current, onClick }) => {

    return (
        <div className='radioListArea'>
            {opens.map(open => (
                <Radio
                    open={open}
                    key={open.id}
                    current={current}
                    onClick={onClick}
                />
            ))}
        </div>
    )
}


export default RadioList;