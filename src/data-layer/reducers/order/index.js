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
	default:
		return state;
	}
};
