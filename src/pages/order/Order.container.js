import { connect } from 'react-redux';

import actions from '../../data-layer/actions';
import OrderPage from './Order.page';

const { orderActions } = actions;

const mapStateToProps = state => ({
	userOrder: state.userOrder,
});

const mapDispatchToProps = dispatch => ({
	onSearchOrder: (orderId) => {
		dispatch(orderActions.getOrders({ orderId }));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(OrderPage);
