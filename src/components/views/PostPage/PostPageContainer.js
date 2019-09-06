import {connect} from 'react-redux';
import PostPage from "./PostPage";
import {fetchPost} from "../../../store/actions/posts";
import {fetchComments} from "../../../store/actions/comments";
import {compose} from "redux";
import withAuth from "../../../HOCs/withAuth";
import * as data from "../../../data/data"

const mapStateToProps = (state, ownprops) => {

    const commentList = {
        ...state.comments.commentList,
        comments: data.filterByPostId(ownprops.id)(state.comments.commentList.comments)
    };
    return {
        activePost: state.posts.activePost,
        commentList: commentList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id)),
        fetchComments: () => dispatch(fetchComments())
    }
};


export default compose(
    connect(
        mapStateToProps, mapDispatchToProps
    ),
    withAuth
)(PostPage);
