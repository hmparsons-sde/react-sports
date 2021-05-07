import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getWrestler } from '../helpers/data/wrestlerData';
import './App.scss';
import Routes from '../helpers/Routes';
import NavBar from '../Components/NavBar';

function App() {
  const [wrestlers, setWrestlers] = useState([]);
  const [user, setUser] = useState(null); // Null because nobody is signed in from the beginning.

  useEffect(() => {
    getWrestler().then(setWrestlers);
  }, []);
  // useEffect is a "lifecycle hook"

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObject = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          username: authed.email.split('@gmail.com')[0]
        };

        setUser(userInfoObject);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <NavBar user={user}/>
        <Routes
          user={user}
          wrestlers={wrestlers}
          setWrestlers={setWrestlers}
        />
      </Router>
    </>
  );
}

export default App;
