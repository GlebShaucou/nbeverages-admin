import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BeverageShortView } from '../../components';

export default class CatalogPage extends Component {
	componentDidMount() {
		const { loadData } = this.props;

		loadData();
	}

	render() {
		const { items } = this.props;

		return (
			<div className="page-component page-component--catalog">
				<div className="page-component__content">
					<ul className="catalog">
						{items.map(item => (
							<li key={JSON.stringify(item)} className="catalog__item">
								<BeverageShortView item={item} />
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

CatalogPage.propTypes = {
	items: PropTypes.array,
	loadData: PropTypes.func,
};

CatalogPage.defaultProps = {
	items: [],
	loadData: () => {},
};
