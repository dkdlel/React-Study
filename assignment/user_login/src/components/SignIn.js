import React, { useReducer, useState } from 'react';
import styles from "../scss/SignIn.module.scss";
import classname from 'classnames/bind';
import Email from './Email';
import Password from './Password';
import Checkbox from './Checkbox';

const cn = classname.bind(styles);

const reducer = (state, action) => ({
    ...state,
    [action.name]: action.value,
});

export default () => {

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
        setEmail(e.target.value);
    }


    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                <div className={cn('text', 'login')}>회원가입</div>
            </div>
            <div className={styles['content']}>
                <Email email={email} onChange={onChange} />
                <Password password={password} confirmPassword={confirmPassword} onChange={handleChange} />
            </div>
            <div className={styles['check-box']}>
                <Checkbox />
            </div>
            <div className={styles['sign-btn']}>
                <div className={cn('text', 'sign')}>가입완료</div>
            </div>
        </div>
    )
}