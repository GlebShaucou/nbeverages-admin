import makeActionCreator from './makeActionCreator';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCEDED = 'USER_LOGIN_SUCCEDED';

export const userLogin = makeActionCreator(USER_LOGIN, 'query');
export const userLoginSucceded = makeActionCreator(USER_LOGIN_SUCCEDED, 'response');

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCEDED = 'USER_LOGOUT_SUCCEDED';

export const userLogout = makeActionCreator(USER_LOGOUT);
export const userLogoutSucceded = makeActionCreator(USER_LOGOUT_SUCCEDED);

export const USER_CREATE = 'USER_CREATE';
export const USER_CREATE_SUCCEDED = 'USER_CREATE_SUCCEDED';

export const createUser = makeActionCreator(USER_CREATE, 'query');
export const createUserSucceded = makeActionCreator(USER_CREATE_SUCCEDED, 'response');

export const GET_USER_ORDERS = 'GET_USER_ORDERS';
export const GET_USER_ORDERS_SUCCEDED = 'GET_USER_ORDERS_SUCCEDED';

export const getUserOrders = makeActionCreator(GET_USER_ORDERS, 'query');
export const getUserOrdersSucceded = makeActionCreator(GET_USER_ORDERS_SUCCEDED, 'response');
