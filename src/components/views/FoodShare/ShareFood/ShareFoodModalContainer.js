import React from 'react';
import {connect} from 'react-redux';
import ShareFoodModal from "./ShareFoodModal";
import {createLeftover} from "../../../../store/actions/leftovers";

const mapDispatchToProps = (dispatch) => {
    return {
        createLeftover: food => dispatch(createLeftover(food))
    };
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(ShareFoodModal);
