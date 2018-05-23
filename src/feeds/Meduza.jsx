import React from 'react';

import Feed from '../components/Feed';

const meduza = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmeduza.io%2Frss%2Fall&api_key=0dipq0elz4lwwgxqaexyaxtisezkzjvapggei9u8&count=10';

const Meduza = () => (
	<Feed data={meduza} title='4PDA' />
);

Meduza.displayName = 'Meduza';
export default Meduza;
