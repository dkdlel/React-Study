import React, { useCallback, useReducer } from 'react';
import { Link } from 'react-router-dom';
import styles from "../scss/Login.module.scss";
import classname from 'classnames/bind';
import { postLogin, postLogout } from '../api/Auth';

const cn = classname.bind(styles);

const reducer = (state, action) => ({
    ...state,
    [action.name]: action.value,
});

export default () => {

    const [state, dispatch] = useReducer(reducer, {
        email: "",
        password: ""
    });

    const { email, password } = state;

    const handleChange = (e) => {
        dispatch(e.target);
    };


    const LoginClick = useCallback(async () => {
        const result = await postLogin({
            email: 'cuzi.kbg@gmail.com',
            password: 'qheod!@34'
        });
        const TOKEN = result.data.access_token;
        sessionStorage.setItem('signed_token', TOKEN);
    }, [])

    const LogoutClick = useCallback(async () => {
        const SIGNED_TOKEN = sessionStorage.getItem('signed_token');
        if (SIGNED_TOKEN) {
            sessionStorage.removeItem('signed_token');
            await postLogout(SIGNED_TOKEN);
        }
    }, [])

    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                <div className={styles['title-text']}>로그인</div>
            </div>
            <div className={styles['input-area']}>
                <input type="text" className={styles['input']} name="email" value={email} onChange={handleChange} placeholder="이메일" />
                <input type="text" className={cn('input', 'pw')} name="password" value={password} onChange={handleChange} placeholder="비밀번호" />
            </div>
            <button className={styles['login-btn']} onClick={LoginClick}>
                <div className={styles['login-text']}>로그인</div>
            </button>
            <button className={styles['login-btn']} onClick={LogoutClick}>
                <div className={styles['login-text']}>로그아웃</div>
            </button>
            <div className={styles['sub-btn']}>
                <div className={styles['text']}>
                    <Link to="/signin" className={styles['href']}>회원가입</Link>
                </div>
                <div className={styles['text']}>아이디 찾기</div>
                <div className={styles['text']}>비밀번호 찾기</div>
            </div>
        </div>
    )
}