import React from 'react';


const CommentItem = ({ comment }) => {

    return (
        <div>
            {comment.user.username}
            {comment.createdAt}
            {comment.body}
        </div>
    )
};

export default CommentItem;