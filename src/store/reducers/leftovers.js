import * as actions from '../actions/actions'


const INITIAL_STATE = {
    leftoverList: {leftovers: [], error: null, loading: true},
};

const leftovers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_LEFTOVERS:
            return {...state, leftoverList: {leftovers: [], error: null, loading: true}};
        case actions.FETCH_LEFTOVERS_FAILURE:
            return {...state, leftoverList: {leftovers: [], error: action.error, loading: false}};
        case actions.FETCH_LEFTOVERS_SUCCESS:
            return {...state, leftoverList: {leftovers: action.leftovers, error: null, loading: false}};
        case actions.CREATE_LEFTOVER_SUCCESS:
            let leftover = action.leftover;
            const leftovers = state.leftoverList.leftovers.concat(leftover);
            return {
                ...state,
                leftoverList: {
                    leftovers,
                    error: null,
                    loading: false
                }
            };
        default:
            return state;
    }
};

export default leftovers;