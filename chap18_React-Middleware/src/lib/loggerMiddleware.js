const loggerMiddleware = store => next => action => {
    // 다음 정보를 순차적으로 콘솔 출력
    // 1. 이전 상태
    // 2. 액션 정보
    // 3. 새로워진 상태
    console.group(action && action.type); // 액션 타입으로 log를 그룹화 함
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action); // 다음 미들웨어 혹은 리듀서에게 전달
    console.log('다음 상태', store.getState()); // 업데이트된 상태
    console.groupEnd(); // 그룹 끝
}

export default loggerMiddleware;
// src/index.js로 이동

/*
위와 동일
const loggerMiddleware = function loggerMiddleware(store){
    return function(next){
        return fuction(action){
            // 미들웨어 기본 구조
        }
    }
}

미들웨어 내부에서 store.dispatch를 사용하면 첫 번째 미들웨어부터 다시 처리
next를 사용하지 않으면 액션이 리듀서에 전달되지 않음. 즉, 액션이 무시 되는 것
*/


/* 18.2.2 redux-logger 사용하기 */
// yarn add redux-logger, src/index.js
// 콘솔에 색상도 입혀지고, 액션 디스패치 시간도 나타남