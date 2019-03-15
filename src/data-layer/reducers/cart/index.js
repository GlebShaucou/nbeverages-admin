import actions from '../../actions';

const { cartActions, orderActions } = actions;

const initialState = {
	items: [],
	ids: [],
};

const removeItem = ({ items }, { itemId }) => items.filter(item => item._id !== itemId);
const removeItemId = ({ ids }, { itemId }) => ids.filter(id => id !== itemId);

const addItem = ({ items }, { item }) => {
	const itemIndex = items.findIndex(({ _id }) => _id === item._id);

	if (itemIndex > -1) {
		const updateItems = [...items];

		updateItems[itemIndex] = {
			...item,
			quantity: items[itemIndex].quantity + 1,
		};

		return updateItems;
	}

	return [...items, { ...item, quantity: 1 }];
};

export default (state = initialState, action) => {
	let item;

	switch (action.type) {
	case cartActions.ADD_ITEM_TO_CART:
		({ item } = action);
		return {
			items: addItem(state, action),
			ids: [...state.ids, item._id],
		};
	case cartActions.REMOVE_ITEM_FROM_CART:
		return {
			items: removeItem(state, action),
			ids: removeItemId(state, action),
		};
	case cartActions.SET_SHOPPING_CART:
		return {
			...action.shoppingCart,
		};
	case orderActions.CREATE_ORDER_SUCCEDED:
		return {
			...initialState,
		};
	default:
		return state;
	}
};
