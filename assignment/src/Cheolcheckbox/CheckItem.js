import React from 'react';
import './CheckItem.scss';
import cn from 'classnames';
import SVG from './checked.svg';

export default ({ checked, onToggle }) => (
    <div className={cn('boxArea', { checked })} onClick={onToggle} >
        {checked && <img src={SVG} />}
    </div>
)