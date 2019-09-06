import React from 'react';

export const CommentList = ({comments}) => {

    return (
            <div className="col-md-6">
                <ul className="list-group list-group-flush">
                    {comments.map(comment => {
                        return (
                            <li key={comment.id}
                                className="list-group-item list-group-item-info text-dark"><i
                                className="fa text-primary mr-2 fa-comments"/>{comment.name}
                            </li>)
                    })}
                </ul>
            </div>
        )
};


CommentList.propTypes = {};
