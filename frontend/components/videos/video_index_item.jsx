import React from "react";


class VideoIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.watchVideo = this.watchVideo.bind(this);
    }
    
    watchVideo() {
        this.props.history.push(`/watch/${this.props.video.id}`)
    }
    
    render(){
        const { video } = this.props;

        return(
          <div className="index-item">
              <div className="index-item-thumbnail" >
                  {/* <img src={video.thumbnail} onClick={this.watchVideo}/> */}
                  <img src={window.squirrelPURL} onClick={this.watchVideo} />
              </div>
              <button className="index-item-title" onClick={this.watchVideo}>
                  Title: {video.title}
              </button>
              <div className="index-item-uploader">
                  UploaderId: {video.uploaderId}
              </div>
          </div>   
        )
    }
} 

export default (VideoIndexItem);