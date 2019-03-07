import { connect } from 'react-redux';

import CartPage from './Cart.page';
import actions from '../../data-layer/actions';

const { cartActions, orderActions } = actions;

const mapStateToProps = state => ({
	cart: state.cart,
	selectedItem: state.order.selectedItem,
});

const mapDispatchToProps = dispatch => ({
	removeItemFromCart: (itemId) => {
		dispatch(cartActions.removeItemFromCart(itemId));
	},
	createOrder: (order) => {
		dispatch(orderActions.createOrder(order));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CartPage);
