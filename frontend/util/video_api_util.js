export const postVideos = () => (
    $.ajax({
        url: '/api/videos',
        method: 'POST',
        data: { videos }
    })
);

export const postVideo = videoId => (
    $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'POST',
        data: { video }
    })
);

export const editVideo = videoId => (
    $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'PATCH',
        data: { video }
    })
);


export const deleteVideo = videoId => (
    $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'DELETE'
    })
);