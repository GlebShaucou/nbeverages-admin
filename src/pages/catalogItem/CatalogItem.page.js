import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from '../../components/Button';
import * as constants from '../../constants';
import Select from '../../components/Select';

const CatalogItemPage = (props) => {
	const setDocumentTitle = () => {
		const { selectedItem } = props;

		document.title = `${(selectedItem && selectedItem.name) || 'Selected'} | Tea City`;
	};

	useEffect(() => {
		setDocumentTitle();
	}, [props.selectedItem]);

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
		standartPackagingPrice,
		availablePackaging,
		packingUnit
		// _id: itemId,
	} = selectedItem;
	const { amount, currency } = standartPackagingPrice;
	const [selectedPackaging, setSelectedPackaging] = useState(100);
	const [packagePrice, setPackagePrice] = useState(amount);

	useEffect(() => {
		const { loadResources } = props;

		loadResources();
		setDocumentTitle();
	}, []);

	const onAddToCartClick = () => {
		const { addItemToCart } = props;

		addItemToCart({
			...selectedItem,
			selectedPackaging,
			packagePrice: {
				...standartPackagingPrice,
				amount: packagePrice,
			},
		});
	};

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
					{`${type.label} ${category.label}`}
				</div>
				<div className="catalog-item__amount">
					<FormattedMessage
						id={constants.CATALOG_ITEM_QUANTITY_PER_UNIT}
					/>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Select
							options={availablePackaging.map(option => ({ value: `${option}`, label: `${option}` }))}
							selectedValue={{
								value: selectedPackaging,
								label: selectedPackaging,
							}}
							onChange={({ value }) => {
								setPackagePrice((amount * +value) / 100);
								setSelectedPackaging(+value);
							}}
						/>
						<span style={{ marginLeft: '10px' }}>
							{`  ${packingUnit.label}  `}
						</span>
					</div>
				</div>
				<div className="catalog-item__price">
					<span style={{ fontWeight: '700', display: 'block' }}>
						Стоимость
					</span>
					<span className="catalog-item__price-value">
						{`${packagePrice} ${currency.label}`}
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
