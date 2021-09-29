export const getVideos = () => (
    $.ajax({
        url: '/api/videos',
        method: 'GET',
        data: { videos }
    })
);

export const getVideo = videoId => (
    $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'GET',
        data: { video }
    })
);

export const postVideo = (userId, videoId) => (
    $.ajax({
        url: `/api/users/${userId}/videos/${videoId}`,
        method: 'POST',
        data: { video }
    })
);

export const patchVideo = (userId, videoId) => (
    $.ajax({
        url: `/api/users/${userId}/videos/${videoId}`,
        method: 'PATCH',
        data: { video }
    })
);


export const deleteVideo = (userId, videoId) => (
    $.ajax({
        url: `/api/users/${userId}/videos/${videoId}`,
        method: 'DELETE'
    })
);