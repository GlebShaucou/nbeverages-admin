import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '../../components';

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
					<div>
						Order with id {userOrder._id} status {userOrder.status}
					</div>
					<div>
						Ordered by {userOrder.customerName}
					</div>
					<div>
						Email {userOrder.customerEmail}, phone {userOrder.customerPhone}
					</div>
					<div>
						Delivery address {userOrder.deliveryAddress}
					</div>
					<div>
						Payment method {userOrder.paymentMethod}
					</div>
					<div>
						<ul>
							{userOrder.items.map(item => (
								<li key={item._id}>
									{item.name}
								</li>
							))}
						</ul>
						<div>
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
