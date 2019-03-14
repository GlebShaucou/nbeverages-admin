import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
	addLocaleData, injectIntl, intlShape, defineMessages,
} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import routes from './routes';
import NotificationContainer from '../NotificationContainer';
import HeaderComponent from '../Header';
import Spinner from '../Spinner';
import Footer from '../Footer';

import Context from '../Context';

addLocaleData([...en, ...ru]);

const Router = (props) => {
	const { isFetching, intl } = props;

	const getTranslation = (messageDescriptor, values = {}) => {
		const messages = defineMessages({
			message: messageDescriptor,
		});

		return intl.formatMessage(messages.message, values);
	};

	return (
		<Context.Provider value={{ intl: { getTranslation } }}>
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
		</Context.Provider>
	);
};

Router.propTypes = {
	isFetching: PropTypes.bool,
	intl: intlShape,
};

Router.defaultProps = {
	isFetching: false,
};

export default injectIntl(Router);
