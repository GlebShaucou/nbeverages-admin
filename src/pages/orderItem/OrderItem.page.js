import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
	CustomerInfoForm,
	SelectedItems,
	Select,
	Button,
} from '../../components';
import * as constants from '../../constants';

const OrderItemPage = (props) => {
	const { selectedItem } = props;
	const [order, setOrder] = useState(selectedItem);

	const orderStatusFromProps = selectedItem ? selectedItem.status : '';
	const [orderStatus, setOrderStatus] = useState(orderStatusFromProps);

	const setDocumentTitle = () => {
		document.title = `Order ${props.selectedItem ? props.selectedItem.orderId : ''} Review | Tea City`;
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

	const onUpdateCustomer = (customer) => {
		const { updateItem } = props;

		updateItem({
			...order,
			...customer,
			status: orderStatus,
		});
	};
	const onChangeOrderStatus = (e) => {
		setOrderStatus(e.target.value);
	};
	const onUpdateOrderStatus = () => {
		onUpdateCustomer(order);
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
		items,
		orderId,
		...customer
	} = order;

	const statuses = [
		{
			value: 'new',
			label: 'Новый',
		},
		{
			value: 'inProgress',
			label: 'Ожидает доставки и оплаты',
		},
		{
			value: 'done',
			label: 'Доставлен и оплачен',
		}
	];

	return (
		<div className="page-component page-component--order-item">
			<h2 className="order-item__header">
				<FormattedMessage id={constants.ORDER_ITEM_HEADER} values={{ orderId }} />
			</h2>
			<div className="order-item__order-status">
				<Select
					label="Статус заказа"
					selectedValue={orderStatus}
					values={statuses}
					onChange={onChangeOrderStatus}
				/>
				<Button
					caption="Обновить"
					onClick={onUpdateOrderStatus}
				/>
			</div>
			<CustomerInfoForm
				customer={customer}
				buttons={[
					{
						caption: (
							<FormattedMessage id={constants.ORDER_ITEM_BUTTON_UPDATE} />
						),
						className: 'order-item__button-update',
						onClick: onUpdateCustomer,
					},
				]}
			/>
			<SelectedItems
				items={items}
			/>
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
