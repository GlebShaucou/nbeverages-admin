import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { BeverageShortView } from '../../components';
import * as constants from '../../constants';

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

	onChangeFilter = ({ filterName, filter }) => {
		const { setFilter } = this.props;

		return (e) => {
			setFilter({ filterName, filter, addFilter: e.target.checked });
		};
	};

	renderFiltersSection() {
		const { filters } = this.props;
		const filterNames = Object.keys(filters);
		const filterHeaders = {
			category: constants.FILTER_CATEGORY,
			type: constants.FILTER_TYPE,
		};

		return (
			<div className="filters-sidebar">
				{filterNames.map((filterName) => {
					const values = filters[filterName];

					return (
						<div className="filters-sidebar__filter-section" key={filterName}>
							<h4 className="filter-section__header">
								<FormattedMessage id={filterHeaders[filterName]} />
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
												onChange={this.onChangeFilter({ filterName, filter: value })}
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
										buttonCaption={(
											<FormattedMessage
												id={isInCart
													? constants.BUTTON_CAPTION_REMOVE : constants.BUTTON_CAPTION_ADD}
											/>
										)}
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
	setFilter: PropTypes.func,
	cart: PropTypes.object,
};

CatalogPage.defaultProps = {
	items: [],
	filters: {},
	loadResources: () => {},
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	setFilter: () => {},
	cart: {
		items: [],
		ids: [],
	},
};
