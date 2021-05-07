import React, { useEffect, useState } from 'react';
import WrestlerCard from '../Components/WrestlerCard';
import { getWrestler } from '../helpers/data/wrestlerData';
import WrestlerForm from '../Components/WrestlerForm';
import './App.scss';

function App() {
  const [wrestler, setWrestlers] = useState([]);

  useEffect(() => {
    getWrestler().then((resp) => setWrestlers(resp));
  }, []);

  return (
    <div className='App'>
      <WrestlerForm formTitle='Add Wrestler' setWrestlers={setWrestlers} />
      <hr />
      <div className="card-container">
      {wrestler.map((wrestlerInfo) => (
        <WrestlerCard
          key={wrestlerInfo.firebaseKey}
          firebaseKey={wrestlerInfo.firebaseKey}
          name={wrestlerInfo.name}
          conference={wrestlerInfo.conference}
          setWrestlers={setWrestlers}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
