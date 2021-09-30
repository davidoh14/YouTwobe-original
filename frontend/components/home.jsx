import React from "react";
import { Component } from "react";
import NavBarContainer from "./nav/nav_bar_container";
import VideoIndexContainer from "./videos/video_index_container";



class Home extends React.Component{

    render(){
        return(
            <div>
                <NavBarContainer/>
                <VideoIndexContainer/>
            </div>
        )
    }
}

export default Home;