import CommentItem from "./comment_item";
import CommentForm from "./comment_form";
import { eraseComment } from "../../actions/comment_actions";
import React from "react";


class CommentIndex extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     comments: this.props.comments
        // }


    }

    componentDidMount(){
        console.log(this.props.videoId)
        this.props.fetchAllComments(this.props.videoId)
    }

    componentDidUpdate(prevProps){
        if (this.props.comments.length !== prevProps.comments.length) {
            this.props.fetchAllComments(this.props.videoId)
        }
    }
    

    // currentVideoComments = comments => {
    //     return comments.filter(comment => comment.videoId == this.props.currentVideoId)
    // }

    render(){

        const { comments, videoId, composeComment, currentUserId } = this.props;

        
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