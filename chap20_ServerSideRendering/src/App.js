/* 20.2.2 페이지 컴포넌트 만들기 */
import React from 'react';
import { Route } from 'react-router';
import Menu from './components/Menu';
import BluePage from './pages/BluePage';
import RedPage from './pages/RedPage';

const App = () => {

  return (
    <div>
      <Menu />
      <hr />
      <Route path='/red' component={RedPage} />
      <Route path='/blue' component={BluePage} />
    </div>
  );
};

export default App;