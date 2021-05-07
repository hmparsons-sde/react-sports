import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getWrestler } from '../helpers/data/wrestlerData';
import './App.scss';
import Routes from '../helpers/Routes';
import NavBar from '../Components/NavBar';

function App() {
  const [wrestlers, setWrestlers] = useState([]);

  useEffect(() => {
    getWrestler().then(setWrestlers);
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
