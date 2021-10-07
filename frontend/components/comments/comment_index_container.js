import { connect } from "react-redux"
import { fetchAllComments } from "../../actions/comment_actions"

const mapStateToProps = (state, ownProps) => ({
    comments: Object.values(state.entities.comments),
    currentVideoId: state.entities.comments[ownProps.match.params.videoId]
})

// const mapDispatchToProps = (dispatch) => ({
//     fetchAllComments: (videoId) => dispatch(fetchAllComments(videoId))
// })

export default connect(mapStateToProps, null)(CommentIndex);

