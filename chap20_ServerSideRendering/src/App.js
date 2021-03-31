/* 20.2.2 페이지 컴포넌트 만들기 */
// import React from 'react';
// import { Route } from 'react-router';
// import Menu from './components/Menu';
// import BluePage from './pages/BluePage';
// import RedPage from './pages/RedPage';

// const App = () => {

//   return (
//     <div>
//       <Menu />
//       <hr />
//       <Route path='/red' component={RedPage} />
//       <Route path='/blue' component={BluePage} />
//     </div>
//   );
// };

// export default App;

/* 20.4.2 Users, UsersContainer 컴포넌트 준비하기 */
// import React from 'react';
// import { Route } from 'react-router';
// import Menu from './components/Menu';
// import BluePage from './pages/BluePage';
// import RedPage from './pages/RedPage';
// import UsersPage from './pages/UsersPage';

// const App = () => {

//   return (
//     <div>
//       <Menu />
//       <hr />
//       <Route path='/red' component={RedPage} />
//       <Route path='/blue' component={BluePage} />
//       <Route path='/users' component={UsersPage} />
//     </div>
//   );
// };

// export default App;

/* 20.5.1 라우트 컴포넌트 스플리팅하기 */
import React from 'react';
import { Route } from 'react-router';
import Menu from './components/Menu';
import loadable from '@loadable/component';
const BluePage = loadable(() => import('./pages/BluePage'));
const RedPage = loadable(() => import('./pages/RedPage'));
const UsersPage = loadable(() => import('./pages/UsersPage'));

const App = () => {

  return (
    <div>
      <Menu />
      <hr />
      <Route path='/red' component={RedPage} />
      <Route path='/blue' component={BluePage} />
      <Route path='/users' component={UsersPage} />
    </div>
  );
};

export default App;