import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
	NewItemForm, Button, Table, Context,
} from '../../components';
import * as constants from '../../constants';
import * as utils from '../../utils';

const SECTION_CATALOG = 'catalog';
const SECTION_ORDERS = 'orders';

const AdminPage = (props) => {
	const [editingItemId, setEditedItem] = useState('');
	const [selectedSection, setSelectedSection] = useState(SECTION_CATALOG);

	useEffect(() => {
		const { loadData } = props;

		loadData();

		document.title = 'Administration section | Tea City';
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

	const getValues = (name, getTranslation) => {
		switch (name) {
		case 'category':
			return utils.getBeverageCategories(getTranslation);
		case 'type':
			return utils.getBeverageTypes(getTranslation);
		case 'currency':
			return utils.getCurrencies(getTranslation);
		default:
			return [];
		}
	};

	const getItemSchema = (getTranslation) => {
		const { newItem: { schema } } = props;
		const mappings = {
			category: constants.ADMIN_ITEM_CATEGORY,
			type: constants.ADMIN_ITEM_TYPE,
			imgSrc: constants.ADMIN_ITEM_IMG_SRC,
			name: constants.ADMIN_ITEM_NAME,
			description: constants.ADMIN_ITEM_DESCRIPTION,
			quantityPerUnit: constants.ADMIN_ITEM_QUANTITY_PER_UNIT,
			price: constants.ADMIN_ITEM_PRICE,
			currency: constants.ADMIN_ITEM_CURRENCY,
		};

		return schema.map(({ name }) => ({
			name,
			label: getTranslation({ id: mappings[name] }),
			values: getValues(name, getTranslation),
		}));
	};

	const renderEditingItemView = ({ getTranslation }) => {
		const item = props.items.find(({ _id }) => editingItemId === _id);

		return (
			<div className="update-item-form" key={editingItemId}>
				<NewItemForm
					schema={getItemSchema(getTranslation)}
					onSubmit={onUpdateBeverage(editingItemId)}
					onReset={onUpdateItem(editingItemId)}
					values={item}
					buttonSubmit={{
						caption: getTranslation({ id: constants.ADMIN_ITEM_BUTTON_UPDATE }),
						visible: true,
					}}
					buttonReset={{
						caption: getTranslation({ id: constants.ADMIN_ITEM_BUTTON_CLOSE }),
						visible: true,
					}}
				/>
			</div>
		);
	};

	const renderItems = ({ getTranslation }) => {
		const { items } = props;
		const tableConf = [
			{
				Header: getTranslation({ id: constants.ADMIN_CATALOG_HEADER_IMAGE }),
				accessor: 'imgSrc',
				Cell: ({ value: imgSrc }) => (
					<img className="item-attr--image" src={imgSrc} alt="beverage" />
				),
				filterable: false,
				sortable: false,
				headerClassName: 'admin-page__catalog-item-header',
				className: 'admin-page__catalog-item',
			},
			{
				Header: getTranslation({ id: constants.ADMIN_CATALOG_HEADER_CATEGORY }),
				accessor: 'category',
				headerClassName: 'admin-page__catalog-item-header',
				className: 'admin-page__catalog-item',
			},
			{
				Header: getTranslation({ id: constants.ADMIN_CATALOG_HEADER_TYPE }),
				accessor: 'type',
				headerClassName: 'admin-page__catalog-item-header',
				className: 'admin-page__catalog-item',
			},
			{
				Header: getTranslation({ id: constants.ADMIN_CATALOG_HEADER_ITEM_NAME }),
				accessor: 'name',
				headerClassName: 'admin-page__catalog-item-header',
				className: 'admin-page__catalog-item',
			},
			{
				Header: getTranslation({ id: constants.ADMIN_CATALOG_HEADER_DESCRIPTION }),
				accessor: 'description',
				headerClassName: 'admin-page__catalog-item-header',
				className: 'admin-page__catalog-item',
			},
			{
				Header: getTranslation({ id: constants.ADMIN_CATALOG_HEADER_QUANTITY_PER_UNIT }),
				accessor: 'quantityPerUnit',
				Cell: ({ value: quantityPerUnit }) => (
					<FormattedMessage
						id={constants.ADMIN_CATALOG_QUANTITY_PER_UNIT}
						values={{ quantityPerUnit }}
					/>
				),
				headerClassName: 'admin-page__catalog-item-header',
				className: 'admin-page__catalog-item',
			},
			{
				Header: getTranslation({ id: constants.ADMIN_CATALOG_HEADER_PRICE }),
				id: 'unitPrice',
				accessor: item => `${item.price} ${item.currency}`,
				headerClassName: 'admin-page__catalog-item-header',
				className: 'admin-page__catalog-item',
			},
			{
				Header: '',
				accessor: '_id',
				Cell: ({ value: itemId }) => (
					<span className="admin-page__catalog-item--buttons">
						<Button
							caption={getTranslation({ id: constants.ADMIN_ITEM_BUTTON_UPDATE })}
							onClick={onUpdateItem(itemId)}
							className="admin-button"
						/>
						<Button
							caption={getTranslation({ id: constants.ADMIN_ITEM_BUTTON_DELETE })}
							onClick={onRemoveItem(itemId)}
							className="admin-button"
						/>
					</span>
				),
				filterable: false,
				sortable: false,
				headerClassName: 'admin-page__catalog-item-header',
			},
		];

		return (
			<Table
				data={items}
				columns={tableConf}
			/>
		);
	};

	const renderCatalog = ({ getTranslation }) => (
		<div className="admin-page__catalog">
			{!editingItemId && (
				<div className="admin-page__edit-section">
					<NewItemForm
						onSubmit={onAddBeverage}
						schema={getItemSchema(getTranslation)}
						buttonSubmit={{
							caption: getTranslation({ id: constants.ADMIN_ITEM_ADD_BUTTON }),
							visible: true,
						}}
					/>
				</div>
			)}
			<div className="admin-page__content">
				{editingItemId
					? renderEditingItemView({ getTranslation }) : renderItems({ getTranslation })}
			</div>
		</div>
	);

	const renderOrders = () => {
		const { orders } = props;
		const tableConf = [
			{
				Header: 'Статус',
				accessor: 'status',
			},
			{
				Header: '№ заказа',
				accessor: 'orderId',
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
				accessor: 'paymentMethod',
			},
			{
				Header: 'К оплате',
				id: 'totalPrice',
				accessor: order => `${order.totalAmount} ${order.currency}`,
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

	const { user } = props;

	if (!user) {
		return (
			<Redirect to="/login" />
		);
	}

	return (
		<div className="page-component page-component--admin">
			<Context.Consumer>
				{({ intl: { getTranslation } }) => (
					<div className="admin-page__container">
						<div className="admin-page__navigation">
							<Button
								caption={(
									<FormattedMessage id={constants.ADMIN_CATALOG} />
								)}
								className="admin-page__link-button"
								onClick={onUpdateSelectedSection(SECTION_CATALOG)}
							/>
							<Button
								caption={(
									<FormattedMessage id={constants.ADMIN_ORDERS} />
								)}
								className="admin-page__link-button"
								onClick={onUpdateSelectedSection(SECTION_ORDERS)}
							/>
						</div>
						{selectedSection === SECTION_CATALOG && renderCatalog({ getTranslation })}
						{selectedSection === SECTION_ORDERS && renderOrders({ getTranslation })}
					</div>
				)}
			</Context.Consumer>
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
