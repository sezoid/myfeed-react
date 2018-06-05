import React from 'react';

const News = props => (
	<li className='news'>
		<span className='title'>
			<a href={props.link} rel='noopener noreferrer' target='_blank'>{props.title}</a>
		</span>
		<span className='date'>{props.date}</span>
	</li>
);

News.displayName = 'News';
export default News;
