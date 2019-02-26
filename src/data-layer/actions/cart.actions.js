import makeActionCreator from './makeActionCreator';

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

export const addItemToCart = makeActionCreator(ADD_ITEM_TO_CART, 'item');

export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

export const removeItemFromCart = makeActionCreator(REMOVE_ITEM_FROM_CART, 'itemId');
