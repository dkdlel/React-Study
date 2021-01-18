// console.log('hello parcel');

import { createStore } from 'redux';

/* 16.2.3 DOM 레퍼런스 만들기 */
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

/* 16.2.4 액션 타입과 액션 생성 함수 정의 */
// 액션 : 프로젝트의 상태에 변화를 일으키는 것
// 주로 대문자로 액션 이름을 고유하게 정의(이름이 중복되는 것을 방지)
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션함수 생성
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 16.2.5 초기값 설정
const initialState = {
    toggle: false,
    counter: 0
}

// 16.2.6 리듀서 함수 정의
// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state, counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state, counter: state.counter - 1
            };
        default:
            return state;
    }
}

/* 16.2.7 스토어 만들기 */
const store = createStore(reducer);

/* 16.2.8 render 함수 만들기 */
const render = () => {
    const state = store.getState(); // 현재 상태를 불러옵니다.
    // 토글처리
    if (state.toggle) {
        divToggle.classList.add('active');
    }
    else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
};
render();

/* 16.2.9 구독하기 */
// App.js에 예시코드 활용
store.subscribe(render); // 상태(state)가 업데이트 되면 호출

/* 16.2.10 액션 발생 시키기 */
// 액션 발생 = 디스패치
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};