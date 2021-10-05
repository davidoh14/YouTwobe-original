import VideoUploadForm from "./video_upload_form";
import { connect } from "react-redux";
import { createVideo } from "../../actions/video_actions";

const mSTP = ({ entities }) => {
    return{
        videos: Object.values(entities.videos)
    }
};

const mDTP = dispatch => {
    return{
        createVideo: (video) => dispatch(createVideo(video))
    }
};

export default connect(mSTP, mDTP)(VideoUploadForm);