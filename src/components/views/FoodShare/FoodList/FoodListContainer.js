import React from 'react';
import {connect} from 'react-redux';
import FoodList from "./FoodList";
import {fetchLeftovers} from "../../../../store/actions/leftovers";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLeftovers: () => dispatch(fetchLeftovers())
    };
};

const mapStateToProps = (state) => {
    return {
        leftoverList: state.leftovers.leftoverList
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(FoodList);
