import React from 'react';
import PropTypes from 'prop-types';
import {
	IntlProvider, addLocaleData,
} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import translations from '../../translations';

import Router from '../Router';

addLocaleData([...en, ...ru]);

const AppComponent = (props) => {
	const { locale } = props;

	return (
		<IntlProvider
			locale={locale}
			key={locale}
			defaultLocale="en"
			messages={translations[locale]}
		>
			<Router {...props} />
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
