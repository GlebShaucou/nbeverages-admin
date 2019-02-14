import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

export default class Root extends Component {
	render() {
		return (
			<Switch>
				{routes.map((route, index) => (
					<Route key={index} {...route} />
				))}
			</Switch>
		);
	}
}
