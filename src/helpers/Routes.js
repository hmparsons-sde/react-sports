import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddWrestler from '../views/AddWrestler';
import WrestlerView from '../views/WrestlerView';
import Home from '../views/LandingPage';
import SingleWrestler from '../views/SingleWrestler';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes({ user, wrestlers, setWrestlers }) {
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          component={Home}
        />
        <PrivateRoute
          exact path='/wrestlers'
          user={user}
          component={() => <WrestlerView wrestlers={wrestlers} setWrestlers={setWrestlers} user={user}/>}
        />
        <PrivateRoute
          path="/wrestlers/:id"
          user={user}
          component={() => <SingleWrestler setWrestlers={setWrestlers} user={user} />}
        />
        <PrivateRoute
          exact path='/add-wrestlers'
          user={user}
          component={() => <AddWrestler setWrestlers={setWrestlers} user={user}/>}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  wrestlers: PropTypes.array,
  setWrestlers: PropTypes.func,
  user: PropTypes.any
};
