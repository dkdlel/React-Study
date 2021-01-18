import React, { useEffect, useCallback, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import { postGetLoginInfo } from './api/Auth';

const App = () => {

  const TOKEN = sessionStorage.getItem('signed_token');
  const history = useHistory();
  const [name, setName] = useState('');

  const getUserInfo = useCallback(async () => {
    if (TOKEN) {
      const result = await postGetLoginInfo(TOKEN);
      setName(result.data.name);
    }
  }, [TOKEN]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <>
      {TOKEN ? history.push("/") : history.push("/login")}
      {TOKEN && name + "님 반갑습니다."}
      <Route path="/login" component={Login} />
      <Route path="/signin" component={SignIn} />
    </>
  )
}

export default App;
