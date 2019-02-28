import makeActionCreator from './makeActionCreator';

export const SET_ERRORS = 'SET_ERRORS';
export const setErrors = makeActionCreator(SET_ERRORS, 'error');
