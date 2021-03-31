/* 20.4.1 redux-thunk 코드 준비하기 */
// import { combineReducers } from 'redux';
// import users from './users';

// const rootReducer = combineReducers({ users });
// export default rootReducer;

/* 20.4.6 redux-saga 코드 준비하기 */
import { combineReducers } from 'redux';
import users, { usersSaga } from './users';
import { all } from '@redux-saga/core/effects';

export function* rootSaga() {
    yield all([usersSaga()]);
}
const rootReducer = combineReducers({ users });
export default rootReducer;