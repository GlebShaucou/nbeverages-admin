import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

const CatalogItemPage = (props) => {
	const setDocumentTitle = () => {
		const { selectedItem } = props;

		document.title = `${(selectedItem && selectedItem.name) || 'Selected'} | Natural Beverages`;
	};

	useEffect(() => {
		const { loadResources } = props;

		loadResources();
		setDocumentTitle();
	}, []);

	useEffect(() => {
		setDocumentTitle();
	}, [props.selectedItem]);

	const onAddToCartClick = () => {
		const { selectedItem, addItemToCart } = props;

		addItemToCart(selectedItem);
	};
	const onRemoveFromCartClick = () => {
		const { selectedItem, removeItemFromCart } = props;

		removeItemFromCart(selectedItem._id);
	};

	const { selectedItem, isAddedToCart } = props;

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
		quantityPerUnit,
		// _id: itemId,
	} = selectedItem;
	const onButtonClick = isAddedToCart ? onRemoveFromCartClick : onAddToCartClick;

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
					<span className="">
						Quantity:
					</span> {`${quantityPerUnit} g`}
				</div>
				<div className="catalog-item__price">
					<span className="catalog-item__price-value">
						{`${price} ${currency}`}
					</span>
					<span className="catalog-item__button">
						<Button
							caption={isAddedToCart ? 'Remove From Cart' : 'Add To Cart'}
							onClick={onButtonClick}
							className={isAddedToCart ? 'remove-button' : ''}
						/>
					</span>
				</div>
				<div className="catalog-item__description">
					<span className="catalog-item__description-header">
						Description:
					</span> <br /><br />
					{description}
				</div>
			</div>
		</div>
	);
};

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

export default CatalogItemPage;
