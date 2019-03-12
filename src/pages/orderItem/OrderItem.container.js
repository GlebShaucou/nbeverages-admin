import { connect } from 'react-redux';

import OrderItemPage from './OrderItem.page';
import actions from '../../data-layer/actions';

const {
	orderActions,
} = actions;

const getOrderById = (state, orderId) => {
	const { order: { orders, selectedItem } } = state;

	return orders.find(({ _id }) => _id === orderId) || selectedItem;
};
const getOrderIdFromProps = props => props.match.params.orderId;

const mapStateToProps = (state, props) => {
	const orderId = getOrderIdFromProps(props);

	return {
		selectedItem: getOrderById(state, orderId),
	};
};

const mapDispatchToProps = (dispatch, props) => {
	const orderId = getOrderIdFromProps(props);

	return {
		loadResources: () => {
			dispatch(orderActions.getOrdersById({ orderId }));
		},
		// deleteOrder: (itemId) => {
		// 	dispatch(orderActions.deleteOrder(itemId));
		// },
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(OrderItemPage);
