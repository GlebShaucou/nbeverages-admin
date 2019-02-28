import makeActionCreator from './makeActionCreator';

export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCEDED = 'CREATE_ORDER_SUCCEDED';

export const createOrder = makeActionCreator(CREATE_ORDER, 'query');
export const createOrderSucceded = makeActionCreator(CREATE_ORDER_SUCCEDED, 'response');
