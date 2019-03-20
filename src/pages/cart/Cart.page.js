import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
	Select,
	Button,
	Input,
	Context,
	SelectedItems,
} from '../../components';
import * as constants from '../../constants';
import * as utils from '../../utils';

export default class CartPage extends Component {
	state = {
		customerName: '',
		paymentMethod: '',
		customerEmail: '',
		deliveryMethod: 'delivery',
		deliveryAddress: '',
		customerPhone: '',
	};

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

	onChangeFormValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onCreateOrder = (e) => {
		const { createOrder, cart } = this.props;

		e.preventDefault();

		createOrder({
			items: cart.items,
			...this.state,
			totalAmount: this.getTotalPrice(),
			currency: 'USD',
			orderId: utils.generateOrderId(7),
		});
	};

	getTotalPrice = () => {
		const { cart } = this.props;

		return utils.getTotalPrice(cart);
	};

	renderCustomerInfoForm() {
		const {
			customerName,
			paymentMethod,
			customerEmail,
			deliveryMethod,
			deliveryAddress,
			customerPhone,
		} = this.state;

		return (
			<Context.Consumer>
				{({ intl: { getTranslation } }) => (
					<form
						action=""
						className="shopping-cart__customer-info"
						onSubmit={this.onCreateOrder}
					>
						<fieldset className="customer-info__fieldset">
							<legend className="customer-info__legend">
								<FormattedMessage id={constants.SHOPPING_CART_CUSTOMER_FORM_NAME} />
							</legend>
							<Input
								label={(
									<FormattedMessage id={constants.SHOPPING_CART_CUSTOMER_NAME} />
								)}
								name="customerName"
								onChange={this.onChangeFormValue}
								value={customerName}
							/>
							<Select
								label={(
									<FormattedMessage id={constants.SHOPPING_CART_PAYMENT_METHOD} />
								)}
								name="paymentMethod"
								onChange={this.onChangeFormValue}
								selectedValue={paymentMethod}
								values={utils.getPaymentMethods(getTranslation)}
							/>
							<Input
								type="tel"
								label={(
									<FormattedMessage id={constants.SHOPPING_CART_PHONE_NUMBER} />
								)}
								name="customerPhone"
								onChange={this.onChangeFormValue}
								value={customerPhone}
							/>
							<Input
								type="email"
								label={(
									<FormattedMessage id={constants.SHOPPING_CART_EMAIL} />
								)}
								name="customerEmail"
								onChange={this.onChangeFormValue}
								value={customerEmail}
							/>
							<Select
								label={(
									<FormattedMessage id={constants.SHOPPING_CART_DELIVERY_METHOD} />
								)}
								name="deliveryMethod"
								onChange={this.onChangeFormValue}
								selectedValue={deliveryMethod}
								values={utils.getDeliveryMethods(getTranslation)}
							/>
							{deliveryMethod === 'pickup' && (
								<Select
									label={(
										<FormattedMessage id={constants.SHOPPING_CART_SELECT_PICKUP_POINT} />
									)}
									name="deliveryAddress"
									onChange={this.onChangeFormValue}
									selectedValue={deliveryAddress}
									values={utils.getPickupAddresses(getTranslation)}
								/>
							)}
							{deliveryMethod === 'delivery' && (
								<Input
									label={(
										<FormattedMessage id={constants.SHOPPING_CART_ENTER_DELIVERY_ADDRESS} />
									)}
									name="deliveryAddress"
									onChange={this.onChangeFormValue}
									value={deliveryAddress}
									placeholder={
										getTranslation({ id: constants.SHOPPING_CART_DELIVERY_ADDRESS_PLACEHOLDER })
									}
								/>
							)}
							<Button
								type="submit"
								className="customer-info__button"
								caption={(
									<FormattedMessage id={constants.SHOPPING_CART_ORDER} />
								)}
							/>
						</fieldset>
					</form>
				)}
			</Context.Consumer>
		);
	}

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
				{this.renderCustomerInfoForm()}
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
						No Items in Shopping Cart.
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

CartPage.contextType = Context;
