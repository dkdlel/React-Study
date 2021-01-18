import React, { useCallback, useState } from 'react';
import styles from "./Notice.module.scss";
import NoticeItem from './NoticeItem';

export default () => {


    const cur_hour = 20;
    const cur_min = 0;
    const [items, setItems] = useState([
        {
            id: 1,
            text: "결제하신 음식 배송이 준비되었습니다.",
            time: new Date().getTime() - 3600000 * cur_hour - cur_min * 60000,
            done: false
        },
        {
            id: 2,
            text: "결제완료 되었습니다.",
            time: new Date().getTime() - 3600000 * cur_hour,
            done: false
        },
        {
            id: 3,
            text: "배송 시작(도착 예정시간 : 12-13시 사이)",
            time: new Date().getTime(),
            done: false
        },
        {
            id: 4,
            text: "결제하신 음식 배송이 준비되었습니다.",
            time: new Date().getTime() + 3600000 * 2,
            done: true
        },
        {
            id: 5,
            text: "결제완료 되었습니다.",
            time: new Date().getTime() + 3600000 * 3,
            done: true
        },
        {
            id: 6,
            text: "배송 시작(도착 예정시간 : 12-13시 사이)",
            time: new Date().getTime() + 3600000 * 4,
            done: true
        },
        {
            id: 7,
            text: "결제하신 음식 배송이 준비되었습니다.",
            time: new Date().getTime() + 3600000 * 6,
            done: true
        }
    ])

    const handleAllClick = useCallback(() => {
        const newItems = items.map(item =>
            !item.done ? { ...item, done: true } : item
        )
        setItems(newItems);
    }, [items])

    const handleOnClick = useCallback((id) => {
        const newItem = items.map(item =>
            item.id === id ? { ...item, done: true } : item
        )
        setItems(newItem);
    }, [items])

    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                <div className={styles['title-text']}>알림</div>
                <div className={styles['read-all']} onClick={() => handleAllClick()}>전체읽기</div>
            </div>
            {items.map(item =>
                <NoticeItem item={item} key={item.id} onClick={() => handleOnClick(item.id)} />
            )}
        </div >
    )
}