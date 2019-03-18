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
			quantity: +items[itemIndex].quantity + 1,
		};

		return updateItems;
	}

	return [...items, { ...item, quantity: 1 }];
};
const addItemIds = ({ ids }, { item: { _id: itemId } }) => {
	if (ids.findIndex(id => id === itemId) > -1) {
		return ids;
	}

	return [...ids, itemId];
};

const updateItemQuantity = ({ items }, { itemId, quantity }) => items.map((item) => {
	if (item._id === itemId) {
		return {
			...item,
			quantity,
		};
	}

	return item;
});

export default (state = initialState, action) => {
	switch (action.type) {
	case cartActions.ADD_ITEM_TO_CART:
		return {
			items: addItem(state, action),
			ids: addItemIds(state, action),
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
	case cartActions.UPDATE_SHOPPING_CART_ITEM_QUANTITY:
		return {
			...state,
			items: updateItemQuantity(state, action),
		};
	default:
		return state;
	}
};
