/* 17.3.3 루트 리듀서 만들기 */
// 스토어를 만들때는 하나의 리듀서만 사용해야함
// 따라서 기존의 리듀서들을 하나로 합쳐야함
// 리덕스에서 제공하는 combineReducers라는 유틸함수를 사용

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter, todos
});

export default rootReducer;
// srt/index.js로 이동
// import rootReducer from './modules'; 로 불러올수 있음