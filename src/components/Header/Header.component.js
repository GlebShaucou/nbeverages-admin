import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import logoImg from './img/logo.png';
import Button from '../Button';

const Header = (props) => {
	const { user, onLogout } = props;

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
			name: 'Home',
			exact: true,
		},
		{
			path: '/catalog',
			name: 'Catalog',
			exact: true,
		},
		{
			path: '/contact',
			name: 'Contact Us',
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
						<span className="work-info__hours">
						Mon - Fr 10:00 - 20:00
						</span>
					</div>
					<div className="work-info__logo">
						<Logo />
					</div>
					<div className="work-info__admin">
						<div className="work-info__admin-section">
							{user ? (
								<div className="admin-section">
									<Link
										to="/secret-section"
										className="navigation-menu__link navigation-menu__link--admin"
									>
										admin
									</Link>
									{' | '}
									<Button
										caption="logout"
										className="logout-button"
										onClick={logoutHandler}
									/>
								</div>
							) : (
								<Link
									to="/login"
									className="navigation-menu__link navigation-menu__link--admin"
								>
									login
								</Link>
							)}
						</div>
						<div className="work-info__cart">
							<Button
								caption="Cart"
							/>
						</div>
					</div>
				</div>
				<div className="application-header__navigation-menu">
					{links.map((link) => (
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
	onLogout: PropTypes.func,
};

Header.defaultProps = {
	user: null,
	onLogout: () => {},
};

export default Header;
