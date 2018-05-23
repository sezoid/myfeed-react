import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = props => (
	<footer className='Footer'>
		<nav>
			<NavLink activeClassName='active' to={'/'} exact>Тостер</NavLink>
			<NavLink activeClassName='active' to={'/4pda'}>4PDA</NavLink>
			<NavLink activeClassName='active' to={'/meduza'}>Meduza</NavLink>
			<NavLink activeClassName='active' to={'/miped'}>Miped</NavLink>
			<NavLink activeClassName='active' to={'/react'}>React</NavLink>
			<NavLink activeClassName='active' to={'/ubuntu'}>Ubuntu</NavLink>
		</nav>
	</footer>
);

Footer.displayName = 'Footer';
export default Footer;
