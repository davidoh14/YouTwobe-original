import React from "react";
import { Component } from "react";

class VideoIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // need to render all video thumbnails, titles, descriptions, and uploader id's for now 
        const {videos} = this.props.videos;
        return (
            <div className="video_index"> 
                <h1>Video Feed Index</h1>
                    {
                        videos.map(video => 
                            <VideoIndexItem key={video.id} video={video}/>)
                    }
            </div>
        )
    }
}

export default VideoIndex;