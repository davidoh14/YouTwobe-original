import React from "react";
import { Component } from "react";
import VideoIndexItem from "./video_index_item";

class VideoIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchVideos();
    }

    render(){

        if (!this.props.videos) {
            return null;
        }

        const { videos } = this.props;


        return (
            <div className="video-index"> 
                <h1>Video Feed Index</h1>
                    {
                        videos.map((video, i) => 
                            <VideoIndexItem key={i} video={video}/>)
                    }
            </div>
        )
    }
}

export default VideoIndex;