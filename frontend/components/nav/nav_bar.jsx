import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( { currentUser, logout }) => {
  const display = currentUser ? (
  <div>
    <button onClick={logout}>Log Out</button>
  </div>

  ) : (
      
    <div>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Log In</Link>
    </div>
  );

  return(
    <header>
      <div>
        {display}
      </div>
    </header>
  )
};

export default NavBar;