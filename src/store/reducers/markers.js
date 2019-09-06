import * as actions from '../actions/actions'

const INITIAL_STATE = {
    markers: [],
    error: null
};

const markers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_POSTS_SUCCESS:
            return {
                markers: action.markers,
                error: null
            };
        case actions.FETCH_POSTS_FAILURE:
            return {
                markers: [],
                error: action.payload
            }
        default:
            return state;
    }
};

export default markers