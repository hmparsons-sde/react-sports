import React, { useState } from 'react';
import {
  Button,
  Card,
  CardSubtitle,
  CardText,
  CardImg
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
      <CardImg id='wrestlerImg' src={wrestler.imageUrl} alt="Card image cap" />
        <CardSubtitle tag="h5" className='mt-3'>{wrestler.name}</CardSubtitle>
        <CardText>Conference: {wrestler.conference}</CardText>
        <div id='buttons'>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Wrestler</Button>
        <Button className="ml-1" color="info" onClick={() => handleClick('edit')}>
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
