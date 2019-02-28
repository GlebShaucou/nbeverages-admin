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
		const filterNames = Object.keys(filters);
		const filterHeaders = {
			type: 'Type',
			category: 'Category',
		};

		return (
			<div className="filters-sidebar">
				{filterNames.map((filterName) => {
					const values = filters[filterName];

					if (values.length === 0) {
						return null;
					}

					return (
						<div className="filters-sidebar__filter-section" key={filterName}>
							<h4 className="filter-section__header">
								{filterHeaders[filterName]}
							</h4>
							<ul className="filter-section__values-list">
								{values.map(value => (
									<li className="values-list__item" key={value}>
										<label htmlFor={value} className="values-list__label">
											<input
												type="checkbox"
												id={value}
												name={value}
												className="values-list__checkbox"
											/>
											<span className="values-list__label-text">
												{value}
											</span>
										</label>
									</li>
								))}
							</ul>
						</div>
					);
				})}
			</div>
		);
	}

	render() {
		const { items, cart } = this.props;

		return (
			<div className="page-component page-component--catalog">
				<div className="page-component__content">
					{this.renderFiltersSection()}
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
	filters: PropTypes.object,
	loadResources: PropTypes.func,
	addItemToCart: PropTypes.func,
	removeItemFromCart: PropTypes.func,
	cart: PropTypes.object,
};

CatalogPage.defaultProps = {
	items: [],
	filters: {},
	loadResources: () => {},
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	cart: {
		items: [],
		ids: [],
	},
};
