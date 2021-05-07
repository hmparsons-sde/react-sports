import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSingleWrestler } from '../helpers/data/wrestlerData';

export default function SingleWrestler() {
  const [wrestler, setWrestler] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleWrestler(id).then(setWrestler);
  }, []);
  return <div>{wrestler.name}</div>;
}

SingleWrestler.propTypes = {
  id: PropTypes.string,
};
