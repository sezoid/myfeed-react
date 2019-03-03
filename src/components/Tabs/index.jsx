import React from 'react';
import PropTypes from 'prop-types';

import { Feed } from '../index';

const Tab = ({ link }) => <Feed link={link} />;

Tab.propTypes = {
  link: PropTypes.string.isRequired
};

Tab.displayName = 'Tab';
export default Tab;
