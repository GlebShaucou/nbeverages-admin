import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import * as constants from '../../constants';
import { Button, Input, Context } from '../index';
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
		<Context.Consumer>
			{({ intl: { getTranslation } }) => (
				<ul className="shopping-cart__items-list">
					{items.map((item, index) => {
						const { _id: itemId, quantity, selectedPackaging, packingUnit, packagePrice } = item;

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
									{`${item.type.label}, ${item.category.label}`}
								</span>
								<span className="shopping-cart__item-prop shopping-cart__item-quantity-per-unit">
									{index === 0 && (
										<span className="shopping-cart__item-header">
											<FormattedMessage id={constants.SHOPPING_CART_PRODUCT_QUANTITY_PER_UNIT} />
										</span>
									)}
									{`${selectedPackaging} ${packingUnit.label}`}
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
									{`${packagePrice.amount * quantity} ${packagePrice.currency.label}`}
									{index === itemsLength - 1 && (
										<span className="shopping-cart__total-price">
											<span style={{ marginRight: '10px' }}>
												Итого:
											</span>
											<span>
												{`${totalPrice.amount} ${totalPrice.currency.label}`}
											</span>
										</span>
									)}
								</span>
								{editable && (
									<span className="shopping-cart__item-prop shopping-cart__item-edit">
										<Button
											caption={(
												<FormattedMessage id={constants.BUTTON_CAPTION_REMOVE} />
											)}
											className="shopping-cart__remove-button"
											onClick={onRemoveItemClick(itemId)}
										/>
									</span>
								)}
							</li>
						);
					})}
				</ul>
			)}
		</Context.Consumer>
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
