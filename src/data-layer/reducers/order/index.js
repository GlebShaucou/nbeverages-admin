import actions from '../../actions';

const { orderActions } = actions;

const initialState = {
	orders: [],
	selectedItem: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case orderActions.CREATE_ORDER_SUCCEDED:
		return {
			...state,
			selectedItem: action.response.order,
		};
	case orderActions.GET_ORDERS_SUCCEDED:
		return {
			...state,
			orders: action.response.orders,
		};
	case orderActions.GET_ORDERS_BY_ID_SUCCEDED:
		return {
			...state,
			selectedItem: action.response.order,
		};
	default:
		return state;
	}
};
