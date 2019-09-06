import * as actions from '../actions/actions'


const INITIAL_STATE = {
    commentList: {comments: [], error: null, loading: false},
};

const comments = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_COMMENTS:
            return {...state, commentList: {comments: [], error: null, loading: true}};
        case actions.FETCH_COMMENTS_FAILURE:
            return {...state, commentList: {comments: [], error: action.payload, loading: false}};
        case actions.FETCH_COMMENTS_SUCCESS:
            return {...state, commentList: {comments: action.payload, error: null, loading: false}};
        case actions.CREATE_COMMENT_SUCCESS:
            let comment = action.comment;
            comment.id = Math.floor(Math.random()*10000);
            const comments = state.commentList.comments.concat(comment);
            return {
                ...state,
                commentList: {
                    comments: comments,
                    error: null,
                    loading: false
                }
            };
        default:
            return state;
    }
};

export default comments;