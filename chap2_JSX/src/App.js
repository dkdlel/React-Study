import React, { Fragment } from 'react';
// 앱팩의 로더(loader)
import logo from './logo.svg';
import './App.css';

/* 2.1 */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

/* 2.2 JSX 란 */
// function App(){
//   return(
//     <div>
//       Hello <b>react</b>
//     </div>
//   );
// }
// function App(){
//   return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
// }

/* 2.4.1 감싸인 요소 */
// function App(){
//   return(
//     // <Fragment></Fragment>, <></> 동일
//     <div> 
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </div>
//   );
// }

/* 2.4.2 자바스크립트 표현 */
// function App(){
//   const name = '리액트';
//   return(
//     <>
//       <h1>{name} 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </>
//   );
// }

/* 2.4.3 if문 대신 조건부 연산자 */
// function App(){
//   const name = '리액트';
//   return(
//     <div> 
//       {name === '리액트' ? (<h1>리액트입니다.</h1>) : (<h2>리액트가 아닙니다.</h2>)}
//     </div>
//   );
// }

/* 2.4.4 &&연산자를 사용한 조건부 렌더링 */
// function App() {
//   const name = '뤼왝트';
//   // return (
//   //   <div>
//   //     {name === '리액트' ? <h1>리액트입니다.</h1> : null}
//   //   </div>
//   // );
//   // 위의 문법과 동일
//   return(
//     <div>
//       {name === '리액트' && <h1>리액트입니다.</h1>}
//     </div>
//   );
// }

/* 2.4.5 undefined를 렌더링하지 않기 */
// function App(){
//   const name = undefined;
//   // || 연산자 사용, 값이 undefined일 때 보여주고 싶은 문구
//   // return name || '값이 undefined입니다.';

//   // JSX 내부 렌더링
//   return <div>{name}</div>;
// }

/* 2.4.6 인라인 스타일링 */
// DOM요소들은 - 문자가 포함되는 이름들은 카멜 표기법으로 작성
// ex) background-color => backgroundColor
// function App() {
//   const name = '리액트';
//   // const style = {
//   //   //background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
//   //   backgroundColor: 'black',
//   //   color: 'aqua',
//   //   fontSize: '48px',
//   //   fontWeight: 'bold',
//   //   padding: 16
//   // };
//   // return <div style={style}>{name}</div>;

//   // 위와 같은 구문
//   return (
//     <div style={{ backgroundColor: 'black', color: 'aqua', fontSize: '48px', fontWeight: 'bold', padding: 16 }} >
//       {name}
//     </div>
//   );
// }

/* 2.4.7 className(App.css 변경) */
// function App(){
//   const name = '리액트';
//   return <div className="react">{name}</div>;
// }

/* 2.4.8 꼭 닫아야 하는 태그 */
// function App(){
//   const name = '리액트';
//   return(
//     <>
//       <div className="react">{name}</div>
//       <input/>
//     </>
//   );
// }

/* 2.4.9 주석 */
// 주석은 {/*  */} 형태로 작성


export default App;
