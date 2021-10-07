import React from 'react';
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { eraseComment } from '../../actions/comment_actions';
import { reviseComment } from '../../actions/comment_actions';


const CommentItem = ({ comment, currentUserId }) => {

    // handleEdit = (commentId) => {
    //     () => reviseComment(commentId)
    // };

    const deleteComment = (currentUserId === comment.commenterId) ? 
                <Delete onClick={()=> eraseComment(comment.id)}/> : null;
    const editComment = (currentUserId === comment.commenterId) ?
                <EditIcon onClick={()=> handleEdit(comment.id)}/> : null;

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
            <div>
                {deleteComment}
            </div>
            <div>
                {editComment}
            </div>
            
            
        </div>
    )
};

export default CommentItem;