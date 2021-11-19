import React from 'react';
import '../styles/admin.css';

const Logout = ({handleLogout}) => {
  return(
    <button className="admin-logout" onClick={handleLogout}>Logout</button>
  )
}

export default Logout