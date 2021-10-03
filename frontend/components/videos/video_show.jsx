import React from "react";
import VideoIndexContainer from "./video_index_container";
import NavBarContainer from "../nav/nav_bar_container";
import { Grid, Typography } from "@mui/material";
// import { Container } from "@mui/material";
// import ReactPlayer from "react-player";
// import useVideoStyles from "./useVideoStyles";
// import WatchLaterIcon from '@mui/icons-material/WatchLater';
// import { Button } from "@mui/material";
// import ShareIcon from '@mui/icons-material/Share';
// import InfoIcon from '@mui/icons-material/Info';
// import { IconButton } from "@mui/material";
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import PauseCircleIcon from '@mui/icons-material/PauseCircle';

class VideoShow extends React.Component{

    componentDidMount(){
        this.props.fetchVideo(this.props.videoId)
    }
    
    render(){
        if (!this.props.video){
            return null
        };

        const { video } = this.props;
        // const classes = useVideoStyles;

        return(
            <div>
                <NavBarContainer/>
                <Typography variant="h4">Video Show</Typography>
                <div className='show-info'>
                    <video src={video.video} className='show-player' controls />
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

                {/* <Container maxWidth='xl'>
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
                        <Grid container alignItems='center' justify='space-between' style={{padding: 16}}>
                            <Grid item>
                                <Typography variant='h5' style={{color: 'white'}}>{video.title}</Typography>
                            </Grid>

                            <Grid container direction='row' alignItems='center' justify='space-between' >
                                <Grid item>
                                    <IconButton className={classes.outerControlIcons} aria-label='Watch later'>
                                        <WatchLaterIcon/>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton className={classes.outerControlIcons} aria-label='Share'>
                                        <ShareIcon/>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton className={classes.outerControlIcons} aria-label='Info'>
                                        <InfoIcon/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>

                        

                        <Grid container direction='row' alignItems='center' justify='center'>
                            <Grid item>
                                <IconButton className={classes.outerControlIcons} aria-label='Play'>
                                    <PlayCircleIcon fontSize='inherit' />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton className={classes.outerControlIcons} aria-label='Pause'>
                                    <PauseCircleIcon fontSize='inherit' />
                                </IconButton>
                            </Grid>



                        </Grid>
                    </div>

                </Container> */}