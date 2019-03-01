import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

export default class CartPage extends Component {
	state = {
		customerName: '',
		paymentMethod: '',
		customerEmail: '',
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
			deliveryAddress,
			customerPhone,
		} = this.state;

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
				<Input
					label="Payment Method"
					name="paymentMethod"
					onChange={this.onChangeFormValue}
					value={paymentMethod}
				/>
				<Input
					label="Email"
					name="customerEmail"
					onChange={this.onChangeFormValue}
					value={customerEmail}
				/>
				<Input
					label="Delivery"
					name="deliveryAddress"
					onChange={this.onChangeFormValue}
					value={deliveryAddress}
				/>
				<Input
					label="Phone Number"
					name="customerPhone"
					onChange={this.onChangeFormValue}
					value={customerPhone}
				/>
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
									{item.quantity}
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
				{userOrder && (
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
