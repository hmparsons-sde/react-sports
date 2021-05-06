import React, { useState } from 'react';
import addWrestler from '../helpers/data/wrestlerData';

export default function WrestlerForm() {
  const [wrestler, setWrestler] = useState({
    name: '',
    conference: '',
    imageUrl: 0
  });

  const handleInputChange = (e) => {
    setWrestler((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWrestler(wrestler);
  };

  return (
    <>
    <div className='wrestler-form'>
    <form id="addWrestlerForm"
    autoComplete='off'
    onSubmit={handleSubmit}
    >
    <h2>New Wrestler</h2>
    <label>Name: </label>
    <input
    name='name'
    type='text'
    placeholder='Name'
    value={wrestler.name}
    onChange={handleInputChange}
    ></input>
    <label>Conference: </label>
    <input
        name='conference'
        type='text'
        placeholder='conference'
        value={wrestler.conference}
        onChange={handleInputChange}
    ></input>
    <label>Picture: </label>
    <input
        name='picture'
        type='text'
        placeholder='imageUrl'
        value={wrestler.imageUrl}
        onChange={handleInputChange}
    ></input>
    <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
}
