import React from "react";

export const PostDetail = ({post}) => (
    <div>
        <div className="row">
            <div className="col-md-12">
                <h2 className="display-4 text-white">{post.title}</h2>
                <h3 className="text-white"> {post.email && "A post by: " + post.email}</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-9 ml-auto border-left">
                <p className="mb-0 text-white" dangerouslySetInnerHTML={{__html: post.body}}></p>
            </div>
        </div>
    </div>
);
