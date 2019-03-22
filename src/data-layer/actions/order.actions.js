import makeActionCreator from './makeActionCreator';

export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCEDED = 'CREATE_ORDER_SUCCEDED';

export const createOrder = makeActionCreator(CREATE_ORDER, 'query');
export const createOrderSucceded = makeActionCreator(CREATE_ORDER_SUCCEDED, 'response');

export const GET_ORDERS_BY_ID = 'GET_ORDERS_BY_ID';
export const GET_ORDERS_BY_ID_SUCCEDED = 'GET_ORDERS_BY_ID_SUCCEDED';

export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDERS_SUCCEDED = 'GET_ORDERS_SUCCEDED';

export const getOrdersById = makeActionCreator(GET_ORDERS_BY_ID, 'query');
export const getOrdersByIdSucceded = makeActionCreator(GET_ORDERS_BY_ID_SUCCEDED, 'response');

export const getOrders = makeActionCreator(GET_ORDERS, 'query');
export const getOrdersSucceded = makeActionCreator(GET_ORDERS_SUCCEDED, 'response');

export const UPDATE_ORDER = 'UPDATE_ORDER';
export const UPDATE_ORDER_SUCCEEDED = 'UPDATE_ORDER_SUCCEEDED';

export const updateOrder = makeActionCreator(UPDATE_ORDER, 'query');
export const updateOrderSucceded = makeActionCreator(UPDATE_ORDER_SUCCEEDED, 'response');
