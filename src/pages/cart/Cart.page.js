import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import InputMask from 'react-input-mask';

import { Select, Button, Input } from '../../components';

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

		document.title = 'Shopping Cart | Natural Beverages';
	}

	onRemoveItemFromCartClick = (itemId) => {
		const { removeItemFromCart } = this.props;

		return () => {
			removeItemFromCart(itemId);
		};
	};

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
		});
	};

	getTotalPrice = () => {
		const { cart } = this.props;
		const { items } = cart;

		return items.reduce((total, { price }) => total + +price, 0);
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
		const paymentMethods = [
			{
				value: 'cash',
				label: 'Cash',
			},
			{
				value: 'creditCard',
				label: 'Credit Cart',
			},
		];
		const deliveryMethods = [
			{
				value: 'delivery',
				label: 'Delivery',
			},
			{
				value: 'pickup',
				label: 'Pickup',
			},
		];
		const pickupAddresses = [
			{
				value: 'Minsk, ave. Gazety Zvyazda, 37',
				label: 'Minsk, ave. Gazety Zvyazda, 37',
			},
			{
				value: 'Minsk, ave. Gazety Zvyazda, 35',
				label: 'Minsk, ave. Gazety Zvyazda, 35',
			},
			{
				value: 'Minsk, ave. Gazety Zvyazda, 33',
				label: 'Minsk, ave. Gazety Zvyazda, 33',
			},
		];

		return (
			<form
				action=""
				className="shopping-cart__customer-info"
				onSubmit={this.onCreateOrder}
			>
				<Input
					label="Name"
					name="customerName"
					onChange={this.onChangeFormValue}
					value={customerName}
				/>
				<Select
					label="Payment Method"
					name="paymentMethod"
					onChange={this.onChangeFormValue}
					selectedValue={paymentMethod}
					values={paymentMethods}
				/>
				<Input
					type="tel"
					label="Phone Number"
					name="customerPhone"
					onChange={this.onChangeFormValue}
					value={customerPhone}
				/>
				<Input
					type="email"
					label="Email"
					name="customerEmail"
					onChange={this.onChangeFormValue}
					value={customerEmail}
				/>
				<Select
					label="Delivery Method"
					name="deliveryMethod"
					onChange={this.onChangeFormValue}
					selectedValue={deliveryMethod}
					values={deliveryMethods}
				/>
				{deliveryMethod === 'pickup' && (
					<Select
						label="Select Pickup Point"
						name="deliveryAddress"
						onChange={this.onChangeFormValue}
						selectedValue={deliveryAddress}
						values={pickupAddresses}
					/>
				)}
				{deliveryMethod === 'delivery' && (
					<Input
						label="Enter Delivery Address"
						name="deliveryAddress"
						onChange={this.onChangeFormValue}
						value={deliveryAddress}
						placeholder="City, Street, House, Apartment..."
					/>
				)}
				<Button
					type="submit"
					caption="Order"
				/>
			</form>
		);
	}

	renderShoppingCartContent() {
		const { cart } = this.props;
		const { items } = cart;
		const totalPrice = this.getTotalPrice();

		return (
			<div className="shopping-cart__content">
				<ul className="shopping-cart__items-list">
					{items.map((item) => {
						const { _id: itemId } = item;

						return (
							<li className="shopping-cart__item" key={itemId}>
								<span className="shopping-cart__item-name">
									<Link to={`/catalog/${itemId}`} className="item-name__link">
										{item.name}
									</Link>
								</span>
								<span className="shopping-cart__item-quantity">
									{`${item.type}, ${item.category}`}
								</span>
								<span className="shopping-cart__item-quantity">
									{`${item.quantity} g`}
								</span>
								<span className="shopping-cart__price">
									{`${item.price} ${item.currency}`}
								</span>
								<Button
									caption="Remove"
									className="shopping-cart__remove-button"
									onClick={this.onRemoveItemFromCartClick(itemId)}
								/>
							</li>
						);
					})}
				</ul>
				<div className="shopping-cart__total-price">
					{`Total: ${totalPrice} ${items[0].currency}`}
				</div>
				{this.renderCustomerInfoForm()}
			</div>
		);
	}

	render() {
		const { cart, userOrder } = this.props;
		const { items } = cart;

		return (
			<div className="page-component page-component--cart">
				{(items.length === 0 && !userOrder) && (
					<div className="shopping-cart__empty">
						No Items in Shopping Cart.
					</div>
				)}
				{items.length > 0 && this.renderShoppingCartContent()}
				{(userOrder && items.length === 0) && (
					<div className="shopping-cart__oder-description">
						Your order with id
						<span className="shopping-cart__order-id">
							{` ${userOrder._id} `}
						</span>
						was created.
					</div>
				)}
			</div>
		);
	}
}

CartPage.propTypes = {
	loadResources: PropTypes.func,
	removeItemFromCart: PropTypes.func,
	createOrder: PropTypes.func,
	cart: PropTypes.object,
	userOrder: PropTypes.object,
};

CartPage.defaultProps = {
	loadResources: () => {},
	removeItemFromCart: () => {},
	createOrder: () => {},
	cart: {
		items: [],
		ids: [],
	},
	userOrder: null,
};
