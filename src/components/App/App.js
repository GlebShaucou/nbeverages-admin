import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routes';
import NotificationContainer from '../NotificationContainer';

export default class App extends Component {
	render() {
		return (
			<div className="application">
				<NotificationContainer />
				<BrowserRouter>
					<Switch>
						{routes.map(route => (
							<Route key={route} {...route} />
						))}
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
