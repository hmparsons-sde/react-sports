import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddWrestler from '../views/AddWrestler';
import WrestlerView from '../views/WrestlerView';
import Home from '../views/LandingPage';

export default function Routes({ wrestlers, setWrestlers }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/wrestlers'
          component={() => <WrestlerView wrestlers={wrestlers} setWrestlers={setWrestlers} />}
        />
        <Route
          path='/add-wrestlers'
          component={() => <AddWrestler setWrestlers={setWrestlers} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  wrestlers: PropTypes.array,
  setWrestlers: PropTypes.func
};
