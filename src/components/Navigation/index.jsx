import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import './index.sass';

const Navigation = ({ links }) => (
  <footer className='Navigation'>
    <nav>
      {links.map(item => (
        <NavLink activeClassName='active' key={ item.key } to={ item.path } exact>
          { item.title }
        </NavLink>
      ))}
    </nav>
  </footer>
);

Navigation.propTypes = {
  links: PropTypes.array.isRequired
};

Navigation.displayName = 'Navigation';
export default Navigation;
