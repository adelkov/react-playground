import {put, takeEvery} from 'redux-saga/effects';
import * as actions from "../actions/actions"
import * as api from '../api'
import {
    createLeftovertFailure,
    createLeftovertSuccess,
    fetchLeftoversFailure,
    fetchLeftoversSuccess
} from "../actions/leftovers";
import * as dt from "../../data/data"

function* fetchLeftovers() {
    try {
        let {data} = yield api.fetchLeftovers();
        console.log(dt.formatJSON(data));
        yield put(fetchLeftoversSuccess(dt.formatJSON(data)))
    } catch (e) {
        yield put(fetchLeftoversFailure(e))
    }
}

function* createLeftover(action) {
    try {
        let leftover = action.leftover;
        leftover.timestamp = +new Date();
        const {data} = yield api.createLeftover(leftover);
        leftover.id = data.name;
        yield put(createLeftovertSuccess(leftover))
    } catch (e) {
        yield put(createLeftovertFailure(e))
    }
}


export function* leftoversWatcher() {
    yield takeEvery(actions.FETCH_LEFTOVERS, fetchLeftovers);
    yield takeEvery(actions.CREATE_LEFTOVER, createLeftover);
}
