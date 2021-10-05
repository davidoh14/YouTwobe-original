import VideoUploadForm from "./video_upload_form";
import { connect } from "react-redux";
import { createVideo } from "../../actions/video_actions";

const mSTP = ({ entities, session }) => {
    return{
        videos: Object.values(entities.videos),
        currentUser: entities.users[session.id]
    }
};

const mDTP = dispatch => {
    return{
        createVideo: (formData) => dispatch(createVideo(formData))
    }
};

export default connect(mSTP, mDTP)(VideoUploadForm);