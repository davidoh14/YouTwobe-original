import React from 'react';
import { Link } from 'react-router-dom';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Button } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';

const NavBar = ({ currentUser, logout, classes, history }) => {

  const display = currentUser ? (
  
    <div>
      <Button onClick={logout}>
        <AccountCircleIcon></AccountCircleIcon> Log Out
      </Button>
    </div>

  ) : (
  
    <div>
      <Button className={classes.loginButton} variant='outlined' onClick={()=> history.push('/login')}>
        <PersonOutlineIcon/>
        Login
        {/* <Button className={classes.loginButtonText}>Login</Button> */}
      </Button>
    </div>
  );
  
  return(
      <div>
        <AppBar elevation={0} className={classes.appbar}>
          <Toolbar className={classes.toolbar} position='sticky'>
              <div className={classes.toolbarLeft}>
                <MenuSharpIcon className={classes.navBarButton}/>
                <Button className={classes.logo} onClick={()=>history.push('/')}>
                  <img src={window.YouTubeLogoURL} className={classes.youtubeLogo}/>
                  <h1 className={classes.logoText}>YouTwobe</h1>
                </Button>
              </div>
    
              <div className={classes.toolbarMid}>
                <InputBase className={classes.searchBar} placeholder="Search">
                </InputBase>
                  <ClearIcon/>
                  <SearchIcon className={classes.searchIcon}/>
              </div>

              <div className={classes.toolbarRight}>
                <Button onClick={ () => history.push('/upload')}>
                  <VideoCallSharpIcon /> 
                </Button>
                
                <AppsIcon/>
                <NotificationsNoneIcon/>
                {display}
              </div>
          </Toolbar>
        </AppBar>
        <div className='toolbar-pad'></div>
      </div>
  )
};

export default NavBar;