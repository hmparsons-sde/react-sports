import React from 'react';
import PropTypes from 'prop-types';
import WrestlerCard from '../Components/WrestlerCard';

function WrestlerView({ wrestlers, setWrestlers }) {
  return (
    <>
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

WrestlerView.propTypes = {
  wrestlers: PropTypes.array,
  setWrestlers: PropTypes.func
};

export default WrestlerView;
