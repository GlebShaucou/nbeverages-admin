import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import {
	Input, Button, Context, OrderReview,
} from '../../components';
import * as constants from '../../constants';

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
					<OrderReview
						order={selectedItem}
					/>
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
