import {connect} from 'react-redux';
import PostList from "./PostList/PostList";
import {TweenMax} from "gsap/TweenMax";
import {createPost, fetchPosts, deletePost} from "../../../store/actions/posts";
import {compose} from "redux";
import withAuth from "../../../HOCs/withAuth";


function mapStateToProps(state) {
    return {postList: state.posts.postList};
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        createPost: post => dispatch(createPost(post)),
        onDeletePost: id => onDeletePost(id, dispatch)
    }
}


const onDeletePost = (id, dispatch) => {
    let myAnimation = TweenMax.to("#post-" + id, 0.3, {opacity: 0, scale: 0});
    myAnimation.eventCallback("onComplete", () => {
        dispatch(deletePost(id))
    });
};


export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withAuth
)(PostList)
