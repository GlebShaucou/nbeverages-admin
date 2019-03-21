import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
	CustomerInfoForm,
	SelectedItems,
} from '../../components';
import * as constants from '../../constants';

const OrderItemPage = (props) => {
	const [order, setOrder] = useState(props.selectedItem);

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

	const onRemoveItem = () => {
		const { removeItem, selectedItem } = props;

		removeItem(selectedItem._id);
	};
	const onUpdateItem = () => {
		const { updateItem } = props;

		updateItem(order);
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
		...customer
	} = order;

	return (
		<div className="page-component page-component--order-item">
			<h2 className="order-item__header">
				<FormattedMessage id={constants.ORDER_ITEM_HEADER} />
			</h2>
			<CustomerInfoForm
				customer={customer}
				buttons={[
					{
						caption: (
							<FormattedMessage id={constants.ORDER_ITEM_BUTTON_DELETE} />
						),
						className: 'order-item__button-delete',
						onClick: onRemoveItem,
					},
					{
						caption: (
							<FormattedMessage id={constants.ORDER_ITEM_BUTTON_UPDATE} />
						),
						className: 'order-item__button-update',
						// onClick: this.onCreateOrder,
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
