import { connect } from "react-redux"
import CommentIndex from "./comment_index";
import { withRouter } from "react-router";
import { fetchAllComments } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {

    return{
        comments: Object.values(state.entities.comments),
        currentVideoId: ownProps.match.params.videoId
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchAllComments: (videoId) => dispatch(fetchAllComments(videoId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));

