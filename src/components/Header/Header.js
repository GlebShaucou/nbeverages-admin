import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logoImg from './img/rsz_logo.png';

const Header = () => {
	const Logo = () => (
		<div className="logo-container">
			<img className="logo-img" src={logoImg} alt="logo" />
		</div>
	);

	const links = [
		{
			path: '/',
			name: <Logo />,
			exact: true,
		},
		{
			path: '/',
			name: 'Home',
			exact: true,
		},
		{
			path: '/catalog',
			name: 'Catalog',
		},
		{
			path: '/contact',
			name: 'Contact Us',
		},
		{
			path: '/secret-section',
			name: 'Admin',
		},
	];

	return (
		<div className="application-header">
			<div className="application-header__navigation-menu">
				{links.map((link, index) => (
					<NavLink
						key={`${link.path}-${index}`}
						to={link.path}
						className="navigation-menu__link"
						activeClassName="navigation-menu__link--active"
						exact={link.exact}
					>
						{link.name}
					</NavLink>
				))}
			</div>
		</div>
	);
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
