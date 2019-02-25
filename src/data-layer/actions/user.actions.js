import makeActionCreator from './makeActionCreator';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCEDED = 'USER_LOGIN_SUCCEDED';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const userLogin = makeActionCreator(USER_LOGIN, 'query');
export const userLoginSucceded = makeActionCreator(USER_LOGIN_SUCCEDED, 'response');
export const userLoginFailed = makeActionCreator(USER_LOGIN_FAILED, 'error');

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCEDED = 'USER_LOGOUT_SUCCEDED';
export const USER_LOGOUT_FAILED = 'USER_LOGOUT_FAILED';

export const userLogout = makeActionCreator(USER_LOGOUT);
export const userLogoutSucceded = makeActionCreator(USER_LOGOUT_SUCCEDED);
export const userLogoutFailed = makeActionCreator(USER_LOGOUT_FAILED);
