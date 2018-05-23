import React from 'react';

import Feed from '../components/Feed';

const miped = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fmiped.ru%2Frss.xml&api_key=0dipq0elz4lwwgxqaexyaxtisezkzjvapggei9u8&count=10';

const Miped = () => (
	<Feed data={miped} title='Miped' />
);

Miped.displayName = 'Miped';
export default Miped;
