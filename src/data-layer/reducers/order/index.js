import actions from '../../actions';

const { orderActions } = actions;

const updateSelectedItem = (
	{ selectedItem },
	{ response },
) => response.orders.find(order => order._id === selectedItem._id) || null;

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
	case orderActions.UPDATE_ORDER_SUCCEEDED:
		return {
			...state,
			orders: action.response.orders,
			selectedItem: updateSelectedItem(state, action),
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
