import React, { useEffect, useState } from 'react';
import WrestlerCard from '../Components/WrestlerCard';
import { getWrestler } from '../helpers/data/wrestlerData';
import WrestlerForm from '../Components/WrestlerForm';
import './App.scss';

function App() {
  const [wrestler, setWrestler] = useState([]);

  useEffect(() => {
    getWrestler().then((resp) => setWrestler(resp));
  }, []);

  return (
    <div className='App'>
      <WrestlerForm formTitle='Form Title'/>
      <hr/>
      {wrestler.map((wrestlerInfo) => (
        <WrestlerCard
          key={wrestlerInfo.firebaseKey}
          name={wrestlerInfo.name}
          conference={wrestlerInfo.conference}
          imageUrl={wrestlerInfo.imageUrl}
          handleClick={() => console.warn(`${wrestlerInfo.name}'s conference is ${wrestlerInfo.conference}`)}
        />
      ))}
    </div>
  );
}

export default App;
