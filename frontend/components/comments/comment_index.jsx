import CommentItem from "./comment_item";
import CommentForm from "./comment_form";
import { eraseComment } from "../../actions/comment_actions";
import React from "react";


class CommentIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllComments(this.props.videoId)
    }

    componentDidUpdate(prevProps){
        if ((this.props.videoId !== prevProps.videoId) || (this.props.comments.length !== prevProps.comments.length)) {
            this.props.fetchAllComments(this.props.videoId)
        }
    }

    // currentVideoComments = comments => {
    //     return comments.filter(comment => comment.videoId == this.props.currentVideoId)
    // }

    render(){
        const { comments, videoId, composeComment, currentUserId, fetchAllComments } = this.props;

        
        if ( comments ) {
            if (comments.length === 0) {
                return 'This video has no comments'
            }

            // const currentVideoComments = comments.filter(comment => comment.videoId == currentVideoId)
            
            return(
                <div>
                    <h1>{comments.length} Comments</h1>
            
                    <div>
                        <CommentForm 
                            composeComment={composeComment} 
                            videoId={videoId} 
                            currentUserId={currentUserId} 
                            history={this.props.history}
                            fetchAllComments={fetchAllComments}
                        />
                    </div>

                    <ul>
                        {
                            comments.map( comment => 
                                <li key={comment.id}>
                                    <CommentItem 
                                        comment={comment} 
                                        currentUserId={currentUserId}     
                                    />
                                </li> )
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default CommentIndex;