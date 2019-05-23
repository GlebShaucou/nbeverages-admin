import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';

import {
	Input, Button, Context, Table,
} from '../../components';
import * as constants from '../../constants';
import * as utils from '../../utils';

const UserAccountPage = (props) => {
	const { user, loadData, orders } = props;

	if (!user) {
		return (
			<Redirect to="/login" />
		);
	}

	useEffect(() => {
		loadData({ customerEmail: user.email });
	}, [])

	const renderOrders = (orders) => {
		const tableConf = [
			{
				Header: 'Дата',
				id: 'date',
				accessor: order => new Date(order.date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }),
			},
			{
				Header: 'Статус',
				id: 'status',
				accessor: order => order.status.label,
			},
			{
				Header: '№ заказа',
				accessor: 'orderId',
				// Cell: ({ value: orderId }) => (
				// 	<Link
				// 		to={`${constants.PAGE_ADMIN_ORDERS}/${orderId}`}
				// 		className="orders-list__item-link"
				// 	>
				// 		{orderId}
				// 	</Link>
				// ),
			},
			{
				Header: 'Имя покупателя',
				accessor: 'customerName',
			},
			{
				Header: '№ телефона',
				accessor: 'customerPhone',
			},
			{
				Header: 'Email',
				accessor: 'customerEmail',
			},
			{
				Header: 'Адрес доставки',
				accessor: 'deliveryAddress',
			},
			{
				Header: 'Способ оплаты',
				id: 'paymentMethod',
				accessor: order => order.paymentMethod.label,
			},
			{
				Header: 'К оплате',
				id: 'totalPrice',
				accessor: order => `${order.totalPrice.amount} ${order.totalPrice.currency.label}`,
			},
		];

		return (
			<div className="admin-page__orders">
				<Table
					data={orders}
					columns={tableConf}
				/>
			</div>
		);
	};

	return (
		<Context.Consumer>
			{({ intl: { getTranslation } }) => (
				<div className="page-component page-component--user-account">
					<div className="user-account__user-name">
						{`Имя пользователя: ${user.username}`}
					</div>
					<div className="user-account__user-email">
						{`Email: ${user.email}`}
					</div>
					<div className="user-account__orders">
						{renderOrders(orders)}
					</div>
				</div>
			)}
		</Context.Consumer>
	);
};

UserAccountPage.propTypes = {
	updateUserData: PropTypes.func,
	loadData: PropTypes.func,
	user: PropTypes.object,
	message: PropTypes.string,
};

UserAccountPage.defaultProps = {
	updateUserData: () => {},
	loadData: () => {},
	user: null,
	message: '',
};

export default UserAccountPage;
