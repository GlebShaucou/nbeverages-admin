import { connect } from 'react-redux';

import CatalogPage from './Catalog.page';
import actions from '../../data-layer/actions';

const { beverageActions, cartActions } = actions;

const mapStateToProps = (state) => {
	const { beverages: { items }, cart } = state;

	return {
		items,
		cart,
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
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CatalogPage);
