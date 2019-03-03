import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './index.sass';

const Header = ({ value }) => (
  <header className='Header'>
    <h1>{value}</h1>
  </header>
);

Header.propTypes = {
  value: PropTypes.string.isRequired
};

Header.displayName = 'Header';
export default Header;
