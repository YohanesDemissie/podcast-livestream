import React, { useState, useEffect} from 'react';
import fire from '../firebase/config';

const Login = (props) => {
  const {email, password, setEmail, setPassword, handleLogin, setHasAccount, emailError, passwordError} = props;
  return (
    <div>
        <label>Admin login</label>
        <input type="text" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} id="admin name" placeholder="admin ID" />
        <p>{emailError}</p>
        <label>Password</label>
        <input name="admin password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="admin password" placeholder="admin password" />
        <p>{passwordError}</p>


        <button type="submit" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login