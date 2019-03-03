import React from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';

// Components
import { Feed } from '../index';

const Way = ({ link, showDesc, path }) => (
  <Route path={path} render={() => <Feed link={link} showDesc={showDesc} />} />
);

Way.propTypes = {
  link: PropTypes.string.isRequired,
  showDesc: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired
};

Way.displayName = 'Way';
export default Way;
