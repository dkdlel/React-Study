import React from 'react';
import styles from "./NoticeItem.module.scss";
import classname from 'classnames/bind';

const cn = classname.bind(styles);

export default ({ item, onClick }) => {

    const { text, time, done } = item;

    const standard = new Date('Sep 13, 2020').getTime();
    const years = new Date(standard).getFullYear();
    const months = new Date(standard).getMonth() + 1;
    const dates = new Date(standard).getDate();
    const hours = parseInt(((time - standard) / (1000 * 60 * 60)));
    const minutes = parseInt((time - standard) / (1000 * 60));
    const seconds = parseInt((time - standard) / 1000);
    const timer = hours >= 24 ? `${years}/${months}/${dates}` : hours >= 1 ? `${(hours % 24)}시간전` : (minutes % 60) < 1 ? `${(seconds % 60)}초전` : `${(minutes % 60)}분전`;

    return (
        <div className={cn('container', { done })} onClick={onClick}>
            <div className={styles['text']}>{text}</div>
            <div className={styles['time']}>{timer}</div>
        </div>
    )
}