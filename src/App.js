import React, { useState, useEffect} from 'react';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Title from './pages/Title';
import Sidebar from './pages/Sidebar';
import Admin from './pages/Admin';
import fire from './firebase/config';
// import './styles/home.css';
import './App.css';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  
//delete the line below if not use at the end
  // const {firebase} = useContext(FirebaseContext)
  //

  
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
    fire.auth().signInWithEmailAndPassword(email, password)
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
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
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

  return (
    <div className="app-container">
      {(user) ? (
        <div>
          <Logout handleLogout={handleLogout} />
          <Admin />
        </div>
      ) : (
        <div>
          <Sidebar />
          <div className="other-pages">
            <Title />
            <Home />
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
            <Episodes />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
