import {put, takeEvery} from 'redux-saga/effects';
import * as actions from "../actions/actions"
import * as api from '../api'
import {
    createPostFailure,
    createPostSuccess,
    deletePostFailure,
    deletePostSuccess,
    fetchPostFailure,
    fetchPostsFailure,
    fetchPostsSuccess,
    fetchPostSuccess
} from "../actions/posts";
import {
    createCommentFailure,
    createCommentSuccess,
    fetchCommentsFailure,
    fetchCommentsSuccess
} from "../actions/comments";
import {toastr} from 'react-redux-toastr'


function* fetchComments() {
    try {
        let {data} = yield api.fetchComments();
        if (data) {
            data = Object.keys(data).map(key => {
                return {
                    id: key,
                    ...data[key]
                }
            });
        } else {
            data = []
        }
        yield put(fetchCommentsSuccess(data))
    } catch (e) {
        yield put(fetchCommentsFailure(e))
    }
}

function* fetchPosts() {
    try {
        let {data} = yield api.fetchPosts();
        if (data) {
            data = Object.keys(data).map(key => {
                return {
                    id: key,
                    ...data[key]
                }
            });
        } else {
            data = []
        }
        yield put(fetchPostsSuccess(data))
    } catch (e) {
        yield put(fetchPostsFailure(e))
    }
}

function* fetchPost(action) {
    try {
        let {data} = yield api.fetchPost(action.id);
        const post = data;
        post.id = action.id;
        yield put(fetchPostSuccess(post))
    } catch (e) {
        yield put(fetchPostFailure(e))
    }
}

function* createPost(action) {
    try {
        let post = action.post;
        const {data} = yield api.createPost(post);
        post.id = data.name;
        yield put(createPostSuccess(post))
    } catch (e) {
        yield put(createPostFailure(e))
    }
}

function* createComment(action) {
    try {
        yield api.createComment(action.comment);
        yield put(createCommentSuccess(action.comment))
    } catch (e) {
        yield put(createCommentFailure(e))
    }
}

function* deletePost(action) {
    try {
        yield api.deletePost(action.id);
        yield put(deletePostSuccess(action.id));
    } catch (e) {
        yield put(deletePostFailure(e))
    }
}

export function* postsWatcher() {
    yield takeEvery(actions.FETCH_COMMENTS, fetchComments);
    yield takeEvery(actions.FETCH_POSTS, fetchPosts);
    yield takeEvery(actions.FETCH_POST, fetchPost);
    yield takeEvery(actions.CREATE_POST, createPost);
    yield takeEvery(actions.CREATE_COMMENT, createComment);
    yield takeEvery(actions.DELETE_POST, deletePost);
}

