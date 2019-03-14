import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../Button';

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
				<div className="bsv-footer__quantity">
					{`${quantityPerUnit} g`}
				</div>
				<div className="bsv-footer__price">
					{`${price} ${currency}`}
				</div>
				<div className="bsv-footer__buttons">
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
