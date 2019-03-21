import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import logoImg from './img/logo.png';
import Button from '../Button';
import * as constants from '../../constants';

const Header = (props) => {
	const {
		user,
		onLogout,
		cart,
		setLocale,
		locales,
	} = props;

	const onChangeLocale = locale => () => {
		setLocale(locale);
	};
	const logoutHandler = (e) => {
		e.preventDefault();

		onLogout();
	};

	const Logo = () => (
		<div className="logo-container">
			<img className="logo-img" src={logoImg} alt="logo" />
		</div>
	);

	const links = [
		{
			path: '/',
			name: <FormattedMessage id={constants.NAVIGATION_LINK_HOME} />,
			exact: true,
		},
		{
			path: '/catalog',
			name: <FormattedMessage id={constants.NAVIGATION_LINK_CATALOG} />,
			exact: true,
		},
		{
			path: '/contact',
			name: <FormattedMessage id={constants.NAVIGATION_LINK_CONTACT} />,
			exact: true,
		},
	];

	return (
		<div className="application-header">
			<div className="application-header__container">
				<div className="application-header__logo-section">
					<div className="logo-section__work-info">
						<a className="work-info__phone" href="tel:+375 29 888 888">
							+375 29 888 888
						</a>
						<div className="work-info__hours">
							<FormattedMessage id={constants.HEADER_WORKING_HOURS} />
						</div>
					</div>
					<div className="work-info__logo">
						<Logo />
					</div>
					<div className="work-info__admin">
						<div className="work-info__admin-section">
							<div className="work-info__locales">
								{locales.map(locale => (
									<Button
										key={locale}
										caption={locale}
										onClick={onChangeLocale(locale)}
										className="locale-button"
									/>
								))}
							</div>
							{user ? (
								<div className="admin-section">
									<Link
										to={constants.PAGE_ADMIN}
										className="navigation-menu__link navigation-menu__link--admin"
									>
										<FormattedMessage id={constants.NAVIGATION_LINK_ADMIN} />
									</Link>
									{' | '}
									<Button
										caption={(
											<FormattedMessage id={constants.NAVIGATION_LINK_LOGOUT} />
										)}
										className="logout-button"
										onClick={logoutHandler}
									/>
								</div>
							) : (
								<Link
									to="/login"
									className="navigation-menu__link navigation-menu__link--admin"
								>
									<FormattedMessage id={constants.NAVIGATION_LINK_LOGIN} />
								</Link>
							)}
						</div>
						<div className="work-info__cart">
							<Link
								to="/shopping-cart"
								className="navigation-menu__link navigation-menu__link--admin"
							>
								<FormattedMessage
									id={constants.NAVIGATION_LINK_SHOPPING_CART}
									values={{ itemsCount: cart.ids.length }}
								/>
							</Link>
							{' | '}
							<Link
								to="/order"
								className="navigation-menu__link navigation-menu__link--admin"
							>
								<FormattedMessage id={constants.NAVIGATION_LINK_CHECK_ORDER_STATUS} />
							</Link>
						</div>
					</div>
				</div>
				<div className="application-header__navigation-menu">
					{links.map(link => (
						<NavLink
							key={link.path}
							to={link.path}
							className="navigation-menu__link"
							// activeClassName="navigation-menu__link--active"
							exact={link.exact}
						>
							{link.name}
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {
	user: PropTypes.object,
	cart: PropTypes.object,
	locales: PropTypes.array,
	onLogout: PropTypes.func,
	setLocale: PropTypes.func,
};

Header.defaultProps = {
	user: null,
	cart: {
		ids: [],
	},
	locales: [],
	onLogout: () => {},
	setLocale: () => {},
};

export default Header;
