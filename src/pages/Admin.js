import React, { useState, useEffect } from 'react';
import {firebase, db} from '../firebase/config';

import Login from './Login';
import Logout from './Logout';

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
  const uploadContent = (e) => {
    e.preventDefault();

    const elementsArray = [...e.target.elements];
    console.log(elementsArray);

    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if(currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      return accumulator;
    }, {});
    console.log({formData})
    db.collection("episodes").add(formData)
  }
  //NEW THING ENDS

  return (
    <div>
      {(user) ? (
        <div>
          <Logout handleLogout={handleLogout} />
          <form onSubmit={uploadContent}>
            <label for="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Title" />
            <label for="embedVideoURL">Embed Code Video</label>
            <input type="text" id="embedVideoURL" name="embedVideoURL" placeholder="copy video url here"/>
            <label for="embedAudioURL">Embed Code Audio</label>
            <input type="text" id="embedAudioURL" name="embedAudioURL" placeholder="copy audio url here"/>
            <label for="description">Description</label>
            <input type="text" id="description" name="description" placeholder="description"/>
            <button type="submit">Upload</button>
          </form>
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