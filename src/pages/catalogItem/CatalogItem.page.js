import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from '../../components/Button';
import * as constants from '../../constants';

const CatalogItemPage = (props) => {
	const setDocumentTitle = () => {
		const { selectedItem } = props;

		document.title = `${(selectedItem && selectedItem.name) || 'Selected'} | Tea City`;
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

	const { selectedItem } = props;

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
					<FormattedMessage
						id={constants.CATALOG_ITEM_QUANTITY_PER_UNIT}
					/>
					<FormattedMessage
						id={constants.BEVERAGE_SHORT_VIEW_QUANTITY_PER_UNIT}
						values={{ quantityPerUnit }}
					/>
				</div>
				<div className="catalog-item__price">
					<FormattedMessage
						id={constants.CATALOG_ITEM_PRICE}
						className="catalog-item__price-header"
					/>{' '}
					<span className="catalog-item__price-value">
						{`${price} ${currency}`}
					</span>
					<span className="catalog-item__button">
						<Button
							caption={(
								<FormattedMessage
									id={constants.CATALOG_ITEM_BUTTON_ADD_TO_CART}
								/>
							)}
							onClick={onAddToCartClick}
						/>
					</span>
				</div>
				<div className="catalog-item__description">
					<span className="catalog-item__description-header">
						<FormattedMessage
							id={constants.CATALOG_ITEM_DESCRIPTION}
						/>
					</span>
					<br /><br />
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
};

CatalogItemPage.defaultProps = {
	selectedItem: null,
	loadResources: () => {},
	addItemToCart: () => {},
};

export default CatalogItemPage;
