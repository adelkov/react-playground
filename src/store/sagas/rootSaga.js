import {all} from "redux-saga/effects";
import {postsWatcher} from "./posts";
import {markersWatcher} from "./markers";
import {leftoversWatcher} from "./leftovers";

export default function* rootSaga() {
    yield all([
        postsWatcher(),
        markersWatcher(),
        leftoversWatcher()
    ])
}