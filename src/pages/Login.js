import React from 'react';
import '../styles/admin.css'

const Login = (props) => {
  const {email, password, setEmail, setPassword, handleLogin, setHasAccount, emailError, passwordError} = props;
  return (
    <div className="admin-form-container">
      <h1 className="admin-title">Administrative User Only</h1>
      <div className="admin-form">
        <label className="admin-label">Admin login</label>
        <input className="admin-input"type="text" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} id="admin name" placeholder="admin ID" />
        <p>{emailError}</p>
        <label className="admin-label">Password</label>
        <input className="admin-input" name="admin password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="admin password" placeholder="admin password" />
        <p>{passwordError}</p>
        <button className="admin-submit" type="submit" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login