import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartPage extends Component {
	componentDidMount() {
		const { loadResources } = this.props;

		loadResources();

		document.title = 'Shopping Cart | Natural Beverages';
	}

	render() {
		return (
			<div className="page-component page-component--cart">
				Shopping Cart
			</div>
		);
	}
}

CartPage.propTypes = {
	loadResources: PropTypes.func,
	cart: PropTypes.object,
};

CartPage.defaultProps = {
	loadResources: () => {},
	cart: {
		items: [],
		ids: [],
	},
};
