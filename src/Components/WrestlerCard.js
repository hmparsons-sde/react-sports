import React from 'react';
import {
  Button,
  Card,
  CardSubtitle,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const WrestlerCard = ({
  name,
  conference,
  handleClick
}) => (
  <Card body>
      <CardTitle></CardTitle>
      <CardSubtitle tag="h5">{name}</CardSubtitle>
      <CardText>Conference: {conference}</CardText>
      {handleClick ? <Button onClick={handleClick}>View Wrestler</Button> : ''}
  </Card>
);

WrestlerCard.propTypes = {
  name: PropTypes.string,
  conference: PropTypes.string,
  handleClick: PropTypes.func
};

export default WrestlerCard;
