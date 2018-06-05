import React from 'react';

import News from '../components/News';

class Feed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data: [], error: false, loading: false};
	};

	componentDidMount() {
		this.setState({loading: true});
		this.getData();
	};

	getData() {
		fetch(this.props.data)
		.then(response => response.json())
		.then(json => json.items.map(item => ({
			date: `${item.pubDate}`,
			link: `${item.link}`,
			title: `${item.title}`
		})))
		.then(news => {
			this.setState({error: false, loading: false, data: news});
		})
		.catch(error => {
			this.setState({error: true, loading: false});
		});
	};

	render() {
		const {data, error, loading} = this.state;
		return (
			<div className='Feed'>
				<ul className='list'>
					{loading && !data.length ? (
						<center style={{padding: '16px 0 0 0'}}>Загрузка…</center>
					) : (error === true ? (
						<center style={{padding: '16px 0 0 0'}}>Не удалось получить данные…</center>
						) : (
							data.map((news, index) => (
								<News date={data[index].date} link={data[index].link} key={index} title={data[index].title} />
							))
						)
					)}
				</ul>
			</div>
		);
	};
};

Feed.displayName = 'Feed';
export default Feed;
