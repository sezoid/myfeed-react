import React from 'react';
import { Route } from 'react-router';

// Components
import { Feed } from '../index';

const Way = ({ link, path }) => (
  <Route path={ path } render={() =>
    <Feed link={ link } />
  } />
);

export default Way;