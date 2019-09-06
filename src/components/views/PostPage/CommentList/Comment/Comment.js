import React from 'react';
import PropTypes from 'prop-types';
import Divider from "@material-ui/core/Divider/Divider";

const Comment = ({comment}) => {
    return (
        <div className="comment">
            <b> {comment.name}</b> <br/>
            <p>{comment.body}</p>
            <small> {comment.email} </small>
            <Divider />
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
};

export default Comment;