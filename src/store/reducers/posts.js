import * as actions from '../actions/actions'

const INITIAL_STATE = {
    postList: {posts: [], error: null, loading: false},
    activePost: {post: {}, error: null, loading: false}
};

const posts = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_POSTS:
            return {...state, postList: {posts: [], error: null, loading: true}};
        case actions.FETCH_POSTS_SUCCESS:
            return {...state, postList: {posts: action.payload, error: null, loading: false}};
        case actions.FETCH_POSTS_FAILURE:
            return {...state, postList: {posts: [], error: action.payload, loading: false}};
        case actions.FETCH_POST:
            return {...state, activePost: {post: {}, error: null, loading: true}};
        case actions.FETCH_POST_SUCCESS:
            return {...state, activePost: {post: action.payload, error: null, loading: false}};
        case actions.FETCH_POST_FAILURE:
            return {...state, activePost: {post: [], error: action.payload, loading: false}};
        case actions.DELETE_POST_FAILURE:
            return {...state, postList: {posts: state.postList.posts, error: action.e, loading: false}};
        case actions.DELETE_POST_SUCCESS:
            const posts = state.postList.posts.filter(post => post.id !== action.id);
            return {...state, postList: {posts: posts, error: null, loading: false}};
        case actions.CREATE_POST_SUCCESS:
            const posts2 = state.postList.posts.concat(action.post);
            return {...state, postList: {posts: posts2, error: null, loading: false}};
        case actions.CREATE_POST_FAILURE:
            return state;
        default:
            return state;
    }
};

export default posts