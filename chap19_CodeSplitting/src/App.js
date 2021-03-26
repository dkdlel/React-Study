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
import React from 'react';
import logo from './logo.svg';
import './App.css';
import notify from './notify';

function App() {
  const onClick = () => {
    //   notify();
    // import 하지않고 함수 형태로 메서드 안에서 사용
    // stage-3 dynamic import문법
    import('./notify').then(result => result.default());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
};

export default App;