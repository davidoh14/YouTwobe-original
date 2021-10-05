import React from "react";
import { Component } from "react";
import VideoIndexItemContainer from "./video_index_item_container";


class VideoIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchVideos();
    }

    render(){
        // if (!this.props.videos) {
        //     return null;
        // }

        const { videos } = this.props;

        return (
            <div className="video-index"> 
                <h1>Video Index</h1>
                    {
                        videos.map((video, i) => 
                            <VideoIndexItemContainer key={i} video={video} history={this.props.history}/>)
                    }
                    {
                        videos.map((video, i) => 
                            <VideoIndexItemContainer key={video.id} video={video} history={this.props.history}/>)
                    }
            </div>
        )
    }
}

export default VideoIndex;