import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BeverageShortView } from '../../components';

export default class CatalogPage extends Component {
	componentDidMount() {
		const { loadResources } = this.props;

		loadResources();

		document.title = 'Beverages Catalog | Natural Beverages';
	}

	onCatalogItemButtonClick = (item, isInCart) => {
		const { addItemToCart, removeItemFromCart } = this.props;

		return () => {
			if (isInCart) {
				removeItemFromCart(item._id);
			} else {
				addItemToCart(item);
			}
		};
	};

	renderFiltersSection() {
		const { filters } = this.props;
	}

	render() {
		const { items, cart } = this.props;

		return (
			<div className="page-component page-component--catalog">
				<div className="page-component__content">
					<div className="filters-sidebar">
						filters-sidebar
					</div>
					<ul className="catalog">
						{items.map((item) => {
							const isInCart = cart.ids.includes(item._id);

							return (
								<li key={JSON.stringify(item)} className="catalog__item">
									<BeverageShortView
										item={item}
										buttonCaption={isInCart ? 'Remove from Cart' : 'Add to Cart'}
										onButtonClick={this.onCatalogItemButtonClick(item, isInCart)}
										buttonClassName={isInCart ? 'remove-button' : ''}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

CatalogPage.propTypes = {
	items: PropTypes.array,
	filters: PropTypes.array,
	loadResources: PropTypes.func,
	addItemToCart: PropTypes.func,
	removeItemFromCart: PropTypes.func,
	cart: PropTypes.object,
};

CatalogPage.defaultProps = {
	items: [],
	filters: [],
	loadResources: () => {},
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	cart: {
		items: [],
		ids: [],
	},
};
