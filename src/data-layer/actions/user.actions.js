import makeActionCreator from './makeActionCreator';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCEDED = 'USER_LOGIN_SUCCEDED';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const userLogin = makeActionCreator(USER_LOGIN, 'query');
export const userLoginSucceded = makeActionCreator(USER_LOGIN_SUCCEDED, 'response');
export const userLoginFailed = makeActionCreator(USER_LOGIN_FAILED, 'error');
