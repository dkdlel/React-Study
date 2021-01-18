import React, { useState, useEffect, useReducer } from 'react';

/* 8.1 useState */
// const Counter = () => {
//     const [value, setValue] = useState(0);

//     return(
//         <div>
//             <p>
//                 현재 카운터 값은 <b>{value}</b>입니다.
//             </p>
//             <button onClick={() => setValue(value + 1)}>+1</button>
//             <button onClick={() => setValue(value - 1)}>-1</button>
//         </div>
//     )
// }
/* Info.js */

/* 8.3 useReducer */
// useReducer : 다양한 상태를 다른 값으로 업데이트 해주고 싶을때 사용하는 Hook
// 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션(action)값을 전달받아 새로운 상태를 반환
// 반드시 불변성을 지켜야함
/* 예시 */
// function reducer(state, action){
//     return{ ... } // 불변성을 지키면서 업데이트한 새로운 상태를 반환
// }
// /* 액션 값 */
// {
//     type: 'INCREMENT',
//     // 다른 값들이 필요하다면 추가
// }

/* 8.3.1 카운터 구현하기 */
// reducer 사용시 장점 : 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼수 있음
// function reducer(state, action){
//     // action.type에 따라 다른 작업 수행
//     switch(action.type){
//         case 'INCREMENT':
//             return { value: state.value + 1 }
//         case 'DECREMENT':
//             return { value: state.value - 1 }
//         default:
//             return state
//     }
// }

// const Counter = () => {
//     const [state, dispatch] = useReducer(reducer, {value : 0})

//     return(
//         <div>
//             <p>
//                 현재 카운터 값은 <b>{state.value}</b>입니다.
//             </p>
//             <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
//             <button onClick={() => dispatch({ type: 'DECREMENT'})}>-1</button>
//         </div>
//     )
// }
/* Info.js */


/* 8.1 useState */
// export default Counter;
/* 8.1.1 useState를 여러 번 사용하기 */
// export default Counter;