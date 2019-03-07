import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

const OrderItemPage = (props) => {
	const setDocumentTitle = () => {
		const { selectedItem } = props;

		document.title = `Order ${selectedItem ? selectedItem._id : ''} Review | Natural Beverages`;
	};

	useEffect(() => {
		const { loadResources } = props;

		loadResources();
		setDocumentTitle();
	}, []);

	useEffect(() => {
		setDocumentTitle();
	}, [props.selectedItem]);

	const onRemoveItem = () => {
		const { selectedItem, removeItem } = props;

		removeItem(selectedItem._id);
	};

	const { selectedItem } = props;

	if (!selectedItem) {
		return null;
	}

	return (
		<div className="page-component page-component--order-item">
			Order Item
		</div>
	);
};

OrderItemPage.propTypes = {
	selectedItem: PropTypes.object,
	loadResources: PropTypes.func,
	removeItem: PropTypes.func,
	updateItem: PropTypes.func,
};

OrderItemPage.defaultProps = {
	selectedItem: null,
	loadResources: () => {},
	removeItem: () => {},
	updateItem: () => {},
};

export default OrderItemPage;
