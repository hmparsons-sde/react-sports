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

export default function WrestlerCard({ setWrestlers, user, ...wrestler }) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteWrestler(wrestler.firebaseKey, user.uid)
          .then((wrestlerArray) => setWrestlers(wrestlerArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div>
      <Card body>
        <CardTitle><img id='cardImage' src={wrestler.imageUrl}></img></CardTitle>
        <CardSubtitle tag="h5">{wrestler.name}</CardSubtitle>
        <CardText>Conference: {wrestler.conference}</CardText>
        <div id='buttons'>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Wrestler</Button>
        <Button color="info" onClick={() => handleClick('edit')}>
          {editing ? 'Close Form' : 'Edit Wrestler'}
        </Button>
        </div>
        {
          editing && <WrestlerForm
            formTitle='Edit Wrestler'
            setWrestlers={setWrestlers}
            {...wrestler}
          />
        }
    </Card>
  </div>
  );
}

WrestlerCard.propTypes = {
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  conference: PropTypes.string,
  setWrestlers: PropTypes.func,
  user: PropTypes.any
};
