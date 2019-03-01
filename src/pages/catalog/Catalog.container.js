import { connect } from 'react-redux';

import CatalogPage from './Catalog.page';
import actions from '../../data-layer/actions';

const { beverageActions, cartActions } = actions;

const mapStateToProps = (state) => {
	const { beverages: { items, filters }, cart } = state;

	return {
		items,
		cart,
		filters,
	};
};

const mapDispatchToProps = dispatch => ({
	loadResources: () => {
		dispatch(beverageActions.fetchBeverages({ id: undefined }));
	},
	addItemToCart: (item) => {
		dispatch(cartActions.addItemToCart(item));
	},
	removeItemFromCart: (itemId) => {
		dispatch(cartActions.removeItemFromCart(itemId));
	},
	setFilter: ({ filterName, filter, addFilter }) => {
		dispatch(beverageActions.setBeveragesFilter({ filterName, filter }, addFilter));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CatalogPage);
