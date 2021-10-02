import React from "react";
import VideoIndexContainer from "./video_index_container";
import { Container } from "@mui/material";
import ReactPlayer from "react-player";
import { Grid, Typography } from "@mui/material";
import useVideoStyles from "./useVideoStyles";

class VideoShow extends React.Component{

    componentDidMount(){
        this.props.fetchVideo(this.props.videoId)
    }
    
    render(){
        if (!this.props.video){
            return null
        };

        const { video } = this.props;
        const classes = useVideoStyles;

        return(
            <div>
                <Typography variant="h4">Video Show</Typography>
                <Container maxWidth='xl'>
                    <div className={classes.showPlayerWrapper}>
                        <ReactPlayer
                            width='100%'
                            height='100%'
                            url={video.video} 
                            muted={true}
                            playing={true}
                        />
                    </div>

                    <div className={classes.showPlayerControlsWrapper}>
                        <Grid container direction='row' alignItems='center' justify='space-between' style={{padding: 16}}>
                            <Grid item >
                                <Typography variant='h5' style={{color: 'white'}}>{video.title}</Typography>
                            </Grid>
                        </Grid>
                    </div>

                </Container>
                    <div className='show-info'>
                        <div className='show-title'>
                            {video.title}
                        </div>
                        <div className='show-views'>
                            326,377 views
                        </div>
                        <div className='show-date'>
                            Sep 16, 2021
                        </div>
                        <div className='show-description'>
                            {video.description}
                        </div>
                    </div>
                
                <div className='show-recommendations'>
                    <div className='recommendation-title'>
                        Recommendations
                    </div>
                    <VideoIndexContainer/>
                </div>
            </div>
        )
    }
}

export default VideoShow;