import React from 'react';
import { Link } from 'react-router-dom';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

const NavBar = ( { currentUser, logout }) => {
  const display = currentUser ? (
  <div>
    <button onClick={logout}>Log Out</button>
  </div>

  ) : (
      
    <div>
      <Link to='/signup'>Sign up</Link>
      <Link to='/login'>Login</Link>
    </div>
  );

  return(
    <header>
      <div>
        <MenuSharpIcon />
        <h1>YouTwobe</h1>
        <VideoCallSharpIcon />
        {display}
      </div>
    </header>
  )
};

export default NavBar;