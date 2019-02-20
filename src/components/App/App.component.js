import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routes';
import NotificationContainer from '../NotificationContainer';
import Header from '../Header';
import Spinner from '../Spinner';

const AppComponent = (props) => {
	const { isFetching } = props;

	return (
		<BrowserRouter>
			<div className="application">
				<Header />
				<NotificationContainer />
				<Switch>
					{routes.map(route => (
						<Route key={route} {...route} />
					))}
				</Switch>
				{isFetching && (
					<Spinner />
				)}
			</div>
		</BrowserRouter>
	);
};

AppComponent.propTypes = {
	isFetching: PropTypes.bool,
};

AppComponent.defaultProps = {
	isFetching: false,
};

export default AppComponent;
