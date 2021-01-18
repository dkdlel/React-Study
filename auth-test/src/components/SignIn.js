import React, { useReducer, useState } from 'react';
import classname from 'classnames/bind';

import styles from "../scss/SignIn.module.scss";

import Password from './Password';
import SignInId from './SignInId';

const cn = classname.bind(styles);

const reducer = (state, action) => ({
    ...state,
    [action.name]: action.value,
});

export default () => {

    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    const [state, dispatch] = useReducer(reducer, {
        password: "",
        confirmPassword: ""
    });

    const { password, confirmPassword } = state;

    const handleChange = (e) => {
        dispatch(e.target);
    };

    const onChange = (e) => {
        setId(e.target.value);
    }


    return (
        <div className={styles['wrap']}>
            <div className={styles['container']}>
                <div className={styles['title']}>
                    <div className={cn('text', 'login')}>회원가입</div>
                </div>
                <div className={styles['content']}>
                    <SignInId id={id} onChange={onChange} />
                    <Password password={password} confirmPassword={confirmPassword} onChange={handleChange} />
                </div>
                <div className={styles['sign-btn']}>
                    <div className={cn('text', 'sign')}>회원가입</div>
                </div>
            </div>
        </div>
    )
}