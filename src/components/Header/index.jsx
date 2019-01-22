import React from 'react';

// Styles
import './index.sass';

const Header = ({ value }) => (
  <header className='Header'>
    <h1>{ value }</h1>
  </header>
);

Header.displayName = 'Header';
export default Header;
