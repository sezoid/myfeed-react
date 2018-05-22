import React from 'react';

class Feed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			error: false,
			loading: false
		};
	};

	componentDidMount() {
		this.setState({
			loading: true
		});

		this.getData();
	};

	getData() {
		fetch(this.props.data)
		.then(response => response.json())
		.then(json => json.items.map(
			news => ({
				date: `${news.pubDate}`,
				link: `${news.link}`,
				title: `${news.title}`
			})
		))
		.then(newdata => {
			this.setState({
				error: false,
				loading: false,
				data: newdata
			});
		})
		.catch(error => {
			this.setState({
				error: true,
				loading: false
			}).bind(this);
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
						<li className='news' key={index}>
							<span className='title'><a href={data[index].link} rel='noopener noreferrer' target='_blank'>{data[index].title}</a></span>
							<span className='date'>{data[index].date}</span>
						</li>
					))))}
				</ul>
			</div>
		);
	};
};

Feed.displayName = 'Feed';
export default Feed;
