import React from 'react';
import {
  Button,
  Card,
  CardSubtitle,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteWrestler } from '../helpers/data/wrestlerData';

const WrestlerCard = ({
  firebaseKey,
  name,
  conference,
  setWrestlers
}) => {
  const handleClick = () => {
    deleteWrestler(firebaseKey)
      .then((wrestlersArray) => setWrestlers(wrestlersArray));
  };
  console.warn(firebaseKey);
  return (
  <Card body>
      <CardTitle></CardTitle>
      <CardSubtitle tag="h5">{name}</CardSubtitle>
      <CardText>Conference: {conference}</CardText>
      <Button color="danger" onClick={handleClick}>Delete Wrestler</Button>
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
