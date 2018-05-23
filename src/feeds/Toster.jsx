import React from 'react';

import Feed from '../components/Feed';

const toster = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftoster.ru%2Frss%2Ffeed%2F8cd36a7a510c4f9990c3620ead95391e&api_key=0dipq0elz4lwwgxqaexyaxtisezkzjvapggei9u8&count=10';

const Toster = () => (
	<Feed data={toster} title='Тостер' />
);

Toster.displayName = 'Toster';
export default Toster;
