import React /*, {Component} */ from 'react';
import logo from './logo.svg';
import './App.css';
// 3.2.3.2
// import MyComponent from './MyComponent';
// 3.4.1
// import Counter from './Counter';
// 3.4.2.2
import Say from './Say';

/* 3.1 클래스형 컴포넌트 */
// class App extends Component{
//   render(){
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }

/* 3.2.3.2 모듈 불러오기 */
// const App = () => {
//   return <MyComponent />;
// }

/* 3.3.2 컴포넌트를 사용할 때 props 값 지정하기 */
// const App = () => {
//   return <MyComponent name='React' />;
// };

/* 3.3.3 defaultProps */
// const App = () => {
//   return <MyComponent />;
// };

/* 3.3.4 children */
// const App = () => {
//   return <MyComponent>리액트</MyComponent>;
// }

/* 3.3.6 propTypes를 통한 props 검증 */
// const App = () => {
//   return <MyComponent name="React">리액트</MyComponent>;
// }

/* 3.3.6.1 isRequired */
// const App = () => {
//   return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>;
// }

/* 3.3.7 클래스형 컴포넌트 props 사용하기 */
// const App = () => {
  //  return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>;
// }

/* 3.4.1 클래스형 컴포넌트의 state */
// const App = () => {
//   return <Counter />;
// };

/* 3.4.2.2 useState 사용하기 */
const App = () =>{
  return <Say />;
};

export default App;
