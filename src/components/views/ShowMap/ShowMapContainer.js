import React from 'react';
import {connect} from 'react-redux';
import ShowMap from "./ShowMap";
import {fetchMarkers} from "../../../store/actions/markers";

const mapDispatchToProps = dispatch => {
    return {
        fetchMarkers: options => dispatch(fetchMarkers())
    };
};

const mapStateToProps = state => {
    return {
        markers: state.markers
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(ShowMap);
