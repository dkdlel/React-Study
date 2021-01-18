import { combineReducers } from 'redux';
import list, { listSaga } from './list'
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    list
})

export function* rootSaga() {
    yield all([listSaga()]);
}

export default rootReducer;