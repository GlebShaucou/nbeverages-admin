import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Button from '../Button';
import * as constants from '../../constants';

const BeverageShortView = (props) => {
	const {
		item,
		onButtonClick,
		buttonCaption,
		buttonClassName,
	} = props;

	if (!item) {
		return null;
	}

	const {
		imgSrc,
		name,
		type,
		category,
		price,
		currency,
		quantityPerUnit,
		_id: itemId,
	} = item;

	return (
		<div className="beverage-short-view">
			<div className="beverage-short-view__main">
				<div className="beverage-short-view__image-container">
					<img
						src={imgSrc}
						alt="beverage"
						className="bsv-image"
					/>
				</div>
				<div className="beverage-short-view__main-info">
					<div className="main-info__type">
						{type}
					</div>
					<div className="main-info__name">
						<Link
							to={`/catalog/${itemId}`}
							className="main-info__name-link"
						>
							{name}
						</Link>
					</div>
					<div className="main-info__category">
						{category}
					</div>
				</div>
			</div>
			<div className="beverage-short-view__footer">
				<div className="bsv-footer__item bsv-footer__quantity">
					<span className="bsv-footer__item-header">
						<FormattedMessage
							id={constants.BEVERAGE_SHORT_VIEW_QUANTITY_BOXING}
						/>
					</span>
					<FormattedMessage
						id={constants.BEVERAGE_SHORT_VIEW_QUANTITY_PER_UNIT}
						values={{ quantityPerUnit }}
					/>
				</div>
				<div className="bsv-footer__item bsv-footer__price">
					<span className="bsv-footer__item-header">
						<FormattedMessage
							id={constants.BEVERAGE_SHORT_VIEW_QUANTITY_PRICE}
						/>
					</span>
					{`${price} ${currency}`}
				</div>
				<div className="bsv-footer__item bsv-footer__buttons">
					<Button
						caption={buttonCaption}
						onClick={onButtonClick}
						className={buttonClassName}
					/>
				</div>
			</div>
		</div>
	);
};

BeverageShortView.propTypes = {
	item: PropTypes.object,
	onButtonClick: PropTypes.func,
	buttonCaption: PropTypes.any,
	buttonClassName: PropTypes.string,
};

BeverageShortView.defaultProps = {
	item: null,
	onButtonClick: () => {},
	buttonCaption: 'Add to Cart',
	buttonClassName: '',
};

export default BeverageShortView;
