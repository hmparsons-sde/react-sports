import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addWrestler, updateWrestler } from '../helpers/data/wrestlerData';

const WrestlerForm = ({
  formTitle,
  setWrestlers,
  user,
  ...wrestlerObj
}) => {
  const [wrestler, setWrestler] = useState({
    imageUrl: wrestlerObj?.imageUrl || '',
    name: wrestlerObj?.name || '',
    conference: wrestlerObj?.conference || '',
    firebaseKey: wrestlerObj?.firebaseKey || null,
    uid: wrestlerObj?.uid || user.uid
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
      updateWrestler(wrestler, wrestlerObj.uid).then((wrestlersArray) => setWrestlers(wrestlersArray));
    } else {
      addWrestler(wrestler, user.uid).then((wrestlersArray) => setWrestlers(wrestlersArray));
    }
  };

  return (
    <div className='wrestler-form'>
      <Form id='addWrestlerForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
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
         <Input
            name='imageUrl'
            type='text'
            placeholder='Enter an Image URL'
            value={wrestler.imageUrl}
            onChange={handleInputChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            name='conference'
            id='conference'
            value={wrestler.conference}
            type='text'
            placeholder='Enter a Conference Name'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button className='m-2 btn-lg' type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

WrestlerForm.propTypes = {
  formTitle: PropTypes.string,
  setWrestlers: PropTypes.func,
  user: PropTypes.uid
};

export default WrestlerForm;
