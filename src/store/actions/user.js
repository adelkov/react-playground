import * as actions from "./actions"


export const setUser = email => {
    return {
        type: actions.SET_USER,
        email
    }
};