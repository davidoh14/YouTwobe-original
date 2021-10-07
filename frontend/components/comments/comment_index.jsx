import CommentItem from "./comment_item";
import React from "react";


class CommentIndex extends React.Component {
    constructor(props){
        super(props);
        this.currentVideoComments = this.currentVideoComments.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllComments(this.props.videoId)
    }
    

    currentVideoComments = comments => {
    
        return comments.filter(comment => comment.videoId == this.props.currentVideoId)
    }

    render(){

        const { comments, currentVideoId } = this.props;

        
        if ( comments ) {
            if (comments.length === 0) {
                return 'this video has no comments'
            }

            const currentVideoComments = comments.filter(comment => comment.videoId == currentVideoId)
            
            
            return(
                <div>
                    <h1>{comments.length} Comments</h1>
            
                    {/* <div>
                        <CommentForm/>
                    </div> */}

                    <ul>
                        {
                            currentVideoComments.map( comment => 
                                <li key={comment.id}><CommentItem comment={comment}/></li> )
                        }

                    </ul>
                </div>
            )
        }
    }
}

export default CommentIndex;