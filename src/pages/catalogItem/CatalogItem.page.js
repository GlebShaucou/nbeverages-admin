import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

export default class CatalogItemPage extends Component {
	componentDidMount() {
		const { loadResources, selectedItem } = this.props;

		loadResources();

		document.title = `${(selectedItem && selectedItem.name) || 'Selected'} | Natural Beverages`;
	}

	onAddToCartClick = () => {
		const { selectedItem, addItemToCart } = this.props;

		addItemToCart(selectedItem);
	};

	onRemoveFromCartClick = () => {
		const { selectedItem, removeItemFromCart } = this.props;

		removeItemFromCart(selectedItem._id);
	};

	render() {
		const { selectedItem, isAddedToCart } = this.props;

		if (!selectedItem) {
			return null;
		}

		const {
			imgSrc,
			name,
			type,
			category,
			description,
			price,
			currency,
			// _id: itemId,
		} = selectedItem;
		const onButtonClick = isAddedToCart ? this.onRemoveFromCartClick : this.onAddToCartClick;

		return (
			<div className="page-component page-component--catalog-item">
				<div className="catalog-item__image-section">
					<img src={imgSrc} alt="tea" className="catalog-item__image" />
				</div>
				<div className="catalog-item__description-section">
					<h2 className="catalog-item__name">
						{name}
					</h2>
					<div className="catalog-item__type">
						{`${type} ${category}`}
					</div>
					<div className="catalog-item__amount">
						100
					</div>
					<div className="catalog-item__price">
						<span>
							{`${price} ${currency}`}
						</span>
						<span>
							<Button
								caption={isAddedToCart ? 'Remove From Cart' : 'Add To Cart'}
								onClick={onButtonClick}
								className={isAddedToCart ? 'remove-button' : ''}
							/>
						</span>
					</div>
					<div className="catalog-item__description">
						{description}
					</div>
				</div>
			</div>
		);
	}
}

CatalogItemPage.propTypes = {
	selectedItem: PropTypes.object,
	loadResources: PropTypes.func,
	addItemToCart: PropTypes.func,
	removeItemFromCart: PropTypes.func,
	isAddedToCart: PropTypes.bool,
};

CatalogItemPage.defaultProps = {
	selectedItem: null,
	loadResources: () => {},
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	isAddedToCart: false,
};
