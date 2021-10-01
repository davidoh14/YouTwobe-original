import { Component } from "react";
import React from "react";

class VideoIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.watchVideo = this.watchVideo.bind(this);
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.videoId)
    }
    
    watchVideo() {
        this.props.history.push(`/watch/${this.props.video.id}`)
    }
    
    render(){
        const { video } = this.props;

        // const { video, history, fetchVideo, videoId } = this.props;

        return(
          <div className="video-index-item">
              <div className="video-index-item-video">
                  <video src={video.video} controls/>
              </div>
              <button className="video-index-item-title" onClick={this.watchVideo}>
                  Title: {video.title}
              </button>
              <div className="video-index-item-uploader">
                  UploaderId: {video.uploaderId}
              </div>
          </div>   
        )
    }
} 

export default (VideoIndexItem);