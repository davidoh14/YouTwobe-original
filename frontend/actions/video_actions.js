import { getVideos, getVideo, postVideo, patchVideo, deleteVideo } from "../util/video_api_util"

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_CURRENT_VIDEO = "RECEIVE_CURRENT_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

const receiveVideos = (videos) => {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
};

const receiveVideo = video => {
    return {
        type: RECEIVE_CURRENT_VIDEO,
        video
    }
};

const removeVideo = videoId => {
    return {
        type: REMOVE_VIDEO
    }
};

const receiveVideoErrors = (errors) => {
    return {
      type: RECEIVE_VIDEO_ERRORS,
      errors,
    };
};

export const fetchVideos = () => dispatch => 
    getVideos().then(
        (videos) => dispatch(receiveVideos(videos)),
        (errors) => dispatch(receiveVideoErrors(errors.responseJSON))
    );

export const fetchVideo = () => dispatch =>
    getVideo().then(
        (video) => dispatch(receiveVideo(video)),
        (errors) => dispatch(receiveVideoErrors(errors.responseJSON))
    );
