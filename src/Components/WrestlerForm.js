import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addWrestler, updateWrestler } from '../helpers/data/wrestlerData';

const WrestlerForm = ({
  formTitle,
  setWrestlers,
  name,
  conference,
  firebaseKey
}) => {
  const [wrestler, setWrestler] = useState({
    name: name || '',
    conference: conference || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setWrestler((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wrestler.firebaseKey) {
      updateWrestler(wrestler).then((wrestlersArray) => setWrestlers(wrestlersArray));
    } else {
      addWrestler(wrestler).then((wrestlersArray) => setWrestlers(wrestlersArray));
    }
  };

  return (
    <div className='wrestler-form'>
      <Form id='addWrestlerForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            name='name'
            id='name'
            value={wrestler.name}
            type='text'
            placeholder='Enter a Wrestler Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="conference">Conference:</Label>
          <Input
            name='conference'
            id='conference'
            value={wrestler.conference}
            type='text'
            placeholder='Enter a Conference Name'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

WrestlerForm.propTypes = {
  formTitle: PropTypes.string,
  setWrestlers: PropTypes.func,
  name: PropTypes.string,
  conference: PropTypes.string,
  firebaseKey: PropTypes.string,
};

export default WrestlerForm;
