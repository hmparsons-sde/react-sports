import React from 'react';
import {
  Button,
  Card,
  CardSubtitle,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const StudentCard = ({
  imageUrl,
  name,
  conference,
  handleClick
}) => (
  <Card body>
      <CardTitle src={imageUrl}></CardTitle>
      <CardSubtitle tag="h5">{name}</CardSubtitle>
      <CardText>Conference: {conference}</CardText>
      {handleClick ? <Button onClick={handleClick}>View Wrestler</Button> : ''}
  </Card>
);

StudentCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  conference: PropTypes.number.isRequired,
  handleClick: PropTypes.func
};

export default StudentCard;
