import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

class VideoIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.watchVideo = this.watchVideo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    watchVideo() {
        this.props.history.push(`/watch/${this.props.video.id}`)
    }
    
    handleDelete(videoId) {
        this.props.detachVideo(videoId)
    }

    render(){
        const { video, currentUserId } = this.props;
        let deleteButton = video.uploaderId === currentUserId ? <DeleteIcon  /> : null;

        return(
          <div className="index-item">
              <div className="index-item-thumbnail" >
                  <img src={video.thumbnail} onClick={this.watchVideo}/>
                  {/* <img src={window.squirrelPURL} onClick={this.watchVideo} /> */}
              </div>
              <button className="index-item-title" onClick={this.watchVideo}>
                  Title: {video.title}
              </button>
              <div className="index-item-uploader">
                  UploaderId: {video.uploaderId}
              </div>
              <div onClick={ () => {this.handleDelete(video.id)} }>
                {deleteButton}
              </div>
          </div>   
        )
    }
} 

export default (VideoIndexItem);