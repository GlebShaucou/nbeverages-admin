import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import routes from './routes';
import NotificationContainer from '../NotificationContainer';
import HeaderComponent from '../Header';
import Spinner from '../Spinner';
import Footer from '../Footer';
import translations from '../../translations';

addLocaleData([...en, ...ru]);

const AppComponent = (props) => {
	const { isFetching, locale } = props;

	return (
		<IntlProvider
			locale={locale}
			key={locale}
			defaultLocale="en"
			messages={translations[locale]}
		>
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
		</IntlProvider>
	);
};

AppComponent.propTypes = {
	isFetching: PropTypes.bool,
	locale: PropTypes.string,
};

AppComponent.defaultProps = {
	isFetching: false,
	locale: '',
};

export default AppComponent;
