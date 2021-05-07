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
  const [user, setUser] = ([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        getWrestler(authed.uid).then((wrestlersArray) => setWrestlers(wrestlersArray));
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
        setWrestlers([]);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes
          wrestlers={wrestlers}
          setWrestlers={setWrestlers}
        />
      </Router>
    </>
  );
}

export default App;
