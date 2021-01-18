import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

// 리더스를 사용하면, 
// 상태 업데이트에 관한 로직을 모듈로 따로 분리하여 컴포넌트 파일과 별개로 관리 할 수 있으므로 유지 보수하는데 도움이 됨.
// 여러 컴포넌트에서 동일한 상태를 공유해야 할 때 매우 유용
// 실제 업데이트가 필요한 컴포넌트만 리렌더링되도록 쉽게 최적화

/* 17.1 작업 환경 설정 */
// yarn add redux react-redux

/* 17.2 UI 준비하기 */
// 리덕스를 사용할때 가장 많이 사용하는 패턴 : 프레젠테이셔널 컴포넌트, 컨테이너 컴포넌트 분리
// 프레젠테이셔널 컴포넌트 : 상태관리가 이루어지지 않고, props를 받아와서 화면에 UI를 보여주기만 하는 컴포넌트
// 컨테이너 컴포넌트 : 리덕스와 연동되어 있는 컴포넌트 / 리덕스로 부터 상태를 받아오거나 리덕스 스토어에 액션을 디스패치

/* 17.2.1 카운터 컴포넌트 만들기 */
// const App = () => {
//     return (
//         <div>
//             <Counter number={0} />
//         </div >
//     )
// }

/* 17.2.2 할 일 목록 컴포넌트 만들기 */
// const App = () => {
//     return (
//         <div>
//             <Counter number={0} />
//             <hr />
//             <Todos />
//         </div >
//     )
// }

/* 17.5.1 CounterContainer 만들기 */
// const App = () => {
//     return (
//         <div>
//             <CounterContainer />
//             <hr />
//             <Todos />
//         </div >
//     )
// }

/* 17.5.2 TodosContainer 만들기 */
const App = () => {
    return (
        <div>
            <CounterContainer />
            <hr />
            <TodosContainer />
        </div >
    )
}


export default App;
