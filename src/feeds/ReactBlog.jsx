import React from 'react';

import Feed from '../components/Feed';

const react = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Freactjs.org%2Ffeed.xml&api_key=0dipq0elz4lwwgxqaexyaxtisezkzjvapggei9u8';

const ReactBlog = () => (
	<Feed data={react} title='ReactBlog' />
);

ReactBlog.displayName = 'ReactBlog';
export default ReactBlog;
