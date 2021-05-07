import React, { useEffect, useState } from 'react';
import WrestlerCard from '../Components/WrestlerCard';
import { getWrestler } from '../helpers/data/wrestlerData';
import WrestlerForm from '../Components/WrestlerForm';
import './App.scss';

function App() {
  const [wrestlers, setWrestlers] = useState([]);

  useEffect(() => {
    getWrestler().then((resp) => setWrestlers(resp));
  }, []);

  return (
    <>
      <WrestlerForm formTitle='Add Wrestler' setWrestlers={setWrestlers} />
      <hr />
      <div className="card-container">
      {wrestlers.map((wrestlerInfo) => (
        <WrestlerCard
          key={wrestlerInfo.firebaseKey}
          firebaseKey={wrestlerInfo.firebaseKey}
          name={wrestlerInfo.name}
          conference={wrestlerInfo.conference}
          setWrestlers={setWrestlers}
        />
      ))}
      </div>
    </>
  );
}

export default App;
