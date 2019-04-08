import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import {
	Input, Button, SelectedItems, Context,
} from '../../components';
import * as constants from '../../constants';
import * as utils from '../../utils';

const OrderPage = (props) => {
	const [orderId, setOrderId] = useState('');

	useEffect(() => {
		document.title = 'Order | Tea City';
	}, []);

	const onSearchOrder = (e) => {
		e.preventDefault();

		if (!orderId) {
			return;
		}

		props.onSearchOrder(orderId);
	};
	const onInputChange = (e) => {
		setOrderId(e.target.value);
	};
	const { selectedItem } = props;

	return (
		<Context.Consumer>
			{({ intl: { getTranslation } }) => (
				<div className="page-component page-component--order">
					<form
						action=""
						onSubmit={onSearchOrder}
						className="order-page__search-form"
					>
						<Input
							placeholder={getTranslation({ id: constants.ORDER_PAGE_ORDER_ID })}
							value={orderId}
							onChange={onInputChange}
						/>
						<Button
							type="submit"
							caption={(
								<FormattedMessage id={constants.ORDER_PAGE_BUTTON_SEARCH} />
							)}
							className="order-page__search-button"
						/>
					</form>
					{selectedItem && (
						<div className="order-page__order-info">
							<Table className="table table-bordered order-page__table">
								<tbody>
									<tr>
										<th scope="row">
											<FormattedMessage id={constants.ORDER_PAGE_ORDER_ID} />
										</th>
										<td>
											{selectedItem.orderId}
										</td>
									</tr>
									<tr>
										<th scope="row">
											<FormattedMessage id={constants.ORDER_PAGE_ORDER_STATUS} />
										</th>
										<td>
											{selectedItem.status}
										</td>
									</tr>
									<tr>
										<th scope="row">
											<FormattedMessage id={constants.ORDER_PAGE_CUSTOMER_NAME} />
										</th>
										<td>
											{selectedItem.customerName}
										</td>
									</tr>
									<tr>
										<th scope="row">
											<FormattedMessage id={constants.ORDER_PAGE_CUSTOMER_EMAIL} />
										</th>
										<td>
											{selectedItem.customerEmail}
										</td>
									</tr>
									<tr>
										<th scope="row">
											<FormattedMessage id={constants.ORDER_PAGE_CUSTOMER_PHONE} />
										</th>
										<td>
											{selectedItem.customerPhone}
										</td>
									</tr>
									<tr>
										<th scope="row">
											<FormattedMessage id={constants.ORDER_PAGE_DELIVERY_METHOD} />
										</th>
										<td>
											{utils.getStringTranslation(selectedItem.deliveryMethod, getTranslation)}
										</td>
									</tr>
									<tr>
										<th scope="row">
											<FormattedMessage id={constants.ORDER_PAGE_DELIVERY_ADDRESS} />
										</th>
										<td>
											{selectedItem.deliveryAddress}
										</td>
									</tr>
									<tr>
										<th scope="row">
											<FormattedMessage id={constants.ORDER_PAGE_PAYMENT_METHOD} />
										</th>
										<td>
											{selectedItem.paymentMethod}
										</td>
									</tr>
								</tbody>
							</Table>
							<div className="order-info__items">
								<SelectedItems
									items={selectedItem.items}
								/>
							</div>
						</div>
					)}
				</div>
			)}
		</Context.Consumer>
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
