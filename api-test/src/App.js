import React, { useCallback, useEffect } from 'react';
import './App.css';
import { postLogin, postGetLoginInfo } from './api/auth';

export default () => {

  const onClickLogin = useCallback(async () => {
    const result = await postLogin({
      email: 'cuzi.kbg@gmail.com',
      password: 'qheod!@34'
    });
    console.log(result);
    const TOKEN = result.data.access_token;
    sessionStorage.setItem('signed_token', TOKEN);
  }, []);

  const getUserInfo = useCallback(async () => {
    const SIGNED_TOKEN = sessionStorage.getItem('signed_token');
    if (SIGNED_TOKEN) {
      const result = await postGetLoginInfo(SIGNED_TOKEN);
      // console.log(result);
      return result;
    }
  }, []);

  useEffect(() => {
    getUserInfo()
  }, []);

  return (
    <div className="App">
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}