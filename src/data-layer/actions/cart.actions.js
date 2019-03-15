import makeActionCreator from './makeActionCreator';

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const addItemToCart = makeActionCreator(ADD_ITEM_TO_CART, 'item');

export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const removeItemFromCart = makeActionCreator(REMOVE_ITEM_FROM_CART, 'itemId');

export const SET_SHOPPING_CART = 'SET_SHOPPING_CART';
export const setShoppingCart = makeActionCreator(SET_SHOPPING_CART, 'shoppingCart');

export const UPDATE_SHOPPING_CART_ITEM_QUANTITY = 'UPDATE_SHOPPING_CART_ITEM_QUANTITY';
export const updateShoppingCartItemQuantity = makeActionCreator(UPDATE_SHOPPING_CART_ITEM_QUANTITY, 'quantity');
