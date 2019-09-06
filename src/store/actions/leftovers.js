import * as actions from "./actions"


export const fetchLeftovers = ()  => {
    return {
        type: actions.FETCH_LEFTOVERS
    }
};

export const fetchLeftoversSuccess = (leftovers) => {
    return {
        type: actions.FETCH_LEFTOVERS_SUCCESS,
        leftovers
    }
};

export const fetchLeftoversFailure = (error) => {
    return {
        type: actions.FETCH_LEFTOVERS_FAILURE,
        payload: error
    }
};


export function createLeftovertSuccess(leftover) {
    return {
        type: actions.CREATE_LEFTOVER_SUCCESS,
        leftover
    };
}

export function createLeftovertFailure(error) {
    return {
        type: actions.CREATE_LEFTOVER_FAILURE,
        payload: error
    };
}

export const createLeftover = leftover => {
    return {
        type: actions.CREATE_LEFTOVER,
        leftover
    }
};

