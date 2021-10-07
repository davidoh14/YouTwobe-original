


class CommentIndex extends React.Component {

    render(){
        
        const { comments, currentVideoId } = this.props;

        const currentVideoComments = comments.filter(comment => comment.videoId === currentVideoId)

        return(
            <div>
                <h1>Comments</h1>

                {/* <div>
                    <CommentForm/>
                </div>

                <ul>
                    {
                        currentVideoComments.map( comment => 
                            <li><CommentItem key={video.id} comment={comment}/></li> )
                    }
                </ul> */}
            </div>
        )
    }
}

export default CommentIndex;