import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '../../components';
import {Link} from "react-router-dom";

const OrderPage = (props) => {
	const [orderId, setOrderId] = useState('');

	useEffect(() => {
		document.title = 'Order | Natural Beverages';
	}, []);

	const onSearchOrder = (e) => {
		e.preventDefault();

		props.onSearchOrder(orderId);
	};
	const onInputChange = (e) => {
		setOrderId(e.target.value);
	};
	const { userOrder } = props;

	return (
		<div className="page-component page-component--order">
			<form
				action=""
				onSubmit={onSearchOrder}
				className="order-page__search-form"
			>
				<Input
					label="Order ID"
					value={orderId}
					onChange={onInputChange}
				/>
				<Button
					type="submit"
					caption="Search Order"
					className="order-page__search-button"
				/>
			</form>
			{userOrder && (
				<div className="order-page__order-info">
					<div className="order-info__order-id">
						Order with id {userOrder._id} status {userOrder.status}
					</div>
					<div className="order-info__customer-name">
						Ordered by {userOrder.customerName}
					</div>
					<div className="order-info__email">
						Email {userOrder.customerEmail}, phone {userOrder.customerPhone}
					</div>
					<div className="order-info__delivery">
						Delivery address {userOrder.deliveryAddress}
					</div>
					<div className="order-info__payment-method">
						Payment method {userOrder.paymentMethod}
					</div>
					<div className="order-info__items">
						<ul className="order-info__items-list">
							{userOrder.items.map((item) => {
								const { _id: itemId } = item;

								return (
									<li key={item._id} className="order-info__item">
										<span className="order-info__item-name">
											<Link to={`/catalog/${itemId}`} className="item-name__link">
												{item.name}
											</Link>
										</span>
										<span className="order-info__item-quantity">
											{`${item.type}, ${item.category}`}
										</span>
										<span className="order-info__item-quantity">
											{`${item.quantity} g`}
										</span>
										<span className="order-info__price">
											{`${item.price} ${item.currency}`}
										</span>
									</li>
								);
							})}
						</ul>
						<div className="order-info__total-price">
							Total {userOrder.totalAmount}{userOrder.currency}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

OrderPage.propTypes = {
	userOrder: PropTypes.object,
	onSearchOrder: PropTypes.func,
};

OrderPage.defaultProps = {
	userOrder: null,
	onSearchOrder: () => {},
};

export default OrderPage;
