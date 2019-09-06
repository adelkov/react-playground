import * as actions from "./actions"


export const fetchPosts = () => {
    return {
        type: actions.FETCH_POSTS
    }
};

export const fetchPostsSuccess = posts => {
    return {
        type: actions.FETCH_POSTS_SUCCESS,
        payload: posts
    }
};

export const fetchPostsFailure = (error) => {
    return {
        type: actions.FETCH_POSTS_FAILURE,
        payload: error
    }
};

export function createPostFailure(error) {
    return {
        type: actions.CREATE_POST_FAILURE,
        payload: error
    };
}

export function createPostSuccess(post) {
    return {
        type: actions.CREATE_POST_SUCCESS,
        post
    }
}

export const createPost = post => {
    return {
        type: actions.CREATE_POST,
        post
    }
};

export const fetchPost = id => {
    return {
        type: actions.FETCH_POST,
        id
    }
};

export const fetchPostSuccess = (post) => {
    return {
        type: actions.FETCH_POST_SUCCESS,
        payload: post
    }
};

export const fetchPostFailure = error => {
    return {
        type: actions.FETCH_POST_FAILURE,
        payload: error
    }
};

export const deletePost = id => {
    return {
        type: actions.DELETE_POST,
        id
    }
};

export const deletePostSuccess = id => {
    return {
        type: actions.DELETE_POST_SUCCESS,
        id
    }
};

export const deletePostFailure = e => {
    return {
        type: actions.DELETE_POST_FAILURE,
        e
    }
};
