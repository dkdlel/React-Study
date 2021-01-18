import * as api from '../lib/api';
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createRequsetSaga from '../lib/createRequestSaga';

const GET_LIST = 'list/GET_LIST';
const GET_LIST_SUCCESS = 'list/GET_LIST_SUCCESS';

export const getList = createAction(GET_LIST);

const getListSaga = createRequsetSaga(GET_LIST, api.getList);

export function* listSaga() {
    yield takeLatest(GET_LIST, getListSaga);
}

const initState = {
    list: null
}

const list = handleActions(
    {
        [GET_LIST_SUCCESS]: (state, action) => ({
            list: action.payload
        })
    },
    initState
)

export default list;