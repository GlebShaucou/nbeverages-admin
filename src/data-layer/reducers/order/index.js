import actions from '../../actions';

const { orderActions } = actions;

const initialState = {
	orders: [],
	userOrder: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case orderActions.CREATE_ORDER_SUCCEDED:
		return {
			...state,
			userOrder: action.response.order,
		};
	case orderActions.GET_ORDERS_SUCCEDED:
		return {
			...state,
			orders: action.response.orders,
		};
	default:
		return state;
	}
};
