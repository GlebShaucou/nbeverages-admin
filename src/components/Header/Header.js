import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	const links = [
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
				{links.map(link => (
					<NavLink
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
