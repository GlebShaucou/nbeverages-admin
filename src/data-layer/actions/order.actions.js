import makeActionCreator from './makeActionCreator';

export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCEDED = 'CREATE_ORDER_SUCCEDED';

export const createOrder = makeActionCreator(CREATE_ORDER, 'query');
export const createOrderSucceded = makeActionCreator(CREATE_ORDER_SUCCEDED, 'response');

export const GET_ORDERS = 'GET_ORDERS';
// export const GET_ORDER_BY_ID_SUCCEDED = 'GET_ORDER_BY_ID_SUCCEDED';

export const getOrders = makeActionCreator(GET_ORDERS, 'query');
// export const getOrderByIdSucceded = makeActionCreator(GET_ORDER_BY_ID_SUCCEDED, 'response');
