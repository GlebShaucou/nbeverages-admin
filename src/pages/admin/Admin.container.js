import { connect } from 'react-redux';
import AdminPage from './Admin.page';

import actions from '../../data-layer/actions';

const { beverageActions, orderActions } = actions;

const mapStateToProps = state => ({
	...state.beverages,
	user: state.user.user,
	orders: state.order.orders,
});

const mapDispatchToProps = dispatch => ({
	loadData: () => {
		dispatch(beverageActions.fetchBeverages({ id: undefined }));
		dispatch(orderActions.getOrders({ id: undefined }));
	},
	removeItem: ({ beverageId }) => {
		dispatch(beverageActions.deleteBeverage({ beverageId }));
	},
	addItem: (beverage) => {
		dispatch(beverageActions.addNewBeverage(beverage));
	},
	updateItem: (beverage) => {
		dispatch(beverageActions.updateBeverage(beverage));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AdminPage);
