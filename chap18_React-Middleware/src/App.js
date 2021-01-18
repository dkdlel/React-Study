import React from 'react';
import CounterContainer from './containers/CounterContainer';
import SampleContainer from './containers/SampleContainer';

/* yarn add redux react-redux redux-actions*/

// const App = () => {

//   return (
//     <div>
//       <CounterContainer />
//     </div>
//   )
// }

/* 18.2 미들웨어란? */
// 미들웨어 : 액션을 디스패치 했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행, 액션과 리듀서 사이의 중간자
// 액션 -> 미들웨어 -> 리듀서 -> 스토어

/* 18.3.1.4 웹 요청 비동기 작업 처리하기 */
// const App = () => {
//   return (
//     <div>
//       <SampleContainer />
//     </div>
//   )
// }

/* 18.3.2.2 비동기 카운터 만들기 */
// const App = () => {
//   return (
//     <div>
//       <CounterContainer />
//     </div>
//   )
// }

/* 18.3.2.3 API 요청 상태 관리하기 */
const App = () => {
  return (
    <div>
      <SampleContainer />
    </div>
  )
}

/* 18.4 정리 */
// 리덕스 미들웨어 사용방법, 비동기 작업을 미들웨어로 어떻게 처리할 수 있는지를 배움
// 비동기 작업을 처리할 때
// redux-thunk : 일반 함수로 이루어져 있기 때문에 간단명료함
// redux-saga : 진입 방벽이 조금 있을수 있으나 복잡한 상황에서 더욱 효율적으로 작업을 관리할 수 있음
// // 다른 미들웨어 : redux-promise-middleware, redux-pender, redux-observable

export default App;
