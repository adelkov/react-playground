import React, {Component} from 'react';
import Loader from "../../common/Loader/Loader";
import image from "../../../img/404.png"
import AddCommentContainer from "./AddComment/AddCommentContainer";
import {CommentList} from "./CommentList/CommentList";
import {PostDetail} from "./PostDetail/PostDetail";

class PostPage extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.id);
        this.props.fetchComments();
    }

    renderCommentList() {
        const {comments, loading, error} = this.props.commentList;
        if (loading) {
            return (
                <Loader/>
            )
        } else if (error) {
            return (
                <img src={image} alt="error"/>
            )
        }

        return (
            <CommentList comments={comments}/>
        )
    }

    render() {

        const {activePost} = this.props;
        if (activePost.loading) {
            return (
                <Loader/>
            )
        } else if (activePost.error) {
            return (
                <div>Error...</div>
            )
        }

        return (
            <div className="py-5">
                <div className="container">
                    <PostDetail post={activePost.post}/>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="display-4 text-white">Comments</h2>
                        </div>
                    </div>
                    <div className="row">
                        {this.renderCommentList()}
                        <AddCommentContainer postId={activePost.post.id}/>
                    </div>
                </div>
            </div>
        )
    }
}

PostPage.propTypes = {};

export default PostPage;
