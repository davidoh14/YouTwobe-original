import React from 'react';
import { Link } from 'react-router-dom';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Button } from '@mui/material';


const NavBar = ( { currentUser, logout }) => {
  const display = currentUser ? (
  <div>
    <button onClick={logout}>Log Out</button>
  </div>

  ) : (
      
    <div>
      <Button><Link to='/signup'>Sign up</Link></Button>
      <Button><Link to='/login'>Login</Link></Button>
    </div>
  );


  return(
      <div>
        <AppBar position='sticky'>
          <Toolbar>
            <MenuSharpIcon />
            <Link to='/' className='logolink'>
              <button className='logo'>
                <img src={window.YouTubeLogoURL} className='youtube-logo'/>
                <Typography variant='h6'>YouTwobe</Typography>
              </button>
            </Link>
            <VideoCallSharpIcon />
            {display}
          </Toolbar>
        </AppBar>
      </div>
  )
};

export default NavBar;