import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Button, Input, Select } from '../../components';
import * as utils from '../../utils';

const OrderItemPage = (props) => {
	const [order, setOrder] = useState(props.selectedItem);

	const setDocumentTitle = () => {
		document.title = `Order ${props.selectedItem ? props.selectedItem.orderId : ''} Review | Natural Beverages`;
	};

	useEffect(() => {
		const { loadResources } = props;

		loadResources();
		setDocumentTitle();
	}, []);

	useEffect(() => {
		setDocumentTitle();
		setOrder(props.selectedItem);
	}, [props.selectedItem]);

	const onRemoveItem = () => {
		const { removeItem, selectedItem } = props;

		removeItem(selectedItem._id);
	};
	const onUpdateItem = () => {
		const { updateItem } = props;

		updateItem(order);
	};
	const onChangeFormValue = (e) => {
		const { target } = e;

		setOrder(prevOrder => ({
			...prevOrder,
			[target.name]: target.value,
		}));
	};

	if (!props.user) {
		return (
			<Redirect to="/login" />
		);
	}

	if (!order) {
		return null;
	}

	const {
		deliveryMethod: orderDeliveryMethod,
		deliveryAddress: orderDeliveryAddress,
	} = order;

	return (
		<div className="page-component page-component--order-item">
			<form
				action=""
				onSubmit={(e) => { e.preventDefault(); }}
				className="order-item__form"
			>
				<Input
					label="Customer Name"
					name="customerName"
					onChange={onChangeFormValue}
					value={order.customerName}
				/>
				<Input
					label="Customer Email"
					name="customerEmail"
					onChange={onChangeFormValue}
					value={order.customerEmail}
				/>
				<Input
					label="Customer Phone"
					name="customerPhone"
					onChange={onChangeFormValue}
					value={order.customerPhone}
				/>
				<Select
					label="Delivery Method"
					name="deliveryMethod"
					onChange={onChangeFormValue}
					selectedValue={orderDeliveryMethod}
					values={utils.getDeliveryMethods()}
				/>
				{orderDeliveryMethod === 'pickup' && (
					<Select
						label="Selected Pickup Point"
						name="deliveryAddress"
						onChange={onChangeFormValue}
						selectedValue={orderDeliveryAddress}
						values={utils.getPickupAddresses()}
					/>
				)}
				{orderDeliveryMethod === 'delivery' && (
					<Input
						label="Enter Delivery Address"
						name="deliveryAddress"
						onChange={onChangeFormValue}
						value={orderDeliveryAddress}
						placeholder="City, Street, House, Apartment..."
					/>
				)}
				<Select
					label="Payment Method"
					name="paymentMethod"
					onChange={onChangeFormValue}
					selectedValue={order.paymentMethod}
					values={utils.getPaymentMethods()}
				/>
				<Button
					caption="Delete"
					onClick={onRemoveItem}
				/>
				<Button
					caption="Update"
					onClick={onUpdateItem}
				/>
			</form>
		</div>
	);
};

OrderItemPage.propTypes = {
	selectedItem: PropTypes.object,
	user: PropTypes.object,
	loadResources: PropTypes.func,
	removeItem: PropTypes.func,
	updateItem: PropTypes.func,
};

OrderItemPage.defaultProps = {
	selectedItem: null,
	user: null,
	loadResources: () => {},
	removeItem: () => {},
	updateItem: () => {},
};

export default OrderItemPage;
