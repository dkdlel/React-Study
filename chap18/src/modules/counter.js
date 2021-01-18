// import { createAction, handleActions } from 'redux-actions';
// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';

// export const increase = createAction(INCREASE);
// export const decrease = createAction(DECREASE);

// const initialState = 0; // 상태는 꼭 객체일 필요가 없습니다. 숫자도 작동해요.

// const counter = handleActions(
//     {
//         [INCREASE]: state => state + 1,
//         [DECREASE]: state => state - 1
//     },
//     initialState
// )

// export default counter;

/* 18.3.1.3 Thunk 생성 함수 만들기 */
// import { createAction, handleActions } from 'redux-actions';
// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';

// export const increase = createAction(INCREASE);
// export const decrease = createAction(DECREASE);

// // 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
// export const increaseAsync = () => dispatch => {
//     setTimeout(() => {
//         dispatch(increase());
//     }, 1000)
// }
// export const decreaseAsync = () => dispatch => {
//     setTimeout(() => {
//         dispatch(decrease());
//     }, 1000)
// }

// const initialState = 0;

// const counter = handleActions(
//     {
//         [INCREASE]: state => state + 1,
//         [DECREASE]: state => state - 1
//     },
//     initialState
// )

/* 18.3.2 redux-saga */
// rudex-thunk : 함수 형태의 액션을 디스패치하여 미들웨어에서 해당 함수에 스토어의 dispatch와 getState를 파라미터로 넣어서 사용하는 원리
// rudux-saga : 좀 더 까다로운 상황에서 유용
// 1. 기존 요청을 취소 처리해야 할 때(불필요한 중복 요청 방지)
// 2. 특정 액션이 발생했을 때 다른 액션을 발생시키거나, API 요청 등 리덕스와 관계없는 코드를 실행 할 때
// 3. 웹소켓을 사용할 때
// 4. API 요청 실패 시 재요청해야 할 때

/* 18.3.2.1 제너레이터 함수 이해하기 */
// 특정 구간에 멈춰 놓을 수도 있고, 원할 때 다시 돌아가게 할 수도 있음
// 사용법
// function* generatorFunction() {
//     console.log('안녕하세요');
//     yield 1;
//     console.log('제너레이터 함수');
//     yield 2;
//     console.log('function*');
//     yield 3;
//     return 4;
// }
// const generator = generatorFunction();
// //generator.next();
// //안녕하세요
// {value: 1, done: false}
// //generator.next();
// //제너레이터 함수
// {value: 2, done: false}
// //generator.next();
// //function*
// //{value: 3, done: false}
// generator.next();
// //{value: 4, done: true}
// generator.next();
// //{value: undefined, done: true}
// 사용법2
// function* sumGenerator(){
//     console.log('sumGenerato가 만들어졌습니다.');
//     let a = yield;
//     let b = yield;
//     yield a+b;
// }
// const sum = sumGenerator();
// sum.next();
// // sumGenerator가 만들어졌습니다.
// // {value: undefined, done: false}
// sum.next(1);
// // {value: undefined, done: false}
// sum.next(2);
// // {value: 3, done: false}
// sum.next();
// // {value: undefined, done: true}
// 사용법3
// function* watchGenerator(){
//     console.log('모니터링 중...');
//     let prevAction = null;
//     while(true){
//         const action = yield;
//         console.log('이전 액션: ', prevAction);
//         prevAction = action;
//         if(action.type === 'HELLO'){
//             console.log('안녕하세요!');
//         }
//     }
// }
// const watch = watchGenerator();
// watch.next();
// // 모니터링 중..
// // {value: undefined, done: false}
// watch.next({type: 'TEST'});
// // 이전 액션: null
// // {value: undefined, done: false}
// watch.next({type: 'HELLO'});
// // 이전 액션: {type: "TEST"}
// // 안녕하세요!
// // {value: undefined, done: false}

/* 18.3.2.2 비동기 카운터 만들기 */
// yarn add redux-saga
// import { createAction, handleActions } from 'redux-actions';
// import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';


// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';

// const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
// const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

// export const increase = createAction(INCREASE);
// export const decrease = createAction(DECREASE);
// // 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// // () => undefined를 두 번째 파라미터로 넣어줌
// export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
// export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

// function* increaseSaga() {
//     yield delay(1000); // 1초를 기다림
//     yield put(increase()); // 특정 액션을 디스패치
// }

// function* decreaseSaga() {
//     yield delay(1000); // 1초를 기다림
//     yield put(decrease()); // 특정 액션을 디스패치
// }

// export function* counterSaga() {
//     // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리
//     yield takeEvery(INCREASE_ASYNC, increaseSaga);
//     // takeLatest는 기존에 진행중이던 작업이 있다면 취소처리하고 가장 마직막으로 실행된 작업만 수행
//     yield takeLatest(DECREASE_ASYNC, decreaseSaga);
// }

// const initialState = 0;

// const counter = handleActions(
//     {
//         [INCREASE]: state => state + 1,
//         [DECREASE]: state => state - 1
//     },
//     initialState
// )

/* 18.3.2.5 알아 두면 유용한 기능들 */
import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest, select } from 'redux-saga/effects';


const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// () => undefined를 두 번째 파라미터로 넣어줌
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
    yield delay(1000); // 1초를 기다림
    yield put(increase()); // 특정 액션을 디스패치
    const number = yield select(state => state.counter); // state는 스토어 상태를 의미
    console.log(`현재 값은 ${number}입니다.`)
}

function* decreaseSaga() {
    yield delay(1000); // 1초를 기다림
    yield put(decrease()); // 특정 액션을 디스패치
}

export function* counterSaga() {
    // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    // takeLatest는 기존에 진행중이던 작업이 있다면 취소처리하고 가장 마직막으로 실행된 작업만 수행
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initialState
)

export default counter;