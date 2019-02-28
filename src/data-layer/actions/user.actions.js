import makeActionCreator from './makeActionCreator';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCEDED = 'USER_LOGIN_SUCCEDED';

export const userLogin = makeActionCreator(USER_LOGIN, 'query');
export const userLoginSucceded = makeActionCreator(USER_LOGIN_SUCCEDED, 'response');

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCEDED = 'USER_LOGOUT_SUCCEDED';

export const userLogout = makeActionCreator(USER_LOGOUT);
export const userLogoutSucceded = makeActionCreator(USER_LOGOUT_SUCCEDED);
