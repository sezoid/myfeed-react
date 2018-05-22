import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import Footer from './components/Footer';
import Titlebar from './components/Titlebar';

import Fourpda from './feeds/Fourpda';
import Miped from './feeds/Miped';
import ReactBlog from './feeds/ReactBlog';
import Toster from './feeds/Toster';
import Ubuntu from './feeds/Ubuntu';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initFeed: Toster
		};
	};

	render() {
		return (
			<BrowserRouter>
				<div className='App' ref='app'>
					<Titlebar value='Моя лента' />
					<div className='wrapper'>
						<Switch>
							<Route component={this.state.initFeed} exact path={'/'} />
							<Route component={Fourpda} path='/4pda' />
							<Route component={Miped} path='/miped' />
							<Route component={ReactBlog} path='/react' />
							<Route component={Ubuntu} path='/ubuntu' />
							<Redirect to='/' />
						</Switch>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	};
}

App.displayName = 'App';
export default App;
