import { Component } from "react";
import React from "react";

class VideoIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.watchVideo = this.watchVideo.bind(this);
    }
    
    watchVideo(e) {
        this.props.history.push(`/watch/${this.props.video.id}`)
    }
    
    render(){
        const { video } = this.props;
        return(
          <div className="video-index-item" onClick={this.watchVideo}>
              <div className="video-index-item-thumbnail">
                  {video.thumbnail}
              </div>
              <div className="video-index-item-title">
                  {video.title}
              </div>
              <div className="video-index-item-uploader">
                  {video.uploader_id}
              </div>
          </div>   
        )
    }
} 

export default VideoIndexItem;