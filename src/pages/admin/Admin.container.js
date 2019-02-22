import { connect } from 'react-redux';
import AdminPage from './Admin.page';

import actions from '../../data-layer/actions';

const { beverageActions } = actions;

const mapStateToProps = state => ({
	...state.beverages,
	user: state.user,
});

const mapDispatchToProps = dispatch => ({
	loadData: () => {
		dispatch(beverageActions.fetchBeverages({ id: undefined }));
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
