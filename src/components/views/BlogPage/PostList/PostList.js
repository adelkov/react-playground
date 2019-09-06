import React, {Component} from 'react';
import AddPost from "../AddPost/AddPost";
import Post from "./Post/Post";
import Loader from "../../../common/Loader/Loader";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {

        const {createPost, onDeletePost, postList} = this.props;
        if (postList.loading) {
            return (
                <Loader/>
            )
        } else if (postList.error) {
            return (
                <div>{postList.error}</div>
            )
        }

        return (
            <div>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <AddPost onAddPost={createPost}/>
                                {
                                    postList.posts.map((post) => {
                                        return (
                                            <Post
                                                key={post.id}
                                                post={post}
                                                onDeletePost={() => onDeletePost(post.id)}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PostList.propTypes = {};

export default PostList;

