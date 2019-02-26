import { connect } from 'react-redux';

import CatalogItemPage from './CatalogItem.page';
import actions from '../../data-layer/actions';

const {
	beverageActions,
	cartActions,
} = actions;

const getBeverageById = (state, beverageId) => {
	const { beverages: { items, selectedItem } } = state;

	return items.find(({ _id }) => _id === beverageId) || selectedItem;
};
const getBeverageIdFromProps = props => props.match.params.beverageId;

const mapStateToProps = (state, props) => {
	const beverageId = getBeverageIdFromProps(props);
	const { cart: { ids } } = state;

	return {
		selectedItem: getBeverageById(state, beverageId),
		isAddedToCart: ids.includes(beverageId),
	};
};

const mapDispatchToProps = (dispatch, props) => {
	const beverageId = getBeverageIdFromProps(props);

	return {
		loadResources: () => {
			dispatch(beverageActions.fetchBeverageById({ id: beverageId }));
		},
		addItemToCart: (item) => {
			dispatch(cartActions.addItemToCart(item));
		},
		removeItemFromCart: (itemId) => {
			dispatch(cartActions.removeItemFromCart(itemId));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CatalogItemPage);
