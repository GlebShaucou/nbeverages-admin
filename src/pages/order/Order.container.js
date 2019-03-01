import { connect } from 'react-redux';

import actions from '../../data-layer/actions';
import OrderPage from './Order.page';

const { orderActions } = actions;

const mapStateToProps = state => ({
	userOrder: state.order.userOrder,
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
