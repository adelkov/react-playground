import * as actions from "./actions"


export const fetchMarkers = ()  => {
    return {
        type: actions.FETCH_MARKERS
    }
};

export const fetchMarkersSuccess = (markers) => {
    return {
        type: actions.FETCH_MARKERS_SUCCESS,
        payload: markers
    }
};

export const fetchMarkersFailure = (error) => {
    return {
        type: actions.FETCH_MARKERS_FAILURE,
        payload: error
    }
};