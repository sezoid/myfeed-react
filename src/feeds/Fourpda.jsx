import React from 'react';

import Feed from '../components/Feed';

const fourpda = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2F4pda.ru%2Ffeed&api_key=0dipq0elz4lwwgxqaexyaxtisezkzjvapggei9u8';

const Fourpda = () => (
	<Feed data={fourpda} title='4PDA' />
);

Fourpda.displayName = 'Fourpda';
export default Fourpda;
