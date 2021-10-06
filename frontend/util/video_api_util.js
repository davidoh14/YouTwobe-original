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

export const postVideo = (formData) => {
    return $.ajax({
        url: `/api/videos/`,
        method: 'POST',
        data: formData,
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