import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routes';
import NotificationContainer from '../NotificationContainer';
import HeaderComponent from '../Header';
import Spinner from '../Spinner';
import Footer from '../Footer';

const AppComponent = (props) => {
	const { isFetching } = props;

	return (
		<BrowserRouter>
			<div className="application">
				<HeaderComponent />
				<NotificationContainer />
				<div className="application__content">
					<Switch>
						{routes.map(route => (
							<Route key={route} {...route} />
						))}
					</Switch>
				</div>
				{isFetching && (
					<Spinner />
				)}
				<Footer />
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
