import React from "react";

class VideoShow extends React.Component{

    componentDidMount(){
        this.props.fetchVideo(this.props.video.id)
    }
    
    render(){
        console.log(this.props.video)
        if (!this.props.video){
            return null
        };

        const { video } = this.props;

        return(
            <div>
                <h1>Video Show</h1>
                <div className='show-player'>
                    {video}
                </div>
                    <div className='show-info'>
                        <div className='show-title'>
                            {video.title}
                        </div>
                        <div className='show-views'>
                            326,377 views - Sep 16, 2021
                        </div>
                        <div className='show-date'>
                            Sep 16, 2021
                        </div>
                        <div className='show-description'>
                            {video.description}
                        </div>
                    </div>

            </div>
        )
    }
}

export default VideoShow;