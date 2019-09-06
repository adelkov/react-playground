import {connect} from 'react-redux';
import AddComment from "./AddComment";
import {createComment} from "../../../../store/actions/comments";

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: comment => dispatch(createComment(comment))
    };
};

const mapStateToProps = (state, ownprops) => {
    return {
        postId: ownprops.postId
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(AddComment);
