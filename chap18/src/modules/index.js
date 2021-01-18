import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import sample, { sampleSaga } from './sample'
import loading from './loading'
import { all } from 'redux-saga/effects';

// const rootReducer = combineReducers({
//     counter
// })

// export default rootReducer;
// index.js에 스토어 생성, provider로 리덕스 적용

/* 18.3.1 redux-thunk */
// 리덕스를 사용하는 프로젝트에서 비동기 작업을 처리할때 사용하는 기본적인 미들웨어

/* 18.3.1.1 Thunk란? */
// Thunk : 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것
// 예시
// const addOne = x => x + 1;
// const addoneThunk = x => () => addOne(x);
// const fn = addoneThunk(1);
// setTimeout(() => {
//     const value = fn(); // fn이 실행되는 시점에 연산
//     console.log(value);
// }, 1000);

// redux-thunk를 사용하면 thunk 함수를 만들어서 디스패치 할수 있음
// 미들웨어가 함수를 전달 받아 store의 dispatch와 getState를 파라미터로 넣어서 호출
// 예시
// const sampleThunk = () => (dispatch, getState) => {
// 현재 상태를 참조할 수 있고, 새 액션을 디스패치할 수도 있음
// }

/* 18.3.1.2 미들웨어 적용하기 */
// yarn add redux-thunk, src/index.js
// const rootReducer = combineReducers({
//     counter, sample, loading
// })


/* 18.3.2.2 비동기 카운터 만들기 */
// const rootReducer = combineReducers({
//     counter, sample, loading
// })

// export function* rootSaga() {
//     // all 함수는 여러 사각를 합쳐 주는 역할
//     yield all([counterSaga()]);
// }

/* 18.3.2.3 API 요청 상태 관리하기 */
const rootReducer = combineReducers({
    counter, sample, loading
})

export function* rootSaga() {
    // all 함수는 여러 사각를 합쳐 주는 역할
    yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;