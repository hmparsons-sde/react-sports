import React from 'react';
import PropTypes from 'prop-types';
import WrestlerForm from '../Components/WrestlerForm';

function AddWrestler({ setWrestlers }) {
  return (
    <div>
      <WrestlerForm
        formTitle='Add Wrestler'
        setWrestlers={setWrestlers}
      />
    </div>
  );
}

AddWrestler.propTypes = {
  setWrestlers: PropTypes.func
};

export default AddWrestler;
