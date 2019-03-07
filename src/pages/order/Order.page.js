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
	const { selectedItem } = props;

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
			{selectedItem && (
				<div className="order-page__order-info">
					<div className="order-info__order-id">
						Order with id {selectedItem._id} status {selectedItem.status}
					</div>
					<div className="order-info__customer-name">
						Ordered by {selectedItem.customerName}
					</div>
					<div className="order-info__email">
						Email {selectedItem.customerEmail}, phone {selectedItem.customerPhone}
					</div>
					<div className="order-info__delivery">
						Delivery address {selectedItem.deliveryAddress}
					</div>
					<div className="order-info__payment-method">
						Payment method {selectedItem.paymentMethod}
					</div>
					<div className="order-info__items">
						<ul className="order-info__items-list">
							{selectedItem.items.map((item) => {
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
							Total {selectedItem.totalAmount}{selectedItem.currency}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

OrderPage.propTypes = {
	selectedItem: PropTypes.object,
	onSearchOrder: PropTypes.func,
};

OrderPage.defaultProps = {
	selectedItem: null,
	onSearchOrder: () => {},
};

export default OrderPage;
