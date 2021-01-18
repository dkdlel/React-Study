import React, { useState, useEffect, useMemo } from "react";
import styles from "../scss/Password.module.scss";
import classname from 'classnames/bind';

const cn = classname.bind(styles);

export default ({ password, confirmPassword, onChange }) => {

    const [confirm, setConfirm] = useState("");
    const [messageStyle, setMessageStyle] = useState({});

    useMemo(() => {
        if (confirmPassword !== "") {
            setMessageStyle({ height: "20px" });
        } else {
            setMessageStyle({ height: "0px" });
        }
    }, [confirmPassword]);

    useEffect(() => {
        setConfirm(
            confirmPassword === "" ? (
                ""
            ) : confirmPassword === password ? (
                <div className={styles['success']}>비밀번호가 일치합니다.</div>
            ) : (
                        <div className={styles['fail']}>비밀번호가 불일치합니다.</div>
                    )
        );
    }, [password, confirmPassword]);


    return (
        <div className={styles['container']}>
            <input type="text" className={styles['input']} name="password" value={password} onChange={onChange} placeholder="비밀번호" />
            <input type="text" className={cn('input', 'pw')} name="confirmPassword" value={confirmPassword} onChange={onChange} placeholder="비밀번호 확인" />
            <div className={styles['text']} style={messageStyle}>{confirm}</div>
        </div>
    )
}