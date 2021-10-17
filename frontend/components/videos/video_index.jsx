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
 

        const { videos } = this.props;

        return (
            <div className="index">
                <div className='index-left'/>
                <div className="video-index"> 
                        {
                            videos.map((video) =>
                                <div className='video-index-item' key={video.id}>
                                    <VideoIndexItemContainer video={video} history={this.props.history}/>
                                </div>)
                        }
                        {
                            videos.map((video) =>
                                <div className='video-index-item' key={video.id}>
                                    <VideoIndexItemContainer video={video} history={this.props.history}/>
                                </div>)
                        }

                </div>
                <div className='index-right'/>
            </div>
        )
    }
}

export default VideoIndex;