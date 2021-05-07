import React, { useState } from 'react';
import {
  Button,
  Card,
  CardSubtitle,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteWrestler } from '../helpers/data/wrestlerData';
import WrestlerForm from './WrestlerForm';

const WrestlerCard = ({
  firebaseKey,
  name,
  conference,
  setWrestlers
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteWrestler(firebaseKey)
          .then((wrestlerArray) => setWrestlers(wrestlerArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };
  console.warn(firebaseKey);
  return (
  <Card body>
      <CardTitle></CardTitle>
      <CardSubtitle tag="h5">{name}</CardSubtitle>
      <CardText>Conference: {conference}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Wrestler</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Wrestler'}
      </Button>
      {
        editing && <WrestlerForm
          formTitle='Edit Wrestler'
          setWrestlers={setWrestlers}
          firebaseKey={firebaseKey}
          name={name}
          conference={conference}
        />
      }
  </Card>
  );
};

WrestlerCard.propTypes = {
  firebaseKey: PropTypes.string,
  name: PropTypes.string,
  conference: PropTypes.string,
  setWrestlers: PropTypes.func
};

export default WrestlerCard;
