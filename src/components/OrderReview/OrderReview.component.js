import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import * as constants from '../../constants';
import * as utils from '../../utils';
import { SelectedItems } from '../index';

const OrderReview = (props) => {
	const { order } = props;

	if (!order) {
		return null;
	}

	return (
		<div className="order-review">
			<Table className="table table-bordered order-review__table">
				<tbody>
					<tr>
						<th scope="row">
							<FormattedMessage id={constants.ORDER_PAGE_ORDER_ID} />
						</th>
						<td>
							{order.orderId}
						</td>
					</tr>
					<tr>
						<th scope="row">
							<FormattedMessage id={constants.ORDER_PAGE_ORDER_STATUS} />
						</th>
						<td>
							{order.status}
						</td>
					</tr>
					<tr>
						<th scope="row">
							<FormattedMessage id={constants.ORDER_PAGE_CUSTOMER_NAME} />
						</th>
						<td>
							{order.customerName}
						</td>
					</tr>
					<tr>
						<th scope="row">
							<FormattedMessage id={constants.ORDER_PAGE_CUSTOMER_EMAIL} />
						</th>
						<td>
							{order.customerEmail}
						</td>
					</tr>
					<tr>
						<th scope="row">
							<FormattedMessage id={constants.ORDER_PAGE_CUSTOMER_PHONE} />
						</th>
						<td>
							{order.customerPhone}
						</td>
					</tr>
					<tr>
						<th scope="row">
							<FormattedMessage id={constants.ORDER_PAGE_DELIVERY_METHOD} />
						</th>
						<td>
							{/*{utils.getTextForValue(order.deliveryMethod)}*/}
						</td>
					</tr>
					<tr>
						<th scope="row">
							<FormattedMessage id={constants.ORDER_PAGE_DELIVERY_ADDRESS} />
						</th>
						<td>
							{order.deliveryAddress}
						</td>
					</tr>
					<tr>
						<th scope="row">
							<FormattedMessage id={constants.ORDER_PAGE_PAYMENT_METHOD} />
						</th>
						<td>
							{order.paymentMethod}
						</td>
					</tr>
				</tbody>
			</Table>
			<div className="order-review__items">
				<SelectedItems
					items={order.items}
				/>
			</div>
		</div>
	);
};

OrderReview.propTypes = {
	order: PropTypes.object,
};

OrderReview.defaultProps = {
	order: null,
};

export default OrderReview;
