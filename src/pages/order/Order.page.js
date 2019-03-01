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
			<div className="order-page__order-info">

			</div>
		</div>
	);
};

OrderPage.propTypes = {
	order: PropTypes.object,
	onSearchOrder: PropTypes.func,
};

OrderPage.defaultProps = {
	order: null,
	onSearchOrder: () => {},
};

export default OrderPage;
