import React from 'react';
import PropTypes from 'prop-types';
import WrestlerCard from '../Components/WrestlerCard';

export default function WrestlerView({ user, wrestlers, setWrestlers }) {
  return (
    <>
      <div className="card-container" id="wrestler-cards">
        {wrestlers.map((wrestler) => (
          <WrestlerCard
            key={wrestler.firebaseKey}
            user={user}
            setWrestlers={setWrestlers}
            {...wrestler}
          />
        ))}
      </div>
    </>
  );
}

WrestlerView.propTypes = {
  wrestlers: PropTypes.array,
  setWrestlers: PropTypes.func,
  user: PropTypes.any
};
