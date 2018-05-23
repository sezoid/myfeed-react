import React from 'react';

import Feed from '../components/Feed';

const ubuntu = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.ubuntu.com%2Ffeed&api_key=0dipq0elz4lwwgxqaexyaxtisezkzjvapggei9u8&count=10';

const Ubuntu = () => (
	<Feed data={ubuntu} title='Ubuntu' />
);

Ubuntu.displayName = 'Ubuntu';
export default Ubuntu;
