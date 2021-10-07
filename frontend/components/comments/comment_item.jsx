import React from 'react';
import Delete from '@mui/icons-material/Delete';
import { SignalCellularNullOutlined } from '@mui/icons-material';
import { eraseComment } from '../../actions/comment_actions';


const CommentItem = ({ comment, currentUserId }) => {

    const deleteComment = (currentUserId === comment.commenterId) ? <Delete onClick={()=> eraseComment(comment.id)}/> : null;

    return (
        <div>
            <div>
                {comment.user.username}
            </div>
                
            <div>
                {comment.createdAt}
            </div>

            <div>
                {comment.body}
            </div>
            {deleteComment}
            
            
        </div>
    )
};

export default CommentItem;