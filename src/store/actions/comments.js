import * as actions from "./actions"


export const fetchComments = ()  => {
    return {
        type: actions.FETCH_COMMENTS
    }
};

export const fetchCommentsSuccess = (comments) => {
    return {
        type: actions.FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
};

export const fetchCommentsFailure = (error) => {
    return {
        type: actions.FETCH_COMMENTS_FAILURE,
        payload: error
    }
};


export function createCommentSuccess(comment) {
    return {
        type: actions.CREATE_COMMENT_SUCCESS,
        comment
    };
}

export function createCommentFailure(error) {
    return {
        type: actions.CREATE_COMMENT_FAILURE,
        payload: error
    };
}

export const createComment = comment => {
    return {
        type: actions.CREATE_COMMENT,
        comment
    }
};

