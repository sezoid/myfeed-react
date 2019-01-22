import React from 'react';
import { NavLink } from 'react-router-dom';

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

Navigation.displayName = 'Navigation';
export default Navigation;
