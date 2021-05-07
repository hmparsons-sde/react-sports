import React from 'react';
import PropTypes from 'prop-types';
import WrestlerForm from '../Components/WrestlerForm';

function AddWrestler({ setWrestlers, user }) {
  return (
    <div>
      <WrestlerForm
        formTitle='Add Wrestler'
        setWrestlers={setWrestlers}
        user={user}
      />
    </div>
  );
}

AddWrestler.propTypes = {
  setWrestlers: PropTypes.func,
  user: PropTypes.any
};

export default AddWrestler;
