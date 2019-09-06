import {put, takeEvery} from 'redux-saga/effects';
import * as actions from "../actions/actions"
import * as api from '../api'
import {fetchMarkersFailure, fetchMarkersSuccess} from "../actions/markers";


function* fetchMarkers() {
    try {
        let {data} = yield api.fetchMarkers();
        yield put(fetchMarkersSuccess(data))
    } catch (e) {
        yield put(fetchMarkersFailure(e))
    }
}


export function* markersWatcher() {
    yield takeEvery(actions.FETCH_MARKERS, fetchMarkers);
}
