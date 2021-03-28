/* 코드 스플리팅 */
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello React!</p>
//       </header>
//     </div>
//   )
// }

// export default App;

/* 19.1 자바스크립트 함수 비동기 로딩 */
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import notify from './notify';

// function App() {
//   const onClick = () => {
//     //   notify();
//     // import 하지않고 함수 형태로 메서드 안에서 사용
//     // stage-3 dynamic import문법
//     import('./notify').then(result => result.default());
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={onClick}>Hello React!</p>
//       </header>
//     </div>
//   );
// };

// export default App;

/* 19.2.1 state를 사용한 코드 스플리팅 */
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   state = {
//     SplitMe: null
//   };
//   handleClick = async () => {
//     const loadedModule = await import('./SplitMe');
//     this.setState({
//       SplitMe: loadedModule.default
//     });
//   };
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>Hello React!</p>
//           {SplitMe && <SplitMe />}
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

/* 19.2.2 React.lazy와 Suspense 사용하기 */
// import React, { useState, Suspense } from 'react';
// import logo from './logo.svg';
// import './App.css';
// const SplitMe = React.lazy(() => import('./SplitMe'));

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   const onClick = () => {
//     setVisible(true);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={onClick}>Hello React!</p>
//         <Suspense fallback={<div>lading...</div>}>
//           {visible && <SplitMe />}
//         </Suspense>
//       </header>
//     </div>
//   );
// }

// export default App;

/* 19.2.3 Loadable Components를 통한 코드 스필리팅 */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
// const SplitMe = loadable(() => import('./SplitMe'));
// 로딩 중에 다른 UI를 보여주고 싶다면 loadable을 사용하는 부분을 수정
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  // 미리불러오는 방법
  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;