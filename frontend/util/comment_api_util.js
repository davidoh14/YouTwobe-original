export const getAllComments = ( videoId ) => {
    return $.ajax({
        url: `/api/videos/${videoId}/comments`,
        method: 'GET'
    })
};

export const getComment = ( videoId, commentId ) => {
    return $.ajax({
        url: `/api/videos/${videoId}/comments/${commentId}`,
        method: 'GET'
    })
};

export const postComment = ( videoId ) => {
    return $.ajax({
        url: `/api/videos/${videoId}/comments/`,
        method: 'POST',
        data: { comment },
    })
};

export const patchComment = ( videoId, comment ) => {
    return $.ajax({
        url: `/api/videos/${videoId}/comments/${comment.id}`,
        method: 'PATCH',
        data: { comment }
    })
};

export const deleteComment = ( videoId, commentId ) => {
    return $.ajax({
        url: `/api/videos/${videoId}/comments/${commentId}`,
        method: 'DELETE'
    })
}