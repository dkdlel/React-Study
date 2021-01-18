import React, { useState, useReducer, useCallback } from 'react';
import classname from 'classnames/bind';

import styles from "../scss/Auth.module.scss";


const cn = classname.bind(styles);

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

export default () => {

    const [check, setCheck] = useState(false);
    const [state, action] = useReducer(reducer, {
        id: '',
        pw: '',
    });

    const { id, pw } = state;
    const onChange = (e) => action(e.target);
    const onClick = useCallback(() => {
        if (id !== '1234') {
            alert('아이디가 일치하지 않습니다');
        } else if (pw !== '1234') {
            alert('비밀번호가 일치하지 않습니다.');
        } else {
            alert(id + '님 환영합니다.');
            // 로그인 페이지로 이동
        }
    }, [id, pw])

    return (
        <div className={styles['container']}>
            <input type="text" className={styles['id-section']} placeholder="아이디" name="id" value={id} onChange={onChange} />
            <input type="text" className={styles['pw-section']} placeholder="비밀번호" name="pw" value={pw} onChange={onChange} />
            <div className={styles['login-keep']} onClick={() => setCheck(!check)}>
                {!check ? <img src={require("../img/notcheck.png")} alt="" /> : <img src={require("../img/check.png")} alt="" />}
                <span>로그인 상태 유지</span>
            </div>
            <button className={styles['btn-login']} onClick={onClick}>로그인</button>
            <div className={styles['auth-footer']}>
                <a href="#" className={styles['href']}><img className={styles['img']} src={require("../img/google.png")} alt="" /></a>
                <a href="#" className={styles['href']}><img className={styles['img']} src={require("../img/facebook.png")} alt="" /></a>
                <a href="#" className={styles['href']}><img className={styles['img']} src={require("../img/github.svg")} alt="" /></a>
            </div>
        </div>
    )
}