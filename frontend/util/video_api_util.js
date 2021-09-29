export const getVideos = () => {
    return $.ajax({
        url: '/api/videos',
        method: 'GET'
    })
};

export const getVideo = videoId => {
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'GET'
    })
} ;

export const postVideo = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'POST',
        data: { video },
        contentType: false,
        processData: false
    })
};

export const patchVideo = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'PATCH',
        data: { video }
    })
};


export const deleteVideo = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'DELETE'
    })
};