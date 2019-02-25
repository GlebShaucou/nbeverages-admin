import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CatalogItemPage extends Component {
	render() {
		const { selectedItem } = this.props;

		if (!selectedItem) {
			return null;
		}

		return (
			<div className="page-component page-component--catalog-item">
				{selectedItem.name}
			</div>
		);
	}
}

CatalogItemPage.propTypes = {
	selectedItem: PropTypes.object,
};

CatalogItemPage.defaultProps = {
	selectedItem: null,
};
