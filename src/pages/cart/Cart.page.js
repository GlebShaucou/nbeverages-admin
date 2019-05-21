import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
	SelectedItems,
	CustomerInfoForm,
} from '../../components';
import * as constants from '../../constants';
import * as utils from '../../utils';

export default class CartPage extends Component {
	componentDidMount() {
		const { loadResources } = this.props;

		loadResources();

		document.title = 'Shopping Cart | Tea City';
	}

	componentDidUpdate() {
		const { selectedItem, cart: { items }, history } = this.props;

		if (selectedItem && items.length === 0) {
			history.push(constants.PAGE_ORDER);
		}
	}

	onCreateOrder = (customer) => {
		const { cart, createOrder } = this.props;

		createOrder({
			...customer,
			date: new Date(),
			status: {
				value: 'new',
				label: 'Новый',
			},
			items: cart.items,
			totalPrice: this.getTotalPrice(),
			orderId: utils.generateOrderId(7),
		});
	};

	getTotalPrice = () => {
		const { cart } = this.props;

		return utils.getTotalPrice(cart);
	};

	renderShoppingCartContent() {
		const {
			cart,
			removeItemFromCart,
			changeItemQuantity,
		} = this.props;
		const { items } = cart;

		return (
			<div className="shopping-cart__content">
				<SelectedItems
					items={items}
					editable
					onRemoveItem={removeItemFromCart}
					onChangeItemQuantity={changeItemQuantity}
				/>
				<CustomerInfoForm
					buttons={[{
						caption: (
							<FormattedMessage id={constants.SHOPPING_CART_ORDER} />
						),
						onClick: this.onCreateOrder,
					}]}
				/>
			</div>
		);
	}

	render() {
		const { cart } = this.props;
		const { items } = cart;

		return (
			<div className="page-component page-component--cart">
				{items.length === 0 ? (
					<div className="shopping-cart__empty">
						<FormattedMessage id={constants.SHOPPING_CART_NO_ITEMS} />
					</div>
				) : this.renderShoppingCartContent()}
			</div>
		);
	}
}

CartPage.propTypes = {
	loadResources: PropTypes.func,
	removeItemFromCart: PropTypes.func,
	createOrder: PropTypes.func,
	changeItemQuantity: PropTypes.func,
	cart: PropTypes.object,
	selectedItem: PropTypes.object,
	history: PropTypes.object,
};

CartPage.defaultProps = {
	loadResources: () => {},
	removeItemFromCart: () => {},
	createOrder: () => {},
	changeItemQuantity: () => {},
	cart: {
		items: [],
		ids: [],
	},
	selectedItem: null,
	history: {},
};
