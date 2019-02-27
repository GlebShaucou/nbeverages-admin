import makeActionCreator from './makeActionCreator';

export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCEDED = 'CREATE_ORDER_SUCCEDED';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';

export const createOrder = makeActionCreator(CREATE_ORDER, 'query');
export const createOrderSucceded = makeActionCreator(CREATE_ORDER_SUCCEDED, 'response');
export const createOrderFailed = makeActionCreator(CREATE_ORDER_FAILED, 'error');
