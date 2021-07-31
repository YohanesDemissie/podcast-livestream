import React, { useState, useEffect } from 'react';
import {firebase, db} from '../firebase/config';
import '../styles/admin.css';

import Login from './Login';
import Logout from './Logout';
import AdminEpisodes from './AdminEpisodes';
import AdminGuestStars from './AdminGuestStars';
import AdminFatherhood from './AdminFatherhood';
import AdminBlackExcellence from './AdminBlackExcellence';
import AdminEvents from './AdminEvents';

function Admin() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
        setEmailError(err.message);
        break;
        setPasswordError(err.message);
        break;
      }
    })
  }

  const handleLogout = () => {
    firebase.auth().signOut();
  }

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        setUser(user)
      } else {
        setUser("")
      }
    })
  }

  useEffect(() => {
    authListener();
  }, []);

  //NEW THINGS TO INCOPORATE FOR FORUM DATA
  // const uploadContent = (e) => {
  //   e.preventDefault();

  //   const elementsArray = [...e.target.elements];
  //   console.log(elementsArray);

  //   const formData = elementsArray.reduce((accumulator, currentValue) => {
  //     if(currentValue.id) {
  //       accumulator[currentValue.id] = currentValue.value;
  //     }
  //     return accumulator;
  //   }, {});
  //   console.log({formData})
  //   db.collection("episodes").add(formData);
  //   e.target.reset();
  //   alert('Your new Episode has been added to your podcast. Thank you!')
  // }

  return (
    <div>
      {(user) ? (
        <div>
          <Logout handleLogout={handleLogout} />
          <h1 className="admin-title">Administrative User Only</h1>
          <div className="admin-forms-container">
            <AdminEpisodes />
            <AdminGuestStars />
            <AdminFatherhood />
            <AdminBlackExcellence />
            <AdminEvents />
          </div>
        </div>
      ) : (
        <div>
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            setHasAccount={hasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        </div>
      )}
    </div>
  )
}

export default Admin;