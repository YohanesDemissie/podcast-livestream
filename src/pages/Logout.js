import React from 'react';
import Login from './Login';

const Logout = ({handleLogout}) => {
  return(
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout