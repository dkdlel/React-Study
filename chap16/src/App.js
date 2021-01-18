import React from 'react';

// 리덕스 : 리액트 상태 관리 라이브러리, 전역 상태를 관리할 때 효과적

/* 16.1.1 액션 */
// 객체 형식, 반드시 type 필드를 가지고 있어야함, 값 = 액션의 이름
// {
//   type: 'TOGGEL_VALUE'
// }
// {
//   type: 'ADD_TODO',
//     data: {
//     id: 1,
//       text: '리덕스 배우기'
//   }
// }
// {
//    type: 'CHANGE_INPUT',
//    text: '안녕하세요'
// }

/* 16.1.2 액션 생성 함수 */
// function addTodo(data){
//   return{
//     type: 'ADD_TODO',
//     data
//   }
// }
// // 화살표 함수로도 만들 수 있습니다.
// const changeInput = text => ({
//   type: 'CHANGE_INPUT',
//   text
// })

/* 16.1.3 리듀서 */
// 리듀서(reducer) : 변화를 일으키는 함수
// 액션을 만들어서 발생시키면 현재상태와 액션 객체를 파라미터로 받아 옴
// 두 값을 참고하여 새로운 상태를 만들고, 반환
// const initialState = {
//   counter: 1
// }
// function reducer(state = initialState, action){
//   switch(action.type){
//     case INCREMENT:
//       return{
//         counter: state.counter + 1
//       }
//   }
//   default:
//     return state;
// }

/* 16.1.4 스토어 */
// 프로젝트에 리덕스를 적용하기 위해 store를 만듬
// 한개의 프로젝트는 단 한개의 스토어만 가질수 있음

/* 16.1.5 디스패치 */
// 디스패치(dispatch) : 스토어의 내장 함수 중 하나, '액션을 발생시키는 것'
// dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출

/* 16.1.6 구독 */
// 구독(subscribe) : 스토어의 내장 함수 중 하나, subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출하면 디스패치 상태가 업데이트될 때마다 액션 호출
// const listener = () => {
//   console.log('상태가 업데이트 됨');
// }
// const unsubscribe = store.subscribe(listener);

// unsubscribe();

/* 16.2 리액트 없이 쓰는 리덕스 */
/* 16.2.1 Parcel로 프로젝트 만들기 => vanilla-redux로 이동*/
// yarn global add parcel-bundler (npm install -g parcel-bundler)
// mkdir vanilla-redux
// cd vanilla-redux
// yarn init -y(package.json 파일을 생성)
// 명령어 실행 : parcel index.html
// 서버 주소 : http://localhost:1234/
// yarn add redux(리덕스 모듈 설치)


/* 16.3 리덕스의 세가지 규칙 */
// 1. 단일 스토어 : 하나의 애플리케이션 안에는 하나의 스토어가 들어 있음.
// 2. 읽기 전용 상태 : 불변성을 지키기 위해 기존의 객체는 건드리지 않고 새로운 객체를 생성해 주어야 함.
// 3. 순수한 함수
// 순수한 함수 조건
// 1) 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받음
// 2) 파라미터 이외의 값에는 의존하면 안됨
// 3) 이전 상태는 절대 건드리지 않고, 변화를 준 새로운 상태 객체를 만들어서 반환 (불변성 유지)
// 4) 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 함

export default App;
