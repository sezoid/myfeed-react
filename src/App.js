import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// Components
import { Header, Navigation, Way } from '@myfeed-react/components';

// List of my RSS-feeds
import sources from './sources.json';

export default class App extends Component {
  state = {
    initTab: React,
    sources: sources
  };

  render() {
    const { sources } = this.state;

    return (
      <BrowserRouter>
        <div className='App'>
          <Header value='My Feed' />
          <main>
            <Switch>
              <Route exact path='/' render={() =>
                <Redirect to={sources[0].path} />
              } />
              {sources.map(route => (
                <Way key={ route.key } link={ route.link } showDesc={ route.showDesc } path={ route.path } />
              ))}
              <Redirect to='/' />
            </Switch>
          </main>
          <Navigation links={ sources } />
        </div>
      </BrowserRouter>
    );
  };
}

App.displayName = 'App';
