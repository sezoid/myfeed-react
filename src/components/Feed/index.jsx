import React, { Component } from 'react';

// Components
import Item from './Item';

// Styles
import './index.sass';

export default class Feed extends Component {
  state = {
    data: [],
    error: false,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.getData();
  };

  getData() {
    const link = this.props.link
      .replace(':', '%3A')
      .replace('//', '%2F%2F')
      .replace('/', '%2F');
    const items = 100;

    const token = process.env.REACT_APP_API_TOKEN;

    let parserLink = `https://api.rss2json.com/v1/api.json?rss_url=${ link }&api_key=${ token }&count=${ items }`;

    fetch(parserLink)
    .then(response => response.json())
    .then(json => json.items.map(item => ({
      date: `${ item.pubDate }`,
      link: `${ item.link }`,
      title: `${ item.title }`
    })))
    .then(news => {
      this.setState({
        error: false,
        loading: false,
        data: news
      });
    })
    .catch(() => {
      this.setState({
        error: true,
        loading: false
      });
    });
  };

  render() {
    const { data, error, loading } = this.state;
    
    return (
      <div className='Feed'>
        <ul className='list'>
          {loading && !data.length ? (
            <center style={{ padding: '16px 0 0 0' }}>
              Загрузка…
            </center>
          ) : (error === true ? (
            <center style={{ padding: '16px 0 0 0' }}>
              Не удалось получить данные…
            </center>
          ) : (
            data.map((item, index) => (
              <Item
                date={ item.date }
                link={ item.link }
                key={ index }
                title={ item.title }
              />
            ))
          ))}
        </ul>
      </div>
    );
  };
};

Feed.displayName = 'Feed';
