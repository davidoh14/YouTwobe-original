import { connect } from "react-redux"
import VideoIndexItem from "./video_index_item";
import { fetchVideo } from "../../actions/video_actions";
import { withRouter } from "react-router";

// const mapStateToProps = (state, ownProps) => ({
//     videoId: state.entities.videos[video.id]
// });

const mapDispatchToProps = (dispatch) => ({
    fetchVideo: (videoId) =>  dispatch(fetchVideo(videoId))
});

export default withRouter(connect(null, mapDispatchToProps)(VideoIndexItem))