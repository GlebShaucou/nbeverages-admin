import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NewItemForm, Button } from '../../components';

export default class AdminPage extends Component {
	state = {
		editingItemId: '',
	};

	componentDidMount() {
		const { loadData } = this.props;

		loadData();
	}

	onAddBeverage = (beverage) => {
		const { addItem } = this.props;

		addItem(beverage);
	};

	onUpdateBeverage = (beverage) => {
		const { updateItem } = this.props;

		updateItem(beverage);
	};

	onRemoveItem = beverageId => () => {
		const {
			removeItem,
		} = this.props;

		removeItem({ beverageId });
	};

	onUpdateItem = editingItemId => () => {
		this.setState(state => ({
			editingItemId: state.editingItemId === editingItemId ? '' : editingItemId,
		}));
	};

	renderRegularItemView(item) {
		const { _id: itemId } = item;

		return (
			<li className="list-of-items__item" key={itemId}>
				<img className="item-attr item-attr--image" src={item.imgSrc} alt="image" />
				<div className="item-attr">{item.type}</div>
				<div className="item-attr">{item.name}</div>
				<div className="item-attr">{item.description}</div>
				<div className="item-attr">{item.category}</div>
				<div className="item-attr">{item.quantity}</div>
				<div className="item-attr">{item.price}</div>
				<div className="item-attr">{item.currency}</div>
				<Button
					caption="Update"
					onClick={this.onUpdateItem(itemId)}
				/>
				<Button
					caption="Delete"
					onClick={this.onRemoveItem(itemId)}
				/>
			</li>
		);
	}

	renderEditingItemView(item) {
		const { newItem } = this.props;
		const { _id: itemId } = item;

		return (
			<li className="list-of-items__item" key={itemId}>
				<NewItemForm
					{...newItem}
					onSubmit={this.onUpdateBeverage}
					onReset={this.onUpdateItem(itemId)}
					values={item}
					buttonSubmit={{
						caption: 'Update',
						visible: true,
					}}
					buttonReset={{
						caption: 'Cancel',
						visible: true,
					}}
				/>
			</li>
		);
	}

	renderItems() {
		const { items } = this.props;
		const { editingItemId } = this.state;

		return (
			<ul className="admin-page__list-of-items">
				{items.map((item) => {
					const { _id: itemId } = item;

					if (editingItemId === itemId) {
						return this.renderEditingItemView(item);
					}

					return this.renderRegularItemView(item);
				})}
			</ul>
		);
	}

	render() {
		const { newItem } = this.props;

		return (
			<div className="page-component page-component--admin">
				<div className="admin-page__edit-section">
					<NewItemForm
						onSubmit={this.onAddBeverage}
						{...newItem}
						buttonSubmit={{
							caption: 'Add',
						}}
					/>
				</div>
				<div className="admin-page__content">
					{this.renderItems()}
				</div>
			</div>
		);
	}
}

AdminPage.propTypes = {
	items: PropTypes.array,
	newItem: PropTypes.object,
	loadData: PropTypes.func,
	removeItem: PropTypes.func,
	addItem: PropTypes.func,
	updateItem: PropTypes.func,
};

AdminPage.defaultProps = {
	items: [],
	newItem: {},
	loadData: () => {},
	removeItem: () => {},
	addItem: () => {},
	updateItem: () => {},
};
