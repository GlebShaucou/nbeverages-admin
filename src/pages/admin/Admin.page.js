import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import ReactTable from 'react-table';

import { NewItemForm, Button } from '../../components';
import * as constants from '../../constants';

const SECTION_CATALOG = 'catalog';
const SECTION_ORDERS = 'orders';

const AdminPage = (props) => {
	const [editingItemId, setEditedItem] = useState('');
	const [selectedSection, setSelectedSection] = useState(SECTION_CATALOG);

	useEffect(() => {
		const { loadData } = props;

		loadData();

		document.title = 'Administration section | Natural Beverages';
	}, []);

	const onAddBeverage = (beverage) => {
		const { addItem } = props;

		addItem(beverage);
	};

	const onUpdateBeverage = beverageId => (beverage) => {
		const { updateItem } = props;

		updateItem({ ...beverage, beverageId });
	};

	const onRemoveItem = beverageId => () => {
		const {
			removeItem,
		} = props;

		removeItem({ beverageId });
	};

	const onUpdateItem = itemId => () => {
		setEditedItem(prevItemId => (prevItemId === itemId ? '' : itemId));
	};

	const onUpdateSelectedSection = section => () => {
		setSelectedSection(section);
	};

	const renderRegularItemView = (item) => {
		const { _id: itemId } = item;

		return (
			<li className="list-of-items__item" key={itemId}>
				<span className="item-attr item-attr__image-container">
					<img className="item-attr--image" src={item.imgSrc} alt="beverage" />
				</span>
				<span className="item-attr">{item.category}</span>
				<span className="item-attr">{item.type}</span>
				<span className="item-attr">{item.name}</span>
				<span className="item-attr">{item.description}</span>
				<span className="item-attr">{item.quantity}</span>
				<span className="item-attr">{item.price}</span>
				<span className="item-attr">{item.currency}</span>
				<Button
					caption="Update"
					onClick={onUpdateItem(itemId)}
					className="admin-button"
				/>
				<Button
					caption="Delete"
					onClick={onRemoveItem(itemId)}
					className="admin-button"
				/>
			</li>
		);
	};

	const renderEditingItemView = (item) => {
		const { newItem } = props;
		const { _id: itemId } = item;

		return (
			<li className="list-of-items__item" key={itemId}>
				<NewItemForm
					{...newItem}
					onSubmit={onUpdateBeverage(itemId)}
					onReset={onUpdateItem(itemId)}
					values={item}
					buttonSubmit={{
						caption: 'Update',
						visible: true,
					}}
					buttonReset={{
						caption: 'Close',
						visible: true,
					}}
				/>
			</li>
		);
	};

	const renderItems = () => {
		const { items } = props;

		return (
			<ul className="admin-page__list-of-items">
				{items.map((item) => {
					const { _id: itemId } = item;

					if (editingItemId === itemId) {
						return renderEditingItemView(item);
					}

					return renderRegularItemView(item);
				})}
			</ul>
		);
	};

	const renderCatalog = () => {
		const { newItem } = props;

		return (
			<div className="admin-page__catalog">
				<div className="admin-page__edit-section">
					<NewItemForm
						onSubmit={onAddBeverage}
						{...newItem}
						buttonSubmit={{
							caption: 'Add',
							visible: true,
						}}
					/>
				</div>
				<div className="admin-page__content">
					{renderItems()}
				</div>
			</div>
		);
	};

	const renderOrders = () => {
		const { orders } = props;
		const tableConf = [
			{
				Header: 'Status',
				accessor: 'status',
			},
			{
				Header: 'Order ID',
				accessor: '_id',
				Cell: ({ value: orderId }) => (
					<Link
						to={`${constants.PAGE_ADMIN_ORDERS}/${orderId}`}
						className="orders-list__item-link"
					>
						{orderId}
					</Link>
				),
			},
			{
				Header: 'Customer Name',
				accessor: 'customerName',
			},
			{
				Header: 'Phone',
				accessor: 'customerPhone',
			},
			{
				Header: 'Email',
				accessor: 'customerEmail',
			},
			{
				Header: 'Delivery Address',
				accessor: 'deliveryAddress',
			},
			{
				Header: 'Payment Method',
				accessor: 'paymentMethod',
			},
			{
				Header: 'Total Price',
				id: 'totalPrice',
				accessor: order => `${order.totalAmount} ${order.currency}`,
			},
		];

		return (
			<ReactTable
				data={orders}
				columns={tableConf}
				filterable
				className="admin-page__orders-table"
				resizable={false}
			/>
		);
	};

	const { user } = props;

	if (!user) {
		return (
			<Redirect to="/login" />
		);
	}

	return (
		<div className="page-component page-component--admin">
			<div className="admin-page__navigation">
				<Button
					caption={SECTION_CATALOG}
					className="admin-page__link-button"
					onClick={onUpdateSelectedSection(SECTION_CATALOG)}
				/>
				<Button
					caption={SECTION_ORDERS}
					className="admin-page__link-button"
					onClick={onUpdateSelectedSection(SECTION_ORDERS)}
				/>
			</div>
			{selectedSection === SECTION_CATALOG && renderCatalog()}
			{selectedSection === SECTION_ORDERS && renderOrders()}
		</div>
	);
};

AdminPage.propTypes = {
	items: PropTypes.array,
	orders: PropTypes.array,
	newItem: PropTypes.object,
	user: PropTypes.object,
	loadData: PropTypes.func,
	removeItem: PropTypes.func,
	addItem: PropTypes.func,
	updateItem: PropTypes.func,
};

AdminPage.defaultProps = {
	items: [],
	orders: [],
	newItem: {},
	user: null,
	loadData: () => {},
	removeItem: () => {},
	addItem: () => {},
	updateItem: () => {},
};

export default AdminPage;
