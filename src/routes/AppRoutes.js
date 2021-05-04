import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from './RouteWithSubRoutes';
import PropTypes from 'prop-types';

export const AppRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};

AppRoutes.propTypes = {
  routes: PropTypes.array,
};
