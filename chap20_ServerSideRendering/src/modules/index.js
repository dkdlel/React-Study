/* 20.4.1 redux-thunk 코드 준비하기 */
import { combineReducers } from 'redux';
import users from './users';

const rootReducer = combineReducers({ users });
export default rootReducer;