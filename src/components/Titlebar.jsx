import React from 'react';

const Titlebar = props => (
	<header className='Titlebar'>
		<h1>{props.value}</h1>
	</header>
);

Titlebar.displayName = 'Titlebar';
export default Titlebar;
