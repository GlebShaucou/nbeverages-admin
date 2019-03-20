import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import * as constants from '../../constants';
import { Button, Input } from '../index';
import * as utils from '../../utils';

const SelectedItems = (props) => {
	const {
		items,
		onRemoveItem,
		onChangeItemQuantity,
		editable,
	} = props;
	const totalPrice = utils.getTotalPrice({ items });
	const itemsLength = items.length;

	const onRemoveItemClick = itemId => () => {
		onRemoveItem(itemId);
	};
	const onChangeItemQuantityClick = itemId => (e) => {
		const { target: { value } } = e;

		if (value <= 0) {
			return;
		}

		onChangeItemQuantity({ itemId, quantity: value });
	};

	return (
		<ul className="shopping-cart__items-list">
			{items.map((item, index) => {
				const { _id: itemId, quantity } = item;

				return (
					<li className="shopping-cart__item" key={itemId}>
						<span className="shopping-cart__item-prop shopping-cart__item-name">
							{index === 0 && (
								<span className="shopping-cart__item-header">
									<FormattedMessage id={constants.SHOPPING_CART_PRODUCT_NAME} />
								</span>
							)}
							<Link to={`/catalog/${itemId}`} className="item-name__link">
								{item.name}
							</Link>
						</span>
						<span className="shopping-cart__item-prop shopping-cart__item-category-type">
							{index === 0 && (
								<span className="shopping-cart__item-header">
									<FormattedMessage id={constants.SHOPPING_CART_PRODUCT_DESCRIPTION} />
								</span>
							)}
							{`${item.type}, ${item.category}`}
						</span>
						<span className="shopping-cart__item-prop shopping-cart__item-quantity-per-unit">
							{index === 0 && (
								<span className="shopping-cart__item-header">
									<FormattedMessage id={constants.SHOPPING_CART_PRODUCT_QUANTITY_PER_UNIT} />
								</span>
							)}
							<FormattedMessage
								id={constants.SHOPPING_CART_ITEM_QUANTITY_PER_UNIT}
								values={{
									quantity: item.quantityPerUnit,
								}}
							/>
						</span>
						<span className="shopping-cart__item-prop shopping-cart__item-quantity">
							{index === 0 && (
								<span className="shopping-cart__item-header">
									<FormattedMessage id={constants.SHOPPING_CART_PRODUCT_QUANTITY} />
								</span>
							)}
							{editable ? (
								<Input
									type="number"
									onChange={onChangeItemQuantityClick(itemId)}
									value={quantity}
									className="shopping-cart__number-input"
								/>
							) : (
								<span className="shopping-cart__number-input">
									{quantity}
								</span>
							)}
						</span>
						<span className="shopping-cart__item-prop shopping-cart__price">
							{index === 0 && (
								<span className="shopping-cart__item-header">
									<FormattedMessage id={constants.SHOPPING_CART_PRODUCT_PRICE} />
								</span>
							)}
							{`${item.price * quantity} ${item.currency}`}
							{index === itemsLength - 1 && (
								<span className="shopping-cart__total-price">
									<FormattedMessage
										id={constants.SHOPPING_CART_TOTAL_PRICE}
										values={{
											amount: totalPrice,
											currency: items[0].currency,
										}}
									/>
								</span>
							)}
						</span>
						<span className="shopping-cart__item-prop shopping-cart__item-edit">
							{editable && (
								<Button
									caption={(
										<FormattedMessage id={constants.BUTTON_CAPTION_REMOVE} />
									)}
									className="shopping-cart__remove-button"
									onClick={onRemoveItemClick(itemId)}
								/>
							)}
						</span>
					</li>
				);
			})}
		</ul>
	);
};

SelectedItems.propTypes = {
	items: PropTypes.array,
	onRemoveItem: PropTypes.func,
	onChangeItemQuantity: PropTypes.func,
	editable: PropTypes.bool,
};

SelectedItems.defaultProps = {
	items: [],
	onRemoveItem: () => {},
	onChangeItemQuantity: () => {},
	editable: false,
};

export default SelectedItems;
