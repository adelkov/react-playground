import React, {Component} from 'react';
import {Link} from "@reach/router";
import {TweenMax} from "gsap/TweenMax";


class Post extends Component {

    componentDidMount() {
        TweenMax.from("#post-" + this.props.post.id, 0.2, {scale: 0.5, opacity: 0.1, rotate: 360})
    }

    render() {
        const {post, onDeletePost} = this.props;
        return (
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">Post ID: {post.id}</div>
                <div className="card-body">
                    <h4 className="card-title">{post.title}</h4>
                    <br/>
                    <Link to={"/dashboard/post/" + post.id} className="btn btn-primary">See details</Link>
                    <a className="btn btn-outline-primary ml-1" onClick={()=> onDeletePost(post.id)}>Delete Post</a>
                    <p>{post.email && post.email}</p>
                </div>
            </div>
        )
    }
}

Post.propTypes = {};

export default Post;