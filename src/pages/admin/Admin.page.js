import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { NewItemForm, Button } from '../../components';

const AdminPage = (props) => {
	const [editingItemId, setEditedItem] = useState('');

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

	const { newItem, user } = props;

	if (!user) {
		return (
			<Redirect to="/login" />
		);
	}

	return (
		<div className="page-component page-component--admin">
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

AdminPage.propTypes = {
	items: PropTypes.array,
	newItem: PropTypes.object,
	user: PropTypes.object,
	loadData: PropTypes.func,
	removeItem: PropTypes.func,
	addItem: PropTypes.func,
	updateItem: PropTypes.func,
};

AdminPage.defaultProps = {
	items: [],
	newItem: {},
	user: null,
	loadData: () => {},
	removeItem: () => {},
	addItem: () => {},
	updateItem: () => {},
};

export default AdminPage;
