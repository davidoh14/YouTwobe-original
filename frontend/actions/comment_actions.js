import { getAllComments, getComment, postComment, patchComment, deleteComment } from "../util/comment_api_util";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveAllComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    }
};

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
};

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
};

export const fetchAllComments = videoId => dispatch => {
    return (
        getAllComments(videoId).then(
            (comments) => dispatch(receiveAllComments(comments))
        )
    )
};

export const fetchComment = (videoId, commentId) => dispatch => {
    return (
        getComment(videoId, commentId).then(
            (comment) => dispatch(receiveComment(comment))
        )
    )
};

export const composeComment = (video) => dispatch => {
    return (
        postComment(video).then(
            (comment) => dispatch(receiveComment(comment))
        )
    )
};

export const reviseComment = (videoId, commentId) => dispatch => {
    return (
        patchComment(videoId, commentId).then(
            (comment) => dispatch(receiveComment(comment))
        )
    )
};

export const eraseComment = ( videoId, commentId ) => {
    return (
        removeComment(videoId, commentId).then(
            () => dispatch(deleteComment(commentId))
        )
    )
};



