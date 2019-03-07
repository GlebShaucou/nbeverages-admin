import { connect } from 'react-redux';

import actions from '../../data-layer/actions';
import OrderPage from './Order.page';

const { orderActions } = actions;

const mapStateToProps = state => ({
	selectedItem: state.order.selectedItem,
});

const mapDispatchToProps = dispatch => ({
	onSearchOrder: (orderId) => {
		dispatch(orderActions.getOrdersById({ orderId }));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(OrderPage);
